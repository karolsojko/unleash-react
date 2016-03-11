import Firebase from 'firebase';
const dataRef = new Firebase('https://unleash-app-staging.firebaseio.com/users');

export function userList(onSuccess) {
  return (dispatch) => {
    dispatch(doUserList());

    dataRef.on('value', (snapshot) => {
      const users = [];
      snapshot.forEach((user) => {
        users.push(user.val());
      });
      dispatch(userListSuccess(users));

      if (typeof onSuccess !== 'undefined'){
        onSuccess();
      }
    }, (error) => {
      dispatch(userListFailure(error))
    });
  }
}

function doUserList() {
  return {type: 'USER_LIST'};
}

export function userListSuccess(users) {
  return {type: 'USER_LIST_SUCCESS', users};
}

export function userListFailure(errors) {
  return {type: 'USER_LIST_FAILURE', errors};
}
