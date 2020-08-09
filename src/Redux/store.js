import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./Reducers/userReducer";
import dataReducer from "./Reducers/dataReducer";
import storeReducer from "./Reducers/storeReducer";
import uiReducer from "./Reducers/uiReducer";

import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import Firebase from "../Firebase/Firebase";

const initialState = {};

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const reducers = combineReducers({
  user: userReducer,
  owner: storeReducer,
  data: dataReducer,
  UI: uiReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(Firebase),
    reactReduxFirebase(Firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
