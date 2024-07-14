import React from "react";
import {
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogGroup = () => {
  return (
    <>
      {/* =============== Blog Group start ===============*/}
      <div className='blog-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                <img src='assets/img/blog/blog-detail-1.jpg' alt='img' style={{ width: '100%' }} />
                </div>
                <div className='details'>
                  <h4 className='title'>
                    TechCrunch - Unveiling the Future, One Byte at a Time.
                  </h4>
                  <p>
                    In today's fast-paced tech world, software development is the engine driving innovation forward. TechCrunch is your go-to source for staying in the loop on all the latest trends, breakthroughs, and insights shaping the software landscape.
                  </p>
                </div>
                <div>
                  <h4>
                    Embracing Innovation:
                  </h4>
                  <p>
                    At TechCrunch, we're all about celebrating innovation. From AI-powered apps to blockchain transforming finance, we spotlight the coolest projects and visionary leaders making waves. With interviews, analyses, and coverage, we give you a front-row seat to the tech revolution.
                  </p>
                </div>
                <div>
                  <h4>
                    Exploring Emerging Tech:
                  </h4>
                  <p>
                    The software world is always changing, and we're here to explore it all. Whether it's low-code platforms speeding up app creation or AR changing how we experience products, our expert team dives deep into the trends. Stay ahead of the curve with our insights.
                  </p>
                </div>
                <div>
                  <h4>
                    Navigating Industry Trends:
                  </h4>
                  <p>
                    In a field as dynamic as software development, knowledge is power. TechCrunch keeps you informed with deep dives into industry trends. From cybersecurity to cloud-native systems, we've got you covered, empowering you to navigate the tech landscape.
                  </p>
                </div>
                <div>
                  <h4>
                    Fostering Community:
                  </h4>
                  <p>
                    TechCrunch isn't just about news—it's about community. Join the conversation in our comments, at live events, and through networking opportunities. We're all about connecting developers, entrepreneurs, and experts to spark ideas and drive innovation.
                  </p>
                </div>
                <div>
                  <h4>
                    Looking Ahead:
                  </h4>
                  <p>
                    The future of software development is bright, and we're here for the ride. From startups to industry giants, TechCrunch is your guide to what's next in tech. Join us as we uncover the limitless possibilities of tomorrow's technology landscape.
                  </p>
                </div>
              </div>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/blog-detail-2.jpg' alt='img' style={{ width: '100%' }}  />
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Title: Unlocking the Power of Progressive Web Apps: Crafting Seamless and Speedy Web Journeys
                  </h4>
                  <p>
                    In today's bustling digital landscape, the user experience reigns supreme. With people increasingly relying on the web for information, entertainment, and shopping, there's a pressing need for swift, dependable, and captivating online experiences. Enter Progressive Web Apps (PWAs) – a groundbreaking innovation in web development that blurs the lines between native mobile apps and traditional websites. In this piece, let's delve into the rise of PWAs and their transformative impact on our online interactions.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    What exactly are Progressive Web Apps?                  
                  </h4>
                  <p>
                    Progressive Web Apps are advanced web applications that harness cutting-edge web technologies to offer users an app-like experience directly within their web browsers. Crafted using HTML, CSS, and JavaScript, PWAs boast responsive designs, seamless animations, and offline capabilities, ensuring accessibility across various devices and network conditions.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    The Perks of Embracing PWAs
                  </h4>
                  <p>
                    <strong>Enhanced Performance: </strong> PWAs are celebrated for their lightning-fast loading speeds and smooth navigation, thanks to smart techniques like lazy loading and caching.<br></br>
                    <strong> Offline Functionality: </strong> A standout feature of PWAs is their ability to function offline or in low-connectivity scenarios, ensuring uninterrupted access to content.<br></br>
                    <strong>Engaging User Experience: </strong> With features like push notifications and home screen installation, PWAs deliver a seamless and immersive user experience akin to native mobile apps.<br></br>
                    <strong>Cross-Platform Compatibility: </strong> PWAs are platform-agnostic, meaning they can run smoothly on any device or operating system with a modern web browser, eliminating the need for separate development efforts for different platforms.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Crafting a PWA: Essential Elements
                  </h4>
                  <p>
                    <strong> Service Workers: </strong> These background scripts empower PWAs to cache assets and data, enabling them to function offline and deliver a dependable user experience.<br></br>
                    <strong> Web App Manifest: </strong> This JSON file provides vital metadata about the application, such as its name, icons, and theme colors, facilitating user-friendly home screen additions.<br></br>
                    <strong> Responsive Design: </strong> PWAs are meticulously designed with a mobile-first approach, ensuring seamless performance across devices of all shapes and sizes. <br></br>
                    <strong> HTTPS: </strong> To ensure security and enable service worker functionality, PWAs must be served over HTTPS.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Real-World Success Stories
                  </h4>
                  <p>
                    <strong> Twitter Lite: </strong> Twitter's PWA offers a swift and responsive experience, even on sluggish networks, featuring push notifications and offline support.<br></br>
                    <strong> Starbucks: </strong> The Starbucks PWA enables users to peruse menus, customize orders, and find nearby stores, all within a seamless and captivating experience.<br></br>
                    <strong> Flipkart: </strong> India's leading e-commerce platform witnessed a substantial boost in user engagement and conversions post the launch of its PWA, boasting rapid load times and intuitive navigation. <br></br>
                  </p>
                  <p>
                  In Conclusion
                        Progressive Web Apps signify the future of web development, blending the expansive reach and accessibility of the web with the performance and allure of native mobile apps. By embracing PWAs, developers can deliver swift, dependable, and captivating web experiences that enchant users and drive business growth. As the demand for mobile-centric solutions continues to soar, PWAs are poised to take center stage in shaping the future of the web.
                  </p>
                </div>
              </div>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/blog-detail-3.jpg' alt='img' style={{ width: '100%' }}  />
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Title: Discovering Tech Wonders with Hacker Noon
                  </h4>
                  <p>
                    Welcome to Hacker Noon, your friendly guide in the vast world of technology! We're here to make tech accessible and exciting for everyone, whether you're a seasoned pro or just starting out. Join us on a journey through the latest trends, innovations, and ideas shaping the future of tech.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    A Place for Everyone:
                  </h4>
                  <p>
                    At Hacker Noon, we believe in the power of curiosity. Whether you're a developer, entrepreneur, or simply curious about technology, our platform has something for you. Dive into our diverse range of articles, tutorials, and interviews covering everything from blockchain to cybersecurity, and beyond.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Celebrating Innovation:
                  </h4>
                  <p>
                    Innovation is at the heart of what we do. From groundbreaking startups to open-source projects, we celebrate the visionaries and trailblazers shaping the future. Join us in recognizing and applauding those who are pushing the boundaries of what's possible.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Connecting the Tech Community:
                  </h4>
                  <p>
                    Tech knows no borders, and neither do we. Hacker Noon brings together people from all backgrounds and expertise levels, fostering collaboration and knowledge sharing. Whether you're a newbie coder or a seasoned pro, you'll find a welcoming community and plenty of resources to support you on your journey.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Guiding You Through Tech Trends:
                  </h4>
                  <p>
                    With technology evolving rapidly, it's crucial to stay informed. Hacker Noon is your trusted companion, offering insights and analysis on the latest trends and developments. From AI advancements to ethical dilemmas, we'll help you navigate the ever-changing tech landscape.
                  </p>
                </div>
                <div className='details'>
                  <h4 className='title'>
                    Come Along for the Ride:
                  </h4>
                  <p>
                    The future of tech is waiting to be discovered, and we want you to be part of it. Whether you're a tech enthusiast or just curious about what's next, Hacker Noon is your ticket to exploring the wonders of technology. Let's embark on this adventure together!
                  </p>
                  <p>
                    Hacker Noon – Where Curiosity Meets Innovation.
                  </p>
                </div>
              </div>
              {/* <div className='pagination'>
                <a className='prev page-numbers' href='http://icare.local/'>
                  <FaAngleLeft />
                </a>
                <a className='page-numbers' href='http://icare.local/'>
                  1
                </a>
                <span className='page-numbers current'>2</span>
                <a className='page-numbers' href='http://icare.local/page/3/'>
                  3
                </a>
                <a className='page-numbers' href='http://icare.local/page/4/'>
                  4
                </a>
                <a
                  className='next page-numbers'
                  href='http://icare.local/page/3/'
                >
                  <FaAngleRight />
                </a>
              </div> */}
            </div>
            {/* <div className='col-lg-4 col-12'>
              <div className='td-sidebar'>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/7.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5>Leslie Alexander</h5>
                    <h6>(480) 555-0103</h6>
                    <ul className='social-media'>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget widget_search'>
                  <form className='search-form'>
                    <div className='form-group'>
                      <input type='text' placeholder='Key word' />
                    </div>
                    <button className='submit-btn' type='submit'>
                      <FaChevronRight />
                    </button>
                  </form>
                </div>
                <div className='widget widget-recent-post'>
                  <h4 className='widget-title'>Recent News</h4>
                  <ul>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/1.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <Link to='/blog-details'>
                              Empowering future with solar.
                            </Link>
                          </h6>
                          <div className='post-info'>
                            <FaCalendarAlt />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/2.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <Link to='blog-details'>
                              Marketing For Base market watch
                            </Link>
                          </h6>
                          <div className='post-info'>
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='media'>
                        <div className='media-left'>
                          <img src='assets/img/widget/3.png' alt='blog' />
                        </div>
                        <div className='media-body align-self-center'>
                          <h6 className='title'>
                            <Link to='/blog-details'>
                              Condtum Integer urna at faucibus
                            </Link>
                          </h6>
                          <div className='post-info'>
                            <FaCalendarAlt />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* =============== Blog Group End ===============*/}
    </>
  );
};

export default BlogGroup;
