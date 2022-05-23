import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUsersService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const userIndex = users.findIndex((item) => item.id === id);

  users.splice(userIndex, 1);

  return { Message: "User already deleted" };
};
export default deleteUsersService;
