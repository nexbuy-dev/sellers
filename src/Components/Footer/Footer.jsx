import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container mt-5">
          <div className="copyright">
            &copy; Copyright <strong>Nexbuy District</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
