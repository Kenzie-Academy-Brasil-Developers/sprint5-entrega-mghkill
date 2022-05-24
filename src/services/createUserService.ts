import bcrypt from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const createUserService = async (name: string, email: string, age: number, password: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const hashPassword = await bcrypt.hash(password, 10)
  
  const user = new User();

  user.name = name;
  user.email = email;
  user.age = age; 
  user.password = hashPassword;
  user.createdOn = new Date();
  user.updatedOn = new Date();
  
  userRepository.create(user);
  await userRepository.save(user);

  return user

};

export default createUserService;
