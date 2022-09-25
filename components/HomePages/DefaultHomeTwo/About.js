import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class About extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="about-area ptb-100" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>About Us</h2>
                    <p>
                      We are a group of developers with a variety of skills. We
                      want to use our skills to help our clients create projects
                      they're passionate about!
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Our Story</h4>
                    <p>
                      we are a company led by a group of passionate developers
                      that want to create the best products for you. From
                      scalable web development, web design and mobile app
                      development. The solutions we engineer focus on efficiency
                      and customer growth
                    </p>
                    <p>
                      Ever since Devgator's founding in 2010. We made a
                      commitment to our clients to leverage our talents to
                      create the best products we could make.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="banner-animation-image2"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <img
                    src="/images/about-img.png"
                    className="main-pic"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
