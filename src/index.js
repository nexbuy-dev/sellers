import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

//Firebase imports
import Firebase from "./Firebase/Firebase";
import firebase from "firebase/app";

//redux imports
import { Provider } from "react-redux";
// import store from "./Redux/store ";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import rootReducer from "./Redux/Reducers/rootReducer";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
//Redux Store

const store = createStore(
  rootReducer,

  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, Firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const rrfConfig = {
  userProfile: "profiles",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: "profiles",
  presence: "presence", // where list of online users is stored in database
  sessions: "sessions",
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <div className="preloader">
        <div className="loader">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
