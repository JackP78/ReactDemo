import React from "react";

export default class LoginBanner extends React.Component {
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
