import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Select from 'react-select';
import StickyBox from "react-sticky-box";
import SearchFilter from './searchFilter';
import SearchList from './searchList';
import axios from "axios";

const DoctorWrapper = ({doctors}) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [productLimit, setProductLimit] = useState(3);

  const options = [
    { value: 'Select', label: 'Select' },
    { value: 'Rating', label: 'Rating' },
    { value: 'Popular', label: 'Popular' },
    { value: 'Lastest', label: 'Lastest' },
    { value: 'Free', label: 'Free' },
	]

  return (
    <div>
        <div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-8 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link href="/home">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Search</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="container-fluid">

						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
								<StickyBox offsetTop={20} offsetBottom={20}>
									<SearchFilter />
								</StickyBox>
							</div>

							<div className="col-md-12 col-lg-8 col-xl-9">
								<SearchList doctors={doctors} />
							</div>
						</div>

					</div>

				</div>
    </div>
  );
};

export default DoctorWrapper;