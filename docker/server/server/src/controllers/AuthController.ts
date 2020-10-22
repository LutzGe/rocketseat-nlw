import { Request, Response } from 'express'
import * as jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

import db from '../database/connection';

export default class AuthController {

    async validate(req: Request, res: Response) {
        const { login, password } = req.query
        console.log(login, password)
        const hash = (await db('users').from('users').where({login: login}).select(['password'])).toString()
        
        await bcrypt.compare(password, hash, (err, res) => {
            return res
        })
    }

    async login(req: Request, res: Response) {
        let { login, password } = req.body
        if (!(login && password)){
            res.status(400).send()
        }
        
        const user = await db('users').where('login', login)

        console.log(user)
    }
}