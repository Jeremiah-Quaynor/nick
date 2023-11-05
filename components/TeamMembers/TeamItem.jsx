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
      <div className={name === "ALIDU ZAKARIA" ? `single-team-member 2xl:h-[45vh] 2xl:w-fit 2xl:mx-auto` : `single-team-member 2xl:w-fit 2xl:h-[45vh] 2xl:mx-auto 2xl:justify-between`} style={{ backgroundColor: "white"}}>
        <div className="member-img">
          <Image src={img} alt="member" />
          {/* <img src={img} alt="member" /> */}
        </div>
        <div className="member-details">
          <span>{position}</span>
          <h3>{name}</h3>
        </div>
        <div className="social-icons">
          <div className="plus-icon pl-[15%] pt-[15%]">
            <FaPlus />
          </div>
          <div className="top">
            <a href={fbLink} className="pl-[35%] pt-[35%]">
              <FaFacebookF />
            </a>
          </div>
          <div className="right">
            <a href={linkedInLink} className="pl-[35%] pt-[35%]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
