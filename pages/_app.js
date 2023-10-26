import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/style.scss";
import "../styles/globals.css";
import Header3 from "../components/Header3";
import TopNav from "../components/TopNav";
import Footer2 from "../components/Footer2";
import { GlobalContextProvider } from "../context/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header3 /> */}
      <GlobalContextProvider>
        <TopNav />
        <Component {...pageProps} />
        <Footer2 />
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
