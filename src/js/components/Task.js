import React from "react";

export default class Task extends React.Component {
  constructor() {
    super()
    this.state = {
      status: "awaiting approval",
    };
  }


  acceptTask() {
    this.setState({
      status: "accepted",
    });
  }

  rejectTask() {
    this.setState({
      status: "rejected",
    });
  }



  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <h5>Status: {this.state.status}</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href="#" onClick={this.acceptTask.bind(this)}>Accept</a>
        <a class="btn btn-default" href="#" onClick={this.rejectTask.bind(this)}>Reject</a>
      </div>
    );
  }
}
