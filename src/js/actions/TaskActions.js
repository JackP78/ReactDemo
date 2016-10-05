import dispatcher from "../dispatcher";

export function createTask(text) {
  dispatcher.dispatch({
    type: "CREATE_TASK",
    text
  });
}

export function deleteTask(id) {
  dispatcher.dispatch({
    type: "DELETE_TASK",
    id
  });
}

export function reloadTasks() {
  dispatcher.dispatch({
    type: "FETCH_TASKS"
  });
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_TASKS",
      tasks: [
        {
          id: 112356,
          title: "Asynch Task 1",
          status: "awaiting approval",
          detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
        },
        {
          id: 112457,
          title: "Asynch Task 2",
          status: "awaiting approval",
          detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
        }
      ]
    });
  },1000);
}
