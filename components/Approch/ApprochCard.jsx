import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

function ApprochCard({ thumbnail, icon, heading, text, btnText, pageLink }) {
  return (
    <>
      <div className="col-md-6 col-xl-4 col-12">
        <div className="single-approch-card">
          <div className="card-thumb bg-cover">
            <Image
              src={thumbnail}
              alt="Mission-Vision-Values"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="content">
            <div className="case-cat">
              <Link href="">{icon}</Link>
            </div>
            <h3 className="font-semibold">
              <Link href={""}>{heading}</Link>
            </h3>
            <p>{text}</p>
            {/* <Link href={pageLink} className="read-btn">
                            {btnText} <BsArrowRight />
                        </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ApprochCard;
