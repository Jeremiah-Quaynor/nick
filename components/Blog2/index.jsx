import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import cardImg from "../../assets/img/featured_news.jpg";
import blogTwoData from "./blogTwoData";
import BlogTwoItem from "./BlogTwoItem";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

function Blog2() {
  return (
    <section className="blog-section section-bg section-padding">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-md-7 col-lg-6 col-12">
            <div className="section-title style-2">
              <p>Our Insights</p>
              <h1>Feature Story</h1>
            </div>
          </div>
          {/* <div className="col-md-5 col-lg-6 mt-4 mt-md-0 text-md-end col-12">
                        <Link href="/news" className="theme-btn theme-2">
                            Blog Insights <BsArrowRight style={{ marginLeft: '10px' }} />
                        </Link>
                    </div> */}
        </div>

        <div className="row">
          <div className="col-lg-6 pr-3 pl-3 pr-lg-5">
            <Image
              src={cardImg}
              alt="News Feature Image"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            {/* <h2 style={{marginTop: "-80%", color: "blue", textAlign: "center"}}>Feature News Story</h2> */}
          </div>
          <div className="col-lg-6">
            <div className="blog-list-view">
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
            <Link
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog2;
