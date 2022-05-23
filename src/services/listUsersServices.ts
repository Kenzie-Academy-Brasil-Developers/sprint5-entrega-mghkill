import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const listUsersServices = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const outputUser = users.map((e) => ({
    name: e.name,
    email: e.email,
    age: e.age,
    createdOn: e.createdOn,
    updatedOn: e.updatedOn,
    id: e.id,
  }));

  return outputUser;
};

export default listUsersServices;
