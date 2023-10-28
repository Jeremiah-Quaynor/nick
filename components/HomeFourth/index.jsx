import React from "react";
import Image from "next/image";
import nick_image_one from "../../assets/img/nick-4.jpeg";
import nick_image_two from "../../assets/img/nick-5.jpeg";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";

function index() {
    const router = useRouter();
  return (
    <div className="w-[90%] mx-auto p-5">
      <div className="text-[#dc2626] font-bold mb-4">INSIDE NICK PETROLEUM</div>
      <div className="flex flex-row space-x-8">
        <div className="w-[70vw] h-[70vh] hover:cursor-pointer hover:opacity-70 mb-10">
          <Image
            src={nick_image_one}
            alt="Image One"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[70vw] h-[70vh] hover:cursor-pointer hover:opacity-70">
          <Image
            src={nick_image_two}
            alt="Image Two"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row space-x-8 ">
        <div className="w-[70vw]">
          <div className="font-bold text-[#dc2626] text-xl mt-4">
            OUR SERVICES
          </div>
          <div className="mt-2">
            Nick Petroleum has a growing retail network of fuel service
            stations, where safety and customer service are at the forefront of
            the design.
          </div>
          <div className="flex flex-row space-x-1 mt-3 hover:cursor-pointer hover:text-[#dc2626]">
            <div>Find Out More</div>
            <div className="my-auto">
              <FiArrowRight color="#dc2626" />
            </div>
          </div>
        </div>
        <div className="w-[70vw]">
          <div className="font-bold text-[#dc2626] text-xl mt-4">OUR STORY</div>
          <div className="mt-2">
            Overview of Nick Petroleum{"'"}s comprehensive mining services and
            related investments in mining infrastructure.
          </div>
          <div className="flex flex-row space-x-1 mt-3 hover:cursor-pointer hover:text-[#dc2626]"
          onClick={() => {
            router.push("/about/whoWeAre");
          }}
          >
            <div>Find Out More</div>
            <div className="my-auto">
              <FiArrowRight color="#dc2626" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
