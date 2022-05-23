import users from "../database";

const getProfileUserService = (id: string) => {

  const user = users.find((u) => u.id === id);
  
  return user;
};

export default getProfileUserService;
