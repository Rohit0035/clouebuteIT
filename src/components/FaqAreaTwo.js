import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FaqAreaTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div className='faq-area pd-bottom-60'>
        <div className='container'>
          <div className='row pd-top-120'>
            <div className='col-xl-5 col-lg-5 col-md-5 order-lg-last'>
              <div className='about-thumb-inner video-thumb'>
                <img
                  className='main-img'
                  src='assets/img/about/15.png'
                  alt='img'
                />
                {/* <span
                  onClick={() => setOpen(true)}
                  className='video-play-btn-hover'
                >
                  <img src='assets/img/video.svg' alt='img' />{" "}
                  <h6 className='d-inline-block'>how we work</h6>
                </span>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='XM6kTQPzzpQ'
                  onClose={() => setOpen(false)}
                /> */}
              </div>
            </div>
            <div className='col-xl-7 col-lg-7 align-self-center'>
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                <h6 className='sub-title'>YOUR ANSWER</h6>
                <h2 className='title'>
                  Have Any <span>Question</span> Please?
                </h2>
              </div>
              <div
                className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                        What services does your software development company provide
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                         Our software development company offers a wide range of services including web 
                         development, mobile app development, custom software solutions, UI/UX design, 
                         and digital marketing services.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                        What industries do you specialize in?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                        We have experience working across various industries including healthcare, finance, education, 
                        e-commerce, and more. Our team is equipped to handle projects in any sector.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                        How do you ensure the quality of your software products?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                         We follow industry best practices such as Agile development methodologies, 
                         continuous integration, and rigorous testing procedures to ensure that our 
                         software products meet the highest quality standards.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingfour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse3'
                      aria-expanded='false'
                      aria-controls='collapse3'
                    >
                        Can you handle both frontend and backend development?
                    </button>
                  </h2>
                  <div
                    id='collapse3'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingfour'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                         Yes, our team of developers is skilled in both frontend and backend 
                         technologies, allowing us to provide comprehensive solutions for our clients.
                    </div>
                  </div>
                </div>


                <div className='accordion-item'>
                  <h2 className='accordion-header' id='head-5'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse5'
                      aria-expanded='false'
                      aria-controls='collapse5'
                    >
                         What digital marketing services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapse5'
                    className='accordion-collapse collapse'
                    aria-labelledby='head-5'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                        We offer a range of digital marketing services including search engine 
                        optimization (SEO), pay-per-click (PPC) advertising, social media marketing, 
                        content marketing, and email marketing.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='head-7'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse7'
                      aria-expanded='false'
                      aria-controls='collapse7'
                    >
                        Can you help with creating content for digital marketing campaigns?
                    </button>
                  </h2>
                  <div
                    id='collapse7'
                    className='accordion-collapse collapse'
                    aria-labelledby='head-7'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                         Yes, our team includes content creators who can help you develop engaging 
                         content for your digital marketing campaigns, including blog posts, articles, 
                         social media posts, and more.
                    </div>
                  </div>
                </div>


                <div className='accordion-item'>
                  <h2 className='accordion-header' id='head-8'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse8'
                      aria-expanded='false'
                      aria-controls='collapse8'
                    >
                          Do you offer ongoing support and maintenance for software products?
                    </button>
                  </h2>
                  <div
                    id='collapse8'
                    className='accordion-collapse collapse'
                    aria-labelledby='head-8'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                       Yes, we offer ongoing support and maintenance services to ensure that your software products continue to perform optimally and remain up-to-date with the latest technologies and security patches.

                    </div>
                  </div>
                </div>


                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaTwo;
