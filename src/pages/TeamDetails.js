import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import TeamDetailsGroup from "../components/TeamDetailsGroup";
import NavbarThree from "../components/NavbarThree";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team Details"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default TeamDetails;
