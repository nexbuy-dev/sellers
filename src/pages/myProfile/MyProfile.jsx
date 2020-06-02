import React, { Component } from "react";
import "./MyProfile.css";
import img from "../../assets/new.png";
import Products from "../../Components/Products/Products";
import swal from "sweetalert";
import AddModal from "./Modal";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      addModalShow: false,
    };
  }

  Products = () => {
    this.setState({ route: "products" });
  };

  Orders = () => {
    this.setState({ route: "orders" });
  };

  Settings = () => {
    this.setState({ route: "settings" });
  };

  onAddProduct = () => {
    this.setState({ addModalShow: true });
    console.log("click");
  };

  onDeleteProduct = () => {
    swal("Are you sure?", {
      dangerMode: true,
      buttons: true,
    });
  };

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <div className="profile">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-img">
              <img src={img} alt="" width="200" />
            </div>
            <div className="profile-nav-info">
              <h3 className="user-name">Belvers Clohiers</h3>
              <div className="address">
                <p className="state">Lagos,</p>
                <span className="country">Nigeria.</span>
              </div>
            </div>
            <div className="profile-option">
              <div className="notification">
                <i className="fa fa-bell"></i>
                <span className="alert-message">1</span>
              </div>
            </div>
          </div>
          <div className="main-bd">
            <div className="left-side">
              <div className="profile-side">
                <p className="mobile-no">
                  <i className="fa fa-phone"></i>
                  +2348184433609
                </p>
                <p className="user-mail">
                  <i className="fa fa-envelope"></i>
                  belvers@gmail.com
                </p>
                <div className="user-bio">
                  <p className="ig-handle">
                    <i className="fa fa-instagram"></i>
                    Belvers_clothiers
                  </p>
                  <p className="twitter">
                    <i className="fa fa-twitter"></i>
                    Belvers_clothiers
                  </p>
                  <p className="bio">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique provident quia error delectus reprehenderit
                    necessitatibus ad beatae repellat omnis iusto.
                  </p>
                </div>
                <div className="profile-btn">
                  <button className="chatbtn">
                    <i className="fa fa-eye mr-2"></i>Status
                  </button>
                  <button className="createbtn" onClick={this.onAddProduct}>
                    {" "}
                    <i className="fa fa-plus mr-2"></i>
                    Add product
                  </button>
                  <AddModal
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                  />
                  ;
                </div>
                <div className="user-rating">
                  <h3 className="rating">4.5</h3>
                  <div className="rate">
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <span className="no-user">
                      <span>123</span>&nbsp;reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="nav">
                <ul>
                  <li className="user-post" onClick={this.Products}>
                    Products
                  </li>
                  <li className="user-review " onClick={this.Orders}>
                    Orders
                  </li>
                  <li className="user-setting" onClick={this.Settings}>
                    Settings
                  </li>
                </ul>
              </div>

              <div className="profile-body">
                <div className="profile-posts tab">
                  {this.state.route === "orders" ? (
                    <div>
                      <h1>Orders</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem soluta rerum cumque aliquid pariatur optio mollitia
                        accusantium quod odit esse, eaque vero reprehenderit ad
                        quae omnis a totam ex voluptatem et sequi adipisci
                        aliquam voluptates deserunt! Sequi non dolores animi!
                      </p>
                    </div>
                  ) : this.state.route === "settings" ? (
                    <div className="">
                      <h1>Account Settings</h1>
                      <p>Comming soon...</p>
                    </div>
                  ) : (
                    <div className="">
                      <h1>Your Products</h1>
                      <Products onDeleteProduct={this.onDeleteProduct} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
