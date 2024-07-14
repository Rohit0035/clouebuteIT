import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";

const WebServices = () => {
  return (
    <>
      <NavbarThree />

      {/* Navigation Bar */}
      <BreadcrumbService title={"Web development"} />

      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> All Service lists
                  </h5>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/ux-service'> UI/UX Design </Link>
                    </li>
                    <li>
                      <Link to='/app-service'> App Development </Link>
                    </li>
                    <li>
                      <Link to='/web-service'> Web Department </Link>
                    </li>
                    <li>
                      <Link to='/cyber-service'> Cyber Security </Link>
                    </li>
                    <li>
                      <Link to='/digita-service'> Digital Marketing </Link>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/service/ser-web-2.jpg' alt='img' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src='assets/img/service/ser-web.jpg' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      Importance of Developing a Website for Your Business
                    </h4>
                    <p>
                      CloudBytes offers premier website development services, crafting bespoke websites to elevate your online presence. Our adept team specializes in building user-friendly, SEO-optimized, and responsive websites, empowering your business for unparalleled success.
                    </p>
                    <h6> Client-Centric Approach </h6>
                    <p>
                      As a prominent web development firm based in India, CloudBytes caters to a diverse clientele, ranging from startups to corporate giants across various sectors. From conceptualization to execution, we prioritize optimal UX, UI, coding standards, hosting solutions, and more, ensuring your project's success.
                    </p>
                    <h6> Excellence Redefined </h6>
                    <p>
                      Our forte lies in developing sophisticated web portals with robust features, setting benchmarks in the realm of web development. Whether it's creating new code or revamping existing frameworks, we deliver comprehensive web solutions tailored to your requirements.
                    </p>
                    <h6> Diverse Expertise </h6>
                    <p>
                      CloudBytes stands out as a leading web development company, offering unparalleled expertise in website design and development services. Our proficiency spans across a spectrum of technologies including Vue Js, React, Laravel, Codeigniter, WordPress, HTML5/CSS3, and beyond
                    </p>
                    <h6> Strategic Methodology </h6>
                    <p>
                      Embracing a methodical approach, we begin by comprehensively understanding your brand, objectives, and aspirations. This enables us to devise a tailored strategy, meticulously addressing your needs throughout the development lifecycle.
                    </p>
                    <h6> Our Methodology </h6>
                    <p>
                      Planning and Requirement Analysis<br></br>
                      Design<br></br>
                      Frontend Development<br></br>
                      Testing<br></br>
                      Deployment<br></br>
                      Launch<br></br>
                    </p>
                    <p>
                      Partner with CloudBytes today for exceptional website development solutions tailored to your unique needs.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default WebServices;
