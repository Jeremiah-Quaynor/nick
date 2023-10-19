import React from "react";
import servicesTwoData from "./servicesTwoData";
import ServicesTwoCard from "./SevicesTwoCard";

function Services2() {
  return (
    <section className="our-service-wrapper section-padding mtm-30">
      <div className="container">
        <p style={{textAlign: "center", marginBottom: "10px"}}>Ongoing Projects and Future Plans
</p>
        <h2 style={{ textAlign: "center" }}>Our Specialty</h2>
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          At Nick Petroleum we pride ourselves in Our innovation and Our ability
          to grow and embrace new Dynamics
        </p>
        <div className="row">
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
