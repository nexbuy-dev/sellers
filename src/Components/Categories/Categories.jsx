import React, { Component } from "react";
import "./Categories.css";
import img1 from "../../assets/nike.jpg";

export default class Categories extends Component {
  render() {
    return (
      <div id="categories">
        <div className="container ">
          <div className="row ">
            <div className="col-6 col-md-3 col-lg-3 mt-3">
              <div className="card">
                <img
                  src={img1}
                  alt=""
                  style={{ height: "180px" }}
                  className="img-fluid"
                />
                <div className="category-heading p-2">Male Wears</div>
              </div>
            </div>

            <div className="col-6 col-md-3 col-lg-3 mt-3">
              <div className="card">
                <img
                  src={img1}
                  alt=""
                  style={{ height: "180px" }}
                  className="img-fluid"
                />
                <div className="category-heading p-2">Female Wears</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
