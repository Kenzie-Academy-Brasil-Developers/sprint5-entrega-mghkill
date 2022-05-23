import { Request, Response } from "express";
import createUserService from "../services/createUserService";

const createUserController = async (request: Request, response: Response) => {
  try{
    const { name, email, age, password } = request.body;

    const user = await createUserService(name, email, age, password);

    return response.status(201).json(user);

  } catch (err) {
    if(err instanceof Error){
      return response.status(400).send({
          error: err.name,
          message: err.message
      })
    }

  }

};

export default createUserController;
