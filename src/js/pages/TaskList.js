import React from "react";

import Task from "../components/Task";
import TaskStore from "../store/TaskStore";


export default class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: TaskStore.getAll()
    };
  }


  render() {
    const { tasks } = this.state;

    const TaskComponents = tasks.map((task) => {
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
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {welcomeUser}
            </div>
          </div>
        </div>

        <div class="row">{TaskComponents}</div>
      </div>
    );
  }
}
