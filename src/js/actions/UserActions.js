/* @flow */
import dispatcher from "../dispatcher";

export function login(userName : string) {
  console.log("username passed " + userName);
  dispatcher.dispatch({
    type: "LOGIN",
    payload: userName
  });
}

export function logout() {
  dispatcher.dispatch({
    type: "LOGOUT"
  });
}

export function updateUser(username : string) {
  dispatcher.dispatch({
    type: "PROFILE_UPDATE",
    payload: username
  });
}

export function updateRole(role : string) {
  dispatcher.dispatch({
    type: "PROFILE_UPDATE",
    payload: role
  });
}
