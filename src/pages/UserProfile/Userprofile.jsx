import React from "react";
import "./UserProfile.css";
import Footer from "../../Components/Footer/Footer";
import img from "../../assets/oluwavicky.jpg";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
    };
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

  render() {
    return (
      <div>
        <div className="profile">
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-img">
                <img src={img} alt="" width="200" />
              </div>
              <div className="profile-nav-info">
                <h3 className="user-name">Oluwavicky</h3>
                <div className="address">
                  <p className="state">Lagos,</p>
                  <span className="country">Nigeria.</span>
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
                    tannaye@gmail.com
                  </p>
                  <div className="user-bio">
                    <h5>Interests</h5>
                    <p className="bio">
                      Phones and Tables, Gaming, Computing, Male Wears.
                    </p>
                  </div>
                  <div className="profile-btn">
                    <button className="chatbtn">
                      <i className="fa fa-eye mr-2"></i>View cart
                    </button>
                    <button className="createbtn">
                      {" "}
                      <i className="fa fa-settings mr-2"></i>
                      Edit profile
                    </button>
                  </div>
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
                        <h1>Transaction History</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rem soluta rerum cumque aliquid pariatur optio
                          mollitia accusantium quod odit esse, eaque vero
                          reprehenderit ad quae omnis a totam ex voluptatem et
                          sequi adipisci aliquam voluptates deserunt! Sequi non
                          dolores animi!
                        </p>
                      </div>
                    ) : this.state.route === "wishlist" ? (
                      <div className="">
                        <h1>Wish List</h1>
                        <p>Comming soon...</p>
                      </div>
                    ) : (
                      <div className="">
                        <h1>My orders</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default UserProfile;
