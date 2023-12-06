import React from "react";
import Image from "next/image";
import nick_image from "../../assets/img/nick-2.jpeg";
import { AiFillEye } from "react-icons/ai";
import { FaBullseye, FaRegHandshake } from "react-icons/fa";

function index() {
  return (
    <div>
      <div className="w-screen h-[90vh] relative hidden sm:block">
        <Image
          src={nick_image}
          alt="Background Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a113b] rounded-r-full w-[70vw] z-10 h-full text-center text-white text-2xl font-bold">
          <div className="h-screen my-auto flex items-center justify-center">
            <div className="flex flex-row space-x-5 text-sm mx-auto my-auto w-[50vw] p-5">
              <div className="flex flex-row ">
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <FaBullseye size={40} color="#f7eb09" />
                    </div>
                    <div className="text-left leading-5">
                      The mission of Nick Petroleum Ghana Limited is to market
                      quality first grade fuel, provide first class professional
                      services to customers and ensure adequate and reliable
                      supply of petroleum products to ensure private individual
                      satisfaction and ensure business growth.
                    </div>
                  </div>
                  <div className="bg-white w-full h-[0.3vh]"></div>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <FaRegHandshake size={40} color="#f7eb09" />
                    </div>
                    <div className="text-left">
                      <ul>
                        <li>Customer Satisfaction</li>
                        <li>Professionalism</li>
                        <li>Reliability</li>
                        <li>Teamwork</li>
                        <li>Integrity</li>
                        <li>Accountability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white w-[1vw] "></div>
              <div className="flex flex-col space-y-4">
                <div>
                  <AiFillEye size={40} color="#f7eb09" />
                </div>
                <div className="text-left leading-5">
                  The vision of Nick Petroleum Ghana Limited is to become one of
                  a first-class provider of petroleum products and services in
                  Ghana and beyond through the supply of quality products to
                  individual consumers, businesses and the government
                  institutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Query for Small Screens  */}
      <div className="w-screen h-screen block md:hidden flex flex-col mt-10">
        <div>
          <Image src={nick_image} alt="Background Image" className="" />
        </div>
        <div className="flex flex-col bg-[#0a113b] mb-20 h-full text-center text-white text-xl font-bold">
          <div className="h-screen my-auto flex items-center justify-center">
            <div className="flex flex-col text-sm mx-auto my-auto p-4 space-y-6">
              <div className="flex flex-col">
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <FaBullseye size={40} color="#f7eb09" />
                    </div>
                    <div className="text-left leading-5">
                      The mission of Nick Petroleum Ghana Limited is to market
                      quality first grade fuel, provide first class professional
                      services to customers and ensure adequate and reliable
                      supply of petroleum products to ensure private individual
                      satisfaction and ensure business growth.
                    </div>
                  </div>
                  <div className="bg-white w-full h-[0.3vh]"></div>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <FaRegHandshake size={40} color="#f7eb09" />
                    </div>
                    <div className="text-left">
                      <ul>
                        <li>Customer Satisfaction</li>
                        <li>Professionalism</li>
                        <li>Reliability</li>
                        <li>Teamwork</li>
                        <li>Integrity</li>
                        <li>Accountability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="bg-white w-[1vw] "></div> */}
              <div className="flex flex-col space-y-4">
                <div>
                  <AiFillEye size={40} color="#f7eb09" />
                </div>
                <div className="text-left leading-5">
                  The vision of Nick Petroleum Ghana Limited is to become one of
                  a first-class provider of petroleum products and services in
                  Ghana and beyond through the supply of quality products to
                  individual consumers, businesses and the government
                  institutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
