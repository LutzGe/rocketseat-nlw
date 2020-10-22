import { Request, Response } from 'express'
import Knex from 'knex';

import db from '../database/connection';

export interface Role {
    id?: number
    description?: string
    active?: boolean
    isAdmin?: boolean
}

export default class RoleController {

    async create(req: Request, res:Response) {
        const { description } = req.body
        
        const trx = await db.transaction()
        
        try {
            const insertedRole = await trx('roles').insert({
                description
            })
    
            await trx.commit()
            
            console.log(`New role: ${ insertedRole }`)
            
            return res.status(201).send()
        } catch (error) {
            console.log(error)
            
            await trx.rollback()
    
            return res.status(400).json({
                error: 'Unexpecter error creating role'
            })
        }        
    }

    async edit(req: Request, res:Response) {
        
        // Pega os dados do request (novos)
        const {
            id,
            description,
            active,
            isAdmin
        } = req.body
        
        // Pega os dados da role que vai ser alterada
        const oldRole = await db<Role>('roles').select('*').where('id', '=', id)
        console.log(oldRole)
        // Cria uma role nova
        const newRole = oldRole.map((role: Role) => {
            let newRole: Role = {}
            // Compara para ver quais tem diferença
            if (description != role.description) {
                newRole.description = description
            }

            if (active != role.active) {
                newRole.active = active
            }

            if (isAdmin != role.isAdmin) {

                newRole.isAdmin = isAdmin
            }
            
            return newRole
        })

        const trx = await db.transaction()
        try {

            await trx('roles').where('id', '=', id).update(newRole[0])

            trx.commit()
            
            return res.status(201).send()
        } catch (error) {
            console.log(error)
            
            await trx.rollback()
    
            return res.status(400).json({
                error: 'Unexpecter error updating role'
            })
        }
    }

    async index(req: Request, res:Response){
        const {
            id,
            description,
            active,
            isAdmin
        } = req.body
        
        let query: Knex.QueryBuilder = db<Role>('roles')

        if (id) {
            query = query.where('id', id)
        }
        else {
            if (description) {
                query = query.where('description', description)
            }

            if (active) {
                query = query.where('active', active)
            }

            if (isAdmin) {
                query = query.where('isAdmin', isAdmin)
            }
        }
        
        const roles: Role[] = await query.select('*')

        return res.json(roles)
    }
}