import React, { useContext, useCallback, Component } from "react";
import "./Login.css";
import { withRouter, Redirect, Link } from "react-router-dom";
import firebase from "../../Firebase/Firebase";
import { AuthContext } from "../Auth";
import { signUp } from "../../Redux/Actions/authActions";
import { connect } from "react-redux";
// import NewUser from "./NewUser";

// const Register = ({ history }) => {
//   const handleSignUp = useCallback(
//     async (event) => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await firebase
//           .auth()
//           .createUserWithEmailAndPassword(email.value, password.value);

//         history.push("/newuser");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );

//   const { currentUser } = useContext(AuthContext);

//   if (currentUser) {
//     return <Redirect to="/newuser" />;
//   }

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="login-container animated fadeInDown bootstrap snippets">
          <div className="loginbox bg-white">
            <div className="loginbox-title">SIGN UP</div>
            <div className="loginbox-social">
              <div className="social-title ">
                Connect with Your Social Account
              </div>
              <div className="social-button d-flex justify-content-center">
                <Link to="" className="button-google">
                  <i className="social-icon fa fa-google-plus"></i>
                </Link>
              </div>
            </div>
            <div className="loginbox-or">
              <div className="or-line"></div>
              <div className="or">OR</div>
            </div>
            <form onSubmit={this.handleSignUp}>
              <div className="loginbox-textbox">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="loginbox-textbox">
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="loginbox-textbox">
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="loginbox-textbox">
                <input
                  name="phoneNumber"
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                  onChange={this.handleChange}
                />
              </div>

              <div className="loginbox-textbox">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={this.handleChange}
                />
              </div>
              {/* <div className="loginbox-textbox">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
              </div> */}

              <div className="">{authError ? <p>{authError}</p> : null}</div>

              <div className="loginbox-submit">
                <input
                  type="submit"
                  className="btn btn-outline-danger btn-block"
                  value="Register"
                />
              </div>
            </form>
            <div className="loginbox-signup">
              <p>Already have an account?</p>
              <Link to="/login">Sign In </Link>
            </div>
          </div>
          <div className="logobox"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

// export default withRouter(Register);
export default connect(mapStateToProps, mapDispatchToProps)(Register);
