import React from "react";

export default class Task extends React.Component {
  constructor(props, context) {
    super()
    this.state = {
      status: props.status,
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

  getButtons() {
    return (
      <div>
        <a class="btn btn-default" href="#" onClick={this.acceptTask.bind(this)}>Accept</a>
        <a class="btn btn-default" href="#" onClick={this.rejectTask.bind(this)}>Reject</a>
      </div>
    )
  }


  render() {
    const { title } = this.props;
    const { status } = this.state;
    const awaitingApproval = (status == "awaiting approval");
    var buttons = null;
    var statusDiv = null;
    if (awaitingApproval) {
      buttons = this.getButtons()
    }
    else {
      statusDiv = <h5>Status: {this.state.status}</h5>
    }
    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        {statusDiv}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        {buttons}
      </div>
    );
  }
}
