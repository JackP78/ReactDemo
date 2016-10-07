/* @flow */
import {applyMiddleware, combinedReducers, createStore} from "redux";

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "LOGIN" : {
      return {...state, isLoggedIn = true, userName = action.payload};
      break;
    }
    case "LOGOUT" : {
      return {...state, isLoggedIn = false, userName = ""};
      break;
    }

  }
}

const taskReducer = (state=[], action) => {
  switch(action.type) {
    case "CREATE_TASK" : {
      return state.concat({
        id,
        title: action.payload,
        status: "awaiting approval",
        detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur."
      });
      break;
    }
    case "RECEIVE_TASKS" : {
      return action.payload
      break;
    }
  }
}

const reducers = combinedReducers({
  user: userReducer,
  task: taskReducer
})

const middleware = applyMiddleware();

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changes", store.getState())
})

store.dispatch({type: "LOGIN", payload: "Mike"})
store.dispatch({type: "LOGOUT", payload: "Mike"})
