import React,{ Component } from 'react';
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import IMG01 from '../../public/client/assets/images/doctor-thumb-02.jpg';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const DoctorSidebar =()=> {

        return(
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <Link href="#" className="booking-doc-img">
                            <div>
                                <Image src={IMG01} alt="User" width="120" height="120"/>
                            </div>
                        </Link>
                        <div className="profile-det-info">
                            <h3>Dr. Darren Elder</h3>
                            
                            <div className="patient-details">
                                <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                   
                        
                    <Nav className="dashboard-menu">

                        <Nav.Item> 
                             <Link href="/doctor-profile"> 
                                <a><i className="fas fa-columns"></i>
                                    <span>Dashboard</span></a>
                             </Link>
                         </Nav.Item>
                         
                         <Nav.Item> 
                            <Link href="/doctor-profile/appointments"  activeClassName="active">
                             <a><i className="fas fa-calendar-check"></i>
                                    <span>Appointments</span> </a>
                            </Link>
                        </Nav.Item> 
                        <Nav.Item> 
                            <Link href="/doctor-profile/education">
                                   <a><i className="fas fa-school"></i>
                                    <span>Education</span></a>
                            </Link>
                        </Nav.Item> 
                        <Nav.Item> 
                            <Link href="/doctor-profile/experience">
                                   <a><i className="fas fa-school"></i>
                                    <span>Experience</span></a>
                            </Link>
                        </Nav.Item>
                        {
                            /*
                        
                        <Nav.Item> 
                            <Link href="/doctor-profile/areas">
                                   <a><i className="fas fa-check-double"></i>
                                    <span>Areas of interest</span></a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item> 
                            <Link href="/doctor-profile/settings">
                                   <a><i className="fas fa-user-cog"></i>
                                    <span>Profile Settings</span></a>
                            </Link>
                        </Nav.Item> 
                        */}
                        <Nav.Item> 
                              <a onClick={ ()=> signOut({ callbackUrl: 'http://localhost:3000/home' }) }>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Logout</span>
                              </a>
                        </Nav.Item> 
                    </Nav> 
                  
                </div>
            </div>
        );
    }

export default DoctorSidebar;
   