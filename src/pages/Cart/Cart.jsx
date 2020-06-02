import React, { Component } from "react";
import "./Cart.css";
import nike from "../../assets/nike.jpg";

class Cart extends Component {
  render() {
    return (
      <div id="cart">
        <div id="container" className="container">
          <table>
            <tbody>
              <tr className="p">
                <td className="image">
                  <img src={nike} alt="" />
                </td>
                <td className="name">iPod touch</td>
                <td className="price">$299.99</td>
                <td className="amount">
                  <input type="number" defaultValue="1" min="1" />
                </td>
                <td className="pricesubtotal">$299.99</td>
                <td className="remove ">
                  <button className="btn btn-danger fa fa-trash"></button>
                </td>
              </tr>
              <tr className="p">
                <td className="image">
                  <img src={nike} alt="" />
                </td>
                <td className="name">Pack of 5 pens</td>
                <td className="price">$4.99</td>
                <td className="amount">
                  <input type="number" defaultValue="3" min="1" />
                </td>
                <td className="pricesubtotal">$4.99</td>
                <td className="remove">
                  <button className="btn btn-danger fa fa-trash"></button>
                </td>
              </tr>
              <tr className="p">
                <td className="image">
                  <img src={nike} alt="" />
                </td>
                <td className="name">Microsoft Surface</td>
                <td className="price">$599.99</td>
                <td className="amount">
                  <input type="number" defaultValue="1" min="1" />
                </td>
                <td className="pricesubtotal">$599.99</td>
                <td className="remove">
                  <button className="btn btn-danger fa fa-trash"></button>
                </td>
              </tr>
              <tr className="p">
                <td className="image">
                  <img src="http://www.rinogualtieri.it/images/libri1.jpg" />
                </td>
                <td className="name">Books</td>
                <td className="price">$29.99</td>
                <td className="amount">
                  <input type="number" defaultValue="5" min="1" />
                </td>
                <td className="pricesubtotal">$29.99</td>
                <td className="remove">
                  <button className="btn btn-danger fa fa-trash"></button>
                </td>
              </tr>
              <tr className="p">
                <td className="image">
                  <img src="https://image.guim.co.uk/sys-images/Admin/BkFill/Default_image_group/2013/2/19/1361294379900/Cup-cakes-010.jpg" />
                </td>
                <td className="name">Cupcakes</td>
                <td className="price">$0.99</td>
                <td className="amount">
                  <input type="number" defaultValue="20" min="1" />
                </td>
                <td className="pricesubtotal">$0.99</td>
                <td className="remove">
                  <button className="btn btn-danger fa fa-trash"></button>
                </td>
              </tr>

              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>Subtotal:</td>
                <td className="totalpricesubtotal">$1000.99</td>
                <td> </td>
              </tr>
              <tr>
                <td style={{ borderTop: "1px solid black" }} colSpan="6">
                  <br />
                  With 5% sales tax <span className="taxval"></span> and{" "}
                  <span className="shipping">10</span>$ shipping:
                  <br />
                  <span className="big">
                    Total: $<span className="realtotal">0</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="checkout">
            Checkout<span> &rarr;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
