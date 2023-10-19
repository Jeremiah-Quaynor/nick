import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroImg from "../../assets/img/home3/hero-3.jpg";
import Link from "next/link";
import NickImage from "../../assets/img/nick_main.JPG";
// import NickVideo from "../../assets/img/Video/Nick.mp4";
import Image from "next/image";

function Hero3() {
  return (
    <section className="hero-slide-wrapper hero-3">
      <div className="slide-items">
        <div className="single-slide bg-cover">
          <div className="container">
            <div className="row align-items-center text-center text-xl-start">
              <div className="col-12 col-lg-8 offset-lg-2 offset-xl-0 col-xl-7">
                <div className="hero-contents">
                  <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
                    Welcome To Nick Petroleum
                  </p>
                  <h1>Fuel Up Your Life</h1>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "normal",
                      marginTop: "2%",
                    }}
                  >
                    Stay on the go with our High Quality fuels and top-notch
                    services
                  </p>
                  <Link href="/services" className="theme-btn theme-3">
                    Our Services <BsArrowRight />
                  </Link>
                  <Link href="/about" className="theme-btn theme-3">
                    learn more
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 d-none d-xl-block">
                <div className="hero-img bg-cover">
                  <Image
                    src={NickImage}
                    alt="Hero Image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  {/* <video autoplay loop muted width={"100%"} height={"100%"}>
                    <source
                      src="../../assets/img/Video/Nick.mp4"
                      type="video/mp4"
                    />
                  </video>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero3;
