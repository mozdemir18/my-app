import React, { useState,useEffect  } from "react";
import HomeBlog from '../../components/home/blog';
import Slider from "react-slick";
import { Slider1,Slider2,Slider3 } from "../../components/home/image.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { getCountries } from '../api/countries'
import { getBlogs } from '../api/blogs'
import { Formik, Field, ErrorMessage } from 'formik'
import MultiSelect from "../../components/select/multiselect";

const Home =({countries, blogs})=> { 
  //Aos
  useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);
   
  const settings = {
    dots: true,
    infinite: true,
    rtl: true,
    slidesToShow: 1,
    cssEase: "linear",        
  };   


  return(
    <div className="main-wrapper">
        {/* Home Banner */}
        <section id="home" className="divider">
    <div className="container-fluid p-0">

      {/*- slider --*/}
      <Slider {...settings}>
          <div className="carousel-item active">
            <Image className="d-block w-100" src={Slider1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <span>WITH IDCP</span>
              <h2>THE WORLD'S DOCTORS <br/>ARE ON A SINGLE PLATFORM</h2>
            </div>
          </div>
          <div className="carousel-item">
            <Image className="d-block w-100" src={Slider2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <span>WITH IDCP</span>
              <h2>THE WORLD'S DOCTORS <br/>ARE ON A SINGLE PLATFORM</h2>
            </div>
          </div>
          <div className="carousel-item">
            <Image className="d-block w-100" src={Slider3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <span>WITH IDCP</span>
              <h2>THE WORLD'S DOCTORS <br/>ARE ON A SINGLE PLATFORM</h2>
            </div>
          </div>
          </Slider>
      
      {/*- /slider --*/}
      {/* Search */}
      <div className="banner-wrapper">
        <div className="search-box search-box-3">
          <Formik
              initialValues={{ name: '', country: '', tenantKey: '' }}
            >
              {(formik) => (
            <form method='get' action='/doctor'>
            <div className="form-group search-location">
              <Field
                  name="country"
                  id="country"
                  placeholder="Country"
                  isMulti={false}
                  component={MultiSelect}
                  options={countries}
              />
            </div>
            <div className="form-group search-info">
              <Field type="text" className="form-control" name="name" placeholder="Search Doctors" />
            </div>
            <button type="submit" className="btn btn-primary search-btn btn-search mt-0"><i className="fas fa-search" />  <span>Search</span>
            </button>
          </form>
          )}
          </Formik>
        </div>
      </div>
      {/* /Search */}
    </div>
  </section>
  {/* /Home Banner */}
    <div className="mt-5">
    <HomeBlog blogs={blogs}/>
    </div>
    </div>
  );
}


export async function getServerSideProps() {
  const country = await getCountries();
  const datasCountry = [];
  country.map((item) => {
    datasCountry.push({
      id: item.id,
      label: item.name,
      value: item.name
    })
  })

  const blogs = await getBlogs();
  return {
      props: {
          countries: datasCountry,
          blogs: blogs
      },
  }
}
export default Home;