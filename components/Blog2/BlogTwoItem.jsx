import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function BlogTwoItem({ thumb, author, meta, title, postLink }) {
  return (
    <div className="single-blog-item">
      <div className="featured-thumb bg-cover" style={{backgroundColor: "#f6f6f6", paddingInlineBottom: "10%"}}>
        <Image
          src={thumb}
          alt="News Image"
          style={{ objectFit: "cover", width: "100%", height: "100%", marginTop: "-20%" }}
        />
      </div>
      <div className="post-content">
        <div className="post-meta">
          <div className="post-author">
            <FaUser
              style={{
                marginRight: "5px",

                marginTop: "-3px",
              }}
            />
            <Link href="/">{author}</Link>
          </div>
          <div className="post-date">
            <BiCalendar
              style={{
                marginRight: "5px",

                marginTop: "-2px",
              }}
            />
            <span>{meta}</span>
          </div>
        </div>
        <h3>
          <a href={postLink} target="_blank">
            {title}
          </a>
        </h3>
      </div>
    </div>
  );
}

export default BlogTwoItem;
