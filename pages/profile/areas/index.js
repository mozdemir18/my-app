import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import StickyBox from "react-sticky-box";
import DoctorSidebar from '../../../components/sidebar';

const Areas =()=> {

    //add remove
    const [inputFields, setInputFields] = useState([{} ]);

    const addInputField = ()=>{
        setInputFields([...inputFields, {		
        } ])
    
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChanges = (index, evnt)=>{

    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);

    }    
        return  (
         <>
           <div>
            <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Educations</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">Educations</h2>
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
						<div className="col-md-12 col-lg-8 col-xl-9">
						
                        <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Areas of interest</h4>
                  
                            {
                    inputFields.map((data, index)=>{
                        
                        return(
                    <div className="membership-info" key={index}  onChange={(evnt)=>handleChanges(index, evnt)}>
                        <div className="row form-row membership-cont">
                            <div className="col-12 col-md-10 col-lg-8">
                                <div className="form-group">
                                    <label>Ares of interest</label>
                                    <input type="text" className="form-control"/>
                                </div> 
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="delete-icon">
                                    <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                                    <a href="#0" className="btn btn-danger trash" onClick={removeInputFields} >
                                        <i className="far fa-trash-alt"></i></a>
                                </div>  
                            </div>
                        </div>
                    </div>
                        )
                        })
                    }
                    <div className="add-more" onClick={addInputField}>
                        <a href="#" className="add-membership"><i className="fa fa-plus-circle"></i> Add More</a>
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
      </>
        );
    }

export default Areas;