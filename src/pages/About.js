import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import WorkProcessOne from "../components/WorkProcessOne";
import NavbarThree from "../components/NavbarThree";

const About = () => {
  return (
    <>
      {/* <NavBar /> */}
      <NavbarThree/>

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
