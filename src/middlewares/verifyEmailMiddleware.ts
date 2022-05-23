import { NextFunction, Request, Response } from "express";
import users from "../database";

const verifyEmailMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const {email} = request.body
    

    const verifyUser = users.find((user) => user.email === email);

    console.log(verifyUser)

    if(verifyUser){
      return response.status(400).json({Message: "User already exists!"})
    }

    next()
}

export default verifyEmailMiddleware;