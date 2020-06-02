import React from "react";
import "./Home.css";
import Typical from "react-typical";

import Scroll from "../../Components/Scroll/Scroll";
import MyCarousel from "../../Components/Carousel/Carousel";

import img from "../../assets/adidas.jpg";
import img1 from "../../assets/nike.jpg";
import img2 from "../../assets/suit1.jpg";
import Footer from "../../Components/Footer/Footer";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyCarousel />
        <div className="special-offers mt-4 container " id="special-offers">
          <h3 className="bg-light">Special Offers</h3>

          <div className="blog">
            <div className=" ">
              <div className="row justify-content-center">
                <div className="col-lg-10 entries row  ">
                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img2} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Louis Vouitton
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦7,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Adidas
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦15,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="male-wears mt-4 container" id="male-wears">
          <h3 className="bg-light">Male Wears</h3>

          <div className="blog">
            <div className=" ">
              <div className="row justify-content-center">
                <div className="col-lg-10 entries row  ">
                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img2} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Louis Vouitton
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦7,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-4 col-lg-3  col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Adidas
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦15,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img2} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Louis Vouitton
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦7,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Adidas
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦15,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="female-wears mt-4 container" id="female-wears">
          <h3 className="bg-light">Female Wears</h3>

          <div className="blog">
            <div className="container ">
              <div className="row justify-content-center">
                <div className="col-lg-10 entries row  ">
                  <div className=" col-md-4 col-lg-3  col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img2} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Louis Vouitton
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦7,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Adidas
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦15,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img2} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Louis Vouitton
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦7,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Adidas
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦15,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sneakers mt-4 container" id="sneakers">
          <h3 className="bg-light">Sneakers</h3>

          <div className="blog">
            <div className="container ">
              <div className="row justify-content-center">
                <div className="col-lg-10 entries row  ">
                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img2} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Louis Vouitton
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦7,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Adidas
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦15,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img2} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Louis Vouitton
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦7,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img} alt="" className="img-fluid" />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          {" "}
                          Adidas
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦15,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className=" col-md-4 col-lg-3 col-xs-6 col-sm-6 d-flex align-items-stretch">
                    <article className="entry">
                      <div className="entry-img">
                        <img src={img1} alt="" className="img-fluid " />
                      </div>

                      <h2 className="entry-title">
                        <a href="#" target="_blank">
                          Nike Airforce
                        </a>
                      </h2>

                      <div className="entry-content">
                        <div className="description">
                          <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                        <div className="price">
                          <a href="#" target="_blank">
                            ₦12,000
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Scroll />
        <Footer />
      </div>
    );
  }
}

export default Home;
