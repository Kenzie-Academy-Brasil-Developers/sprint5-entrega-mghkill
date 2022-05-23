import bcrypt from "bcryptjs";
import users from "../database";
import { IUsers } from "../interfaces/users";

const updateUsersService = async (id: string, data: IUsers) => {
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
