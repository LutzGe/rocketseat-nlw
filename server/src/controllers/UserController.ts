import { Request, Response } from 'express'
import Knex from 'knex';

import db from '../database/connection';
import { Role } from './RoleController';

export interface User {
    id?: number
    login?: string
    name?: string
    email?: string
    avatar?: string
    bio?: Text
    whatsapp?: string
    password?: string
    role?: Role
}

export default class UserController {
    
    async create(req: Request, res: Response) {
        const {
            name,
            login,
            bio,
            avatar,
            whatsapp,
            role            
        } = req.body

        const trx = await db.transaction()
        try {
    
    
            await trx('users').insert({
                name,
                login,
                bio,
                avatar,
                whatsapp,
                role
            })
    
            await trx.commit()
    
            return res.status(201).send()
        } catch (error) {
            console.log(error)
            
            await trx.rollback()
    
            return res.status(400).json({
                error: 'Unexpecter error creating user'
            })
        }
    }

    async edit(req: Request, res:Response) {
        
        // Pega os dados do request (novos)
        const {
            id,
            name,
            email,
            bio,
            avatar,
            whatsapp,
            role   
        } = req.body
        
        // Pega os dados da role que vai ser alterada
        const oldUser = await db<User>('users').select('*').where('id', '=', id)

        // Cria uma role nova
        const newUser = oldUser.map((user: User) => {
            let newUser: User = {}

            // Compara para ver quais tem diferença
            if (name) {
                newUser.name = name
            }

            if (email) {
                newUser.email = email
            }

            if (bio) {
                newUser.bio = bio
            }

            if (avatar) {
                newUser.avatar = avatar
            }

            if (whatsapp) {
                newUser.whatsapp = whatsapp
            }

            if (role) {
                newUser.role = role
            }
            
            return newUser
        })
        
        const trx = await db.transaction()
        try {

            await trx('users').where('id', '=', id).update(newUser[0])

            trx.commit()
            
            return res.status(201).send()
        } catch (error) {
            console.log(error)
            
            await trx.rollback()
    
            return res.status(400).json({
                error: 'Unexpecter error updating user'
            })
        }
    }

    async index(req: Request, res:Response){
        const {
            id,
            login,
            name,
            email,
            whatsapp,
            role
        } = req.body
        
        let query: Knex.QueryBuilder = db<User>('users')

        if (id) {
            query = query.where('id', id)
        }

        else if (login) {
            query = query.where('login', 'like', `%${ login }%`)    
        }

        else {
            if (name) {
                query = query.where('name', 'like', `%${ name }%`)
            }

            if (email) {
                query = query.where('email', 'like', `%${ email }%`)
            }

            if (whatsapp) {
                query = query.where('whatsapp', 'like', `%${ whatsapp }%`)
            }

        }
        
        const users: User[] = await query.select('*')

        return res.json(users)
    }
}