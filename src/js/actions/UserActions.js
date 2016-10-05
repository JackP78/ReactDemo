import dispatcher from "../dispatcher";

export function login() {
  dispatcher.dispatch({
    type: "LOGIN",
    payload: "Dave"
  });
}

export function logout() {
  dispatcher.dispatch({
    type: "LOGOUT"
  });
}

export function updateUser(username) {
  dispatcher.dispatch({
    type: "PROFILE_UPDATE"
    payload: username
  });
}

export function updateRole(role) {
  dispatcher.dispatch({
    type: "PROFILE_UPDATE"
    payload: role
  });
}
