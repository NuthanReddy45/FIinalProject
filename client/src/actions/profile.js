import api from "../utils/api";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS,
  NO_REPOS,
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get("/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const getOrgs = () => async (dispatch) => {
  try {
    const res = await api.get("/orgs");
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all profiles
export const getEmployees = (orgID) => async (dispatch) => {
  try {
    const res = await api.get(`/orgs/emp/${orgID}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NO_REPOS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get Github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await api.get(`/profile/github/${username}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NO_REPOS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const res = await api.post("/profile", formData);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(edit ? "Profile Updated" : "Profile Created", "success")
      );

      if (!edit) {
        history.push("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Add organization
export const addOrganization = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post("/orgs", formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("organization Added", "success"));

    // history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Employee
export const addEmployee = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post("/orgs/emp", formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Employee Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch(setAlert("Employee already registered", "danger"));

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete organization
export const deleteorganization = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/orgs/${id}`);

    dispatch({
      type: GET_PROFILES,
      // type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("organization Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete employee
export const deleteEmployee = (id1, id2) => async (dispatch) => {
  try {
    console.log("id1,id2", id1.org, id2);
    const res = await api.delete(`/orgs/emp/${id1.org}/${id2}`);

    dispatch({
      type: NO_REPOS,
      payload: res.data,
    });

    dispatch(setAlert("Employee Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await api.delete("/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Your account has been permanently deleted"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
