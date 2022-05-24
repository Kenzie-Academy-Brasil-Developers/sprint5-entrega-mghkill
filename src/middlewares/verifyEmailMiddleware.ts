import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const verifyEmailMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const { email } = request.body

    const verifyUser = users.find((user) => user.email === email);

    console.log(users)

    if(verifyUser){
      return response.status(400).json({Message: "User already exists!"})
    }

    next()
}

export default verifyEmailMiddleware;