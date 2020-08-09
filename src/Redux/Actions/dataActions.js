// Data actions done by the users

//update profile picture
export const changeProfilePicture = ({ image, user }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const fileRef = firebase.storage().ref(`photos/${user.id}/${image.name}`);

    fileRef
      .put(image)
      .then(() => {
        fileRef
          .getDownloadURL()
          .then((url) => {
            return firestore.collection("profiles").doc(user.id).update({
              imageUrl: url,
            });
          })
          .then(() => {
            dispatch({ type: "UPLOAD_SUCCESS" });
          })
          .catch((err) => {
            dispatch({ type: "UPLOAD_ERROR" });
          });
      })
      .catch((err) => {
        dispatch({ type: "UPLOAD_ERROR" });
      });
  };
};
