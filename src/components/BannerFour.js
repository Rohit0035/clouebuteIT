import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerFour = () => {
  return (
    <>
      {/* ================== BannerFour Start ==================*/}
      <div className='banner-area bg-relative banner-area-3'>
        <div className=''>
          <div className='bg-gray'>
            <img
              className='img-right'
              src='assets/img/banner-4/1.png'
              alt='img'
            />
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7 align-self-center'>
                  <div className='banner-inner'>
                    <h6
                      className='subtitle '
                      data-aos='fade-right'
                      data-aos-delay='100'
                      data-aos-duration='1500'
                    >
                      WELCOME TO CLOUEBYTES
                    </h6>
                    <h2
                      className='title '
                      data-aos='fade-right'
                      data-aos-delay='250'
                      data-aos-duration='1500'
                    >
                     
                     Elevate Your Business with  <span>CLOUEBYTES</span>
                    </h2>
                    <Link
                      className='mt-3 btn btn-border-base'
                      data-aos='fade-right'
                      data-aos-delay='400'
                      data-aos-duration='1500'
                      to='/contact'
                    >
                      Contact Us<FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFour End ==================*/}
    </>
  );
};

export default BannerFour;
