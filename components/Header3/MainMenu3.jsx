import React from "react";
import logo from "../../assets/img/banner.png";
import MobileMenu from "../MobileMenu";
import Link from "next/link";
import Image from "next/image";

function MainMenu3() {
  return (
    <header className="header-wrap header-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2 col-5 col-md-4">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="logo" width={100}/>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 header-none">
            <div className="main-menu">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link href="/">home 1</Link>
                    </li>
                    <li>
                      <Link href="/home-2">home 2</Link>
                    </li>
                    <li>
                      <Link href="/home-3">home 3</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link href="">Our Company</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/about/team">Our Team</Link>
                    </li>
                    <li>
                      <Link href="/about/whoWeAre">Who We are</Link>
                    </li>
                    <li>
                      <Link href="/about/careers">Careers</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/services">Products & Services</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                {/* <li>
                  <Link href="/contact">Gallery</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 col-6 col-md-5 text-right d-in-flex align-items-left" style={{marginLeft: "-15%"}}>
            <Link href="/contact" className="theme-btn theme-3">
              Contact Us
            </Link>

            <div className="col mobile-menu-bar" style={{display: "flex", justifyContent: "end"}}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainMenu3;
