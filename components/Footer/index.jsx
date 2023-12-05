import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/img/banner.png";
import Image from "next/image";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#0a113b] w-screen">
        <div className="flex justify-between w-[80%] mx-auto p-10">
          <div className="space-y-4 w-[30%]">
            <div className="mt-[-10%] 2xl:mt-[-5%]">
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </div>
            <div className="space-y-2">
              <div className="text-[#f7eb09]">About Us</div>
              <div className="text-white">
                Nick Petroleum Ghana Limited is a private limited liability
                company incorporated under the company{"’"}s code and authorized
                to trade in petroleum products. Nick Petroleum was incorporated
                in 2015, however, trading commenced in 2016 to supply petroleum
                products to our retail outlets.
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="text-[#f7eb09]">Follow Us</div>
              <div className="flex flex-row space-x-4 my-auto">
                <div
                // className="w-[2.5vw] h-[5vh] rounded-full border-2 border-indigo-600"
                className="hover:cursor-pointer hover:text-[#f7eb09]"
                >
                  <FaFacebookF  />
                </div>
                <div className="hover:cursor-pointer hover:text-[#f7eb09]">
                  <FaTwitter  />
                </div>
                <div className="hover:cursor-pointer hover:text-[#f7eb09]">
                  <FaInstagram  />
                </div>
                <div className="hover:cursor-pointer hover:text-[#f7eb09]">
                  <FaYoutube  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex flex-row space-x-5">
              <div
                className="text-[#f7eb09] hover:cursor-pointer hover:text-white"
                onClick={() => router.push("/")}
              >
                HOME
              </div>
              <div
                className="text-[#f7eb09] hover:cursor-pointer hover:text-white"
                onClick={() => router.push("/services")}
              >
                SERVICES
              </div>
              <div className="flex flex-col space-y-4">
                <div className="text-[#f7eb09]">ABOUT US</div>
                <div className="space-y-2 text-white ">
                  <div
                    className="hover:cursor-pointer hover:text-[#c3161d]"
                    onClick={() => router.push("/about/team")}
                  >
                    Our Team
                  </div>
                  <div
                    className="hover:cursor-pointer hover:text-[#c3161d]"
                    onClick={() => router.push("/about/whoWeAre")}
                  >
                    Who We Are
                  </div>
                  <div
                    className="hover:cursor-pointer hover:text-[#c3161d]"
                    onClick={() => router.push("/about/careers")}
                  >
                    Careers
                  </div>
                </div>
              </div>
              <div
                className="text-[#f7eb09] hover:cursor-pointer hover:text-white"
                onClick={() => router.push("/news")}
              >
                COMPANY NEWS
              </div>
              <div
                className="text-[#f7eb09] hover:cursor-pointer hover:text-white"
                onClick={() => router.push("/contact")}
              >
                CONTACT US
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-[#292f54]">
        <div className="w-[80%] mx-auto text-sm text-white text-left p-10">
          © Copyright 2023 Nick Petroleum. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default index;
