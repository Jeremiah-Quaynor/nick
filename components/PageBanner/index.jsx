import Image from "next/image";
import React from "react";

function PageBanner({ bannerBg, currentPage, heading }) {
  return (
    <section
      className="page-banner-wrap bg-cover"
      style={{ backgroundImage: `url(${bannerBg})`, zIndex: 0, backgroundColor: "#facc15" }}
    >
      <div style={{marginTop: "-9%", height: "250px"}}>
        <Image
          src={bannerBg}
          alt="Banner Image"
          style={{ objectFit: "cover", width: "100%", height: "100%", }}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="breadcrumb-wrap" style={{marginTop: "2%"}}>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                    style={{ color: "#001659" }}
                  >
                    {currentPage}
                  </li>
                </ol>
              </nav>
            </div>

            <div className="page-heading text-white">
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
