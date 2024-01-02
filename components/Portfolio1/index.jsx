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
    <>
    <section className="portfolio-section section-padding pt-0 hidden sm:block">
      <div className="w-[80%] mx-auto p-10">
        <div className="project-wrapper">
          <Swiper navigation className="portfolio-carousel-active owl-carousel">
            {portfolioOneData.map((data) => (
              // <SwiperSlide key={data.id}>
                <PortfolioOneSlide
                  image={data.image}
                  title={data.heading}
                  desc={
                    <div>
                      <p>{data.desc}</p>
                      <>
                        {data.heading === "Existing Bulk Customers" && (
                          <ul className="mt-5 space-y-4">
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>
                                Tobinco Pharmaceuticals Company Limited
                                (Kotobabi)
                              </div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>
                                Royal Systems Company Limited (Dansoman),
                              </div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>DBS Ghana Limited (Spintex)</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>
                                Nick TC Scan (Tema habour) and Nick TC scan
                                (Kotoka International Airport)
                              </div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Deng Company Limited (Alajo)</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Unipass Ghana Limited (East Legon)</div>
                            </li>
                          </ul>
                        )}
                      </>
                    </div>
                  }
                />
              // </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    
    <section className="portfolio-section section-padding pt-0 block md:hidden">
      <div className="mx-auto p-10">
        <div className="project-wrapper">
          <Swiper navigation className="portfolio-carousel-active owl-carousel">
            {portfolioOneData.map((data) => (
              // <SwiperSlide key={data.id}>
                <PortfolioOneSlide
                  image={data.image}
                  title={data.heading}
                  desc={
                    <div>
                      <p>{data.desc}</p>
                      <>
                        {data.heading === "Retail Distribution Network" && (
                          <ul className="mt-5 space-y-2">
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>
                                Dansoman Wesley Grammar Junction Service Station
                              </div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Tema Community 18 Service Station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Spintex Road Service Station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Odorkor Service Station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Kotobabi Filling Station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Manhyia Service Station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Kwadaso Service Station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Suame Service Station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Kasoa station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Nyanyano station</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Dansoman estates</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Sofoline Kumasi</div>
                            </li>
                          </ul>
                        )}
                        {data.heading === "Existing Bulk Customers" && (
                          <ul className="mt-5 space-y-4">
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>
                                Tobinco Pharmaceuticals Company Limited
                                (Kotobabi)
                              </div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>
                                Royal Systems Company Limited (Dansoman),
                              </div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>DBS Ghana Limited (Spintex)</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>
                                Nick TC Scan (Tema habour) and Nick TC scan
                                (Kotoka International Airport)
                              </div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Deng Company Limited (Alajo)</div>
                            </li>
                            <li className="flex flex-row space-x-4">
                              <div className="my-auto">
                                <BsCircleFill className="" color="#001659" />
                              </div>
                              <div>Unipass Ghana Limited (East Legon)</div>
                            </li>
                          </ul>
                        )}
                      </>
                    </div>
                  }
                />
              // </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
}

export default Porfolio1;
