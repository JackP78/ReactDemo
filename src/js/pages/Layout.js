import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" className="btn btn-danger">Archives</Link>
        <Link to="settings" className="btn btn-success">Settings</Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
      </div>

    );
  }
}
