import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Link from 'next/link'
import { Formik, Field, ErrorMessage } from 'formik'
import {getCountries} from '../api/countries';
import { getCities } from '../api/cities'
import { getBranchs } from "../api/branch";
import { getTitles } from "../api/title";
import FormSelect from "../../components/select/formselect";
import {registerSchema} from '../../schema/register';
import { useRouter } from "next/router";


const Register = ({ countries, cities, branch, titles }) => {
  const { push } = useRouter();
  const [visibleModal, setVisibleModal] = useState(false);

  const userType = [
    {
      label: 'Service Recipient', value: 'Service Recipient'
    },
    {
      label: 'Service Provider', value: 'Service Provider'
    }
  ]

  const handleClose = () => {
    setVisibleModal(false);
    push("/login");
  };

  const handleShow = () => {
    setVisibleModal(true);
  };

  const onChangeCountry = (selectedOption) => {
    console.log(selectedOption);
  }

  useEffect(() => {
		document.body.classList.add("account-page");
	 
		return () => document.body.classList.remove("account-page");
		}, []);

  return (
    <>
      <div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-12 login-right">
                      <div className="login-header">
                        <h3>
                          Register{" "}
                        </h3>
                      </div>
                      <Formik
                        initialValues={{ name: '', last_name: '', email: '', country:'', city:'', acceptTerms: false, acceptTerms2: false, tenantKey: '' }}
                        validationSchema={registerSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                          fetch("http://188.132.130.99/en/api/v1/auth/users/", {
                            method: "POST",
                            body: JSON.stringify({
                              "username": values.email,
                              "password": values.password,
                              "profile": {
                                "country": values.country,
                                "city": values.city,
                                "name": values.name,
                                "last_name": values.last_name,
                                "title": values.title,
                                "profession": 5,
                                "is_employee": true
                              }
                            }),
                            headers: {
                              "content-type": "application/json",
                            },
                          }).then((response) => {
                            if (!response.ok) {
                              //throw new Error(`HTTP error: ${response.status}`);
                              console.log(response.status)
                            }else{
                              setSubmitting(false)
                              handleShow();
                            }
                          })
                          .catch((e) => console.log(e));
                        }}
                      >
                        {(formik) => (
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6 mb-2">
                              <div className="form-group form-focus">
                                <Field
                                  type="text"
                                  name="name"
                                  className="form-control floating"
                                  id="name"
                                />
                                <label className="focus-label" htmlFor="name">
                                  Name
                                </label>
                                <span className="text-danger"><ErrorMessage name="name" /></span>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group form-focus">
                                <Field
                                  type="text"
                                  name="last_name"
                                  className="form-control floating"
                                  id="last_name"
                                />
                                <label className="focus-label" htmlFor="last_name">
                                  Last Name
                                </label>
                                <span className="text-danger"><ErrorMessage name="last_name" /></span>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group form-focus">
                                <Field
                                  type="text"
                                  name="email"
                                  className="form-control floating"
                                  id="email"
                                />
                                <label className="focus-label" htmlFor="email">
                                  E-mail
                                </label>
                                <span className="text-danger"><ErrorMessage name="email" /></span>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group form-focus">
                                <Field
                                  type="password"
                                  name="password"
                                  className="form-control floating"
                                  id="password"
                                />
                                <label className="focus-label" htmlFor="password">
                                  Password
                                </label>
                                <span className="text-danger"><ErrorMessage name="password" /></span>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group form-focus">
                                <Field
                                  type="text"
                                  name="phone"
                                  className="form-control floating"
                                  id="phone"
                                />
                                <label className="focus-label" htmlFor="phone">
                                  Phone
                                </label>
                                <span className="text-danger"><ErrorMessage name="phone" /></span>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="passcode-wrap input-placeholder form-focus mb-2">
                                <Field
                                  name="userType"
                                  id="userType"
                                  placeholder="Type"
                                  isMulti={false}
                                  component={FormSelect}
                                  options={userType}
                                />
                              </div>
                                <span className="text-danger"><ErrorMessage name="userType" /></span>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="passcode-wrap input-placeholder form-focus mb-2">
                                <Field
                                  name="country"
                                  id="country"
                                  placeholder="Country"
                                  isMulti={false}
                                  component={FormSelect}
                                  options={countries}
                                />
                              </div>
                                <span className="text-danger"><ErrorMessage name="country" /></span>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="passcode-wrap input-placeholder form-focus mb-2">
                                <Field
                                  name="city"
                                  id="city"
                                  placeholder="City"
                                  isMulti={false}
                                  component={FormSelect}
                                  options={cities}
                                />
                              </div>
                                <span className="text-danger"><ErrorMessage name="city" /></span>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group form-focus">
                                <div className="passcode-wrap input-placeholder form-focus mb-2">
                                  <Field
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    isMulti={false}
                                    component={FormSelect}
                                    options={titles}
                                  />
                                </div>
                                <span className="text-danger"><ErrorMessage name="title" /></span>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="passcode-wrap input-placeholder form-focus mb-2">
                                <Field
                                  name="branch"
                                  id="branch"
                                  placeholder="Branch"
                                  isMulti={false}
                                  component={FormSelect}
                                  options={branch}
                                />
                              </div>
                                <span className="text-danger"><ErrorMessage name="branch" /></span>
                            </div>
                            <div className="col-lg-12 mt-2">
                              <h6>In order to ensure the security of the profiles published on www.vesidcp.com, you must upload an identity document (Hospital ID card, Passport, Diploma) proving that you are the owner of the profile. This document will be used for verification purposes only and will not be processed or stored by us.</h6>
                              <div className="upload-patient-pic">
                                <div className="upload-patient-btn">
                                  <a className="pic-upload-btn">
                                    <i className="fas fa-upload me-2"></i>UPLOAD ID CARD
                                  </a>
                                  <input type="file" id="imgIDCard" />
                                </div>
                                <div className="upload-patient-btn">
                                  <a className="pic-upload-btn">
                                    <i className="fas fa-upload me-2"></i>UPLOAD PHOTO
                                  </a>
                                  <input type="file" id="imgPhoto" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 mt-2">
                            <div className="form-group">
                                  <div className="checklist-col">
                                    <div className="remember-me-col d-flex justify-content-between align-items-center">
                                      <label className="custom_check">
                                        <Field
                                          type="checkbox"
                                          className=""
                                          name="acceptTerms"
                                          id="cancer"
                                        />
                                        <span className="checkmark"></span>
                                      </label>
                                      <span className="mt-1">
                                      I consent to the transmission of commercial electronic messages (SMS) such as campaigns, advertisements, promotions, gift codes and the processing of my data in this context.
                                      </span>
                                    </div>
                                    {formik.errors.acceptTerms && <span className="text-danger">{formik.errors.acceptTerms}</span>}
                                    <div className="remember-me-col justify-content-center align-items-center">
                                      <label className="custom_check">
                                        <Field
                                          type="checkbox"
                                          className=""
                                          name="acceptTerms2"
                                          id="medicine"
                                        />
                                        <span className="checkmark"></span>
                                      </label>
                                      <span className="mt-1">
                                      I have read and accept the User Agreement and Privacy Policy.
                                      </span>
                                    </div>
                                    {formik.errors.acceptTerms2 && <span className="text-danger">{formik.errors.acceptTerms2}</span>}
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-end">
                          <Link href="/login" className="forgot-link">
                            Already have an account?
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          {formik.isSubmitting ? 'Please wait...' : 'Signup'}
                        </button>
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
        {/*view modal*/}
        <Modal show={visibleModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <h5 className="modal-title">Success</h5>
          </Modal.Header>
          <Modal.Body>
            <h6>Your application has reached us!</h6>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export async function getServerSideProps(){
  const allCountries = await getCountries();
  const datasCountry = [];
  allCountries.map((item) => {
    datasCountry.push({
      id: item.id,
      label: item.name,
      value: item.id
    })
  })

  const allCities = await getCities();
  const datasCities = [];
  allCities.map((item) => {
    datasCities.push({
      id: item.id,
      label: item.name,
      value: item.id
    })
  })


  const allBranch = await getBranchs();
  const datasBranch = [];
  allBranch.map((item) => {
    datasBranch.push({
      id: item.id,
      label: item.name,
      value: item.name
    })
  })

  const titles = await getTitles();

  return {
    props: {
        countries: datasCountry,
        cities: datasCities,
        branch: datasBranch,
        titles: titles
    },
}
}

export default Register;
