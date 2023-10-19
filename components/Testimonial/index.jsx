import React, { useState } from "react";
import img1 from "../../assets/img/blog/author3.jpg";
import logo from "../../assets/img/banner.png";
import Image from "next/image";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
// import Image from "Next/image"

function Testimonial() {
  const [testimonial1, setTestimonial1] = useState(true);
  const [testimonial2, setTestimonial2] = useState(false);
  const [testimonial3, setTestimonial3] = useState(false);

  const toggleTestimonial1 = () => {
    setTestimonial1(true);
    setTestimonial2(false);
    setTestimonial3(false);
  };

  const toggleTestimonial2 = () => {
    setTestimonial1(false);
    setTestimonial2(true);
    setTestimonial3(false);
  };

  const toggleTestimonial3 = () => {
    setTestimonial1(false);
    setTestimonial2(false);
    setTestimonial3(true);
  };

  return (
    <section className="testimonial-section section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 text-center">
            <div className="section-title-2">
              <div>
                <Image src={logo} alt="logo" width={100} height={100} />
              </div>
              <p style={{ fontSize: "20px" }}>Testimonials</p>
              <h1>Straight from our satisfied customers</h1>
            </div>
          </div>
        </div>

        <div className="row testimonial-tabs-wrapper">
          <div className="col-xl-3 p-xl-0 order-2 order-xl-1">
            <div className="testimonial-nav">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className={testimonial1 ? `nav-link active` : `nav-link`}
                  id="testimonial-id1"
                  data-toggle="pill"
                  href="#testimonial1"
                  role="tab"
                  onClick={toggleTestimonial1}
                >
                  <div className="single-client-tab">
                    <div className="profile-img bg-cover">
                      <FcBusinessman size={50} />
                    </div>
                    <div className="client-info">
                      <h3>Tom</h3>
                      <p>Regular Customer</p>
                    </div>
                  </div>
                </a>
                <a
                  className={testimonial2 ? `nav-link active` : `nav-link`}
                  id="testimonial-id2"
                  data-toggle="pill"
                  href="#testimonial2"
                  role="tab"
                  onClick={toggleTestimonial2}
                >
                  <div className="single-client-tab">
                    <div className="profile-img bg-cover">
                      <FcBusinessman size={50} />
                    </div>
                    <div className="client-info">
                      <h3>Salman Ahmed</h3>
                      <p>Grateful Customer</p>
                    </div>
                  </div>
                </a>
                <a
                  className={testimonial3 ? `nav-link active` : `nav-link`}
                  id="testimonial-id3"
                  data-toggle="pill"
                  href="#testimonial3"
                  role="tab"
                  onClick={toggleTestimonial3}
                >
                  <div className="single-client-tab">
                    <div className="profile-img bg-cover">
                      <FcBusinesswoman size={50} />
                    </div>
                    <div className="client-info">
                      <h3>Mary</h3>
                      <p>Frequent Traveler</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-9 pl-xl-5 order-1 order-xl-2">
            <div className="testimonial-contents">
              <div className="tab-content" id="v-pills-tabContent">
                {testimonial1 && (
                  <div
                    className="tab-pane fade show active"
                    id="testimonial2"
                    role="tabpanel"
                  >
                    <div className="single-testimonial-content">
                      <div className="engginer-img" style={{display: "flex", justifyContent: "center"}}>
                        {/* <Image
                          src={img1}
                          alt="First Image"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />{" "} */}
                      <FcBusinessman size={330} />

                      </div>
                      <div className="content">
                        <div className="rating-star">
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                        </div>
                        <h3>
                          {'"'}I always fill up at this gas station. The prices
                          are consistently lower than other stations in the
                          area, and the service is fast and friendly.{'"'}
                        </h3>
                        {/* <a
                            href="project-details.html"
                            className="theme-btn theme-2"
                        >
                            Case Details <i className="fal fa-long-arrow-right" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                )}
                {testimonial2 && (
                  <div
                    className="tab-pane fade show active"
                    id="testimonial2"
                    role="tabpanel"
                  >
                    <div className="single-testimonial-content">
                      <div className="engginer-img" style={{display: "flex", justifyContent: "center"}}>
                      <FcBusinessman size={330} />
                      </div>
                      <div className="content">
                        <div className="rating-star">
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                        </div>
                        <h3>
                          {'"'}This gas station is my go-to for long road trips.
                          It{"'"}s conveniently located near the highway and has
                          everything I need, from fuel to snacks and drinks.
                          {'"'}
                        </h3>
                        {/* <a
                            href="project-details.html"
                            className="theme-btn theme-2"
                        >
                            Case Details <i className="fal fa-long-arrow-right" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                )}
                {testimonial3 && (
                  <div
                    className="tab-pane fade show active"
                    id="testimonial2"
                    role="tabpanel"
                  >
                    <div className="single-testimonial-content">
                      <div className="engginer-img" style={{display: "flex", justifyContent: "center"}}>
                      <FcBusinesswoman size={330} />
                      </div>
                      <div className="content">
                        <div className="rating-star">
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                          <span className="fas fa-star" />
                        </div>
                        <h3>
                          {'"'}I had a flat tire while driving and pulled into
                          this gas station. The staff was incredibly helpful and
                          got me back on the road in no time. I couldn{"'"}t
                          have asked for better service.{'"'}
                        </h3>
                        {/* <a
                            href="project-details.html"
                            className="theme-btn theme-2"
                        >
                            Case Details <i className="fal fa-long-arrow-right" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
