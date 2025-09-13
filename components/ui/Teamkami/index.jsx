"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamKami = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // hp besar
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480, // hp kecil
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  const setting2 = {
    ...settings,
    rtl: true,
  };

  if (!isClient) return null;

  // Foto kegiatan1 sampai kegiatan13
  const images = Array.from({ length: 13 }, (_, i) => `/images/kegiatan${i + 1}.jpg`);

  return (
    <div>
      <div className="m-20">
        <h1 className="text-center text-6xl font-bold">Tim Kami</h1>
      </div>

      <div className="relative pb-5 pt-20">
        {/* background gradient */}
        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-tr from-orange to-yellow z-0"></div>

        <div className="relative z-10 space-y-6">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div
                key={index}
                className="p-2 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="w-full max-w-sm md:max-w-lg lg:max-w-4xl mx-auto aspect-[16/9] relative overflow-hidden shadow-md">
                  <Image
                    priority
                    src={src}
                    alt={`kegiatan-${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>

          <Slider {...setting2}>
            {[...images].reverse().map((src, index) => (
              <div
                key={index}
                className="p-2 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="w-full max-w-sm md:max-w-lg lg:max-w-4xl mx-auto aspect-[16/9] relative overflow-hidden shadow-md">
                  <Image
                    priority
                    src={src}
                    alt={`kegiatan-reverse-${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TeamKami;
