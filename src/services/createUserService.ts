import bcrypt from "bcrypt";
import { User } from "../entities/user.entity";

const createUserService = async (name: string, email: string, age: number, password: string) => {

  const hashPassword = await bcrypt.hash(password, 10)
  
  const user = new User();

  user.name = name;
  user.email = email;
  user.age = age; 
  user.password = hashPassword

  return user

};

export default createUserService;
