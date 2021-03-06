import { Request, Response } from 'express'

import db from '../database/connection';
import convertHourToMinutes from '../../utils/convertHourtoTime';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,

}

export default class ClassesController {
    
    async index(req: Request, res: Response) {
        const filters = req.query

        
        if (!filters.subject || !filters.week_day || !filters.time) {
            return res.status(400).json({
                error: "Missing necessary information"
            })
        }
        const week_day  = filters.week_day as string
        const subject   = filters.subject as string
        const time      = filters.time as string

        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])

                    .whereRaw('`class_schedule`. `from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`. `to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])
        
        return res.json(classes)
    }
    
    async create(req: Request, res: Response) {
        const {
            user_id,
            subject,
            cost,
            schedule
        } = req.body;
    
        const trx = await db.transaction()
        try {

            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id
            })
    
            const class_id = insertedClassesIds[0]
            
    
            const classSchedule = schedule.map((item: ScheduleItem) => {
                return {
                    class_id,
                    week_day: item.week_day,
                    from: convertHourToMinutes(item.from),
                    to: convertHourToMinutes(item.to)
                }
            })
    
    
            await trx('class_schedule').insert(classSchedule)
    
            await trx.commit()
    
            return res.status(201).send()
        } catch (error) {
            console.log(error)
            
            await trx.rollback()
    
            return res.status(400).json({
                error: 'Unexpecter error in transaction'
            })
        }
    }
}