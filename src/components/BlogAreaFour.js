import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BlogAreaFour = () => {
  return (
    <>
      {/*===================== Blog Area Three start =====================*/}
      <div className='blog-area pt-4 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <div className='row justify-content-center'>
              <div className='col-xl-7 col-lg-10'>
                <h6 className='sub-title'>RECENT BLOG</h6>
                <h2 className='title'>
                  Transforming <span>Businesses</span> Through Software
                  Innovation
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img
                    className='border-radius-5'
                    src='assets/img/blog/blog4.jpg'
                    alt='img'
                  />
                </div>
                <div className='details'>
                  <p className='cat'>NEWS</p>
                  <p className='date'>13 April,2024</p>
                  <h5 className='mb-3'>
                    <Link to='/blog'>
                      TechCrunch - Unveiling the Future, One Byte at a Time.
                    </Link>
                  </h5>
                  <Link className='read-more-text' to='/blog'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img
                    className='border-radius-5'
                    src='assets/img/blog/blog3.jpg'
                    alt='img'
                  />
                </div>
                <div className='details'>
                  <p className='cat'>NEWS</p>
                  <p className='date'>22 june, 2023</p>
                  <h5 className='mb-3'>
                    <Link to='/blog'>
                      Unlocking the Power of Progressive Web Apps.
                    </Link>
                  </h5>
                  <Link className='read-more-text' to='/blog'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list'>
                <div className='thumb'>
                  <img
                    className='border-radius-5'
                    src='assets/img/blog/blog2.jpg'
                    alt='img'
                  />
                </div>
                <div className='details'>
                  <p className='cat'>NEWS</p>
                  <p className='date'>20 August,2023</p>
                  <h5 className='mb-3'>
                    <Link to='/blog'>
                      Discovering Tech Wonders with Hacker Noon
                    </Link>
                  </h5>
                  <Link className='read-more-text' to='/blog'>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BlogAreaFour End =====================*/}
    </>
  );
};

export default BlogAreaFour;
