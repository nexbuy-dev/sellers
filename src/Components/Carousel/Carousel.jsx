import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MyCarousel extends Component {
  render() {
    const adverts = this.props.adverts;

    return (
      <div id="carousel" className="carousel">
        <div className="row justify-content-center">
          <Carousel>
            {adverts &&
              adverts.map((advert) => {
                return (
                  <Carousel.Item className="carousel-item" key={advert.id}>
                    <img
                      className="d-block"
                      src={`${advert.imageUrl}`}
                      alt="slide show"
                    />
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state.firestore.ordered.adverts,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "adverts" }])
)(MyCarousel);
