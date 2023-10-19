import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

function WidGetTouch() {
  return (
    <div className="single-footer-wid site_info_widget">
      <div className="wid-title">
        <h4>Get In Touch</h4>
      </div>
      <div className="contact-us">
        <div className="single-contact-info">
          <div className="icon">
            <i className="fal fa-phone" />
            <a href="tel:+233000000000">
              <AiOutlinePhone />
            </a>
          </div>
          <div className="contact-info">
            <span>Phone Number</span>
            <p>+233 000 000 000</p>
          </div>
        </div>
        <div className="single-contact-info">
          <div className="icon">
            <i className="fal fa-envelope" />
            <a href="mailto:info@nickpetroleum.com">
              <AiOutlineMail />
            </a>
          </div>
          <div className="contact-info">
            <span>Email Address</span>
            <p>info@nickpetroleum.com</p>
          </div>
        </div>
        <div className="single-contact-info">
          <div className="icon">
            <a href="https://maps.app.goo.gl/Kw5Ry2mZMZyNDxuf6">
              <FaMapMarkerAlt />
            </a>
          </div>
          <div className="contact-info">
            <span>Office Address</span>
            <p>48 Mensah Wood Ave, East Legon</p>
          </div>
        </div>
        <div className="single-contact-info">
          <div className="icon">
            <FaClock />
          </div>
          <div className="contact-info">
            <span>Office Hours</span>
            <p>Monday - Friday 08AM - 05PM </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidGetTouch;
