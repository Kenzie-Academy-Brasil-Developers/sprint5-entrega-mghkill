import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const verifyIdMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const {id} = request.params
  
  const user = users.find((u) => u.id === id);

  if (!user) {
    return response
      .status(401)
      .json({ Message: "User id not found" });
  }
  
  next();
};

export default verifyIdMiddleware;
