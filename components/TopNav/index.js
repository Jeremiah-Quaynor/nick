import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/img/banner.png";
import { FaBars } from "react-icons/fa";
import SideNav from "../../components/SideNav";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../context/globalContext";

function index() {
  const { showSideNav, setShowSideNav, handleShowSideNav } = useGlobalContext();
  
  // const handleShowSideNav = () => {
  //   setShowSideNav(!showSideNav);
  // };

  return (
    <div className="flex justify-between px-20 z-50">
      <div>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="my-auto flex flex-row space-x-2">
        <div className="text-[#e8e035] font-semibold">Menu</div>
        <div
          className="my-auto hover:cursor-pointer"
          onClick={handleShowSideNav}
        >
          {showSideNav ? (
            <div
              onClick={handleShowSideNav}
              className="text-2xl text-[#e8e035] hover:cursor-pointer hover:text-white"
            >
              <AiOutlineClose />
            </div>
          ) : (
            <FaBars color="#e8e035"/>
          )}
        </div>
      </div>
      {/* <div> */}
        {showSideNav && <SideNav handleShowSideNav={handleShowSideNav} />}
      {/* </div> */}
    </div>
  );
}

export default index;
