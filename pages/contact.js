import React, { useEffect } from "react";
import bannerBg from "../assets/img/contact_us-1.jpg";
import ContactForm from "../components/ContactForm";
import ContactUs from "../components/ContactUs";
import Footer1 from "../components/Footer1";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Cta from "../components/Cta";
import Cta2 from "../components/Cta2";
import Cta3 from "../components/Cta3";
import Head from "next/head";

function Contact({ setShowSideNav }) {
  useEffect(() => {
    setShowSideNav(false);
  }, []);

  return (
    <>
      <Head>
        <title>Nick Petroleum | Contact Us</title>
        <meta
          name="description"
          content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner
        bannerBg={bannerBg}
        heading="Contact Us"
        currentPage="Contact"
      />
      <ContactUs />
      <Cta2 />
      <ContactForm title="Write Message" heading="Get In Touch" />
    </>
  );
}

export default Contact;
