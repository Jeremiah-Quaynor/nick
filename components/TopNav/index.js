import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/img/banner.png";
import { FaBars } from "react-icons/fa";
import SideNav from "../../components/SideNav";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../context/globalContext";

function index() {
  const { showSideNav, setShowSideNav } = useGlobalContext();
  
  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="flex justify-between px-20">
      <div>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="my-auto flex flex-row space-x-2">
        <div className="border-2 border-indigo-600">Menu</div>
        <div
          className="my-auto hover:cursor-pointer"
          onClick={handleShowSideNav}
        >
          {showSideNav ? (
            <div
              onClick={handleShowSideNav}
              className="text-2xl hover:cursor-pointer hover:text-[#c4161c]"
            >
              <AiOutlineClose />
            </div>
          ) : (
            <FaBars />
          )}
        </div>
      </div>
      {showSideNav && <SideNav handleShowSideNav={handleShowSideNav} />}
    </div>
  );
}

export default index;
