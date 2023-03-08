import React from 'react'
import Home from './home'
import Head from "next/head";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Doctor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  )
}

