import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";

class Error extends Component {
  render() {
    return (
      <>
        <Navbar />

        <ErrorContent />

        <Footer />
      </>
    );
  }
}

export default Error;
