import React, { useEffect } from "react";
import bannerBg from "../assets/img/DSCF0209.jpg";
import PageBanner from "../components/PageBanner";
import Services2 from "../components/Services2";
import Head from "next/head";

function Services({ setShowSideNav }) {

  useEffect(() => {
    setShowSideNav(false);
  }, []);
  
  return (
    <>
      {/* <Hero3 /> */}
      <Head>
        <title>Nick Petroleum | Services</title>
        <meta name="description" content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner
        bannerBg={bannerBg}
        currentPage="Services"
        heading="What We Do"
      />
      <Services2 />
      {/* <Process /> */}
      {/* <ProjectFilter2 /> */}
    </>
  );
}

export default Services;
