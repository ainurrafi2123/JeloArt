import SectionWrapper from "../../SectionWrapper";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Template = () => {
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
      {/* Header Section */}
      <div id="Template" className="max-w-screen-xl mx-auto text-gray-600">
        <section className="w-full px-6 md:px-8 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Judul Besar */}
          <h1 className="text-gray-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-center md:text-left">
            Template
          </h1>

          {/* Box Penjelasan */}
          <div className="flex flex-col items-center md:items-start w-full max-w-lg">
            <p className="text-base md:text-lg text-black my-4 text-justify">
              Desain profesional untuk berbagai kebutuhan presentasi, baik bisnis, edukasi,
              maupun acara formal, dan lain-lain.
            </p>
            <div className="mt-2 w-full h-4 border-t-4 border-image-gradient rounded-full"></div>
            <p className="text-base md:text-lg text-black my-4 text-justify">
              Mudah disesuaikan dan tersedia dalam berbagai gaya, mulai dari minimalis
              hingga kreatif.
            </p>
          </div>
        </section>
      </div>

      {/* Slider full width */}
      <div className="relative pb-5 pt-20">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-tr from-orange to-yellow z-0"></div>
        <div className="relative z-10 space-y-6">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div
                key={index}
                className="px-2 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  priority
                  src={src}
                  alt={`slide-${index}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Template;
