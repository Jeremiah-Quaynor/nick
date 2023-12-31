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
    <>
      <div className="hidden sm:block">
        <div className="flex justify-between px-20 z-50">
          <div
            className="hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src={Logo} alt="Logo" width={100} height={100} />
          </div>
          <div
            className="my-auto flex flex-row space-x-2 shadow-xs hover:cursor-pointer"
            onClick={() => {
              setShowSideNav(!showSideNav);
            }}
          >
            <div className="text-[#0a113b] font-bold">Menu</div>
            <div className="my-auto hover:cursor-pointer">
              {showSideNav ? (
                <div
                  onClick={() => setShowSideNav(!showSideNav)}
                  className="text-2xl text-[#0a113b] hover:cursor-pointer hover:text-white my-auto"
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
        </div>
      </div>

      {/* Media Query for Small Screens  */}
      <div className="flex justify-between px-4 pb-20 z-50 block md:hidden">
        <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>
        <div
          className="my-auto flex flex-row space-x-2 shadow-xs"
          onClick={() => {
            setShowSideNav(!showSideNav);
          }}
        >
          <div className="text-[#0a113b] font-bold">Menu</div>
          <div className="my-auto hover:cursor-pointer">
            {showSideNav ? (
              <div
                onClick={() => setShowSideNav(!showSideNav)}
                className="text-2xl text-[#0a113b] hover:cursor-pointer hover:text-white my-auto"
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
      </div>
    </>
  );
}

export default index;
