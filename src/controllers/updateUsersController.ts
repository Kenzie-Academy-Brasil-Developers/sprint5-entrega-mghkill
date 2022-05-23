import { Request, Response } from "express";
import updateUsersService from "../services/updateUserServices";

const updateUsersController = async (request: Request, response: Response) => {

  try{
    const { id } = request.params;
    
    const data = request.body;
  
    const user = await updateUsersService(id, data);
  
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
export default updateUsersController;
