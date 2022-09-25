import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img
                          src="/images/logo_transparent_bg.png"
                          alt="logo"
                          width={160}
                        />
                      </a>
                    </Link>
                  </div>
                  {/* 
                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget ml-4 pl-5">
                  <h3>Explore</h3>

                  <ul className="list">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#services">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget ml-4">
                  <h3>Quick Links</h3>

                  <ul className="list">
                    <li>
                      <Link href="https://www.linkedin.com/company/devgator">
                        <a>Linkedin</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <p>Copyright &copy; {currentYear} Devgator.</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
