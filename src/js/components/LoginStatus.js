/* @flow */
import React from "react";

import UserStore from "../store/UserStore";
import * as UserActions from "../actions/UserActions";

export default class LoginStatus extends React.Component {

  state: {
        isLoggedIn: boolean;
        userName: string;
        loginUser : string;
    };

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userName: "",
      loginUser: ""
    };
  }

  componentWillMount() {
    UserStore.on("change", () => {
      this.setState({
        isLoggedIn: UserStore.getIsLoggedIn(),
        userName: UserStore.getUsername()
      })
    });
  }

  componentWillUnmount() {
    UserStore.removeListener("change", () => {
      this.setState({
        isLoggedIn: UserStore.getIsLoggedIn(),
        userName: UserStore.getUsername()
      })
    });
  }

  login() {
    UserActions.login(this.state.loginUser)
  }

  handleChange(event : Object) {
    console.log("value changes to ",event.target.value);
    this.setState({
      isLoggedIn: this.state.isLoggedIn,
      userName: this.state.userName,
      loginUser: event.target.value
    });
  }


  render() {
    var message = null;
    if (this.state.isLoggedIn) {
      message = <div class="well text-center">
        Welcome {this.state.userName}
      </div>;
    }
    else {
      message = <div class="well text-center">
        <input type="text" value={this.state.loginUser} onChange={this.handleChange.bind(this)}/>
        <a class="btn btn-default" href="#" onClick={this.login.bind(this)}>Login</a>
      </div>
    }


    return (
        <div class="row">
          <div class="col-lg-12">
            {message}
          </div>
        </div>
    );
  }
}
