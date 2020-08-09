import React from "react";
import { Link } from "react-router-dom";
import WishList from "../../Components/WishList/WishList";
import AddModal from "./Modal";
import UserOrders from "../../Components/Orders/UserOrders";
import Transactions from "../../Components/Transactions/Transactions";
import { connect } from "react-redux";
import { signOut } from "../../Redux/Actions/authActions";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      addModalShow: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  Orders = () => {
    this.setState({ route: "orders" });
  };

  History = () => {
    this.setState({ route: "history" });
  };

  WishList = () => {
    this.setState({ route: "wishlist" });
  };

  onEditProfile = () => {
    this.setState({ addModalShow: true });
  };

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    const { profile, auth } = this.props;

    return (
      <div>
        <div className="profile">
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
                  {/* <div className="user-bio">
                    <h5>Interests</h5>
                    <p className="bio">
                      Phones and Tables, Gaming, Computing, Male Wears.
                    </p>
                  </div> */}
                  <div className="profile-btn">
                    <button className="chatbtn">
                      <i className="fa fa-eye mr-2"></i>
                      <Link to="/cart" style={{ color: "#fff" }}>
                        View cart
                      </Link>
                    </button>
                    <button className="createbtn" onClick={this.onEditProfile}>
                      {" "}
                      <i className="fa fa-cog mr-2"></i>
                      Edit profile
                    </button>
                    <AddModal
                      show={this.state.addModalShow}
                      onHide={addModalClose}
                    />
                  </div>
                </div>

                <div className="profile-btn">
                  <button
                    className="chatbtn col-12"
                    onClick={this.props.signOut}
                  >
                    <i className="fa fa-sign-out mr-3"></i> Logout{" "}
                  </button>
                </div>
              </div>
              <div className="right-side">
                <div className="nav">
                  <ul>
                    <li className="user-post myproducts" onClick={this.Orders}>
                      Orders
                    </li>
                    <li
                      className="user-review myorders "
                      onClick={this.History}
                    >
                      Transactions
                    </li>
                    <li
                      className="user-setting mysettings"
                      onClick={this.WishList}
                    >
                      WishList
                    </li>
                  </ul>
                </div>

                <div className="profile-body">
                  <div className="profile-posts tab">
                    {this.state.route === "history" ? (
                      <div>
                        <Transactions />
                      </div>
                    ) : this.state.route === "wishlist" ? (
                      <div className="">
                        <WishList />
                      </div>
                    ) : (
                      <div className="">
                        <UserOrders />
                      </div>
                    )}
                  </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
