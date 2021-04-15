import * as api from "../api/auth";

export const registerUser = (formData) => (dispatch) => {
  api
    .register(formData)
    .then((_) => dispatch({ type: "AUTH_REGISTER_SUCCESS" }));
};

export const logout = () => (dispatch) =>
  api.logout().then((_) => dispatch({ type: "AUTH_LOGOUT_SUCCESS" }));

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: "AUTH_ON_INIT" });
  api.onAuthStateChange((authUser) => {
    const dispatchObj = authUser
      ? { type: "AUTH_ON_SUCCESS", user: authUser }
      : { type: "AUTH_ON_ERROR" };
    dispatch(dispatchObj);
  });
};
