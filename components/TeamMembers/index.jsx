import React from "react";
import teamData from "./teamData";
import TeamItem from "./TeamItem";

function TeamMembers() {
  return (
    <section className="">
      <h1
        className="text-center text-2xl 2xl:text-4xl font-bold tracking-normal text-[#f4e733] bg-black/50 py-10 bg-gradient-to-r from-[#0a113b] to-[#d7454d]"
      >
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
              fbLink={data.fbLink}
              linkedInLink={data.linkedInLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
