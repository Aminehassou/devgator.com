import React, { Component } from "react";
import Link from "next/link";

class OurWorks extends Component {
  render() {
    return (
      <>
        <section className="case-studies-area ptb-100 bg-fcfbfb">
          <div className="container" id="portfolio">
            <div className="section-title">
              <h2>Our Works</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg4 text-center">
                  <div className="content">
                    <span>
                      <a>Web Development</a>
                    </span>
                    <h3>
                      Stuck with to-do list, I created a new app for myself
                    </h3>
                  </div>
                  <div className="shape">
                    <img
                      src="/images/case-studies/studie-shape4.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg5 text-center">
                  <div className="content">
                    <span>
                      <a>Angular Development</a>
                    </span>

                    <h3>Examples of different types of sprints</h3>
                  </div>

                  <div className="shape">
                    <img
                      src="/images/case-studies/studie-shape5.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg6 text-center">
                  <div className="content">
                    <span>
                      <a>Web Design</a>
                    </span>

                    <h3>Redesigning the New York times app</h3>
                  </div>

                  <div className="shape">
                    <img
                      src="/images/case-studies/studie-shape6.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default OurWorks;
