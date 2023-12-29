import React from "react";
import Image from "next/image";
import nick_image from "../../assets/img/DSCF0098.jpg";
import nick_image_one from "../../assets/img/DSCF0125.jpg";
import nick_image_two from "../../assets/img/DSCF0170.jpg";
import nick_image_three from "../../assets/img/DSCF0214.jpg";

function index() {
  return (
    <>
    <div className="hidden sm:block">
      <div className="flex flex-row w-full">
        <div className="w-[50%] h-screen">
          <Image src={nick_image} alt="Profile Image" className="w-full h-full object-cover"/>
        </div>
        <div className="flexflex-col space-y-4 items-center justify-center h-screen 2xl:mt-[10%] p-10 w-[50%]">
          <div className="text-[#dc2626] uppercase font-bold pt-[5%]">
            Nick Petroleum Ghana
          </div>
          <div className="leading-10">
            Nick Petroleum Ghana Limited is a private limited liability company
            incorporated under the company{"’"}s code and authorized to trade in
            petroleum products. Nick Petroleum was incorporated in 2015,
            however, trading commenced in 2016 to supply petroleum products to
            our retail outlets. The mission of Nick Petroleum Ghana Limited is
            to market quality first grade fuel, provide first class professional
            services to customers and ensure adequate and reliable supply of
            petroleum products to ensure private individual satisfaction and
            ensure business growth.
          </div>
          <div className="flex flex-row space-x-3">
            <div className="h-[30vh] w-[40vw]">
              <Image src={nick_image_one} alt="Profile Image One" className="h-full w-full object-cover"/>
            </div>
            <div className="h-[30vh] w-[40vw]">
              <Image src={nick_image_two} alt="Profile Image Two" className="h-full w-full object-cover"/>
            </div>
            <div className="h-[30vh] w-[40vw]">
              <Image src={nick_image_three} alt="Profile Image Three" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>

      {/* Meia Query for Small Screens */}
      
    </div>
    
    {/* Media Query for Small Screens  */}
    <div className="block md:hidden mt-10">
      <div className="flex flex-col w-full">
        <div className="p-4">
          <Image src={nick_image} alt="Profile Image" className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <div className="text-[#dc2626] uppercase font-bold pt-[5%]">
            Nick Petroleum Ghana
          </div>
          <div className="leading-10">
            Nick Petroleum Ghana Limited is a private limited liability company
            incorporated under the company{"’"}s code and authorized to trade in
            petroleum products. Nick Petroleum was incorporated in 2015,
            however, trading commenced in 2016 to supply petroleum products to
            our retail outlets. The mission of Nick Petroleum Ghana Limited is
            to market quality first grade fuel, provide first class professional
            services to customers and ensure adequate and reliable supply of
            petroleum products to ensure private individual satisfaction and
            ensure business growth.
          </div>
          <div className="flex flex-col space-y-10">
            <div className="">
              <Image src={nick_image_one} alt="Profile Image One" className="h-[30vh] w-full object-cover"/>
            </div>
            <div className="">
              <Image src={nick_image_two} alt="Profile Image Two" className="h-full w-full object-cover"/>
            </div>
            <div className="">
              <Image src={nick_image_three} alt="Profile Image Three" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>      
    </div>
    </>
  );
}

export default index;
