
import React, { useEffect } from 'react'
import '../public/client/assets/css/bootstrap.min.css'
// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//fontawesome

import 'react-image-lightbox/style.css';
import "react-datepicker/dist/react-datepicker.css";
//carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../public/client/assets/css/style.css'
import '../public/client/assets/css/fontawesome.css'
import '../public/client/assets/css/fontawesome.min.css'
import '../public/client/assets/css/all.css'
import '../public/client/assets/css/all.min.css'
import '../public/client/assets/js/popper.min.js'

import AOS from "aos";
import "aos/dist/aos.css";

import Layout from '../layout/Layout'
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });  
  }, []);

  return (
    <SessionProvider session={session}>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}