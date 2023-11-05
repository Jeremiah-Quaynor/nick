import Head from "next/head";
import Footer1 from "../components/Footer1";
import Hero1 from "../components/Hero1";
import PageBanner from "../components/PageBanner";
import bannerBg from "../assets/img/global-connections.jpg";
import Blog2 from "../components/Blog2";
import { useEffect } from "react";

export default function News({ setShowSideNav }) {
  useEffect(() => {
    setShowSideNav(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Nick Petroleum | News</title>
        <meta
          name="description"
          content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero1 /> */}
      <PageBanner
        bannerBg={bannerBg}
        heading="Our Feature News"
        currentPage="News"
      />
      <Blog2 />

      {/* <Footer1 /> */}
    </div>
  );
}
