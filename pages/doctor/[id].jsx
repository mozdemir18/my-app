import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Tabs, Tab } from 'react-bootstrap';
import Icon from '@material-ui/core/Icon';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08 } from '../../components/doctor/profile/img';
import Image from 'next/image';


const DoctorProfile = ({doctor, education, experience}) => {
	useEffect(()=>{
		console.log(education);
	})
	const [isOpen, setisOpen] = useState(false);
	const [state, setState] = useState(false);
	return (

		<div>
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<Link href="/home">
											Home</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">Doctor Profile</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Doctor Profile</h2>
						</div>
					</div>
				</div>
			</div>
			{
				doctor != 'Not found.' &&
			(
				<div className="content">
					<div className="container">
						<div className="card">
							<div className="card-body">
								<div className="doctor-widget">
									<div className="doc-info-left">
										<div className="doctor-img">
										<Image src={doctor.profile.avatar} width="150" height="150" className="img-fluid" alt="User" />
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name">{doctor.profile.name} {doctor.profile.last_name}</h4>
											<p className="doc-speciality mb-0">{doctor.profile.title}</p>
											<p className="doc-department">{doctor.profile.profession_info}</p>
										</div>

									</div>
									<div className="doc-info-right">
										<div className="clini-infos">
											<ul>
												<li><i className="fas fa-map-marker-alt"></i> {doctor.profile.country_info} / {doctor.profile.city_info}</li>
											</ul>
										</div>
										<div className="clinic-booking">
											<Link href={`/doctor/booking/${doctor.profile.user}`} >
												<a>Make An Appointment</a></Link>
										</div>
									</div>
								</div>
							</div>
							<div className="card">
							
									<div className="card-body pt-0 user-tabs">
										<Tabs
											className="nav nav-tabs nav-tabs-bottom nav-justified"
											activeKey={state.key}
											onSelect={setisOpen}
											id="controlled-tab-example"
										>
											<Tab className="nav-item" eventKey={1} title="Overview">
												<div className="row">
													<div className="col-md-12 col-lg-9">
														<div className="widget about-widget">
															<h4 className="widget-title">About Me</h4>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
														</div>
														<div className="widget education-widget">
															<h4 className="widget-title">Education</h4>
															<div className="experience-box">
																<ul className="experience-list">
																	{
																		education != null &&
																		Object.keys(education).map((keyName, i) => (
																			<li key={i}>
																				<div className="experience-user">
																					<div className="before-circle"></div>
																				</div>
																				<div className="experience-content">
																					<div className="timeline-content">
																						<a href="#/" className="name">{education[keyName].education_place}</a>
																						<div>{education[keyName].education_branch}</div>
																						<span className="time">{education[keyName].start_year} - {education[keyName].end_year}</span>
																					</div>
																				</div>
																			</li>
																		))
																	}
																	
																</ul>
															</div>
														</div>
														<div className="widget experience-widget">
															<h4 className="widget-title">Experience</h4>
															<div className="experience-box">
																<ul className="experience-list">
																{
																	experience != null &&
																	Object.keys(experience).map((keyName, i) => (
																		<li key={i}>
																			<div className="experience-user">
																				<div className="before-circle"></div>
																			</div>
																			<div className="experience-content">
																				<div className="timeline-content">
																					<a href="#/" className="name">{experience[keyName].experience_place}</a>
																					<div>{experience[keyName].description}</div>
																					<span className="time">{experience[keyName].start_year} - {experience[keyName].end_year}</span>
																				</div>
																			</div>
																		</li>
																	))
																	
																}
																</ul>
															</div>
														</div>
														<div className="service-list">
															<h4>Areas of interest</h4>
															<ul className="clearfix">
																<li>Tooth cleaning </li>
																<li>Root Canal Therapy</li>
																<li>Implants</li>
																<li>Composite Bonding</li>
																<li>Fissure Sealants</li>
																<li>Surgical Extractions</li>
															</ul>
														</div>
													</div>
												</div>
											</Tab>
										</Tabs>
									</div>
								</div>
							</div>
						
					</div>
					{/* modal hmlFor video*/}
					<div className="modal fade call-modal" id="voice_call">
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
								<div className="modal-body">
									<div className="call-box incoming-box">
										<div className="call-wrapper">
											<div className="call-inner">
												<div className="call-user">
													<Image alt="User" src={IMG01} className="call-avatar" />
													<h4>Dr. Darren Elder</h4>
													<span>Connecting...</span>
												</div>
												<div className="call-items">
													<a href="#" className="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close" >
														<Icon>call_end</Icon>
													</a>
													<Link href="/pages/voice-call" className="btn call-item call-start">
														<i className="material-icons">call</i></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* modal hmlFor call*/}
					<div className="modal fade call-modal" id="video_call">
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
								<div className="modal-body">
									<div className="call-box incoming-box">
										<div className="call-wrapper">
											<div className="call-inner">
												<div className="call-user">
													<Image alt="User" src={IMG01} className="call-avatar" />
													<h4>Dr. Darren Elder</h4>
													<span>Connecting...</span>
												</div>
												<div className="call-items">
													<a href="#" className="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close">
														<Icon>call_end</Icon>
													</a>
													<Link href="/pages/video-call" className="btn call-item call-start">
														<i className="material-icons">call</i></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
			}
		</div>
	);

}

export const getServerSideProps = async ({ params }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/users/${params.id}`)
	const doctor = await response.json()
	return {
	  props: {
		doctor: doctor.detail ? doctor.detail : doctor,
		education: doctor.education != null ? doctor.education : [],
		experience: doctor.experience != null ? doctor.experience : []
	  },
	};
};

export default DoctorProfile;