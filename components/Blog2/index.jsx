import React from "react";
import cardImg from "../../assets/img/DSCF0046.jpg";
import blogTwoData from "./blogTwoData";
import BlogTwoItem from "./BlogTwoItem";
import Image from "next/image";

function Blog2() {
  return (
    <>
    <section className="blog-section section-bg section-padding w-screen hidden sm:block">
      <div className="w-[90%] mx-auto">
        <div className="row align-items-center mb-30">
          <div className="w-[72%] 2xl:w-[61%]">
            <div className="section-title style-2 flex justify-between">
              <p className="my-auto font-bold text-3xl">FEATURE STORY</p>
              <h1 className="tracking-wider font-bold text-xl">LATEST COMPANY NEWS</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 pr-3 pl-3 pr-lg-5">
            <Image
              src={cardImg}
              alt="News Feature Image"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "90%",
                // opacity: 0.7,
              }}
            />
            <h2 className="text-2xl font-bold pl-8 2xl:mt-[-5%] text-[#0a113b]">
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
    
    {/* Media Query for Small Screens */}
    <section className="blog-section section-bg section-padding w-screen block md:hidden">
      <div className="w-[90%] mx-auto">
        <div className="row align-items-center mb-30">
          <div className="">
            <div className="section-title style-2 flex flex-col space-y-2">
              <p className="my-auto font-bold text-2xl">Feature Story</p>
              <h1 className="tracking-wide font-bold text-xl">Latest Company News</h1>
            </div>
          </div>
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
            <h2 className="text-[#0a113b] text-lg">
              Stay Focused and Work hard, Chairman Nick Danso Adjei tells the
              youth, April 30, 2022
            </h2>
          </div>
          <div className="col-lg-6 mt-20">
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
    </>
  );
}

export default Blog2;
