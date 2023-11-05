import React, { useEffect } from "react";
import bannerBg from "../assets/img/nickTwo.jpg";
import Footer1 from "../components/Footer1";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Process from "../components/Process";
import ProjectFilter2 from "../components/ProjectFilter2";
import Services2 from "../components/Services2";
import Hero3 from "../components/Hero3";

function Services({ setShowSideNav }) {

  useEffect(() => {
    setShowSideNav(false);
  }, []);
  
  return (
    <>
      {/* <Hero3 /> */}

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
