import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterOne from "../components/FooterOne";
import NavbarThree from "../components/NavbarThree";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;
