//AUTHENTICATION

//Sign in
export const loginUser = (credentials) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
    .catch((error) => {
      dispatch({ type: "LOGIN_ERROR", error });
      console.log(error.message);
    });
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.assign("/");
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

//SIGN UP
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore.collection("profiles").doc(resp.user.uid).set({
          id: resp.user.uid,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          phoneNumber: newUser.phoneNumber,
          imageUrl: null,
          itemInCart: null,
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
