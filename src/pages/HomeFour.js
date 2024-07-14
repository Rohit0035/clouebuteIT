import React from "react";
import AboutAreaFour from "../components/AboutAreaFour";
import BannerThree from "../components/BannerThree";
import BlogAreaFour from "../components/BlogAreaFour";
import BrandAreaOne from "../components/BrandAreaOne";
import CareerAreaOne from "../components/CareerAreaOne";
import CounterAreaFour from "../components/CounterAreaFour";
import FaqAreaTwo from "../components/FaqAreaTwo";
import NavbarThree from "../components/NavbarThree";
import ProjectAreaOne from "../components/ProjectAreaOne";
import TestimonialThree from "../components/TestimonialThree";
import ServiceAreaFive from "../components/ServiceAreaFive";
import FooterOne from "../components/FooterOne";

const HomeFour = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Banner Four */}
      <BannerThree />

      {/* About Area Four */}
      <AboutAreaFour />

      {/* Service  ServiceAreaFive */}
      <ServiceAreaFive/>


      {/* FAQ Area Two */}
      <FaqAreaTwo />

      {/* Career Area One */}
      <CareerAreaOne />

      {/* Project Area One */}
      <ProjectAreaOne />

      {/* Testimonial Three */}
      <TestimonialThree />

      {/* Counter Area Four */}
      <CounterAreaFour />

      {/* Blog Area Four */}
      <BlogAreaFour />

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Footer one */}
      <FooterOne />
    </>
  );
};

export default HomeFour;
