import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import img_home from "../../assets/img/ic_home.png";
import img_profile from "../../assets/img/ic_profile.png";
import img_cart from "../../assets/img/ic_cart.png";
import "./nav.css";
import { Link } from "react-router-dom";

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navbar" className="user-nav">
        <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
          <div className="container">
            <Navbar.Brand as={Link} to="/">
              Belvers Clothiers
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" eventKey={2}>
                  <img src={img_home} alt="" className="mr-2" /> Home
                </Nav.Link>

                <Nav.Link as={Link} to="/about" eventKey={3}>
                  About
                </Nav.Link>

                <Nav.Link as={Link} to="/cart" eventKey={4}>
                  <img src={img_cart} alt="" className="mr-2" />
                  Cart
                </Nav.Link>

                <Nav.Link as={Link} to="/profile" eventKey={5}>
                  <img src={img_profile} alt="" className="mr-2" /> profile
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default UserNav;
