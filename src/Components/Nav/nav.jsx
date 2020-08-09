import React from "react";
import Navbar from "./Navbar";
import StoreNav from "./StoreNav";
import UserNav from "./UserNav";
import { connect } from "react-redux";

const Nav = (props) => {
  const { auth } = props;

  console.log(auth);

  //checks if the user is logged in
  const links = auth.uid ? <StoreNav /> : <Navbar />;

  return (
    <div>
      {/* <Navbar /> */}
      {links}
      {/* <UserNav /> */}
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStatetoProps)(Nav);
