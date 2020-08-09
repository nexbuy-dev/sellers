import React from "react";
import { Modal, Button } from "react-bootstrap";
import { addproduct } from "../../Redux/Actions/storeActions";
import { connect } from "react-redux";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      category: "",
      subcategory: "",
      sizes: "",
      colors: "",
      quantity: "",
      image: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  handleFileChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const product = this.state;
    const store = this.props.user;
    this.props.addproduct({ product, store });
    document.getElementById("addproduct").reset();
  };

  render() {
    return (
      <div className="">
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
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
            <form action="" onSubmit={this.onSubmit} id="addproduct">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  name="description"
                  rows="4"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Description"
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="Item price"
                  data-msg="Please enter a item price"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-group mt-5">
                <h5>Variant, Sizes and Colors</h5>
                <p>Different variants, sizes and colours in stock</p>
                <p>
                  If you don't want to specify different variants of this item
                  in store, please check the box below
                </p>
                <input
                  type="checkbox"
                  id="novariant"
                  className="novariant mr-2"
                />
                <label htmlFor="novariant">No Variants</label>
              </div>
              <div className="variants">
                <div className="form-group">
                  <label htmlFor="size">Availble sizes</label>
                  <input
                    type="text"
                    id="size"
                    name="sizes"
                    placeholder="38, 41-45"
                    className="col-6 form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="colour">Availble colours</label>
                  <input
                    type="text"
                    id="colour"
                    name="colors"
                    placeholder="white, black"
                    className="col-6 form-control"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Total quantities in stock"
                  className="form-control mt-5"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <h5>Item Image</h5>
                <p>please add a clear image of the item</p>
                <input type="file" onChange={this.handleFileChange} required />
              </div>
              <div className=" form-group ">
                <button
                  type="submit"
                  title="Add product"
                  className="btn btn-outline-danger"
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addproduct: (product) => dispatch(addproduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
