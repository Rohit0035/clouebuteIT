import React from "react";
import FooterOne from "../../components/FooterOne";
import NavbarThree from "../../components/NavbarThree";
import {
    FaArrowRight,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
import BreadcrumbService from "../../components/BreadcrumbService";

const CyberService = () => {
  return (
    <>
      <NavbarThree/>

      {/* Navigation Bar */}
      <BreadcrumbService title={"Cyber Security"} />

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
                    <img src='assets/img/service/ser-cyber-2.jpg' alt='img' />
                  </div>
                 
                </div>
               
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src='assets/img/service/ser-cyber.jpg' alt='img' />
                  </div>
                  <div className='details'>
                  <div className="mt-2">
                      
                      </div>
                    <h4>
                      Welcome to CloudBytes Cyber Security Services                    
                    </h4>
                    <p>
                      In today's digital age, safeguarding your business from cyber threats is paramount. At CloudBytes, we offer comprehensive cyber security solutions tailored to protect your organization's valuable assets and sensitive data. With our expert team of security professionals, cutting-edge technology, and proactive approach, we provide robust defense against evolving cyber threats. Explore our range of cyber security services below:
                    </p>
                    <p>
                      Vulnerability Assessment and Penetration Testing (VAPT): <br></br>
                      Identify and remediate security vulnerabilities before they are exploited by malicious actors. Our VAPT services include thorough assessments and simulated attacks to uncover weaknesses in your systems and infrastructure.
                    </p>
                    <h6> Managed Security Services (MSS): </h6>
                    <p>
                      Managed Security Services (MSS): <br></br>
                      Gain peace of mind with our round-the-clock managed security services. From threat detection and incident response to security monitoring and patch management, we'll keep your systems secure and resilient against cyber attacks.
                    </p>
                    <h6> Endpoint Security: </h6>
                    <p>
                      Protect your endpoints from malware, ransomware, and other cyber threats with our advanced endpoint security solutions. We deploy industry-leading antivirus software, intrusion detection systems, and endpoint encryption to fortify your devices and networks.
                    </p>
                    <h6> Network Security: </h6>
                    <p>
                      Secure your network infrastructure against unauthorized access, data breaches, and network-based attacks. Our network security services include firewall deployment, intrusion prevention systems (IPS), and secure VPN solutions to safeguard your data in transit.
                    </p>
                    <h6> Security Awareness Training: </h6>
                    <p>
                      Empower your employees to become the first line of defense against cyber threats. Our interactive security awareness training programs educate staff on best practices for recognizing and mitigating security risks, ensuring a culture of security throughout your organization.
                    </p>
                    <h6> Compliance and Regulatory Support: </h6>
                    <p>
                      Navigate complex regulatory requirements and industry standards with confidence. Our cyber security experts provide guidance and assistance to ensure your organization remains compliant with regulations such as GDPR, HIPAA, PCI DSS, and more.
                    </p>
                    <h6> Incident Response and Forensics: </h6>
                    <p>
                      Minimize the impact of security incidents with our rapid incident response and forensic analysis services. Our team will investigate security breaches, contain threats, and provide actionable recommendations to prevent future incidents.
                    </p>
                    <p>
                      Partner with CloudBytes to fortify your defenses and stay ahead of cyber threats. Contact us today to learn how we can tailor our cyber security services to meet your organization's specific needs and objectives.
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

export default CyberService;
