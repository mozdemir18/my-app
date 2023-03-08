import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import {
  IMG01,
  IMG02,
} from "./img";
import DoctorSidebar from "../../../components/sidebar";
import Image from 'next/image';

const Appointments = (props) => {
  const [show, setshow] = useState();

  const constructor = (props) => {
    show = {
      show: false,
    };
  };

  const handleClose = () => {
    setshow(false);
  };

  const handleShow = () => {
    setshow(true);
  };

  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Appointments
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Appointments</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="appointments">
              <h4 className="card-title">Appointments</h4>
              <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Appt Date</th>
                              <th>Purpose</th>
                              <th>Type</th>
                              <th className="text-center">
                                Paid Amount
                              </th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/doctor/patient-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <div className="mr-3">
                                    <Image
                                      className="avatar-img rounded-circle"
                                      src={IMG01}
                                      width="50"
                                      height="50"
                                      alt="User"
                                    />
                                    </div>
                                  </Link>
                                  <Link href="/home">
                                    <a>Richard Wilson
                                    <span>#PT0016</span></a>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                11 Nov 2019
                                <span className="d-block text-info">
                                  10.00 AM
                                </span>
                              </td>
                              <td>General</td>
                              <td>New Patient</td>
                              <td className="text-center">$150</td>
                              <td className="text-end">
                              <div className="table-action">
                                  <a
                                    className="btn btn-sm bg-info-light"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-eye"></i> View
                                  </a>

                                  <a
                                    className="btn btn-sm bg-success-light"
                                  >
                                    <i className="fas fa-check"></i>{" "}
                                    Accept
                                  </a>
                                  <a
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times"></i>{" "}
                                    Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/doctor/patient-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                  <div className="mr-3">
                                  <Image
                                    className="avatar-img rounded-circle"
                                    src={IMG01}
                                    width="50"
                                    height="50"
                                    alt="User"
                                  />
                                  </div>
                                  </Link>
                                  <Link href="/doctor/patient-profile">
                                    <a>Travis Trimble
                                    <span>#PT0002</span></a>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                1 Nov 2019
                                <span className="d-block text-info">
                                  1.00 PM
                                </span>
                              </td>
                              <td>General</td>
                              <td>New Patient</td>
                              <td className="text-center">$75</td>
                              <td className="text-end">
                              <div className="table-action">
                                  <a
                                    className="btn btn-sm bg-info-light"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-eye"></i> View
                                  </a>

                                  <a
                                    className="btn btn-sm bg-success-light"
                                  >
                                    <i className="fas fa-check"></i>{" "}
                                    Accept
                                  </a>
                                  <a
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times"></i>{" "}
                                    Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/doctor/patient-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                  <div className="mr-3">
                                  <Image
                                    className="avatar-img rounded-circle"
                                    src={IMG01}
                                    width="50"
                                    height="50"
                                    alt="User"
                                  />
                                  </div>
                                  </Link>
                                  <Link href="/doctor/patient-profile">
                                    <a>Gina Moore <span>#PT0005</span></a>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                27 Oct 2019
                                <span className="d-block text-info">
                                  8.00 AM
                                </span>
                              </td>
                              <td>General</td>
                              <td>Old Patient</td>
                              <td className="text-center">$250</td>
                              <td className="text-end">
                              <div className="table-action">
                                  <a
                                    className="btn btn-sm bg-info-light"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-eye"></i> View
                                  </a>

                                  <a
                                    className="btn btn-sm bg-success-light"
                                  >
                                    <i className="fas fa-check"></i>{" "}
                                    Accept
                                  </a>
                                  <a
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times"></i>{" "}
                                    Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/doctor/patient-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <div className="mr-3">
                                    <Image
                                      className="avatar-img rounded-circle"
                                      src={IMG01}
                                      width="50"
                                      height="50"
                                      alt="User"
                                    />
                                    </div>
                                  </Link>
                                  <Link href="/home">
                                    <a>Richard Wilson
                                    <span>#PT0016</span></a>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                11 Nov 2019
                                <span className="d-block text-info">
                                  10.00 AM
                                </span>
                              </td>
                              <td>General</td>
                              <td>New Patient</td>
                              <td className="text-center">$150</td>
                              <td className="text-end">
                              <div className="table-action">
                                  <a
                                    className="btn btn-sm bg-info-light"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-eye"></i> View
                                  </a>

                                  <a
                                    className="btn btn-sm bg-success-light"
                                  >
                                    <i className="fas fa-check"></i>{" "}
                                    Accept
                                  </a>
                                  <a
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times"></i>{" "}
                                    Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    href="/doctor/patient-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                  <div className="mr-3">
                                  <Image
                                    className="avatar-img rounded-circle"
                                    src={IMG01}
                                    width="50"
                                    height="50"
                                    alt="User"
                                  />
                                  </div>
                                  </Link>
                                  <Link href="/doctor/patient-profile">
                                    <a>Travis Trimble
                                    <span>#PT0002</span></a>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                1 Nov 2019
                                <span className="d-block text-info">
                                  1.00 PM
                                </span>
                              </td>
                              <td>General</td>
                              <td>New Patient</td>
                              <td className="text-center">$75</td>
                              <td className="text-end">
                              <div className="table-action">
                                  <a
                                    className="btn btn-sm bg-info-light"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-eye"></i> View
                                  </a>

                                  <a
                                    className="btn btn-sm bg-success-light"
                                  >
                                    <i className="fas fa-check"></i>{" "}
                                    Accept
                                  </a>
                                  <a
                                    className="btn btn-sm bg-danger-light"
                                  >
                                    <i className="fas fa-times"></i>{" "}
                                    Cancel
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*view modal*/}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h5 className="modal-title">Appointment Details</h5>
        </Modal.Header>
        <Modal.Body>
          <ul className="info-details">
            <li>
              <div className="details-header">
                <div className="row">
                  <div className="col-md-6">
                    <span className="title">#APT0001</span>
                    <span className="text">21 Oct 2019 10:00 AM</span>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end">
                      <button
                        type="button"
                        className="btn bg-success-light btn-sm"
                        id="topup_status"
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span className="title">Status:</span>
              <span className="text">Completed</span>
            </li>
            <li>
              <span className="title">Confirm Date:</span>
              <span className="text">29 Jun 2019</span>
            </li>
            <li>
              <span className="title">Paid Amount</span>
              <span className="text">$450</span>
            </li>
            <li>
              <Link href="/profile/appointments/video-call">Appoinment Video Link</Link>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Appointments;
