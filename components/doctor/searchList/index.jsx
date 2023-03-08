import React, {useEffect} from 'react';
import Link from 'next/link'
import {Tooltip, OverlayTrigger}from 'react-bootstrap';
import {IMG01, IMG02, IMG03, IMG04, IMG05, IMG_sp_02, IMG_sp_03, IMG_sp_04, IMG_sp_05, IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04} from './img';
import Image from 'next/image';


const SearchList= React.forwardRef(function SearchList({doctors}, ref) {
    useEffect(() => {
        console.log(doctors);
      }, []);

        return(
            <div>
                {
                    doctors != null &&
                    Object.keys(doctors).map((keyName, i) => (
                        <div className="card" key={doctors[keyName].user}>
                        <div className="card-body">
                            <div className="doctor-widget">
                                <div className="doc-info-left">
                                <div className="doctor-img">
                                    <Link href={`/doctor/${doctors[keyName].user}`}>
                                    <div>
                                    <Image src={doctors[keyName].avatar} width="150" height="150" className="img-fluid" alt="User" />
                                    </div>
                                    </Link>
                                </div>
                                <div className="doc-info-cont">
                                    <h4 className="doc-name">
                                        <Link href={`/doctor/${doctors[keyName].user}`}>
                                        <a>{doctors[keyName].name} {doctors[keyName].last_name}</a></Link>
                                        
                                    </h4>
                                    <p className="doc-speciality mb-0">{doctors[keyName].title}</p>
                                    <h5 className="doc-department">{doctors[keyName].profession_info}</h5>
                                    
                                </div>
                                </div>
                                <div className="doc-info-right">
                                <div className="clini-infos">
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i> {doctors[keyName].country_info} / {doctors[keyName].city_info}</li>
                                    </ul>
                                </div>
                                <div className="clinic-booking">
                                    <Link href={`/doctor/${doctors[keyName].user}`} className="view-pro-btn">
                                    View Profile</Link>
                                    <Link href={`/doctor/booking/${doctors[keyName].user}`} className="apt-btn">
                                    Make An Appointment</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                    
                }
                

            </div>
        );
    });

export default SearchList;