import React from "react";
import BlogDetailsArea from "../components/BlogDetailsArea";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavbarThree from "../components/NavbarThree";

const BlogDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog Details"} />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default BlogDetails;
