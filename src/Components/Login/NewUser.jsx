import React from "react";

export default function NewUser() {
  return (
    <div style={{ height: "80vh" }}>
      <div
        className="container"
        style={{
          marginTop: "5rem",
          background: "#fff",
          padding: "30px",
          maxWidth: "500px",
        }}
      >
        <form>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              First Name
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                placeholder="last name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Last Name
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                placeholder="last name"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Phone
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="tel"
                placeholder="+23432378654"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Gender
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                placeholder="Shoes, Computing, Phones and Tablets"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Address
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your address"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label"></label>
            <div className="col-lg-6">
              <input className="form-control" type="text" placeholder="City" />
            </div>
            <div className="col-lg-3">
              <input className="form-control" type="text" placeholder="State" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label"></label>
            <div className="col-lg-9">
              <input
                type="submit"
                className="btn btn-success"
                value="Go to Profile"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
