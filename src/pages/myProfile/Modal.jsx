import React from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            ADD PRODUCT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="4"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <input type="checkbox" id="checkbox" className="mr-2" />
              <label htmlFor="checkbox">
                Local brand? (items that are hand made)
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="Price"
                id="price"
                placeholder="Item price"
                data-msg="Please enter a item price"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="category"
                id="category"
                placeholder="Category"
                data-msg="Please enter the category"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subcategory"
                id="subcategory"
                placeholder="Sub-Category"
                data-msg="Please enter the category"
                required
              />
            </div>
            <div className="form-group mt-5">
              <h5>Variant, Sizes and Colors</h5>
              <p>Different variants, sizes and colours in stock</p>
              <p>
                If you don't want to specify different variants of this item in
                store, please check the box below
              </p>
              <input type="checkbox" id="novariant" className="mr-2" />
              <label htmlFor="novariant">No Variants</label>
            </div>
            <div className=" form-group ">
              <button
                type="submit"
                title="Add product"
                className="btn btn-outline-success"
              >
                Add Product
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} className="btn btn-danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddModal;
