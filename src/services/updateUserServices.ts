import bcrypt from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUsers } from "../interfaces/users";

const updateUsersService = async (id: string, data: IUsers) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const date = new Date();
  
  data.id = id;
  data.updatedOn = date;
  
  if (data.password) {
    const { password } = data
    const hashedPass = await bcrypt.hash(password, 10);
    data.password = hashedPass;
  }

  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return { Message: "User not found" };
  }

  users[userIndex] = { ...users[userIndex], ...data };

  return users[userIndex];
};

export default updateUsersService;
