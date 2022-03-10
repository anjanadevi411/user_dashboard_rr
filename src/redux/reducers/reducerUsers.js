const defaultState = {
  users: [],
  user: {},
};

const reducerUsers = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
      };
    case "DELETE_USER_SUCCESS":
    case "ADD_USER":
    case "UPDATE_USER":
      return {
        ...state,
      };
    case "GET_USER":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case "ERROR":
      const errorPayload = action.payload;
      return {
        ...state,
        error: errorPayload,
      };

    default:
      return state;
  }
};

export default reducerUsers;
