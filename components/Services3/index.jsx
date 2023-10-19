import React from "react";
import ServicesThreeCard from "./ServicesThreeCard";
import servicesThreeData from "./servicesThreeData";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Services3() {
  return (
    <section className="services-wrapper services-2 section-padding pt-0">
      <div className="services-grid">
        {servicesThreeData.map((data) => (
          <ServicesThreeCard
            key={data.id}
            thumb={data.thumbnail}
            index={data.index}
            heading={data.heading}
            text={
              data.heading === "Our Core Values" ? (
                <ul>
                  <li><AiOutlineCheckCircle className="mr-10"/>Professional Excellence</li>
                  <li><AiOutlineCheckCircle className="mr-10"/>Integrity, transparency and accountability</li>
                  <li>
                  <AiOutlineCheckCircle className="mr-10"/>Standards and quality in line international best practices
                  </li>
                  <li><AiOutlineCheckCircle className="mr-10"/>Respect for the all manner of persons</li>
                  <li>
                  <AiOutlineCheckCircle className="mr-10"/>Practice of Environment, Health and Safety core principles
                    underpinned by the Manual for Energy sector Organizations
                    (Ministry of Energy)
                  </li>
                </ul>
              ) : (
                data.text
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Services3;
