"use client";
import React, { useState } from "react";
import Topbar from "./Topbar";
import Logo from "../../assets/img/logo.png";
import Link from "next/link";

import OffsetMenu from "../OffsetMenu";
import MobileMenu from "../MobileMenu";

function Header() {
  const [offset, setOffset] = useState(false);
  const handleOffset = () => {
    setOffset(!offset);
  };
  return (
    <>
      <OffsetMenu
        handleOffset={handleOffset}
        className={offset ? "offset-menu show" : "offset-menu"}
      />
      <header className="header-wrap header-1">
        <Topbar />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8 col-lg-3">
              <div className="logo">
                <Link href="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-4 d-block d-lg-none">
              <div className="mobile-nav-wrap">
                <MobileMenu />
              </div>
            </div>
            <div className="col-12 d-none d-md-block col-lg-9">
              <div className="header-contact-info text-lg-right">
                <div className="single-element">
                  <Link href="tel:0553248765">(+1) 555 234-8765</Link>
                  <span>Call Us Now</span>
                </div>
                <div className="single-element">
                  <Link href="mailto:info@webexample.com">info@webexample.com</Link>
                  <span>Mail Us Now</span>
                </div>
                <div className="header-btn d-inline">
                  <Link href="/contact" className="theme-btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
