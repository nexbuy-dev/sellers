import { toast } from "react-toastify";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      toast.error("wrong credentials");
      return {
        ...state,
        authError: "wrong credntials",
      };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNOUT_SUCCESS":
      console.log("success");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return state;

    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default authReducer;
