import React from "react";
import Image from "next/image";
import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function TeamItem({ img, position, name, fbLink, linkedInLink }) {
  return (
    <div className="col-xl-4 col-md-6 col-12">
      <div className="single-team-member" style={{ backgroundColor: "white"}}>
        <div className="member-img">
          <Image src={img} alt="member" style={{ width: "100%", height: "100%", objectFit: 'cover'}}/>
          {/* <img src={img} alt="member" /> */}
        </div>
        <div className="member-details">
          <span>{position}</span>
          <h3>{name}</h3>
        </div>
        <div className="social-icons">
          <div className="plus-icon">
            <FaPlus />
          </div>
          <div className="top">
            <a href={fbLink}>
              <FaFacebookF />
            </a>
          </div>
          <div className="right">
            <a href={linkedInLink}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
