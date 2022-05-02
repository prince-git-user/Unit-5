//action type

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";



//action creator

import axios from "axios";
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
};

const loginUser = (payload) => (dispatch) => {
  const requestAction = loginRequest();
  dispatch(requestAction);
  const { email, password } = payload;
  axios
    .post("http://localhost:8080/users", {
      email,
      password
    })
    .then((res) => {
      const successAction = loginSuccess(res.data.token);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = loginFailure(err.message);
      dispatch(failureAction);
    });
};

export { loginRequest, loginSuccess, loginFailure, loginUser };
