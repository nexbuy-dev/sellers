import React from "react";
import "./ProductDescription.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { wishList, Cart } from "../../Redux/Actions/userActions";

class ProductDescription extends React.Component {
  state = {
    color: null,
    size: null,
    quantity: "1",
  };

  //create a means of getting the color, size and quantity

  // add to cart
  addToCart = () => {
    const id = this.props.match.params.id;
    const user = this.props.user.id;
    const product = this.props.product;

    this.props.Cart({ id, user, product });
    console.log("click");
  };

  //add to wish list
  addToWishList = () => {
    const item = this.props.product;
    const user = this.props.user.id;
    const id = this.props.match.params.id;
    console.log(item);
    this.props.wishList({ item, user, id });
  };

  render() {
    const { product } = this.props;
    if (product) {
      return (
        <div id="product-description">
          <div className="container-fluid row">
            <div className=" container col-12 col-lg-6 mb-2">
              <div className="product-img">
                <img
                  src={`${product.imageUrl}`}
                  alt="product image"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="description">
                <div className="product-name mt-md-5">
                  <h3>{product.name}</h3>
                </div>

                <hr />

                <div className="product-description">
                  <p>{product.description}</p>
                </div>
                <hr />

                <div className="price">
                  <h5>Price</h5>
                  <div className="row">
                    <div className="col-8 ">
                      <div className="product-price row">
                        <span className="col-3 col-md-2 p-1">NGN</span>
                        <p className="p-1">{product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="quantity">
                  <h5>Quantity</h5>
                  <input type="number" placeholder="1"></input>
                </div>
              </div>

              <hr />
              <div className="add-btn col-12">
                <div className="row">
                  <button
                    className="btn btn-danger col-7 mb-2 col-md-4"
                    onClick={this.addToCart}
                  >
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </button>

                  <button
                    className="btn btn-outline-danger mb-2 col-7 col-md-4"
                    onClick={this.addToWishList}
                  >
                    <i className="fa fa-heart"></i> Add to wish list
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="preloader">
            <div className="loader">
              <div className="spinner"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id; //ownProps is similar to props
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;

  return {
    product: product,
    user: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    wishList: (item) => dispatch(wishList(item)),
    Cart: (item) => dispatch(Cart(item)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(ProductDescription);
