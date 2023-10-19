import React from "react";
import teamData from "./teamData";
import TeamItem from "./TeamItem";

function TeamMembers() {
  return (
    <section className="team-section section-padding">
      <h1
        className="text-center mt-20"
        style={{
          color: "#001659",
        }}
      >
        Our Team
      </h1>
      <div className="container">
        <div className="row mtm-30">
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
