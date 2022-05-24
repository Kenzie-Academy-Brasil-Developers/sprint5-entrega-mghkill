import { Request, Response } from "express";
import deleteUsersService from "../services/deleteUserServices";

const deleteUsersController = async (request: Request, response: Response) => {
  try{
    const { id } = request.params;

    const user = await deleteUsersService(id);

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
export default deleteUsersController;
