import React from "react";
import { TbMathGreater } from "react-icons/tb";

function index({ handleShowSideNav }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] z-10 overflow-y-auto">
      <div className="bg-[#e5db00] w-[650px] h-full absolute left-0 animate-in slide-in-from-left-96 px-10 opacity-80 transform-gpu transition-transform duration-500 ease-in-out delay-150">
        <div
          onClick={handleShowSideNav}
          className="text-4xl hover:cursor-pointer hover:text-white w-fit h-fit"
        >
          x
        </div>
        <div className="space-y-2">
          <div className="border-4 border-indigo-600 pb-3 pt-3 text-[#c4161c] font-semibold">
            HOME
          </div>
          <div>
            <div className="text-white font-semibold">OUR COMPANY</div>
            <div className="px-2 space-y-2">
              <div className="flex flex-row space-x-2">
                <div className="my-auto">
                  <TbMathGreater color="#c4161c" size={10}/>
                </div>
                <div className="text-sm text-white">Our Team</div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="my-auto">
                  <TbMathGreater color="#c4161c" size={10}/>
                </div>
                <div className="text-sm text-white">Who We Are</div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="my-auto">
                  <TbMathGreater color="#c4161c" size={10}/>
                </div>
                <div className="text-sm text-white">Careers</div>
              </div>
            </div>
          </div>
          <div className="text-white font-semibold">SERVICES</div>
          <div className="text-white font-semibold">NEWS</div>
          <div className="text-white font-semibold">CONTACT US</div>
        </div>
      </div>
    </div>
  );
}

export default index;
