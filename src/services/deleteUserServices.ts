import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUsersService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  await userRepository.delete(id);

  return { Message: "User already deleted" };
};
export default deleteUsersService;
