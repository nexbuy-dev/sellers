import React from "react";
import "./Scroll.css";
import { Link } from "react-scroll";

const Scroll = () => {
  return (
    <div className="backToTop">
      <Link
        to="navbar"
        smooth={true}
        duration={1000}
        style={{ cursor: "pointer" }}
      >
        <i className="fa fa-chevron-up"></i>
      </Link>
    </div>
  );
};

export default Scroll;
