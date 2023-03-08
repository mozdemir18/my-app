import React, { useState} from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon

import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../../public/client/assets/images/logo.png";
import pubmedLogo from "../../public/client/assets/images/pubmed.png";
import IMG01 from "../../public/client/assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";
//import config from "config";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from 'next/router'
import Image from 'next/image';
import { useSession, signIn } from 'next-auth/react';

const Header = (props) => {
  const { data: session, status } = useSession();
  
  //mobile menu  
  const [isSideMenu, setSideMenu] = useState("")
  const [isSideMenuone,setSideMenuone] =useState("")
  const [isSideMenutwo,setSideMenutwo] =useState("")
  const toggleSidebar = (value) => {
  console.log (value);
  setSideMenu(value)
  
  }
  const toggleSidebarone = (value) => {
  console.log (value);
  setSideMenuone(value)
  
  }
  const toggleSidebartwo = (value) => {
  console.log (value);
  setSideMenutwo(value)
  
  }
    console.log("Working", isSideMenu)
  
    const router = useRouter();
    let pathnames = router.pathname
  
    const [active, setActive] = useState(false);
    const url = pathnames.split("/").slice(0, -1).join("/");
  
    const onHandleMobileMenu = () => {
      var root = document.getElementsByTagName("html")[0];
      root.classList.add("menu-opened");
    };
  
    const onhandleCloseMenu = () => {
      var root = document.getElementsByTagName("html")[0];
      root.classList.remove("menu-opened");
    };
  

    const handleClick = (path) => {
      if (path === "/doctor-profile") {
        router.push(path);
      }
    };
    
  
    return ( 
      <>
      { (!pathnames.includes("home1") && !pathnames.includes("home4") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home8")) && 
          <div>
            <div className="header-top">
            <div className="left-top mt-2">
              <ul>
                <li><i className="fas fa-phone-volume top-icon" />+00 000 00 00</li>
                <li><i className="fas fa-envelope top-icon" />mail@mail.com</li>
              </ul>
            </div>
            <div className="right-top ">
              <Image src={pubmedLogo} className="img-fluid" width="100" height="35" alt="Logo" />
            </div>
          </div>
            <header className="header">
            <nav className={`navbar navbar-expand-lg header-nav ${pathnames.includes("home1") ? "nav-transparent" : "" }`}>
              <div className="navbar-header">
                <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </a>
                <Link href="/home" className="navbar-brand logo">
                  <div>
                  <Image src={logo} className="img-fluid" alt="Logo" />
                  </div>
                </Link>
              </div>
              <div className="main-menu-wrapper" style={{"margin": 'auto'}}>
                <div className="menu-header">
                  <Link href="/home" className="menu-logo">
                  <div>
                  <Image src={logo} className="img-fluid" alt="Logo" />
                  </div>
                  </Link>
                  <a
                    href="#0"
                    id="menu_close"
                    className="menu-close"
                    onClick={() => onhandleCloseMenu()}
                  >
                    <i className="fas fa-times"></i>
                  </a>
                </div>
                <ul className="main-nav">
              
                  
                   <li className={`has-submenu ${pathnames.includes("home") || pathnames.includes("home2") || pathnames.includes("home3") || pathnames.includes("home5")|| pathnames.includes("homeslider1") || pathnames.includes("home4") || pathnames.includes("homeslider2") || pathnames.includes("home6") || pathnames.includes("home7") && !pathnames.includes("home10") || pathnames.includes("home11") || pathnames.includes("home12") || pathnames.includes("home13") || pathnames.includes("home14") || pathnames.includes("home8") ? "active" : ""}`}>
                   <a href="/home" className={isSideMenu == "home" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="home" ? "": "home")}  >Home</a>
                  
                  </li>
                   
                  <li className={`has-submenu ${url.includes("/doctor") ? "active" : ""}`}>
                  <a  className={isSideMenu == "doctors" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="doctors" ? "": "doctors")} >Blog</a>              
                  
                  </li>
                  <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
                  <a  className={isSideMenu == "patients" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="patients" ? "": "patients")} >About Us</a>              
                   
                  </li>
                  <li className={`has-submenu ${url.includes("/Pharmacy") ? "active" : ""}`}>
                  <a  className={isSideMenu == "pharmacy" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="pharmacy" ? "": "pharmacy")} >Privacy</a>              
                  
                  </li>
                  <li className="login-link" onClick={()=>onhandleCloseMenu()}>
                    <Link href="/">Login / Signup</Link>
                  </li>
                </ul>
              </div>
              <ul className="nav header-navbar-rht" style={{"marginLeft": 'unset'}}>
      
                {(router.pathname) === ("/pages/voice-call") || (router.pathname) === ("/pages/video-call") ? (
                  <>
                    <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <Image
                          className="rounded-circle"
                          src={IMG01}
                          width="31"
                          alt="Darren Elder"
                        />
                      </Dropdown.Toggle>
      
                      <Dropdown.Menu>
                        <div className="user-header">
                          <div className="avatar avatar-sm">
                            <Image
                              src={IMG01}
                              alt="User"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="user-text">
                            <h6>Darren Elder</h6>
                            <p className="text-muted mb-0">Doctor</p>
                          </div>
                        </div>
                        <Dropdown.Item href={`${config.publicPath}doctor/doctor-dashboard`}>
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item href={`${config.publicPath}doctor/profile-setting`}>
                      Profile Settings
                    </Dropdown.Item>
                    <Dropdown.Item href={`${config.publicPath}login`}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link header-login" onClick={() => (session?.user?.accessToken ? handleClick("/doctor-profile") : signIn())}>
                        {session?.user?.accessToken ? 'Profile' : 'Login / Signup'}
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </header>
          </div>
      }
            
      </>
    );
};
  
export default Header;
