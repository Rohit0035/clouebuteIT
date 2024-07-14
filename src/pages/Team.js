import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import TeamAreaGroup from "../components/TeamAreaGroup";
import NavbarThree from "../components/NavbarThree";

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team"} />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Team;
