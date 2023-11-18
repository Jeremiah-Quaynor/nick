import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/img/banner.png";
import { FaBars } from "react-icons/fa";
import SideNav from "../../components/SideNav";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../../context/globalContext";
import { useRouter } from "next/router";

function index({ showSideNav, setShowSideNav }) {
  const router = useRouter();
  // const { showSideNav, setShowSideNav, handleShowSideNav } = useGlobalContext();

  // const handleShowSideNav = () => {
  //   setShowSideNav(!showSideNav);
  // };

  return (
    <div className="flex justify-between px-20 z-50">
      <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="my-auto flex flex-row space-x-2 shadow-xs">
        <div className="text-[#0a113b] font-bold 2xl:text-2xl">Menu</div>
        <div
          className="my-auto hover:cursor-pointer"
          onClick={() => {
            setShowSideNav(!showSideNav);
          }}
        >
          {showSideNav ? (
            <div
              onClick={() => setShowSideNav(!showSideNav)}
              className="text-2xl 2xl:text-4xl text-[#0a113b] hover:cursor-pointer hover:text-white my-auto"
            >
              <AiOutlineClose />
            </div>
          ) : (
            <div className="my-auto">
              <FaBars color="#0a113b" />
            </div>
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
