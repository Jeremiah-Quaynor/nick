import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/style.scss";
import "../styles/globals.css";
import Header3 from "../components/Header3";
import TopNav from "../components/TopNav";
import Footer2 from "../components/Footer2";
import Carousel from "../components/Carousel";
import { GlobalContextProvider } from "../context/globalContext";
import Image from "next/image";
import { useGlobalContext } from "../context/globalContext";
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <>
      {/* <Header3 /> */}
      <GlobalContextProvider>
        <div className="z-50 opacity-80 mb-10">
            <TopNav
              showSideNav={showSideNav}
              setShowSideNav={setShowSideNav}
            />  
        </div>
        <div>
          {showSideNav && <SideNav setShowSideNav={setShowSideNav} />}
        </div>
        <Component
          {...pageProps}
          showSideNav={showSideNav}
          setShowSideNav={setShowSideNav}
        />
        {/* <Footer2 /> */}
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
