import api from "../utils/api";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const contactUs = (formData) => async (dispatch) => {
  try {
    await api.post("/auth/contactUs", formData);

    dispatch(setAlert("Form submitted succesfully", "success"));
  } catch (err) {
    console.log("err in submitting form ", err);
    dispatch(setAlert("Failed to Post the form", "danger"));
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users", formData);
    console.log("in auth", res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res,
    });
    dispatch(setAlert("Registration Succesfull Please Login Now", "success"));
    // dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    console.log("here ", err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
