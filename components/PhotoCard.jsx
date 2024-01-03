import Image from "next/image";

function PhotoCard({ src }) {
  return (
    <div className="col-md-4 col-xl-4 col-8">
      <div className="single-service-card">
        <div className="card-thumb bg-cover">
          <Image
            src={src}
            alt="Thumbnail Image"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        {/* <div className="content">
          <div className="case-cat">
            <Link href="/services">{icon}</Link>
          </div>
          <h1 className="tracking-normal font-bold">
            <Link href="/services">{heading}</Link>
          </h1>
          <p>{text}</p>
          <Link href="/about/whoWeAre" className="text-sm 2xl:text-lg mt-[3%] hover:text-red-600 flex flex-row space-x-2">
            <div>Read More</div>
            <div className="my-auto">
              <BsArrowRight />
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default PhotoCard;