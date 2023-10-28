import React from "react";
import Image from "next/image";
import nick_image from "../../assets/img/nick-6.jpeg";
import nick_image_one from "../../assets/img/nick-3.jpeg";
import nick_image_two from "../../assets/img/nick-2.jpeg";
import nick_image_three from "../../assets/img/nick-1.jpeg";

function index() {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="w-[50%] h-screen">
          <Image src={nick_image} alt="Profile Image" className="w-full h-full object-cover"/>
        </div>
        <div className="flexflex-col space-y-4 items-center justify-center h-screen p-10 w-[50%]">
          <div className="text-[#dc2626] uppercase font-bold">
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
    </div>
  );
}

export default index;
