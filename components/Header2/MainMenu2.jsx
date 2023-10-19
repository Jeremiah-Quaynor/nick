import React, { useState } from "react";
import { FaSearch, FaTh } from "react-icons/fa";
import logo from "../../assets/img/logo-2.png";
import MobileMenu from "../MobileMenu";
import OffsetMenu from "../OffsetMenu";
import Link from "next/link";

function MainMenu2() {
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
      <header className="header-wrap header-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="logo">
                <Link href="/home-2">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="menu-wrapper">
                <div className="main-menu">
                  <ul>
                    <li>
                      <Link href="/home-2">Home</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/">home 1</Link>
                        </li>
                        <li>
                          <Link href="/home-2">home 2</Link>
                        </li>
                        <li>
                          <Link href="/home-3">home 3</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/team">team</Link>
                        </li>
                        <li>
                          <Link href="/faq">faq</Link>
                        </li>
                        <li>
                          <Link href="/projects">projects</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/news">News</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-right">
                <Link href="/contact" className="theme-btn theme-2">
                  Make Appointment
                </Link>
                <Link href="/home-2" className="serach-btn circle-btn">
                  <FaSearch />
                </Link>
                <button
                  type="button"
                  style={{ cursor: "pointer" }}
                  className="offcanvas-btn circle-btn"
                  onClick={handleOffset}
                >
                  <FaTh />
                </button>
              </div>
              <div className="mobile-menu-wrap align-items-center justify-content-center">
                <div className="mobile-nav-wrap">
                  <div id="hamburger">
                    <i className="fal fa-bars" />
                  </div>

                  <div className="mobile-nav">
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainMenu2;
