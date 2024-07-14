import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CareerAreaOne = () => {
  return (
    <>
      {/* career area start */}
      <div className='career-section pd-top-60 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  The Power Of <span>Software</span> The Simplicity Of Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className='career-wrap-area'>
            <nav>
              <div
                className='nav nav-tabs career-nav-tab'
                id='nav-tab'
                role='tablist'
              >
                <button
                  className='nav-link active'
                  id='nav-mission-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-mission'
                  type='button'
                  role='tab'
                  aria-controls='nav-mission'
                  aria-selected='true'
                >
                  Mission
                </button>
                <button
                  className='nav-link'
                  id='nav-vision-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-vision'
                  type='button'
                  role='tab'
                  aria-controls='nav-vision'
                  aria-selected='false'
                >
                  Vision
                </button>
                <button
                  className='nav-link'
                  id='nav-solution-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-solution'
                  type='button'
                  role='tab'
                  aria-controls='nav-solution'
                  aria-selected='false'
                >
                  Solutions
                </button>
              </div>
            </nav>
            <div className='tab-content' id='nav-tabContent'>
              <div
                className='tab-pane fade show active'
                id='nav-mission'
                role='tabpanel'
                aria-labelledby='nav-mission-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/about/16.png' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Our Mission </h3>
                      <p className='mb-3'>
                          Our mission is to harness the power of technology to drive innovation, growth, 
                          and success for our clients. We believe that the right technology solutions can 
                          transform businesses and improve lives, and we are dedicated to making this belief 
                          a reality. We stand ready to provide world-class support, addressing the most 
                          pressing business challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-vision'
                role='tabpanel'
                aria-labelledby='nav-vision-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/about/17.png' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Our Vission </h3>
                      <p className='mb-3'>
                         We are your trusted partner in the ever-evolving world of technology. 
                         Established with a commitment to deliver excellence, we specialize in providing cutting-edge 
                         IT services and consulting solutions to empower businesses across the globe.
                      </p>
                      {/* <div className='row'>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-solution'
                role='tabpanel'
                aria-labelledby='nav-solution-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/about/16.png' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>The software development</h3>
                      <p className='mb-3'>
                        A software company is a business that designs, develops,
                        and sells software products to individuals and
                        organizations. These companies use a variety of
                        programming languages and technologies to create custom
                        software solutions for a wide range of industries
                      </p>
                      {/* <div className='row'>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='single-list-inner style-check style-heading style-check mb-3'>
                            <li>
                              <FaCheckCircle /> Mistakes To Avoid to the dum
                            </li>
                            <li>
                              <FaCheckCircle /> Your Startup industry stan
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* career area start */}
    </>
  );
};

export default CareerAreaOne;
