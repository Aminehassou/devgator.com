import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <>
        <div className="bg-fcfbfb pt-100 pb-70" id="services">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one center">
                  <i className="pe-7s-comment bg-13c4a1"></i>
                  <h3>
                    <a>Web Design</a>
                  </h3>
                  <p>
                    UI Design, UX Design, Graphic Design, Search Engine
                    Optimization
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one center">
                  <i className="pe-7s-display2 bg-6610f2"></i>
                  <h3>
                    <a>Web Development</a>
                  </h3>
                  <p>Full-stack development, Data Analysis, CMS Development</p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one center">
                  <i className="pe-7s-phone bg-fc3549"></i>
                  <h3>
                    <a>Mobile App Development</a>
                  </h3>
                  <p>
                    IOS/Android App Development, Hybrid App Development, Native
                    App Development,{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
