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

function TeamItem({
  img,
  position,
  name,
  fbLink,
  linkedInLink,
  setShowModal,
  setData,
  details
}) {
  return (
    <div
      className="col-xl-4 col-md-6 col-12 hover:cursor-pointer"
      onClick={() => {
        setShowModal(true);
        setData({
          name: name,
          img: img,
          position: position,
          details: details
        });
      }}
    >
      <div
        className={`single-team-member`}
        style={{ backgroundColor: "white" }}
      >
        <div className="member-img">
          <Image
            src={img}
            alt="member"
            className={
              name.toUpperCase() === "ALIDU ZAKARIA" || name.toUpperCase() === "MARTIN OHENE ANIM"
                ? `w-screen h-screen object-cover mt-[-32%]`
                : name.toUpperCase()  === "AGNES KWAKYE"
                ? `w-screen h-screen object-cover mt-[-24%]`
                : `w-screen h-screen object-cover mt-[-12%]`
            }
          />
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
            <a className="pl-[35%] pt-[35%]">
              <FaFacebookF />
            </a>
          </div>
          <div className="right">
            <a className="pl-[35%] pt-[35%]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
