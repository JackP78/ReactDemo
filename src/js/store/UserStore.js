import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
  constructor() {
    this.isLoggedIn = false;
    this.userName = ""
    this.role = ""
  }

  isLoggedIn() {
    return this.isLoggedIn;
  }

  getUsername() {
    return this.userName;
  }

  setUsername(userName) {
    this.userName = userName;
    this.emit("change");
  }

  login(userName) {
    this.isLoggedIn = true;
    this.userName = "userName";
    this.role = "manager";
    this.emit("change");
  }

  logout() {
    this.isLoggedIn = false;
    this.userName = "";
    this.role = "";
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "LOGIN" : {
        this.login(action.payload);
        break;
      }
      case "LOGOUT" : {
        logout();
        break;
      }
      case "PROFILE_UPDATE" : {
        this.setUsername(action.payload);
        break
      }
    }
}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));
export default userStore;
