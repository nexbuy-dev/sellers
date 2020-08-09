import React from "react";
import "./Home.css";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
//components
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import Scroll from "../../Components/Scroll/Scroll";
import MyCarousel from "../../Components/Carousel/Carousel";
//redux
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const products = this.props.products;

    return (
      <div>
        <MyCarousel />

        <div className="homeTab">
          <Tabs defaultActiveKey="latest" id="uncontrolled-tab-example">
            <Tab eventKey="latest" title="LATEST PRODUCTS">
              <div id="latest">
                <div>
                  <div className="container d-flex justify-content-center">
                    <div className="row">
                      {products &&
                        products.map((product) => {
                          return (
                            <Link
                              to={"/product/" + product.id}
                              key={product.id}
                              className="col-6 col-md-3 col-lg-2 mt-3"
                            >
                              <Products product={product} />
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="categories" title="CATEGORIES">
              <Categories />
            </Tab>
          </Tabs>
        </div>

        <Scroll />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(Home);
