import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

function BlogTwoItem({ thumb, author, meta, title, postLink }) {
  return (
    <>
    <div className="single-blog-item border-b-[1.7px] border-blue-600 hidden sm:block">
      <div
        className="featured-thumb bg-cover"
        style={{ backgroundColor: "#f6f6f6", paddingInlineBottom: "10%" }}
      >
        <Image
          src={thumb}
          alt="News Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            marginTop: "-20%",
          }}
        />
      </div>
      <div className="post-content">
        <div className="post-meta">
          {/* <div className="post-author">
            <FaUser
              style={{
                marginRight: "5px",

                marginTop: "-3px",
              }}
            />
            <Link href="/">{author}</Link>
          </div> */}
          <div className="post-date">
            {/* <BiCalendar
              style={{
                marginRight: "5px",

                marginTop: "-2px",
              }}
            /> */}
            <span>{meta}</span>
          </div>
        </div>
        <h3>
          <a href={postLink} target="_blank">
            {title}
          </a>
        </h3>
        <Link
          style={{
            marginTop: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
          }}
          href="/news"
        >
          <div className="pr-4">Read More</div>
          <div className="my-auto">
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
    
    {/* Media Query for Small Screens */}
    <div className="single-blog-item border-b-[1.7px] border-blue-600 block md:hidden">
      <div
        className="bg-cover"
        style={{ backgroundColor: "#f6f6f6", height: "200px"}}
      >
        <Image
          src={thumb}
          alt="News Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="post-content">
        <div className="post-meta">
          <div className="post-date">
            <span>{meta}</span>
          </div>
        </div>
        <h3>
          <a href={postLink} target="_blank">
            {title}
          </a>
        </h3>
        <Link
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
          }}
          href="/news"
        >
          <div className="pr-4">Read More</div>
          <div className="my-auto">
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default BlogTwoItem;
