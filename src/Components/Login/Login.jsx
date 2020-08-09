import React, { useContext, useCallback } from "react";
import "./Login.css";
import "../animate/animate.css";
import { withRouter, Redirect, Link } from "react-router-dom";
import firebase from "../../Firebase/Firebase";
import { AuthContext } from "../Auth";
import { loginUser } from "../../Redux/Actions/authActions";
import { connect } from "react-redux";

// const Login = ({ props }) => {
// const handleLogin = useCallback(
// async (event) => {
//   event.preventDefault();
//   const { email, password } = event.target.elements;
//   try {
//     // await firebase
//     //   .auth()
//     //   .signInWithEmailAndPassword(email.value, password.value);

//     // history.push("/profile");
//   } catch (error) {
//     alert(error);
//   }
// }
// [history]
// );

// const { currentUser } = useContext(AuthContext);

// if (currentUser) {
//   // service.auth().currentUser.getIdToken();

//   console.log(firebase.auth().currentUser.getIdToken());
//   return <Redirect to="/profile" />;
// }

// const { currentUser } = useContext(AuthContext);

// if (currentUser) {
//   <Redirect to="/profile" />;
// }

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // static contextType = AuthContext;

  // componentDidMount;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    console.log(this.state.password);
    e.preventDefault();
    this.props.loginUser(this.state);
    // if (!this.props.authError === null) {
    this.props.history.push("/");
  };
  // [history];

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to="/profile" />;
    }

    return (
      <div id="login">
        <div className="login-container animated fadeInDown bootstrap snippets">
          <div className="loginbox bg-white">
            <div className="loginbox-title">SIGN IN</div>
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
            <form onSubmit={this.handleLogin}>
              <div className="loginbox-textbox">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
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

              <div className="">{authError ? <p>{authError}</p> : null}</div>

              <div className="loginbox-submit">
                <input
                  type="submit"
                  className="btn btn-outline-danger btn-block"
                  value="Login"
                />
              </div>
            </form>
            <div className="loginbox-signup">
              <p>New user?</p>
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
          <div className="logobox"></div>
        </div>
      </div>
    );
  }
}

// export default withRouter(Login);

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (creds) => dispatch(loginUser(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
