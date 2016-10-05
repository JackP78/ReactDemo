import React from "react";

import Task from "../components/Task";

export default class Archive extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { task } = params;
    const { date, filter } = query;

    const Tasks = [
      "Old Task 1",
      "Old Task 2",
      "Old Task 3",
    ].map((title, i) => <Task key={i} title={title}/> );
    return (
      <div>
        <h1>Archives</h1>
        task: {task}, date: {date}, filter: {filter}
        <div class="row">{Tasks}</div>
      </div>
    );
  }
}
