import React, { Component } from "react";
import { Collapse, Button, Tab, Row, Col, Nav } from "react-bootstrap";
import "./StoreAccountSettings.css";
import { changeProfilePicture } from "../../Redux/Actions/dataActions";
import { connect } from "react-redux";
import {
  editStoreProfile,
  AdvertA,
  AdvertB,
  AdvertC,
} from "../../Redux/Actions/storeActions";

class StoreAccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editcarousel: false,
      picture: false,
      password: false,
      about: false,

      //Handles all picture file changes
      image: "",
    };
  }

  // Handles the pictures
  onFilechange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  onSubmit = (e) => {
    const image = this.state.image;
    const user = this.props.user;
    e.preventDefault();
    this.props.changeProfilePicture({ image, user });
    document.getElementById("updateProfilePicture").reset();
  };

  onSubmitAdvertA = (e) => {
    const advert = this.state.image;
    e.preventDefault();
    this.props.AdvertA(advert);
    document.getElementById("advertA").reset();
  };

  onSubmitAdvertB = (e) => {
    const advert = this.state.image;
    e.preventDefault();
    this.props.AdvertB(advert);
    document.getElementById("advertB").reset();
  };

  onSubmitAdvertC = (e) => {
    const advert = this.state.image;
    e.preventDefault();
    this.props.AdvertC(advert);
    document.getElementById("advertC").reset();
  };

  //Handles Input Changes
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  isOpenCarousel = (editcarousel) => {
    if (this.state.editcarousel === false) {
      this.setState({ editcarousel: editcarousel });
    } else this.setState({ editcarousel: false });
  };

  isOpenPicture = (picture) => {
    if (this.state.picture === false) {
      this.setState({ picture: picture });
    } else this.setState({ picture: false });
  };

  isOpenPassword = (password) => {
    if (this.state.password === false) {
      this.setState({ password: password });
    } else this.setState({ password: false });
  };

  isOpenAbout = (about) => {
    if (this.state.about === false) {
      this.setState({ about: about });
    } else this.setState({ about: false });
  };

  render() {
    const { editcarousel, picture, password, about } = this.state;
    return (
      <div id="settings">
        <ul>
          <div className="">
            {/* Begin Edit Home page Carousel*/}
            <li>
              <div className="">
                <>
                  <Button
                    onClick={() => this.isOpenCarousel(true)}
                    aria-controls="example-collapse-text"
                    aria-expanded={editcarousel}
                    variant="outline-danger"
                  >
                    Edit Homepage Adverts
                  </Button>
                  <Collapse in={editcarousel}>
                    <div id="example-collapse-text" className="mt-3">
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="first"
                      >
                        <Row>
                          <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link eventKey="first">Advert 1</Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                <Nav.Link eventKey="second">Advert 2</Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                <Nav.Link eventKey="third">Advert 3</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col sm={9}>
                            <Tab.Content>
                              <Tab.Pane eventKey="first">
                                <div className="card">
                                  <form
                                    action=""
                                    onSubmit={this.onSubmitAdvertA}
                                    id="advertA"
                                  >
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Change advert
                                      </label>
                                      <div className="col-lg-9">
                                        <input
                                          name="advert"
                                          className="form-control"
                                          type="file"
                                          onChange={this.onFilechange}
                                          required
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label"></label>
                                      <div className="col-lg-9">
                                        <input
                                          type="reset"
                                          className="btn btn-danger mr-1 m-2"
                                          value="Cancel"
                                        />
                                        <input
                                          type="submit"
                                          className="btn btn-success"
                                          value="Save Changes"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                <div className="card">
                                  <form
                                    action=""
                                    onSubmit={this.onSubmitAdvertB}
                                    id="advertB"
                                  >
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Change advert
                                      </label>
                                      <div className="col-lg-9">
                                        <input
                                          name="advert"
                                          className="form-control"
                                          type="file"
                                          onChange={this.onFilechange}
                                          required
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label"></label>
                                      <div className="col-lg-9">
                                        <input
                                          type="reset"
                                          className="btn btn-danger mr-1 m-2"
                                          value="Cancel"
                                        />
                                        <input
                                          type="submit"
                                          className="btn btn-success"
                                          value="Save Changes"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </Tab.Pane>

                              <Tab.Pane eventKey="third">
                                <div className="card">
                                  <form
                                    action=""
                                    onSubmit={this.onSubmitAdvertC}
                                    id="advertC"
                                  >
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Change advert
                                      </label>
                                      <div className="col-lg-9">
                                        <input
                                          name="advert"
                                          className="form-control"
                                          type="file"
                                          onChange={this.onFilechange}
                                          required
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label"></label>
                                      <div className="col-lg-9">
                                        <input
                                          type="reset"
                                          className="btn btn-danger mr-1 m-2"
                                          value="Cancel"
                                        />
                                        <input
                                          type="submit"
                                          className="btn btn-success"
                                          value="Save Changes"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </div>
                  </Collapse>
                </>
              </div>
            </li>
            {/* end change advert page */}

            {/* begin change profile picture */}
            <li>
              <div className="">
                <>
                  <Button
                    onClick={() => this.isOpenPicture(true)}
                    aria-controls="example-collapse-text"
                    aria-expanded={picture}
                    variant="outline-danger"
                  >
                    {" "}
                    Edit Profile Picture
                  </Button>
                  <Collapse in={picture}>
                    <div id="example-collapse-text" className="mt-3">
                      <div className="card">
                        <form
                          action=""
                          onSubmit={this.onSubmit}
                          id="updateProfilePicture"
                        >
                          <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">
                              Choose Picture
                            </label>
                            <div className="col-lg-9">
                              <input
                                className=""
                                type="file"
                                onChange={this.onFilechange}
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label"></label>
                            <div className="col-lg-9">
                              <input
                                type="reset"
                                className="btn btn-danger mr-1 m-2"
                                value="Cancel"
                              />
                              <input
                                type="submit"
                                className="btn btn-success"
                                value="Save Changes"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Collapse>
                </>
              </div>
            </li>
            {/* end change profile picture */}

            {/* begin change password */}
            <li>
              <div className="">
                <>
                  <Button
                    onClick={() => this.isOpenPassword(true)}
                    aria-controls="example-collapse-text"
                    aria-expanded={password}
                    variant="outline-danger"
                  >
                    Change Password
                  </Button>
                  <Collapse in={password}>
                    <div id="example-collapse-text" className="mt-3">
                      <div className="card">
                        <form action="">
                          <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">
                              Password
                            </label>
                            <div className="col-lg-9">
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">
                              Confirm password
                            </label>
                            <div className="col-lg-9">
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label"></label>
                            <div className="col-lg-9">
                              <input
                                type="reset"
                                className="btn btn-danger mr-1 m-2"
                                value="Cancel"
                              />
                              <input
                                type="button"
                                className="btn btn-success"
                                value="Save Changes"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Collapse>
                </>
              </div>
            </li>
            {/* end change password */}

            <li>
              <div className="">
                <>
                  {/* Begin edit about us page   */}
                  <Button
                    onClick={() => this.isOpenAbout(true)}
                    aria-controls="example-collapse-text"
                    aria-expanded={about}
                    variant="outline-danger"
                  >
                    Edit About us page
                  </Button>
                  <Collapse in={about}>
                    <div id="example-collapse-text" className="mt-3">
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="first"
                      >
                        <Row>
                          <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link eventKey="first">
                                  First paragraph
                                </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                <Nav.Link eventKey="second">
                                  Second paragraph
                                </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                <Nav.Link eventKey="third">
                                  Third Paragraph
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col sm={9}>
                            <Tab.Content>
                              <Tab.Pane eventKey="first">
                                <div className="card">
                                  <form action="">
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Edit Paragraph
                                      </label>
                                      <div className="col-lg-9">
                                        <textarea
                                          className="form-control"
                                          type="text"
                                          rows="4"
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label"></label>
                                      <div className="col-lg-9">
                                        <input
                                          type="reset"
                                          className="btn btn-danger mr-1 m-2"
                                          value="Cancel"
                                        />
                                        <input
                                          type="button"
                                          className="btn btn-success"
                                          value="Save Changes"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </Tab.Pane>

                              <Tab.Pane eventKey="second">
                                <div className="card">
                                  <form action="">
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Change About Picture
                                      </label>
                                      <div className="col-lg-9">
                                        <input className="" type="file" />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Edit paragraph
                                      </label>
                                      <div className="col-lg-9">
                                        <textarea
                                          className="form-control"
                                          rows="4"
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Enter Title 1
                                      </label>
                                      <div className="col-lg-9">
                                        <input
                                          className="form-control"
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Paragraph (Title 1)
                                      </label>
                                      <div className="col-lg-9">
                                        <textarea
                                          className="form-control"
                                          rows="3"
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Enter Title 2
                                      </label>
                                      <div className="col-lg-9">
                                        <input
                                          className="form-control"
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Paragraph (Title 2)
                                      </label>
                                      <div className="col-lg-9">
                                        <textarea
                                          className="form-control"
                                          rows="3"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Enter Title 3
                                      </label>
                                      <div className="col-lg-9">
                                        <input
                                          className="form-control"
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Paragraph (Title 3)
                                      </label>
                                      <div className="col-lg-9">
                                        <textarea
                                          className="form-control"
                                          rows="3"
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label"></label>
                                      <div className="col-lg-9">
                                        <input
                                          type="reset"
                                          className="btn btn-danger mr-1 m-2"
                                          value="Cancel"
                                        />
                                        <input
                                          type="button"
                                          className="btn btn-success"
                                          value="Save Changes"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </Tab.Pane>

                              <Tab.Pane eventKey="third">
                                <div className="card">
                                  <form action="">
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Change About Picture
                                      </label>
                                      <div className="col-lg-9">
                                        <input className="" type="file" />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Edit Title
                                      </label>
                                      <div className="col-lg-9">
                                        <input className="" type="text" />
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label">
                                        Edit paragraph
                                      </label>
                                      <div className="col-lg-9">
                                        <textarea
                                          className="form-control"
                                          rows="5"
                                        />
                                      </div>
                                    </div>

                                    <div className="form-group row">
                                      <label className="col-lg-3 col-form-label form-control-label"></label>
                                      <div className="col-lg-9">
                                        <input
                                          type="reset"
                                          className="btn btn-danger mr-1 m-2"
                                          value="Cancel"
                                        />
                                        <input
                                          type="button"
                                          className="btn btn-success"
                                          value="Save Changes"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </Tab.Pane>

                              {/* end edit about us page */}
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </div>
                  </Collapse>
                </>
              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeProfilePicture: (image) => dispatch(changeProfilePicture(image)),
    editStoreProfile: (store) => dispatch(editStoreProfile(store)),
    AdvertA: (advert) => dispatch(AdvertA(advert)),
    AdvertB: (advert) => dispatch(AdvertB(advert)),
    AdvertC: (advert) => dispatch(AdvertC(advert)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreAccountSettings);
