import React, { useState } from "react";
import teamData from "./teamData";
import TeamItem from "./TeamItem";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

function TeamMembers() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      name: "",
      img: "",
      position: "",
      details: ""
    },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div>
          <div className="fixed z-50 inset-0 overflow-y-auto font-montserrat">
            <div className={data.name === "Nick Danso Adjei" ? `h-screen sm:block sm:p-0 bg-black/40` : `h-fit 2xl:h-screen sm:block sm:p-0 bg-black/40`}>
              <div className="flex flex-col p-10 animate-in slide-in-from-top duration-700">
                <div
                  className="flex justify-end w-[80%] hover:cursor-pointer text-white hover:text-[#f608e2]"
                  onClick={handleCloseModal}
                >
                  <IoMdClose size={30} />
                </div>
                <div className="bg-white rounded-lg p-8 w-[50vw] mx-auto shadow-sm ">
                  <div className="w-48 h-48 rounded-full bg-gray-200/20 mx-auto">
                    <Image
                      src={data.img.src}
                      alt="User Image"
                      className="h-full w-full rounded-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <div className="mt-5 flex items-center justify-center flex-col ">
                      <div className="space-y-4">
                        <div className="flex items-center flex-col">
                          <div className="px-10 py-1 rounded-lg bg-[#0a113b] w-fit text-xl text-white uppercase mb-2">
                            Name
                          </div>
                          <div className="my-auto font-semibold text-[#ff5e14] text-lg">{data.name}</div>
                        </div>
                        <div className="flex items-center flex-col">
                          <div className="px-10 py-1 rounded-lg bg-[#0a113b] text-xl text-white uppercase mb-2">
                            Position
                          </div>
                          <div className="my-auto font-semibold text-[#ff5e14] text-lg">{data.position}</div>
                        </div>
                        <div>
                          {data.details}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="">
        <h1 className="text-center text-6xl font-bold tracking-normal text-[#f4e733] bg-black/50 py-20 bg-gradient-to-r from-[#0a113b] to-[#d7454d]">
          OUR TEAM
        </h1>
        <div className="m-10 p-10 mx-auto">
          <div className="row ">
            {teamData.map((data) => (
              <TeamItem
                key={data.id}
                img={data.img}
                name={data.name}
                position={data.position}
                details={data.details}
                fbLink={data.fbLink}
                linkedInLink={data.linkedInLink}
                setShowModal={setShowModal}
                setData={setData}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamMembers;
