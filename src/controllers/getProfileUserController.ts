import { Request, Response } from "express";
import getProfileUserService from "../services/getProfileUserService";

const getProfileUserController = async (request: Request, response: Response) => {
  try{
    const {id} = request.params 

    const user = getProfileUserService(id);
  
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
export default getProfileUserController;
