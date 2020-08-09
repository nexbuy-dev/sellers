import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img_home from "../../assets/img/ic_home.png";
import img_profile from "../../assets/img/ic_profile.png";

class StoreNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navbar">
        <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
          <div className="container">
            <Navbar.Brand as={Link} to="/">
              Belvers Clothiers
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" eventKey={2}>
                  <img src={img_home} alt="" className="mr-2" />
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" eventKey={1}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" eventKey={3}>
                  <img src={img_profile} alt="" className="mr-2" />
                  profile
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

export default StoreNav;
