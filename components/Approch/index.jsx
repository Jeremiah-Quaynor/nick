import React from "react";
import ApprochCard from "./ApprochCard";
import approchData from "./approchData";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Approch() {
  return (
    <>
    <section className="our-approch-wrapper section-bg hidden sm:block">
      <div className="w-[80%] mx-auto p-10">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="section-title text-center">
              <span>Story</span>
              <h1 className="tracking-normal font-bold text-3xl py-4">Who We Are</h1>
              <p>
                Nick Petroleum Ghana Limited is a private limited liability
                company incorporated under the company{"’"}s code and authorized to
                trade in petroleum products. Nick Petroleum was incorporated in
                2015, however, trading commenced in 2016 to supply petroleum
                products to our retail outlets. Nick Petroleum Ghana Limited has
                eleven operating fuel stations with the following product lines;
                PMS, AGO, Kerosene, lubricants and marts. Nick Petroleum is
                wholly owned Ghanaian company with 100% shareholding to Chairman
                Nick Danso Adjei and a citizen of Ghana.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {approchData.map((data) => (
            <ApprochCard
              key={data.id}
              thumbnail={data.thumb}
              icon={data.icon}
              heading={data.heading}
              text={
                data.heading === "Our Core Values" ? (
                  <ul>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Professional Excellence
                    </li>
                    <li>Integrity, transparency and accountability</li>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Standards and quality in line international best practices
                    </li>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Respect for the all manner of persons
                    </li>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Practice of Environment, Health and Safety core principles
                      underpinned by the Manual for Energy sector Organizations
                      (Ministry of Energy)
                    </li>
                  </ul>
                ) : (
                  data.text
                )
              }
              // btnText={data.btnText}
              pageLink={data.pageLink}
            />
          ))}
        </div>
      </div>
    </section>
    
    <section className="our-approch-wrapper section-bg block md:hidden">
      <div className="mx-auto p-10">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="section-title text-center">
              <span>Story</span>
              <h1 className="tracking-normal font-bold text-3xl py-4">Who We Are</h1>
              <p>
                Nick Petroleum Ghana Limited is a private limited liability
                company incorporated under the company{"’"}s code and authorized to
                trade in petroleum products. Nick Petroleum was incorporated in
                2015, however, trading commenced in 2016 to supply petroleum
                products to our retail outlets. Nick Petroleum Ghana Limited has
                eleven operating fuel stations with the following product lines;
                PMS, AGO, Kerosene, lubricants and marts. Nick Petroleum is
                wholly owned Ghanaian company with 100% shareholding to Chairman
                Nick Danso Adjei and a citizen of Ghana.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {approchData.map((data) => (
            <ApprochCard
              key={data.id}
              thumbnail={data.thumb}
              icon={data.icon}
              heading={data.heading}
              text={
                data.heading === "Our Core Values" ? (
                  <ul>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Professional Excellence
                    </li>
                    <li>Integrity, transparency and accountability</li>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Standards and quality in line international best practices
                    </li>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Respect for the all manner of persons
                    </li>
                    <li>
                      <AiOutlineCheckCircle color="#001659" className="mr-5" />
                      Practice of Environment, Health and Safety core principles
                      underpinned by the Manual for Energy sector Organizations
                      (Ministry of Energy)
                    </li>
                  </ul>
                ) : (
                  data.text
                )
              }
              // btnText={data.btnText}
              pageLink={data.pageLink}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Approch;
