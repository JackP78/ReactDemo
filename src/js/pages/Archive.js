import React from "react";

import Task from "../components/Task";

export default class Archive extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { task } = params;
    const { date, status } = query;

    const Tasks = [
      "Old Task 1",
      "Old Task 2",
      "Old Task 3",
    ].map((title, i) => <Task key={i} title={title}/> );
    return (
      <div>
        <h1>Archives</h1>
        task: {task}, date: {date}, status: {status}
        <div class="row">{Tasks}</div>
      </div>
    );
  }
}
