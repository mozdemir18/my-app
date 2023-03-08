import React, {useState} from 'react';
import DoctorSidebar from '../../../components/sidebar';
import Link from 'next/link'
import StickyBox from "react-sticky-box";

const ProfileSetting =(props)=> {

	const[dropzone,setdropzone]=useState(true);
	const constructor=(props)=> {
		
		dropzone = {
			files: []
		  };
	}


	return(
    <div>
            <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">Profile Settings</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						<StickyBox offsetTop={20} offsetBottom={20}>
								<DoctorSidebar />
								</StickyBox>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">
						
							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Profile Settings</h4>
									<div className="form-group mb-0">
										<label>About Me</label>
										<textarea className="form-control" rows="5"></textarea>
									</div>
								</div>
							</div>
							
							<div className="submit-section submit-btn-bottom">
								<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
							</div>
							
						</div>
					</div>

				</div>

			</div>	
        </div>
     
        );

    }


export default ProfileSetting;