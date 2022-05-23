import users from "../database";

const deleteUsersService = (id: string) => {
  const userIndex = users.findIndex((item) => item.id === id);

  users.splice(userIndex, 1);

  return { Message: "User already deleted" };
};
export default deleteUsersService;
