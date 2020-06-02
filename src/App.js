import React, { Component } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import MyProfile from "./pages/myProfile/MyProfile";
import Navbar from "./Components/Nav/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./pages/UserProfile/Userprofile";
import UserNav from "./Components/Nav/UserNav";
import StoreNav from "./Components/Nav/StoreNav";
import Cart from "./pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      route: "",
    };
  }

  stopPreloader = (init) => {
    setTimeout(() => {
      this.setState({ loading: init });
    }, 1000);
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div className="preloader">
          <div className="loader">
            <div className="spinner"></div>
          </div>
          {this.stopPreloader(false)}
        </div>
      );
    } else {
      return (
        <Router>
          <div className="App">
            {this.state.route === "user" ? (
              <div>
                <UserNav onRouteChange={this.onRouteChange} />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/userprofile" component={UserProfile} />

                  <Route exact path="/cart" component={Cart} />
                </Switch>
              </div>
            ) : this.state.route === "store" ? (
              <div>
                <StoreNav onRouteChange={this.onRouteChange} />
                <Switch>
                  <Route exact path="/" component={Home} />

                  <Route exact path="/storeprofile" component={MyProfile} />
                </Switch>

                <Footer />
              </div>
            ) : (
              <div>
                <Navbar onRouteChange={this.onRouteChange} />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/userprofile" component={UserProfile} />
                  <Route exact path="/storeprofile" component={MyProfile} />
                  <Route exact path="/cart" component={Cart} />
                </Switch>
              </div>
            )}
          </div>
        </Router>
      );
    }
  }
}

export default App;
