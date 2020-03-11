import http from "./http";

const startGetUsers = () => {
  return { type: "START_GET_USERS", ready: false };
};
const comleteGetUsers = data => {
  return { type: "COMPLETE_GET_USERS", data };
};
const errorGetUsers = err => {
  return { type: "ERROR_GET_USERS", err };
};

export const getUsers = () => {
  return (dispatch, getState) => {
    dispatch(startGetUsers());
    http
      .get("users/")
      .then(response => {
        if (response.data) {
          dispatch(comleteGetUsers(response.data));
        }
      })
      .catch(err => {
        dispatch(errorGetUsers(err));
      });
  };
};
