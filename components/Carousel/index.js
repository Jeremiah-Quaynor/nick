import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import backgroundImageOne from "../../assets/img/carousel_image_1.png"
import backgroundImageTwo from "../../assets/img/carousel_image_2.png"
import backgroundImageThree from "../../assets/img/carousel_image_3.png"

function Carousel({
  autoSlide = true,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
      backgroundImageOne,
      backgroundImageTwo,
      backgroundImageThree,
  ];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (autoSlide && isHovered) {
      const slideInterval = setInterval(next, autoSlideInterval);

      // Clear the interval when the component unmounts or the user hovers off
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, isHovered]);

  return (
      <div
        className="overflow-hidden relative z-0 w-[100vw]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {[...slides.map((s, i) => <Image src={s} key={i} alt="Carousel Image" width={""} height={""} className=" w-screen h-screen object-cover"/>)]}
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
  );
}

export default Carousel;
