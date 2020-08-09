import React from "react";
import { Modal, Button } from "react-bootstrap";
import { editStoreProfile } from "../../Redux/Actions/storeActions";
import { connect } from "react-redux";

class EditProfile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    instagram: "",
    twitter: "",
    address: "",
    city: "",
    state: "",
  };

  //Handles Input Changes
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  handleProfileUpdate = (e) => {
    e.preventDefault();
    const store = this.state;
    const user = this.props.user;
    console.log(store);
    this.props.editStoreProfile({ store, user });

    document.getElementById("updateProfile").reset();
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            EDIT PROFILE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleProfileUpdate} id="updateProfile">
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                First Name
              </label>
              <div className="col-lg-9">
                <input
                  name="firstName"
                  className="form-control"
                  type="text"
                  placeholder="Nexbuy"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Last Name
              </label>
              <div className="col-lg-9">
                <input
                  name="lastName"
                  className="form-control"
                  type="text"
                  placeholder=" District"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Phone
              </label>
              <div className="col-lg-9">
                <input
                  name="phone"
                  className="form-control"
                  type="text"
                  placeholder="+23432378654"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Instagram
              </label>
              <div className="col-lg-9">
                <input
                  name="instagram"
                  className="form-control"
                  type="text"
                  placeholder="the_nexbuy"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Twitter
              </label>
              <div className="col-lg-9">
                <input
                  name="twitter"
                  className="form-control"
                  type="text"
                  placeholder="the_nexbuy"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label">
                Address
              </label>
              <div className="col-lg-9">
                <input
                  name="address"
                  className="form-control"
                  type="text"
                  placeholder="Enter your address"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label"></label>
              <div className="col-lg-6">
                <input
                  name="city"
                  className="form-control"
                  type="text"
                  placeholder="City"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-lg-3">
                <input
                  name="state"
                  className="form-control"
                  type="text"
                  placeholder="State"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-3 col-form-label form-control-label"></label>
              <div className="col-lg-9">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Save Changes"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} className="btn btn-danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
    editStoreProfile: (store) => dispatch(editStoreProfile(store)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
