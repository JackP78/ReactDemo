import React from "react";

import UserStore from "../store/UserStore";
import * as UserActions from "../actions/UserActions";

export default class LoginBanner extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: UserStore.isLoggedIn(),
      userName: UserStore.getUsername()
    };
  }

  componentWillMount() {
    UserStore.on("change", () => {
      this.setState({
        isLoggedIn: UserStore.isLoggedIn(),
        userName: UserStore.getUsername()
      })
    });
  }

  componentWillUnmount() {
    UserStore.removeListener("change", () => {
      this.setState({
        isLoggedIn: UserStore.isLoggedIn(),
        userName: UserStore.getUsername()
      })
    });
  }


  render() {
    return (
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              Welcome, {this.props.username}
            </div>
          </div>
        </div>
    );
  }
}
