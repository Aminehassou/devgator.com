import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/DefaultHomeTwo/MainBanner";
import Services from "../components/HomePages/DefaultHomeTwo/Services";
import About from "../components/HomePages/DefaultHomeTwo/About";

import ContactForm from "../components/Contact/ContactForm";

import Footer from "../components/Layouts/Footer";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />

        <MainBanner />

        <Services />

        <About />

        <ContactForm />

        <Footer />
      </>
    );
  }
}

export default Index;
