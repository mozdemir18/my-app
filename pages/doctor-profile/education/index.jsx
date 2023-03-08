import React, {useState,useEffect} from "react";
import Link from 'next/link'
import StickyBox from "react-sticky-box";
import DoctorSidebar from '../../../components/sidebar';
import { Formik, Field, ErrorMessage } from 'formik'
import { educationSchema } from "../../../schema/educationSchema";
import MultiSelect from "../../../components/select/multiselect";
import { getCities } from '../../api/cities'
import { useRouter } from "next/router";

const Education =({education, cities})=> {
    const { push } = useRouter();

    useEffect(()=> {
    })

    return (
         
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
                        <div className="col-md-7 col-lg-8 col-xl-9">
                        
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
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <div className="education-info">
                                            <Formik
                                                initialValues={{ education_place: '', education_branch: '', tenantKey: '' }}
                                                validationSchema={educationSchema}
                                                onSubmit={async (values, { setSubmitting }) => {
                                                fetch("http://188.132.130.99/en/api/v1/auth/educations/", {
                                                    method: "POST",
                                                    body: JSON.stringify({
                                                        "education_place": values.education_place,
                                                        "education_branch": values.education_branch,
                                                        "start_year": values.start_year,
                                                        "end_year": values.end_year,
                                                        "city": values.city,
                                                        "user": 20
                                                    }),
                                                    headers: {
                                                        "content-type": "application/json",
                                                    },
                                                }).then((response) => {
                                                    if (!response.ok) {
                                                        console.log(response);
                                                        console.log(response.status);
                                                        console.log('Error');
                                                    }else{
                                                        console.log('Success');
                                                        push("/doctor-profile/education");
                                                    }
                                                })
                                                .catch((e) => console.log(e));
                                                }}
                                            >
                                                {(formik) => (
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="row form-row education-cont">
                                                    <div className="col-12 col-md-10 col-lg-12">
                                                        <div className="row form-row">
                                                            <div className="col-12 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Place</label>
                                                                    <Field type="text" name="education_place" className="form-control"/>
                                                                </div> 
                                                            </div>
                                                            <div className="col-12 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Branch</label>
                                                                    <Field type="text" name="education_branch" className="form-control"/>
                                                                </div> 
                                                            </div>
                                                            <div className="col-12 col-md-6 col-lg-4">
                                                                <div className="passcode-wrap input-placeholder form-focus mb-2">
                                                                    <label>City</label>
                                                                    <Field
                                                                        name="city"
                                                                        id="city"
                                                                        placeholder="City"
                                                                        isMulti={false}
                                                                        component={MultiSelect}
                                                                        options={cities}
                                                                    />
                                                                </div> 
                                                            </div>
                                                            <div className="col-12 col-md-6 col-lg-4">
                                                                <div className="form-group">
                                                                    <label>Start Year</label>
                                                                    <Field type="text" name="start_year" className="form-control"/>
                                                                </div> 
                                                            
                                                            </div>   
                                                            <div className="col-12 col-md-6 col-lg-4">
                                                                <div className="form-group">
                                                                    <label>End Year</label>
                                                                    <Field type="text" name="end_year" className="form-control"/>
                                                                </div> 
                                                            
                                                            </div>                                                           
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="delete-icon">
                                                            <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                                                            <button type="submit" className="btn btn-success trash"> Add</button>
                                                        </div>  
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                        </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>	
        </div>       
         
        </>
    );
}

export const getServerSideProps = async ({ params }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/users/20`)
	const user = await response.json()
    console.log(response);

    const allCities = await getCities();
    const datasCities = [];
    allCities.map((item) => {
      datasCities.push({
        id: item.id,
        label: item.name,
        value: item.id
      })
    })

	return {
	  props: {
		education: user.education,
        cities: datasCities,
	  },
	};
};

export default Education;