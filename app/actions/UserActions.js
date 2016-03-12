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
      dispatch(userListFailure(error));
    });
  }
}

export function userGet(username, onSuccess) {
  return (dispatch) => {
    dispatch(doUserGet(username));

    dataRef.on('value', (snapshot) => {
      snapshot.forEach((user) => {
        if (user.child('username').val() === username) {
          dispatch(userGetSuccess(user.val()));
          return;
        }
      });

      if (typeof onSuccess !== 'undefined'){
        onSuccess();
      }
    }, (error) => {
      dispatch(userGetFailure(username, error));
    });
  };
}

function doUserGet(username) {
  return {type: 'USER_GET', username};
}

export function userGetSuccess(user) {
  return {type: 'USER_GET_SUCCESS', user};
}

export function userGetFailure(username, errors) {
  return {type: 'USER_GET_FAILURE', username, errors};
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
