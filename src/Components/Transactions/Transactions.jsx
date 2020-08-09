import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Transactions extends Component {
  render() {
    return (
      <div className="Table">
        <Table responsive>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Type</th>
              <th>Date</th>
              <th>Amount (#)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
