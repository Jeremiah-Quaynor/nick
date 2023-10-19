import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function PortfolioOneSlide({ image, category, client, title, desc, btnText }) {
  return (
    <div className="single-project mt-5">
      <div className="project-contents">
        <div className="row">
          <div className="project-details col-lg-4 offset-lg-1 pl-lg-0 order-2 order-lg-1 col-12">
            {/* <div className="project-meta">
                            <a href="/" className="project-cat">
                                {category}
                            </a>
                            <div className="client-info d-inline">
                                <span>
                                    <AiOutlineUser /> Client:
                                </span>{' '}
                                {client}
                            </div>
                        </div> */}
            <h2>{title}</h2>
            <p>{desc}</p>
            {/* <Link href="/project-details" className="read-btn theme-btn">
                            {btnText}
                        </Link> */}
          </div>
          <div className="project-thumbnail col-lg-5 offset-lg-1 p-lg-0 order-1 order-lg-2 col-12">
            <Link href="/" className="popup-gallery bg-cover">
              <Image
                src={image}
                alt="What We Do"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioOneSlide;
