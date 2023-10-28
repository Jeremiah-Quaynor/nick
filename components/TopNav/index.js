import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/img/banner.png";
import { FaBars } from "react-icons/fa";
import SideNav from "../../components/SideNav";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../context/globalContext";

function index({ showSideNav, setShowSideNav }) {
  // const { showSideNav, setShowSideNav, handleShowSideNav } = useGlobalContext();

  // const handleShowSideNav = () => {
  //   setShowSideNav(!showSideNav);
  // };

  return (
    <div className="flex justify-between px-20 z-50">
      <div>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="my-auto flex flex-row space-x-2 shadow-xs">
        <div className="text-[#0a113b] font-bold">Menu</div>
        <div
          className="my-auto hover:cursor-pointer"
          onClick={() => {
            setShowSideNav(!showSideNav);
          }}
        >
          {showSideNav ? (
            <div
              onClick={() => setShowSideNav(!showSideNav)}
              className="text-2xl text-[#0a113b] hover:cursor-pointer hover:text-white"
            >
              <AiOutlineClose />
            </div>
          ) : (
            <FaBars color="#0a113b" />
          )}
        </div>
      </div>
      {/* <div> */}
      {/* {showSideNav && <SideNav  />} */}
      {/* </div> */}
    </div>
  );
}

export default index;
