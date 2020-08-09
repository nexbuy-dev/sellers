import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteProduct } from "../../Redux/Actions/storeActions";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteProduct = (id) => {
    this.props.deleteProduct(id);
  };
  render() {
    const products = this.props.products;

    return (
      <div className="">
        <Table hover size="sm" className="mt-3">
          <thead>
            <tr className="text-center">
              <th>Prduct Name</th>
              <th>Price (#)</th>
              <th>Picture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products &&
              products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <img
                        src={`${product.imageUrl}`}
                        alt=""
                        className="img-fluid"
                        style={{ maxHeight: "50px" }}
                      />
                    </td>
                    <td>
                      <button className="btn btn-outline-primary ml-1 mr-2">
                        <i className="fa fa-pencil-square-o "></i>
                      </button>{" "}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => this.onDeleteProduct(product.id)}
                      >
                        <i className="fa fa-trash-o "></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(Products);
