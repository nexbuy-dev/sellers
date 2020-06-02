import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class StoreNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand href="/">Belvers Clothiers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">
                  <i className="fa fa-home mr-1"></i>Home
                </Nav.Link>

                <Nav.Link href="/storeprofile">
                  <i className="fa fa-user mr-1"></i>profile
                </Nav.Link>

                <Nav.Link
                  href="#"
                  onClick={() => this.props.onRouteChange("user")}
                >
                  User mode
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
