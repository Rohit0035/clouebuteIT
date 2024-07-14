import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>Our Best Service</h6>
                <h2 className='title'>
                  The Potential Of Business With CLOUEBYTES
                </h2>
              </div>
            </div>
          </div>
          <div className='row custom-no-gutter'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-left st-relative' >
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/7.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/ux-service'>UI/UX Design</Link>
                  </h5>
                  <p className='mb-0'>
                     Clouebytes, we specialize in crafting exceptional UI and UX
                     designs that elevate your digital presence across various 
                     channels.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/8.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/web-service'>Web development</Link>
                  </h5>
                  <p className='mb-0'>
                    CloudBytes offers premier website development services, 
                    crafting bespoke websites to elevate your online 
                    presence.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left mb-0 st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/9.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/app-service'>App Development</Link>
                  </h5>
                  <p className='mb-0'>
                    CloudBytes specializes in developing cutting-edge 
                    and interactive mobile applications, unlocking 
                    numerous business opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 bg-blue-right d-lg-inline-block'>
              <div className='animate-img-2 top_image_bounce service-thumb service-middle-section align-self-end'>
                <img src='assets/img/about/22.png' alt='img' />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-right st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/10.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/cyber-service'>Cyber Security</Link>
                  </h5>
                  <p className='mb-0'>
                    n today's digital age, safeguarding your business from cyber
                     threats is paramount. At CloudBytes, we offer comprehensive 
                     cyber.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right st-relative'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/11.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/digita-service'>Digital Marketing</Link>
                  </h5>
                  <p className='mb-0'>
                    At CloudBytes, we're dedicated to catapulting your digital 
                    presence to new heights. With our cutting-edge digital
                    marketing strategies.
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right st-relative mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/12.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to='/solution-service'>Solutions</Link>
                  </h5>
                  <p className='mb-0'>
                    If you're seeking IT company software solution services, 
                    there are a variety of options available depending on your 
                    specific needs. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
