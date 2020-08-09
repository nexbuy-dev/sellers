import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import dataReducer from "./dataReducer";
import storeReducer from "./storeReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  owner: storeReducer,
  data: dataReducer,
  UI: uiReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
