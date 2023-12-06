import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import backgroundImageOne from "../../assets/img/carousel_image_1.png";
import backgroundImageTwo from "../../assets/img/carousel_image_2.png";
import backgroundImageThree from "../../assets/img/carousel_image_3.png";

function Carousel({ autoSlide = true, autoSlideInterval = 5000 }) {
  const [curr, setCurr] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  const slides = [
    {
      text: "Fuel Up your Life",
      desc: "Stay on the go with our high quality fuels and top-notch service",
      image: backgroundImageOne,
    },
    {
      text: "We've got you covered",
      desc: "Our competitive prices don't compromise the quality of our fuels and services",
      image: backgroundImageTwo,
    },
    {
      text: "Our Customers are our priority",
      desc: "We offer the best services to our customers",
      image: backgroundImageThree,
    },
  ];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => {
    setShowText(false);
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  // useEffect(() => {
  //   if (autoSlide) {
  //     // Trigger the auto-slide on component mount
  //     const slideInterval = setInterval(next, autoSlideInterval);
  //     return () => clearInterval(slideInterval);
  //   }

  //   setTimeout(() => {
  //     setShowText(true);
  //   }, 3000);
  // }, [autoSlide, autoSlideInterval]);

  useEffect(() => {
    if (autoSlide) {
      // Timer to show text for 3 seconds out of every 5 seconds
      const textTimer = setInterval(() => {
        setShowText(true);
      }, 2000); // Show text for 2 seconds

      // Timer to advance to the next slide after 5 seconds
      const slideTimer = setInterval(() => {
        setShowText(false); // Hide text before changing the slide
        next();
      }, autoSlideInterval);

      // Clear timers when the component unmounts or the user hovers off
      return () => {
        clearInterval(textTimer);
        clearInterval(slideTimer);
      };
    }
  }, [autoSlide, autoSlideInterval]);

  return (
    <>
    <div
      className="overflow-hidden relative z-0 w-screen h-[80vh] hidden sm:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform ease-out duration-500 w-screen"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {[
          ...slides.map((s, i) => (
            <div key={i} className="w-full h-full flex justify-between">
              {i === 0 && (
                <>
                  <div
                    className={`text-5xl text-[#d3444d] bg-[#f6f6f6] font-bold pr-[5%] pl-[5%] w-screen pt-[10%] ${
                      showText
                        ? "duration-700 animate-in slide-in-from-bottom-48"
                        : "translate-y-full transition-transform duration-700"
                    }`}
                  >
                    {showText ? s.text : <></>}

                    <div className="text-xl text-[#0a113b] mt-[3%]">
                      {showText ? s.desc : <></>}
                    </div>
                  </div>
                </>
              )}
              {i === 1 && (
                <>
                  <div
                    className={`text-5xl text-[#d3444d] bg-[#f6f6f6] font-bold pr-[5%] pl-[5%] w-screen pt-[10%]
                   ${
                     showText
                       ? "duration-700 animate-in slide-in-from-bottom-48"
                       : "translate-y-full transition-transform duration-700"
                   }
                  `}
                  >
                    {showText ? s.text : <></>}

                    <div className="text-xl text-[#0a113b] mt-[3%]">
                      {showText ? s.desc : <></>}
                    </div>
                  </div>
                </>
              )}
              {i === 2 && (
                <>
                  <div
                    className={`text-5xl text-[#d3444d] bg-[#f6f6f6] font-bold pr-[5%] pl-[5%] w-screen pt-[10%]
                   ${
                     showText
                       ? "duration-700 animate-in slide-in-from-bottom-48"
                       : "translate-y-full transition-transform duration-700"
                   }
                  `}
                  >
                    {showText ? s.text : <></>}

                    <div className="text-xl text-[#0a113b] mt-[3%]">
                      {showText ? s.desc : <></>}
                    </div>
                  </div>
                </>
              )}
              <Image
                src={s.image}
                alt="Carousel Image"
                width={""}
                height={""}
                className="min-w-[60%] h-screen object-cover"
              />
            </div>
          )),
        ]}
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      <div className="absolute bottom-4 right-0 left-0 z-0">
        <div className="flex items-center justify-center w-full space-x-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
    
    {/* Media Query for Small Screens */}
    <div
      className="overflow-hidden relative z-0 w-screen h-[60vh] block md:hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform ease-out duration-500 w-screen"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {[
          ...slides.map((s, i) => (
            <div key={i} className="w-full h-full flex flex-col space-y-10">
              {i === 0 && (
                <>
                  <div
                    className={`text-5xl text-[#d3444d] font-bold p-5 w-screen ${
                      showText
                        ? "duration-700 animate-in slide-in-from-top"
                        : "translate-y-full transition-transform duration-700"
                    }`}
                  >
                    {showText ? s.text : <></>}

                    <div className="text-xl text-[#0a113b] mt-[3%]">
                      {showText ? s.desc : <></>}
                    </div>
                  </div>
                </>
              )}
              {i === 1 && (
                <>
                  <div
                    className={`text-5xl text-[#d3444d] font-bold p-5 w-screen
                   ${
                     showText
                       ? "duration-700 animate-in slide-in-from-top"
                       : "translate-y-full transition-transform duration-700"
                   }
                  `}
                  >
                    {showText ? s.text : <></>}

                    <div className="text-xl text-[#0a113b] mt-[3%]">
                      {showText ? s.desc : <></>}
                    </div>
                  </div>
                </>
              )}
              {i === 2 && (
                <>
                  <div
                    className={`text-5xl text-[#d3444d] font-bold p-5 w-screen
                   ${
                     showText
                       ? "duration-700 animate-in slide-in-from-top"
                       : "translate-y-full transition-transform duration-700"
                   }
                  `}
                  >
                    {showText ? s.text : <></>}

                    <div className="text-xl text-[#0a113b] mt-[3%]">
                      {showText ? s.desc : <></>}
                    </div>
                  </div>
                </>
              )}
              <Image
                src={s.image}
                alt="Carousel Image"
                width={""}
                height={""}
                className="w-full h-full object-cover"
              />
            </div>
          )),
        ]}
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      <div className="absolute bottom-4 right-0 left-0 z-0">
        <div className="flex items-center justify-center w-full space-x-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Carousel;
