import React, { Component } from "react";
import { Table } from "react-bootstrap";
import img from "../../assets/nike.jpg";

export default class UserOrders extends Component {
  render() {
    return (
      <div>
        <div className="">
          <Table hover size="sm" className="mt-3">
            <thead>
              <tr className="text-center">
                <th>Prduct Name</th>
                <th>Price (#)</th>
                <th>Picture</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>Nike Airmax</td>
                <td>20,000</td>
                <td>
                  <img
                    src={img}
                    alt=""
                    className="img-fluid"
                    style={{ maxHeight: "50px" }}
                  />
                </td>
                <td>3 pcs</td>
              </tr>
              <tr>
                <td>Adidas</td>
                <td>15,000</td>
                <td>
                  <img
                    src={img}
                    alt=""
                    className="img-fluid"
                    style={{ maxHeight: "50px" }}
                  />
                </td>
                <td>10 pcs</td>
              </tr>
              <tr>
                <td>Gucci</td>
                <td>12,000</td>
                <td>
                  <img
                    src={img}
                    alt=""
                    className="img-fluid"
                    style={{ maxHeight: "50px" }}
                  />
                </td>
                <td>2 pcs</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
