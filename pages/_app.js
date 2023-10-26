import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/style.scss";
import "../styles/globals.css";
import Header3 from "../components/Header3";
import TopNav from "../components/TopNav";
import Footer2 from "../components/Footer2";
import Carousel from "../components/Carousel";
import { GlobalContextProvider } from "../context/globalContext";
import Image from "next/image";
import home_background from "../assets/img/home_background.jpg";
import { useGlobalContext } from "../context/globalContext";
import SideNav from "../components/SideNav";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const { showSideNav, handleShowSideNav } = useGlobalContext();

  console.log("Test", showSideNav);

  return (
    <>
      {/* <Header3 /> */}
      <GlobalContextProvider>
        <div className="z-50 opacity-80">
          <TopNav />
        </div>
        <div className="">
          <SideNav />
        </div>
        <div className="mt-[-10%] z-0">
          <Image src={home_background}/>
          <div className="mt-[-40%] z-0">
          <Carousel />
          </div>
        </div>
        <Component {...pageProps} />
        <Footer2 />
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
