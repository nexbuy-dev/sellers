import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onDeleteProduct } = this.props;

    return (
      <div>
        <Table hover size="sm" className="mt-3">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Prduct Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-outline-primary ml-1 mr-2">
                  <i className="fa fa-pencil-square-o mr-1"></i>edit
                </button>{" "}
                <button
                  className="btn btn-outline-danger"
                  onClick={onDeleteProduct}
                >
                  <i className="fa fa-trash-o mr-1"></i>delete
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button className="btn btn-outline-primary ml-1 mr-2">
                  <i className="fa fa-pencil-square-o mr-1"></i>edit
                </button>{" "}
                <button
                  className="btn btn-outline-danger"
                  onClick={onDeleteProduct}
                >
                  <i className="fa fa-trash-o mr-1"></i>delete
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Ratt</td>
              <td>@twitter</td>
              <td>
                <button className="btn btn-outline-primary ml-1 mr-2">
                  <i className="fa fa-pencil-square-o mr-1"></i>edit
                </button>{" "}
                <button
                  className="btn btn-outline-danger"
                  onClick={onDeleteProduct}
                >
                  <i className="fa fa-trash-o mr-1"></i>delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Products;
