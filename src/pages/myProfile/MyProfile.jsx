import React, { Component, Profiler } from "react";
import "./MyProfile.css";
import Products from "../../Components/Products/ProductsTable";
import Orders from "../../Components/Orders/Orders";
import AddModal from "./Modal";
import StoreAccountSettings from "../../Components/StoreAccountSettings/StoreAccountSettings";
import { connect } from "react-redux";
import { signOut } from "../../Redux/Actions/authActions";
import EditProfile from "./EditProfile";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      addModalShow: false,
      addEditShow: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
  };

  onEditProfile = () => {
    this.setState({ addEditShow: true });
  };

  render() {
    let addModalClose = () =>
      this.setState({ addModalShow: false, addEditShow: false });
    const { profile, auth } = this.props;

    return (
      <div className="profile" id="store">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-img">
              <img src={`${profile.imageUrl}`} alt="" width="200" />
            </div>
            <div className="profile-nav-info">
              <h3 className="user-name">
                {profile.firstName} {profile.lastName}
              </h3>
              <div className="address">
                <p className="state">
                  {profile.address}, {profile.city}
                </p>
                <span className="country">{profile.state}, Nigeria.</span>
              </div>
            </div>
            {/* <div className="profile-option">
              <div className="notification">
                <i className="fa fa-bell"></i>
                <span className="alert-message">1</span>
              </div>
            </div> */}
          </div>
          <div className="main-bd">
            <div className="left-side">
              <div className="profile-side">
                <p className="mobile-no">
                  <i className="fa fa-phone"></i>
                  {profile.phone}
                </p>
                <p className="user-mail">
                  <i className="fa fa-envelope"></i>
                  {auth.email}
                </p>
                <div className="user-bio">
                  <p className="ig-handle">
                    <i className="fa fa-instagram"></i>
                    {profile.instagram}
                  </p>
                  <p className="twitter">
                    <i className="fa fa-twitter"></i>
                    {profile.twitter}
                  </p>
                </div>

                <div className="profile-btn">
                  <button className="chatbtn" onClick={this.onEditProfile}>
                    <i className="fa fa-cog mr-2"></i>
                    Edit Profile
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
                  <EditProfile
                    show={this.state.addEditShow}
                    onHide={addModalClose}
                  />
                </div>
                {/* <div className="user-rating">
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
                </div> */}
              </div>
              <div className="profile-btn">
                <button className="chatbtn col-12" onClick={this.props.signOut}>
                  <i className="fa fa-sign-out mr-3"></i> Logout{" "}
                </button>
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
                      <Orders />
                    </div>
                  ) : this.state.route === "settings" ? (
                    <div className="">
                      <StoreAccountSettings />
                    </div>
                  ) : (
                    <div className="">
                      <Products />
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
