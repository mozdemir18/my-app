import React, { useState, useEffect } from "react";
import Link from 'next/link'
import ProgressBar from "react-customizable-progressbar";
import StickyBox from "react-sticky-box";
import DoctorSidebar from '../../components/sidebar'
import {
  Icon03,
  IMG01,
} from "./img";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const DoctorProfile = (props) => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [key, setKey] = useState(1);

  const handleSelect = (key) => {
    console.log("selected " + key);
    setKey(key);
  };

  useEffect(() => {
    console.log(session);
    
    if (!session) {
      push("/home");
    }
  }, [session, push]);
 

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
                    Dashboard
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <DoctorSidebar/>
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="card dash-card">
                    <div className="card-body">
                      <div className="row">

                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget">
                            <ProgressBar
                              width={20}
                              radius={100}
                              progress={70}
                              rotate={-210}
                              strokeWidth={16}
                              strokeColor="#1b5a90"
                              strokeLinecap="square"
                              trackStrokeWidth={8}
                              trackStrokeColor="#e6e6e6"
                              trackStrokeLinecap="square"
                              pointerRadius={0}
                              initialAnimation={true}
                              transition="1.5s ease 0.5s"
                              trackTransition="0s ease"
                            >
                              <div className="indicator-volume">
                                <Image
                                  src={Icon03}
                                  className="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </ProgressBar>
                            <div className="dash-widget-info">
                              <h6>Appoinments</h6>
                              <h3>85</h3>
                              <p className="text-muted">06, Apr 2019</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-4">Appoinments</h4>
                  <div className="appointment-tab">
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
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
