import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = () => {
  //getting initial state from cart
  const userArray = localStorage.getItem("users");
  const users = userArray ? JSON.parse(userArray) : [];

  const middlewares = [thunk];
  const preloadedState = {
    reducerUsers: {
      users: [],
      user: {},
    },
  };

  const reduxStore = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  reduxStore.subscribe(() => {
    const currentState = reduxStore.getState();

    const usersState = currentState.reducerUsers.users;
    const stringifyUser = JSON.stringify(usersState);
    localStorage.setItem("user", stringifyUser);
  });
  return reduxStore;
};

export default store;

//   const middlewares = [thunk];
//   const preloadedState = {
//     reducerUsers: {
//       users: [],
//       user: {},
//     },
//   };
//   const reduxStore = createStore(
//     rootReducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware(...middlewares))
//   );

//   return reduxStore;
// };
// export default store;
