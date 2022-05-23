import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import users from "../database";

const createUserService = async (name: string, email: string, age: number, password: string) => {
  const hashPassword = await bcrypt.hash(password, 10)
  
  const user = {
    name,
    email,
    password: hashPassword,
    age,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuidv4(),
   }

   users.push(user)
   
  return user

};

export default createUserService;
