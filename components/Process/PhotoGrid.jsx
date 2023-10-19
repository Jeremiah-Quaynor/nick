import React from "react";
import img3 from "../../assets/img/nick_main.JPG";
import img2 from "../../assets/img/nick_main_two.JPG";
import img1 from "../../assets/img/nick_main_three.JPG";
import Image from "next/image";

function PhotoGrid() {
  return (
    <div className="col-xl-5 col-12">
      <div className="photo-style-grid">
        <div className="bg-cover" style={{width: "250px", height: "250px", marginBottom: "-100px", zIndex: 10, border: "10px solid white"}}>
          <Image src={img2} alt="First Image" 
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div
          className="main-img bg-cover"
        >
            <Image src={img3} alt="Second Image" 
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div
          className="bottom-img bg-cover"
        >
         <Image src={img1} alt="Third Image" 
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />   
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
