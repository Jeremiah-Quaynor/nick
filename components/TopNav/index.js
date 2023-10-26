import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/img/banner.png";
import { FaBars } from "react-icons/fa";
import SideNav from "../../components/SideNav";

function index() {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="flex justify-between px-20 z-10">
      <div>
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </div>
      <div className="my-auto flex flex-row space-x-2">
        <div>Menu</div>
        <div className="my-auto hover:cursor-pointer"
        onClick={handleShowSideNav}
        >
          <FaBars />
        </div>
      </div>
      {showSideNav && <SideNav handleShowSideNav={handleShowSideNav}/>}
    </div>
  );
}

export default index;
