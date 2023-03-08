import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import StickyBox from "react-sticky-box";
import DoctorSidebar from '../../../components/sidebar';
import { Formik, Field, ErrorMessage } from 'formik'
import { experienceSchema } from "../../../schema/experienceSchema";
import MultiSelect from "../../../components/select/multiselect";
import { getCities } from '../../api/cities'
import { useRouter } from "next/router";

const Experience = ({experience, cities})=> {
    const { push } = useRouter();

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
                                    <li className="breadcrumb-item active" aria-current="page">Experiences</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Experiences</h2>
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
								<h4 className="widget-title">Experiences</h4>
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
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <div className="education-info">
                                            <Formik
                                                initialValues={{ experience_place: '', description: '', tenantKey: '' }}
                                                validationSchema={experienceSchema}
                                                onSubmit={async (values, { setSubmitting }) => {
                                                    console.log("submit");
                                                fetch("http://188.132.130.99/en/api/v1/auth/experience/", {
                                                    method: "POST",
                                                    body: JSON.stringify({
                                                        "experience_place": values.experience_place,
                                                        "description": values.description,
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
                                                        push("/profile/experience");
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
                                                                    <Field type="text" name="experience_place" className="form-control"/>
                                                                </div> 
                                                            </div>
                                                            <div className="col-12 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Description</label>
                                                                    <Field type="text" name="description" className="form-control"/>
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
        experience: user.experience,
        cities: datasCities,
        },
    };
};

export default Experience;