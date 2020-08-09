// To Edit user Profile
export const editUserProfile = ({ profile, user }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("profiles")
      .doc(user.id)
      .update({
        firstName: profile.firstName,
        lastName: profile.lastName,
        phone: profile.phone,
        address: profile.address,
        city: profile.city,
        state: profile.state,
      })
      .then(() => {
        dispatch({ type: "UPDATE_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "UPDATE_ERROR" });
      });
  };
};

export const wishList = ({ item, user, id }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const addWish = firestore.collection("profiles").doc(user);

    addWish
      .collection("wish")
      .doc()
      .set({
        item: id,
        imageUrl: item.imageUrl,
        name: item.name,
        price: item.price,
        dateAdded: new Date(),
      })
      .then(() => {
        dispatch({ type: "WISH_ADDED" });
      })
      .catch((err) => {
        dispatch({ type: "WISH_ERROR" });
      });
  };
};

// Deleting a wish
export const deleteWish = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("profiles")
      .doc()
      .collection("wish")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: " WISH_DELETED" });
      })
      .catch((err) => {
        dispatch({ type: " WISH_NOT_DELETED" });
      });
  };
};

//add item to cart
export const Cart = ({ id, user, product }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const addToCart = firestore.collection("profiles").doc(user);

    addToCart
      .collection("cart")
      .doc()
      .set({
        userId: user,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        color: null,
        productId: id,
        storeId: product.storeId,
        storeAddress: null,
        size: null,
        quantity: 1,
      })
      .then(() => {
        dispatch({ type: "CART_ADDED" });
      })
      .catch((err) => {
        dispatch({ type: "CART_ERROR" }, err);
        console.log(err);
      });
  };
};

// Delete Cart Item
export const deleteCartItem = ({ id, user }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("profiles")
      .doc(user)
      .collection("cart")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: " CART_DELETED" });
      })
      .catch((err) => {
        dispatch({ type: " CART_NOT_DELETED" });
      });
  };
};

export const deleteCartItems = ({ user }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    //   firestore
    //     .collection("profiles")
    //     .doc(user)
    //     .collection("cart")
    //     .delete()
    //     .then(() => {
    //       dispatch({ type: " CART_DELETED" });
    //     })
    //     .catch((err) => {
    //       dispatch({ type: " CART_NOT_DELETED" });
    //     });
    // };

    firestore
      .collection("profiles")
      .doc(user)
      .collection("cart")
      .get()
      .then((val) => {
        val.map((val) => {
          console.log(val);
          val.delete();
        });
      });
  };
};
