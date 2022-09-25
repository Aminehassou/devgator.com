import React, { Component } from "react";

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        <div className="main-banner main-banner2 item-bg1">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <span>DevGator Software Agency</span>
                      <h1>We build custom software for your needs</h1>
                      <p>
                        We are a team of developers that work on and create
                        digital software. We are passionate about building great
                        and functional software for our clients.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="banner-animation-image2"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <img
                        src="/images/banner-img3.png"
                        className="main-pic"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainBanner;
