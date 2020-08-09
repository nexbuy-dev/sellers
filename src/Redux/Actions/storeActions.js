// To Edit Store Profile
export const editStoreProfile = ({ store, user }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("profiles")
      .doc(user.id)
      .update({
        firstName: store.firstName,
        lastName: store.lastName,
        phone: store.phone,
        instagram: store.instagram,
        twitter: store.twitter,
        address: store.address,
        city: store.city,
        state: store.state,
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "UPDATE_ERROR" });
      });
  };
};

//Edit Homepage Adverts

//Adverts
export const AdvertA = (image) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const fileRef = firebase.storage().ref(`adverts/${image.name}`);

    fileRef
      .put(image)
      .then(() => {
        fileRef
          .getDownloadURL()
          .then((url) => {
            return firestore.collection("adverts").doc("A").set({
              imageUrl: url,
            });
          })
          .then(() => {
            dispatch({ type: "UPLOAD_SUCCESS" });
          })
          .catch((err) => {
            console.log("got here");
            dispatch({ type: "UPLOAD_ERROR" });
          });
      })
      .catch((err) => {
        dispatch({ type: "UPLOAD_ERROR" });
      });
  };
};

export const AdvertB = (image) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const fileRef = firebase.storage().ref(`adverts/${image.name}`);

    fileRef
      .put(image)
      .then(() => {
        fileRef
          .getDownloadURL()
          .then((url) => {
            return firestore.collection("adverts").doc("B").set({
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

export const AdvertC = (image) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const fileRef = firebase.storage().ref(`adverts/${image.name}`);

    fileRef
      .put(image)
      .then(() => {
        fileRef
          .getDownloadURL()
          .then((url) => {
            return firestore.collection("adverts").doc("C").set({
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

export const addproduct = ({ product, store }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const image = product.image;
    const fileRef = firebase
      .storage()
      .ref(`products/${store.id}/${image.name}`);

    fileRef
      .put(image)
      .then(() => {
        fileRef
          .getDownloadURL()
          .then((url) => {
            return firestore.collection("products").doc().set({
              name: product.name,
              description: product.description,
              price: product.price,
              category: product.category,
              subcategory: product.subcategory,
              availableSizes: product.sizes,
              availableColors: product.colors,
              quantity: product.quantity,
              storeId: store.id,
              imageUrl: url,
            });
          })
          .then(() => {
            dispatch({ type: "PRODUCT_ADDED" });
          })
          .catch((err) => {
            dispatch({ type: "PRODUCT_NOT_ADDED" });
          });
      })
      .catch((err) => {
        dispatch({ type: "UPLOAD_ERROR" });
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();

    firestore
      .collection("products")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "PRODUCT_DELETED" });
      })
      .catch((err) => {
        dispatch({ type: "PRODUCT_NOT_DELETED" });
      });
  };
};
