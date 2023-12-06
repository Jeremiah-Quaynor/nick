import Head from "next/head";
import Hero3 from "../../../components/Hero3";
import Hero1 from "../../../components/Hero1";
import PageBanner from "../../../components/PageBanner";
import bannerBg from "../../../assets/img/careers.jpg";
import NickImage from "../../../assets/img/nick-3.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import TopNav from "../../../components/TopNav";

export default function Careers({ showSideNav, setShowSideNav }) {
  useEffect(() => {
    setShowSideNav(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Nick Petroleum | Careers</title>
        <meta
          name="description"
          content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mt-[5%] hidden sm:block">{}</div>
        <PageBanner
          bannerBg={bannerBg}
          heading="Careers"
          currentPage="Careers"
        />
        <div style={{ width: "100%", height: "800px" }}>
          <Image
            src={NickImage}
            alt="Careers"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <h1 className="text-4xl 2xl:text-6xl text-white mt-[-40%] 2xl:mt-[-15%] text-center tracking-normal hidden sm:block">There are no careers available</h1>
          <h1 className="text-4xl text-white mt-[-90%] text-center tracking-normal block md:hidden">There are no careers available</h1>
        </div>
        {/* <Hero3 /> */}
        {/* <TeamMembers/> */}
      </main>
    </div>
  );
}
