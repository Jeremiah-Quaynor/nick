import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper.css';
import portfolioOneData from "./porfolioOneData";
import PortfolioOneSlide from "./PortfolioOneSlide";
import { BsCircleFill } from "react-icons/bs";

SwiperCore.use([Navigation]);

function Porfolio1() {
  return (
    <section className="portfolio-section section-padding pt-0">
      <div className="container">
        <div className="project-wrapper">
          <Swiper navigation className="portfolio-carousel-active owl-carousel">
            {portfolioOneData.map((data) => (
              <SwiperSlide key={data.id}>
                <PortfolioOneSlide
                  image={data.image}
                  // imgLink={data.imgLink}
                  // category={data.category}
                  // client={data.client}
                  title={data.heading}
                  desc={
                    <div>
                      <p>{data.desc}</p>
                      <>
                        {data.heading === "Retail Distribution Network" && (
                          <ul className="mt-5">
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Dansoman Wesley Grammar Junction Service Station
                            </li>
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Tema Community 18 Service Station
                            </li>
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Spintex Road Service Station
                            </li>
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Odorkor Service Station
                            </li>
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Kotobabi Filling Station
                            </li>
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Manhyia Service Station
                            </li>
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Kwadaso Service Station
                            </li>
                            <li>
                              <BsCircleFill className="mr-10" color="#001659" />
                              Suame Service Station
                            </li>
                          </ul>
                        )}
                        {data.heading === "Existing Bulk Customers" && (
                          <ul className="mt-5">
                            <li>
                            <BsCircleFill className="mr-10" color="#001659" />Tobinco Pharmaceuticals Company Limited (Kotobabi)
                            </li>
                            <li><BsCircleFill className="mr-10" color="#001659" />Royal Systems Company Limited (Dansoman),</li>
                            <li><BsCircleFill className="mr-10" color="#001659" />DBS Ghana Limited (Spintex)</li>
                            <li>
                            <BsCircleFill className="mr-10" color="#001659" />Nick TC Scan (Tema habour) and Nick TC scan
                              (Kotoka International Airport)
                            </li>
                            <li><BsCircleFill className="mr-10" color="#001659" />Deng Company Limited (Alajo)</li>
                            <li><BsCircleFill className="mr-10" color="#001659" />Unipass Ghana Limited (East Legon)</li>
                          </ul>
                        )}
                      </>
                    </div>
                  }
                  // btnText={data.btnText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Porfolio1;
