import React from "react";

const Products = ({ product }) => {
  return (
    // <div className="col-6 col-md-3 col-lg-2 mt-3">
    <div className="card">
      <img
        src={`${product.imageUrl}`}
        alt=""
        style={{ height: "160px" }}
        className="img-fluid category-img card-img-top"
      />

      <div className="category-heading p-2" style={{ fontSize: "0.8rem" }}>
        <strong>{product.name} </strong> <br />₦{product.price}
      </div>
    </div>
    // </div>
  );
};

export default Products;
