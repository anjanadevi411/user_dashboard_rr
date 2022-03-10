import axios from "axios";

export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

export const deleteUserSuccess = () => ({
  type: "DELETE_USER_SUCCESS",
});

export const userAdded = () => ({
  type: "ADD_USER",
});

export const getOneUser = (user) => ({
  type: "GET_USER",
  payload: user,
});

export const updateUser = () => ({
  type: "UPDATE_USER",
});

//get
export const getAllUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        //console.log("response", response.data);
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5000/user/${id}`)
      .then((response) => {
        dispatch(deleteUserSuccess());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5000/user", user)
      .then((response) => {
        console.log("respo", response);
        dispatch(userAdded());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((response) => {
        console.log("get one user", response.data);
        dispatch(getOneUser(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateSingleUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5000/user/${id}`, user)
      .then((response) => {
        dispatch(updateUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchError = (error) => {
  return {
    type: "ERROR",
    payload: error,
  };
};
