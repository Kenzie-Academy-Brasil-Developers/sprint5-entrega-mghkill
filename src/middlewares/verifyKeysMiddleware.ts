import { NextFunction, Request, Response } from "express";



const verifyKeysMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const data = request.body;
  const arrKeys = [
    "name",
    "email",
    "password",
    "isAdm",
    "age",
    "createdOn",
    "updatedOn",
    "id",
  ];

  const dateKeys = Object.keys(data);

  for (let i = 0; i < dateKeys.length; i++) {
    if (!arrKeys.includes(dateKeys[i])) {
      return response.status(400).json({
        error:  "Bad request",
        Message: "<"+ dateKeys[i]+ "> Invalid format keys" });
    }
  }
  next();
};

export default verifyKeysMiddleware;
