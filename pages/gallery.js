import Head from "next/head";
import { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import bannerBg from "../assets/img/DSCF0071.jpg";
import PhotoCard from "../components/PhotoCard";
import img1 from "../assets/img/DSCF0046.jpg";
import img2 from "../assets/img/DSCF0047.jpg";
import img3 from "../assets/img/DSCF0059.jpg";
import img4 from "../assets/img/DSCF0071.jpg";
import img5 from "../assets/img/DSCF0076.jpg";
import img6 from "../assets/img/DSCF0085.jpg";
import img7 from "../assets/img/DSCF0098.jpg";
import img8 from "../assets/img/DSCF0099.jpg";
import img9 from "../assets/img/DSCF0106.jpg";
import img10 from "../assets/img/DSCF0118.jpg";
import img11 from "../assets/img/DSCF0125.jpg";
import img12 from "../assets/img/DSCF0139.jpg";
import img13 from "../assets/img/DSCF0141.jpg";
import img14 from "../assets/img/DSCF0143.jpg";
import img15 from "../assets/img/DSCF0170.jpg";
import img16 from "../assets/img/DSCF0171.jpg";
import img17 from "../assets/img/DSCF0176.jpg";
import img18 from "../assets/img/DSCF0205.jpg";
import img19 from "../assets/img/DSCF0209.jpg";
import img20 from "../assets/img/DSCF0214.jpg";
import img21 from "../assets/img/DSCF0221.jpg";
import img22 from "../assets/img/DSCF0229.jpg";
import img23 from "../assets/img/DSCF0234.jpg";
import img24 from "../assets/img/DSCF0237.jpg";
import img25 from "../assets/img/DSCF0241.jpg";
import img26 from "../assets/img/DSCF0246.jpg";
import img27 from "../assets/img/DSCF0250.jpg";
import img28 from "../assets/img/nick-1.jpeg";
import img29 from "../assets/img/nick-2.jpeg";
import img30 from "../assets/img/nick-3.jpeg";
import img31 from "../assets/img/nick-4.jpeg";
import img32 from "../assets/img/nick-5.jpeg";
import img33 from "../assets/img/nick-6.jpeg";

function Gallery({ setShowSideNav }) {
  useEffect(() => {
    setShowSideNav(false);
  }, []);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
  ];

  return (
    <>
      {/* <Hero3 /> */}
      <Head>
        <title>Nick Petroleum | Gallery</title>
        <meta
          name="description"
          content="Fuel your success with Nick Petroleum - the premier provider of high-quality fuels and exceptional customer service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner bannerBg={bannerBg} currentPage="Gallery" heading="Gallery" />
      <div className="row p-10">
        {images.map((image, index) => {
          return <PhotoCard key={index} src={image} />;
        })}
      </div>
    </>
  );
}

export default Gallery;
