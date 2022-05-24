import { Request, Response } from "express";
import listUsersServices from "../services/listUsersServices";

const listUsersController = async (request: Request, response: Response) => {

  try{
    const user = await listUsersServices();
    return response.status(200).json(user);

  } catch (err) {
    if(err instanceof Error){
      return response.status(400).send({
          error: err.name,
          message: err.message
      })
    }

  }

 
};

export default listUsersController;
