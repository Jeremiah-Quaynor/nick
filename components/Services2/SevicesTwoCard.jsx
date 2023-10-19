import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function SevicesTwoCard({ thumbnail, icon, heading, text }) {
  return (
    <div className="col-md-6 col-xl-4 col-12">
      <div className="single-service-card">
        <div className="card-thumb bg-cover">
          <Image
            src={thumbnail}
            alt="Thumbnail Image"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="content">
          <div className="case-cat">
            <Link href="/services">{icon}</Link>
          </div>
          <h3>
            <Link href="/services">{heading}</Link>
          </h3>
          <p>{text}</p>
          <Link href="/services" className="read-btn">
            Read More <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SevicesTwoCard;
