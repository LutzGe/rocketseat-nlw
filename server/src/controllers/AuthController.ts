import { Request, Response } from 'express'
import * as jwt from "jsonwebtoken";

import db from '../database/connection';
import config from '../routes/routes'

import UserController from './UserController'
import RoleController from './RoleController'
import Role from './RoleController'

export default class AuthController {
    login = async (req: Request, res: Response) => {
        let { login, password } = req.body
        if (!(login && password)){
            res.status(400).send()
        }
        
        const user = await db('users').where('login', login)

        console.log(user)
    }
}