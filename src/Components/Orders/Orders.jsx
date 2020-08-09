import React, { Component } from "react";
import "./Orders.css";
import swal from "sweetalert";
import img from "../../assets/testimonials-1.jpg";
import img1 from "../../assets/testimonials-2.jpg";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDeleteOrder = () => {
    swal("Are you sure?", {
      dangerMode: true,
      buttons: true,
    });
  };

  render() {
    return (
      <div id="orders">
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="order-wrap">
                <div className="order-item">
                  <img src={img} className="order-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>email@example.com</h4>
                  <p>
                    Hello, I just ordered (quantity) (color) (product name). My
                    address is (customer's address).
                  </p>

                  <button className="btn btn-outline-success mr-3">
                    {" "}
                    <i className="fa fa-check"></i>{" "}
                  </button>

                  <button
                    className="btn btn-outline-danger"
                    onClick={this.onDeleteOrder}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="order-wrap">
                <div className="order-item">
                  <img src={img1} className="order-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>email@example.com</h4>
                  <p>
                    Hello, I just ordered (quantity) (color) (product name). My
                    address is (customer's address).
                  </p>
                  <button className="btn btn-outline-success mr-3">
                    {" "}
                    <i className="fa fa-check"></i>{" "}
                  </button>

                  <button
                    className="btn btn-outline-danger"
                    onClick={this.onDeleteOrder}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
