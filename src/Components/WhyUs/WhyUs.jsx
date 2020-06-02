import React from "react";
import "./WhyUs.css";
import img from "../../assets/Capture1.png";

const WhyUs = () => {
  return (
    <div id="why-us" className="container">
      <div className="section-header ">
        <h2>Why Choose Us?</h2>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <img src={img} className="img-fluid"></img>
        </div>
        <div className="col-md-6">
          <ul>
            <li>
              <p>
                At PEDEGOGIC HUB we train, and we develop you into champions
              </p>
            </li>
            <li>
              <p>
                We have got the magic at D-Pedagogic Hub, don't let childern or
                wards be bored in whatever they want to learn, or you would,
                like them to learn
              </p>
            </li>
            <li>
              <p>
                That's not all. Our tutor based approach makes it easy for
                learners to feel like experts from the very begining
              </p>
            </li>
            <li>
              <p>
                Our tutors show passion and consistency, handling all clients
                with great dela of professionalism. Our testimonials speak in
                volumes
              </p>
            </li>
            <li>
              <p>
                At the hub, customer happiness and satisfaction are key. We
                offer other services which include but are not limited to music,
                driving, catering, arts and crafts, linguistics, driving and lot
                of skill acquisition tutoring services and a whole lot. The
                ranges for tutoring are limitles.
                <strong>
                  {" "}
                  Remember, we don't just tutor, we mentor. We don't just care
                  that you get it right; We also care that you know it right{" "}
                </strong>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="row row-eq-height justify-content-center">
        <div className="col-lg-4 mb-4">
          <div className="card">
            <i className="fa fa-diamond"></i>
            <div className="card-body">
              <h5 className="card-title">Quality Assurance</h5>
              <p className="card-text">
                With our expertise, we assure you of quality delivery at
                affordable price.
              </p>
              <a href="/about" className="readmore">
                Read more{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card">
            <i className="fa fa-shield"></i>
            <div className="card-body">
              <h5 className="card-title">Trusted and Secured</h5>
              <p className="card-text">
                We are trusted by several happy parents, professionals and
                students with a satisfaction and success rate of more than 90%.
              </p>
              <a href="/about" className="readmore">
                Read more{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card">
            <i className="fa fa-users"></i>
            <div className="card-body">
              <h5 className="card-title">Excellence</h5>
              <p className="card-text">
                We are diligent and determined to acheive our goals. Thereby,
                producing excellent results accross the globe.{" "}
              </p>
              <a href="/about" className="readmore">
                Read more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
