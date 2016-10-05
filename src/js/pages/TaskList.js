import React from "react";

import Task from "../components/Task";
import TaskStore from "../store/TaskStore";
import * as TaskActions from "../actions/TaskActions";


export default class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: TaskStore.getAll()
    };
  }

  componentWillMount() {
    TaskStore.on("change", () => {
      this.setState({
        tasks: TaskStore.getAll()
      })
    });
  }

  componentWillUnmount() {
    TaskStore.removeListener("change", () => {
      this.setState({
        tasks: TaskStore.getAll()
      })
    });
  }



  createTask() {
    TaskActions.createTask(Date.now());
  }

  reloadTask() {
    TaskActions.reloadTasks();
  }


  render() {
    const { tasks } = this.state;
    console.log(tasks);
    const TaskComponents = tasks.filter(m => {
      return m.status == "awaiting approval";
    }).map((task) => {
      return <Task key={task.id} title={task.title} status={task.status}/>;
    });

    console.log("task components" + TaskComponents.length)

    const welcomeText = [
      "Welcome, Jack",
      "Welcome, Dave",
    ];
    const welcomeUser = welcomeText[Math.round( Math.random() * (welcomeText.length-1) )];

    console.log("featured");
    return (
      <div>
        <button onClick={this.createTask.bind(this)}>Create</button>
        <button onClick={this.reloadTask.bind(this)}>Reload</button>
        <div class="row">{TaskComponents}</div>
      </div>
    );
  }
}
