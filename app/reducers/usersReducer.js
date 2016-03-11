function usersReducer(users = {}, action) {
  Object.freeze(users);

  let newUsers;
  switch (action.type) {
    case 'USER_LIST_SUCCESS':
      newUsers = {};
      action.users.forEach((user) => {
        newUsers[user.username] = user;
      });
      return newUsers;
    case 'USER_LIST_FAILURE':
      return {};
    default:
      return users;
  }
}

export default usersReducer;
