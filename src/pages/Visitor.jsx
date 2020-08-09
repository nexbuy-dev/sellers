import React, { Component } from "react";
import StoreNav from "../Components/Nav/StoreNav";
import MyProfile from "./pages/myProfile/MyProfile";
import ProductDescription from "../Components/Products/ProductDescription";
import About from "./About/About";
import Home from "./Home/Home";

export default class Visitor extends Component {
  render() {
    return (
      <div>
        <StoreNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={ProductDescription} />
          <Route exact path="/profile" component={MyProfile} />
        </Switch>
      </div>
    );
  }
}
