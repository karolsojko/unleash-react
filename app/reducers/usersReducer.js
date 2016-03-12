import assignToEmpty from '../utils/assign';

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
    case 'USER_GET_SUCCESS':
      return assignToEmpty(users, {
        [action.user.username]: action.user
      });
    case 'USER_GET_FAILURE':
      newUsers = assignToEmpty(users);
      return newUsers;
    default:
      return users;
  }
}

export default usersReducer;
