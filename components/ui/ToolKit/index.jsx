import SectionWrapper from "../../SectionWrapper";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ToolKit = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1500,
    className: "w-full mx-auto cursor-pointer",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (!isClient) return null;

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  return (
    <SectionWrapper>
      <div id="toolkit" className="max-w-screen-xl mx-auto  text-gray-600">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center px-4 md:px-8 justify-between gap-96">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Template
          </h1>
          <div className="flex-1">
            <p className="text-base md:text-lg text-black my-2 md:my-4">
              Desain profesional untuk berbagai kebutuhan presentasi, baik bisnis, edukasi, maupun acara formal, dan lain-lain
            </p>
            <div className="mt-2 h-4 border-t-4 border-image-gradient rounded-full"></div>
            <p className="text-base md:text-lg text-black my-2 md:my-4">
              Mudah disesuaikan dan tersedia dalam berbagai gaya, mulai dari minimalis hingga kreatif.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-10">
          <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-tr from-orange to-yellow z-0"></div>
          <div className="relative z-10">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className="p-2 transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <Image
                    priority
                    src={src}
                    alt={`slide-${index}`}
                    width={1000}
                    height={1000}
                    className="shadow-md w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
