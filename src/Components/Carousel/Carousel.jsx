import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import "../animate.css/animate.css";
import { Link } from "react-scroll";
import img from "../../assets/girl_street_shopping_cape_town_38679_1920x1080.jpg";
import img1 from "../../assets/shopping-smile.jpg";
import img2 from "../../assets/happy-couple-man-woman-with-shopping-bags-isolated_97712-1265.jpg";

class MyCarousel extends Component {
  render() {
    return (
      <div id="Carousel" className="Carousel">
        <div className="row justify-content-center">
          <Carousel>
            <Carousel.Item className="carousel-item">
              <img className="d-block" src={img2} alt="Second slide" />

              <Carousel.Caption className="carousel-content">
                <div className="row">
                  <div className="col-sm-12 animated fadeInDown">
                    <h3 className="animated fadeInDown">First slide label</h3>
                  </div>
                  <div className="col-sm-12 animated fadeInUp">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>{" "}
                    <br />
                    <Link
                      to="special-offers"
                      smooth={true}
                      duration={1000}
                      className="button"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
              <img className="d-block " src={img} alt="First slide" />
              <Carousel.Caption className="carousel-content">
                <div className="row">
                  <div className="col-sm-12 animated fadeInDown">
                    <h3>Second slide label</h3>
                  </div>
                  <div className="col-sm-12 animated fadeInUp">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>{" "}
                    <br />
                    <Link
                      to="special-offers"
                      smooth={true}
                      duration={1000}
                      className="button"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
              <img className="d-block" src={img1} alt="Third slide" />

              <Carousel.Caption className="carousel-content">
                <div className="row">
                  <div className="col-sm-12 animated fadeInDown">
                    <h3>Third slide label</h3>
                  </div>
                  <div className="col-sm-12 animated fadeInUp">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>{" "}
                    <br />
                    <Link
                      to="special-offers"
                      smooth={true}
                      duration={1000}
                      className="button"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MyCarousel;
