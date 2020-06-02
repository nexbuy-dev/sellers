import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";
import nexbuy from "../../assets/nexbuy.svg";

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand href="/">Belvers Clothiers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">
                  <i className="fa fa-home mr-1"></i>Home
                </Nav.Link>
                <Nav.Link href="/cart">
                  {" "}
                  <img
                    src={nexbuy}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  ></img>
                  Cart
                </Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">
                    <Link
                      to="female-wears"
                      smooth={true}
                      duration={1000}
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      Female wears{" "}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link
                      to="male-wears"
                      smooth={true}
                      duration={1000}
                      style={{ cursor: "pointer" }}
                    >
                      Male wears{" "}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Link
                      to="sneakers"
                      smooth={true}
                      duration={1000}
                      style={{ cursor: "pointer" }}
                    >
                      Sneakers
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    <Link
                      to="special-offers"
                      smooth={true}
                      duration={1000}
                      style={{ cursor: "pointer" }}
                    >
                      Special offers{" "}
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/userprofile">
                  <i className="fa fa-user mr-1"></i>profile
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => this.props.onRouteChange("visitor")}
                >
                  Visitor mode
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
