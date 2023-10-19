import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {
  FaClock,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaMap,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import Link from "next/link";

function OffsetMenu({ className, handleOffset }) {
  return (
    <div className={className}>
      <span id="offset-menu-close-btn">
        <FaPlus onClick={handleOffset} />
      </span>
      <div className="offset-menu-wrapper text-white">
        <div className="offset-menu-header">
          <div className="offset-menu-logo">
            <Link href="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="offset-menu-section">
          <h3>About Us</h3>
          <p>
            We must explain to you how all seds this mistakens idea off
            denouncing pleasures and praising pain was born and I will give you
            a completed
          </p>
          <Link href="/contact" className="theme-btn mt-30">
            Consultation
          </Link>
        </div>
        <div className="offset-menu-section">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <span>
                <FaMap />
              </span>
              Rock St 12, Newyork City, USA
            </li>
            <li>
              <span>
                <AiOutlinePhone />
              </span>
              (000) 000-000-0000
            </li>
            <li>
              <span>
                <AiOutlineMail />
              </span>
              info@modinatheme.com
            </li>
            <li>
              <span>
                <FaClock />
              </span>
              Week Days: 09.00 to 18.00
            </li>
            <li>
              <span>
                <FaClock />
              </span>
              Sunday: Closed
            </li>
          </ul>
        </div>
        <div className="offset-menu-footer">
          <div className="offset-menu-social-icon">
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
            <Link href="/">
              <FaLinkedinIn />
            </Link>
            <Link href="/">
              <FaDribbble />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffsetMenu;
