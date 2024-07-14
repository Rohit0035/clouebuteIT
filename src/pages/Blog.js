import React from "react";
import BlogGroup from "../components/BlogGroup";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavbarThree from "../components/NavbarThree";

const Blog = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog"} />

      {/* Blog Group */}
      <BlogGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Blog;
