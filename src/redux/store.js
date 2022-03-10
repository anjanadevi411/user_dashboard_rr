import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = () => {
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

  return reduxStore;
};
export default store;
