import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import IMG01 from '../../../public/client/assets/images/doctor-thumb-02.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Image from 'next/image';

const Booking =({doctor})=>{

	const [data, dataSet] = useState(null);
	useEffect(() => {
		async function fetchData() {
		  // You can await here
		  const response = await fetch("http://188.132.130.99/en/api/v1/appointment/availability/?available_user=2&available_time=&available_time_max=2023-03-29T20 3A00&branch=", {
			method: "GET",
			headers: {
				"content-type": "application/json",
			}
			}).then(res => {res.text(); dataSet("reshata"); })
			.catch((e) => {console.log(e); dataSet("err")});
		}
		fetchData();
	  }, []);

  return(
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
					  <li className="breadcrumb-item active" aria-current="page">Booking</li>
				   </ol>
				</nav>
				<h2 className="breadcrumb-title">Booking</h2>
			 </div>
		  </div>
	   </div>
	</div>
	
		
	<div className="content">
	   <div className="container">
		  <div className="row">
			 <div className="col-12">
				<div className="card">
				   <div className="card-body">
					  <div className="booking-doc-info">
						 <Link href={`/doctor/${doctor.profile.user}`} className="booking-doc-img">
                        	<div className='mr-3'>
							<Image src={doctor.avatar} width="150" height="150" className="img-fluid" alt="User" />
							</div>
						 </Link>
						 <div className="booking-info">
							<h4>
							   <Link href={`/doctor/${doctor.profile.user}`}>
							   <a>{doctor.profile.name} {doctor.profile.last_name}</a></Link>
							</h4>
							<p className="text-muted mb-0"><i className="fas fa-map-marker-alt"></i> {doctor.profile.country_info} / {doctor.profile.city_info}</p>
						 </div>
					  </div>
				   </div>
				</div>
				<div className="card booking-schedule schedule-widget">
				   <div className="schedule-header">
					  <div className="row">
						 <div className="col-md-12">
							<div className="day-slot">
							   <ul>

								  <li>
									 <span>Tuesday</span>
									 <span className="slot-date">7 March <small className="slot-year">2023</small></span>
								  </li>
								  <li>
									 <span>Wednesday</span>
									 <span className="slot-date">8 March <small className="slot-year">2023</small></span>
								  </li>
								  <li>
									 <span>Thursday</span>
									 <span className="slot-date">9 March <small className="slot-year">2023</small></span>
								  </li>
								  <li>
									 <span>Friday</span>
									 <span className="slot-date">10 March <small className="slot-year">2023</small></span>
								  </li>
								  
							   </ul>
							</div>
						 </div>
					  </div>
				   </div>
				   <div className="schedule-cont">
					  <div className="row">
						 <div className="col-md-12">
							<div className="time-slot">
							   <ul className="clearfix">

								  <li>
									 <a className="timing">
									 <span>9:00</span> <span>AM</span>
									 </a>
									 <a className="timing selected">
									 <span>10:00</span> <span>AM</span>
									 </a>
									 <a className="timing">
									 <span>11:00</span> <span>AM</span>
									 </a>
								  </li>
								  <li>
									 <a className="timing">
									 <span>9:00</span> <span>AM</span>
									 </a>
									 <a className="timing">
									 <span>11:00</span> <span>AM</span>
									 </a>
									 <a className="timing">
									 <span>112:00</span> <span>AM</span>
									 </a>
								  </li>
								  <li>
									 <a className="timing">
									 <span>9:00</span> <span>AM</span>
									 </a>
									 <a className="timing">
									 <span>11:00</span> <span>AM</span>
									 </a>
									 <a className="timing">
									 <span>112:00</span> <span>AM</span>
									 </a>
								  </li>
								  <li>
									 <a className="timing">
									 <span>9:00</span> <span>AM</span>
									 </a>
									 <a className="timing">
									 <span>11:00</span> <span>AM</span>
									 </a>
									 <a className="timing">
									 <span>112:00</span> <span>AM</span>
									 </a>
								  </li>
								  
							   </ul>
							</div>
						 </div>
					  </div>
				   </div>
				</div>
				<div>
				</div>
				<div className="submit-section proceed-btn text-end">
				   <a href="/home" className="btn btn-primary submit-btn">
				   Proceed to Pay</a>
				</div>
			 </div>
		  </div>
	   </div>
	</div>
	

 </div>
  );

 }

 export const getServerSideProps = async ({ params }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/users/${params.id}`)
	const doctor = await response.json()
	return {
	  props: {
		doctor: doctor.detail ? doctor.detail : doctor,
	  },
	};
};


export default Booking;