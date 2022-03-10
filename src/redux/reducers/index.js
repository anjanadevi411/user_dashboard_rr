import { combineReducers } from "redux";

import reducerUsers from "./reducerUsers";

const rootReducer = combineReducers({
  reducerUsers,
});

export default rootReducer;
