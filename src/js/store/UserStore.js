/* @flow */
import EventEmitter from "events";

import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
  isLoggedIn : boolean;
  userName : string;
  role : string;

  constructor() {
    super();
    this.isLoggedIn = false;
    this.userName = ""
    this.role = ""
  }

  getIsLoggedIn() : boolean {
    return this.isLoggedIn;
  }

  getUsername() {
    return this.userName;
  }

  setUsername(userName : string) {
    this.userName = userName;
    this.emit("change");
  }

  login(userName : string) {
    this.isLoggedIn = true;
    this.userName = userName;
    this.role = "manager";
    this.emit("change");
  }

  logout() {
    this.isLoggedIn = false;
    this.userName = "";
    this.role = "";
    this.emit("change");
  }

  handleActions(action : Object) {
    switch(action.type) {
      case "LOGIN" : {
        this.login(action.payload);
        break;
      }
      case "LOGOUT" : {
        this.logout();
        break;
      }
      case "PROFILE_UPDATE" : {
        this.setUsername(action.payload);
        break
      }
    }
  }
}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));
window.userStore = userStore;
export default userStore;
