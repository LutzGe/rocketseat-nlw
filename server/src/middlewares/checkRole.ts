import { Request, Response, NextFunction } from "express";

import { User } from "../entity/User";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId

    // Verifica se 
    // if (roles.indexOf(user.role) > -1) 
        next();
    else 
        res.status(401).send();
  };
};