import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TaskStore extends EventEmitter {
  constructor() {
    super();
    this.tasks = [
        {
          id: 1123,
          title: "Some Task2",
          status: "awaiting approval",
          detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
        },
        {
          id: 1124,
          title: "Some Other Task",
          status: "accepted",
          detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
        },
        {
          id: 1125,
          title: "Rejected Task1",
          status: "rejected",
          detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
        },
        {
          id: 1126,
          title: "Some Stupid Task",
          status: "awaiting approval",
          detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
        }
      ];
  }

  createTask(text) {
    const id = Date.now()
    this.tasks.push({
      id,
      title: text,
      status: "awaiting approval",
      detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
    });
    this.emit("change");
  }

  getAll() {
    return this.tasks;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TASK" : {
        this.createTask(action.text);
        break;
      }
      case "RECEIVE_TASKS" : {
        this.tasks = action.tasks;
        this.emit("change");
        break;
      }
    }
  }
}

const taskStore = new TaskStore;
dispatcher.register(taskStore.handleActions.bind(taskStore));
window.dispatcher = dispatcher;
export default taskStore;
