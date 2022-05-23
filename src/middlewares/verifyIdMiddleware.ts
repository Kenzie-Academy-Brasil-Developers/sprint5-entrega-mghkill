import { NextFunction, Request, Response } from "express";
import users from "../database";

const verifyIdMiddleware = (request: Request, response: Response, next: NextFunction) => {
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
