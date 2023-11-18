import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function SevicesTwoCard({ thumbnail, icon, heading, text }) {
  return (
    <div className="col-md-6 col-xl-6 col-12">
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
          <h1 className="tracking-normal ">
            <Link href="/services">{heading}</Link>
          </h1>
          <p>{text}</p>
          <Link href="/services" className="text-sm 2xl:text-lg mt-[3%] hover:text-red-600 flex flex-row space-x-2">
            <div>Read More</div>
            <div className="my-auto">
              <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SevicesTwoCard;
