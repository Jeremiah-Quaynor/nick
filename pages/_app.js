import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/style.scss";
import "../styles/globals.css";
import Header3 from "../components/Header3";
import TopNav from "../components/TopNav";
import Footer2 from "../components/Footer2";
import { GlobalContextProvider } from "../context/globalContext";
import Image from "next/image";
import home_background from "../assets/img/home_background.jpg";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header3 /> */}
      <GlobalContextProvider>
        <div className="z-10  opacity-80 top-0">
          <TopNav />
        </div>
        <div className="mt-[-10%]">
          <Image src={home_background}/>
        </div>
        <Component {...pageProps} />
        <Footer2 />
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
