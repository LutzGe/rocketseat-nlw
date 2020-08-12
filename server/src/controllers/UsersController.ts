import { Request, Response } from 'express'
import db from '../database/connection'
import bcrypt from 'bcrypt'
import ConnectionsController from './ConnectionsController'

export default class UsersController {
    async validate(req: Request, res: Response) {
        const { email, password } = req.query
        console.log(email, password)
        const hash = (await db('users').from('users').where({email: email}).select(['password'])).toString()
        
        bcrypt.compare(password, hash, (err, res) => {
            console.log(res)
            return res
        })
    }
    
    async create(req: Request, res: Response) {
        const { name, lastname, email, password } = req.body
        const trx = await db.transaction()
        
        try {
            const saltRounds = 10
            await bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    trx('users').insert({
                        name,
                        lastname,
                        email,
                        hash: password
                    })
                })
            })

            return res.status(201).send()
        } catch (error) {
            await trx.rollback()
    
            return res.status(400).json({
                error: 'Unexpecter error in transaction'
            })
        }

        return res.status(201).send()
    }

    async index(req: Request, res: Response) {

    }
}