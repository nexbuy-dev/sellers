import React, { Component } from "react";
import "./WishList.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import { deleteWish } from "../../Redux/Actions/userActions";

class WishList extends Component {
  deleteWish = (id) => {
    this.props.deleteWish(id);
  };
  render() {
    const wishes = this.props.wishes;
    // const { wishes } = this.props;

    // console.log(products.id);
    return (
      <div id="wish-list">
        <div className="row">
          {wishes &&
            wishes.map((wish) => {
              return (
                <Link
                  to={"/product/" + wish.item}
                  key={wish.id}
                  className="col-6 col-md-3 col-lg-2 mt-3"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card">
                    <img
                      src={`${wish.imageUrl}`}
                      alt=""
                      style={{
                        height: "160px",
                        borderRadius: "10px 10px 7px 7px",
                      }}
                      className="img-fluid category-img card-img-top"
                    />

                    <div
                      className="p-2"
                      style={{
                        borderRadius: " 0 0 8px 8px",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        color: "#000",
                      }}
                    >
                      <strong>{wish.name} </strong> <br />
                      {wish.price} <br />
                      {/* <button
                        className="btn"
                        onClick={() => deleteWish(wish.id)}
                        style={{ zIndex: "100" }}
                      >
                        <i
                          className="fa fa-minus-square-o"
                          style={{ color: "#fff" }}
                        ></i>
                      </button> */}
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // const wishes = state.firestore.data.wishes;
  // const products = state.firestore.ordered.products;
  // let url = object.values(wishes.doc());
  // console.log(wishes);
  return {
    wishes: state.firestore.ordered.wishes,
    // products: state.firestore.ordered.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWish: (id) => dispatch(deleteWish(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => {
    var myUserId = firebase.auth().currentUser.uid;
    return [
      {
        collection: "profiles",
        doc: myUserId,
        subcollections: [{ collection: "wish" }],
        storeAs: "wishes",
      },
      { collection: "products" },
    ];
  })
)(WishList);
