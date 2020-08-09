import React, { Component } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "../../Firebase/Firebase";
import {
  deleteCartItem,
  deleteCartItems,
} from "../../Redux/Actions/userActions";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";

const publicKey = "pk_test_7ef0929bad6cd1b77c44d66f876cc049e8be89d9";

class Cart extends Component {
  state = {
    email: "iwatannayevictor@gmail.com",
    amount: "50000",
    phone: "0298736430498",
  };

  setParameters = ({ email, phone }) => {};

  deleteCartItem = (id) => {
    const user = this.props.user.id;
    this.props.deleteCartItem({ id, user });
  };

  deleteCartItems = () => {
    const user = this.props.user.id;
    this.props.deleteCartItems(user);
  };

  render() {
    const carts = this.props.carts;
    const email = this.state.email;
    const amount = this.state.amount;
    const phone = this.state.phone;
    const user = this.props.user.id;

    const componentProps = {
      email,
      amount,
      metadata: {
        phone,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () => {
        deleteCartItems(user);
        toast.success("Your order has been sent successfully");
      },
    };

    return (
      <div id="cart">
        <div id="container" className="container">
          <table>
            <tbody>
              {carts &&
                carts.map((cart) => {
                  return (
                    <tr className="p" key={cart.id}>
                      <td className="image">
                        <img src={`${cart.imageUrl}`} alt="" />
                      </td>
                      <td className="name">{cart.name}</td>
                      <td className="price">{cart.price}</td>
                      <td className="amount">
                        {cart.quantity}
                        {/* <input type="number" defaultValue="1" min="1" /> */}
                      </td>
                      <td className="remove ">
                        <button
                          className="btn btn-danger fa fa-trash"
                          onClick={() => this.deleteCartItems()}
                        ></button>
                      </td>
                    </tr>
                  );
                })}

              <tr>
                <td> </td>
                <td> </td>
                <td> </td>

                <td> </td>
              </tr>
              <tr>
                <td style={{ borderTop: "1px solid black" }} colSpan="6">
                  <br />

                  <span className="big">
                    Total: $<span className="realtotal">500</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="checkout">
            {/* <button className="btn btn-danger">Checkout</button> */}
            <PaystackButton
              className="btn btn-danger"
              onClick={this.setParameters({})}
              {...componentProps}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.firestore.ordered.carts);
  return {
    user: state.firebase.profile,
    carts: state.firestore.ordered.carts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCartItem: (id) => dispatch(deleteCartItem(id)),
    deleteCartItems: (id) => dispatch(deleteCartItems(id)),
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
        subcollections: [{ collection: "cart" }],
        storeAs: "carts",
      },
      { collection: "products" },
    ];
  })
)(Cart);
