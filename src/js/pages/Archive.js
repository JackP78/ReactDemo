import React from "react";

import Task from "../components/Task";
import TaskStore from "../store/TaskStore";

export default class Archive extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: TaskStore.getAll()
    };
  }

  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { task } = params;
    const { date, status } = query;
    const { tasks } = this.state;

    const TaskComponents = tasks.filter(m => {
      return m.status != "awaiting approval";
    }).map((task) => {
      return <Task key={task.id} title={task.title} status={task.status}/>;
    });

    return (
      <div>
        <h1>Archives</h1>
        task: {task}, date: {date}, status: {status}
        <div class="row">{TaskComponents}</div>
      </div>
    );
  }
}
