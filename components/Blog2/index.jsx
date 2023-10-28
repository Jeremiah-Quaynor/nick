import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import cardImg from "../../assets/img/nick_main_two.jpg";
import blogTwoData from "./blogTwoData";
import BlogTwoItem from "./BlogTwoItem";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

function Blog2() {
  return (
    <section className="blog-section section-bg section-padding w-[100vw]">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="w-[69%]">
            <div className="section-title style-2 flex justify-between">
              <p className="my-auto">FEATURE STORY</p>
              <h1 className="tracking-wider">LATEST COMPANY NEWS</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 pr-3 pl-3 pr-lg-5">
            <img
              src={cardImg}
              alt="News Feature Image"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            <h2 className="text-white text-2xl font-bold shadow-xl pl-8 mt-[-18%]">
              Stay Focused and Work hard, Chairman Nick Danso Adjei tells the
              youth, April 30, 2022
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="blog-list-view ">
              {blogTwoData.map((data) => (
                <BlogTwoItem
                  key={data.id}
                  thumb={data.thumbnail}
                  author={data.author}
                  meta={data.meta}
                  title={data.title}
                  postLink={data.link}
                />
              ))}
            </div>
            {/* <Link
              style={{
                marginTop: "20px",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
              }}
              href="/news"
            >
              <div className="pr-10">Read More</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog2;
