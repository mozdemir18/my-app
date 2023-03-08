import React, {useEffect} from 'react';
import Link from 'next/link'
import logo from "../../public/client/assets/images/logo.png";
import { useRouter } from 'next/router'
import Image from 'next/image';



const Footer = (props) => {

    const router = useRouter();

    
  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(router.pathname) >= 0) {
    return "";
  }
  console.log(props.location,"location")
  return (
    <> {  (!router.pathname.includes("/home4") && !router.pathname.includes("/home6") && !router.pathname.includes("/home7") && !router.pathname.includes("/home8")) && 
    <footer className="footer">
    <div className="footer-top aos" data-aos="fade-up">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <Image src={logo} alt="logo" />
              </div>
              <div className="footer-about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="#0">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-dribbble"></i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Patients</h2>
              <ul>
                <li>
                  <Link href="/patient/search-doctor">Search for Doctors</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/patient/booking">Booking</Link>
                </li>
                <li>
                  <Link href="/patient/dashboard">Patient Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Doctors</h2>
              <ul>
                <li>
                  <Link href="/doctor/appointments">Appointments</Link>
                </li>
                <li>
                  <Link href="/doctor/chat-doctor">Chat</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/doctor/doctor-register">Register</Link>
                </li>
                <li>
                  <Link href="/doctor/doctor-dashboard">Doctor Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-widget footer-contact">
              <h2 className="footer-title">Contact Us</h2>
              <div className="footer-contact-info">
                <div className="footer-address">
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <p>
                    3556 Beech Street, San Francisco,California, CA 94108{" "}
                  </p>
                </div>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  +1 315 369 5943
                </p>
                <p className="mb-0">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  doccure@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container-fluid">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="copyright-text">
                <p className="mb-0">
                  &copy; 2023 IDCP. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li>
                    <Link href="/terms">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    }
    </>
  );
};

export default Footer;
