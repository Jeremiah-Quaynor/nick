import React from "react";
import servicesTwoData from "./servicesTwoData";
import ServicesTwoCard from "./SevicesTwoCard";

function Services2() {
  return (
    <section className="our-service-wrapper section-padding mtm-30 2xl:text-3xl 2xl:leading-loose">
      <div className="w-[90%] 2xl:w-[80%] mx-auto">
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          At Nick Petroleum we pride ourselves in Our innovation and Our ability
          to grow and embrace new Dynamics
        </p>
        <div className="row flex justify-center items-center">
          {servicesTwoData.map((data) => (
            <ServicesTwoCard
              key={data.id}
              thumbnail={data.thumbnail}
              icon={data.icon}
              heading={data.heading}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services2;
