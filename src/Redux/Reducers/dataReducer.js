// This reducer takes the states of the major Datas in our app

import { toast } from "react-toastify";

const initialState = {
  dataError: null,
  products: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_ERROR":
      toast.error("picture upload failed");
      return {
        ...state,
        dataError: "file upload failed",
      };
    case "UPLOAD_SUCCESS":
      toast.success("profile picture changed succesfully");
      return {
        ...state,
        dataError: null,
      };

    default:
      return state;
  }
};

export default dataReducer;
