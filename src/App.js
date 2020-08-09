import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import MyProfile from "./pages/myProfile/MyProfile";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./pages/UserProfile/Userprofile";
import Nav from "./Components/Nav/nav";

import Cart from "./pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import ProductDescription from "./Components/Products/ProductDescription";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import About from "./pages/About/About";
import AboutUs from "./pages/About/AboutUs";
import { AuthProvider } from "./Components/Auth";
import PrivateRoute from "./Components/PrivateRoute";
import NewUser from "./Components/Login/NewUser";

//react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     route: "user",
  //   };
  // }

  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }

  // render() {
  // const route = this.state.route;

  return (
    <>
      <AuthProvider>
        <Router>
          <Nav />
          <div className="App">
            <div className="">
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/profile" component={UserProfile} />
                <PrivateRoute exact path="/cart" component={Cart} />
                <PrivateRoute exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/newuser" component={NewUser} />
                {/* </Switch> */}
                {/* </div>
                ) : route === "store" ? (
                  <div>
                    <Switch> */}
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/about" component={About} />
                <Route path="/product/:id" component={ProductDescription} />
                <PrivateRoute
                  exact
                  path="/storeprofile"
                  component={MyProfile}
                />
                {/* </Switch>
                  </div>
                ) : (
                  <div>
                    <Switch> */}
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
            {/* )} */}
            <Footer />
            <ToastContainer />
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
