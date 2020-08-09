import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import UserProfile from "./UserProfile/Userprofile";
import Cart from "./pages/Cart/Cart";
import ProductDescription from "../Components/Products/ProductDescription";
import About from "./About/About";
import UserNav from "../Components/Nav/UserNav";

export default class User extends Component {
  render() {
    return (
      <Router>
        <div>
          <UserNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product" component={ProductDescription} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
