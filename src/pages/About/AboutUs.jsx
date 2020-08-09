import React, { Component } from "react";
import "./About.css";
import aboutImg from "../../assets/img/about-extra-2.svg";
import aboutImg1 from "../../assets/img/about-img.svg";
import review1 from "../../assets/testimonials-1.jpg";
import review2 from "../../assets/testimonials-2.jpg";
import { Carousel } from "react-bootstrap";
import Scroll from "../../Components/Scroll/Scroll";

class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="about" className="container">
        <div className="about-header">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="icon-box">
              <div className="icon">
                <i className="fa fa-shopping-bag"></i>
              </div>
              <h4 className="title">
                <span>Eiusmod Tempor</span>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>

            <div className="icon-box" data-delay="0.2s">
              <div className="icon">
                <i className="fa fa-photo"></i>
              </div>
              <h4 className="title">
                <span>Magni Dolores</span>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>

            <div className="icon-box" data-delay="0.4s">
              <div className="icon">
                <i className="fa fa-bar-chart"></i>
              </div>
              <h4 className="title">
                <span>Dolor Sitema</span>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>

          <div className="col-lg-6 background order-lg-2 order-1">
            <img src={aboutImg} className="img-fluid" alt="about" />
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6">
            <img src={aboutImg1} className="img-fluid" alt="about" />
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h4>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h4>
            <p>
              Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
              possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
              Deleniti quod porro sed quisquam saepe. Numquam mollitia
              recusandae non ad at et a.
            </p>
            <p>
              Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
              Odit qui asperiores ea corporis deserunt veritatis quidem expedita
              perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum
              eum eum.
            </p>
            <p>
              Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
              Odit qui asperiores ea corporis deserunt veritatis quidem expedita
              perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum
              eum eum.
            </p>
          </div>
        </div>

        <div className="reviews">
          <div className="about-header">
            <h3>Customer Reviews</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Carousel>
                <Carousel.Item>
                  <div className="review text-center">
                    <p className="stars pt-4">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star muted"></span>
                    </p>

                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eius ea delectus pariatur, numquam aperiam dolore
                        nam optio dolorem facilis itaque voluptatum recusandae
                        deleniti minus animi, provident voluptates consectetur
                        maiores quos.
                      </p>
                    </blockquote>

                    <p className="review-user">
                      <img
                        src={review1}
                        alt="about"
                        className="img-fluid rounded-circle mb-3"
                      />
                      <span className="d-block">
                        <span className="text-black">Jean Doe</span>
                      </span>
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="review text-center">
                    <p className="stars pt-4">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </p>

                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eius ea delectus pariatur, numquam aperiam dolore
                        nam optio dolorem facilis itaque voluptatum recusandae
                        deleniti minus animi, provident voluptates consectetur
                        maiores quos.
                      </p>
                    </blockquote>

                    <p className="review-user">
                      <img
                        src={review2}
                        alt="about"
                        className="img-fluid rounded-circle mb-3"
                      />
                      <span className="d-block">
                        <span className="text-black">Johan Smith</span>
                      </span>
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="review text-center">
                    <p className="stars pt-4">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star muted"></span>
                    </p>

                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eius ea delectus pariatur, numquam aperiam dolore
                        nam optio dolorem facilis itaque voluptatum recusandae
                        deleniti minus animi, provident voluptates consectetur
                        maiores quos.
                      </p>
                    </blockquote>

                    <p className="review-user">
                      <img
                        src={review1}
                        alt="about"
                        className="img-fluid rounded-circle mb-3"
                      />
                      <span className="d-block">
                        <span className="text-black">Jean Thunberg</span>
                      </span>
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <Scroll />
      </div>
    );
  }
}

export default AboutUs;
