import users from "../database";

const listUsersServices = () => {

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
