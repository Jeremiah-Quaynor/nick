import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context/globalContext";

function index({ showSideNav, setShowSideNav }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] w-[650px] z-50 left-0 overflow-y-auto">
      <div className="pt-[3%] bg-[#0a113b] w-[650px] h-full absolute left-0 animate-in z-10 slide-in-from-left-96 px-10 opacity-100 transform-gpu transition-transform duration-500 ease-in-out delay-150 motion-reduce:transition-none">
        <div
          onClick={() => setShowSideNav(false)}
          className="text-3xl text-white hover:cursor-pointer w-fit h-fit"
        >
          <AiOutlineClose className="hover:text-red-600" />
        </div>
        <div className="space-y-4 h-[52vh] overflow-y-auto">
          <div className="border-b-[1.7px] pt-4 border-red-600 text-[#c4161c] font-semibold">
            <div
              className="hover:cursor-pointer hover:text-white"
              onClick={() => {
                router.push("/");
                setShowSideNav(false);
              }}
            >
              HOME
            </div>
            <div className="pt-2">
              <div className="bg-[#c4161c]">
                <hr />
              </div>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">OUR COMPANY</div>
            <div className="px-2 space-y-2">
              <div className="flex flex-row space-x-2 ">
                <div className="my-auto">
                  <TbMathGreater color="#c4161c" size={10} />
                </div>
                <div className="text-sm text-white ">
                  <div
                    className="hover:cursor-pointer hover:text-[#c4161c]"
                    onClick={() => {
                      router.push("/about/team");
                      setShowSideNav(false);
                    }}
                  >
                    Our Team
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-2 ">
                <div className="my-auto">
                  <TbMathGreater color="#c4161c" size={10} />
                </div>
                <div className="text-sm text-white hover:cursor-pointer hover:text-red-600">
                  <div
                    className="hover:cursor-pointer hover:text-[#c4161c]"
                    onClick={() => {
                      router.push("/about/whoWeAre");
                      setShowSideNav(false);
                    }}
                  >
                    Who We Are
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-2  ">
                <div className="my-auto">
                  <TbMathGreater color="#c4161c" size={10} />
                </div>
                <div className="text-sm text-white hover:cursor-pointer hover:text-red-600">
                  <div
                    className="hover:cursor-pointer hover:text-[#c4161c]"
                    onClick={() => {
                      router.push("/about/careers");
                      setShowSideNav(false);
                    }}
                  >
                    Careers
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="bg-[#c4161c]">
                <hr />
              </div>
            </div>
          </div>
          <div className="text-white font-semibold">
            <div
              className="hover:cursor-pointer hover:text-[#c4161c]"
              onClick={() => router.push("/services")}
            >
              SERVICES
            </div>
            <div className="pt-2">
              <div className="bg-[#c4161c]">
                <hr />
              </div>
            </div>
          </div>
          <div className="text-white font-semibold">
            <div
              className="hover:cursor-pointer hover:text-[#c4161c]"
              onClick={() => router.push("/news")}
            >
              NEWS
            </div>
            <div className="pt-2">
              <div className="bg-[#c4161c]">
                <hr />
              </div>
            </div>
          </div>
          <div className="text-white font-semibold">
            <div
              className="hover:cursor-pointer hover:text-[#c4161c]"
              onClick={() => router.push("/contact")}
            >
              CONTACT US
              <div className="pt-2">
                <div className="pt-2">
                  <div className="bg-[#c4161c]">
                    <hr />
                  </div>
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
