import React, { Component } from "react";
import "./StoreProfile.css";

import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";

class StoreProfile extends Component {
  render() {
    return (
      <div>
        <div className="store-profile-img"></div>

        <div className="add-products mt-3 container">
          <div className="row">
            <div className="col-sm-12">
              <h3>ALL PRODUCTS</h3>
              <button className="btn btn-outline-danger float-right">
                <i className="fa fa-plus mr-2"></i>
                Add product
              </button>
              <button className="btn btn-outline-danger float-right mr-3">
                <i className="fa fa-eye mr-2"></i>
                Orders
              </button>
            </div>

            <div className="col-md-10">
              <Products />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StoreProfile;
