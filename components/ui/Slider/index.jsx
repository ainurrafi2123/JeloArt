"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
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
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 480, // hp kecil
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const setting2 = {
    ...settings,
    rtl: true,
  };

  if (!isClient) return null;

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
  ];

  return (
  <div className="relative pb-5 pt-20">
    {/* background gradient */}
    <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-tr from-orange to-yellow z-0"></div>

    <div className="relative z-10 space-y-6 ">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              priority
              src={src}
              alt="logo"
              width={1000}
              height={1000}
              className="shadow-md w-full h-auto "
            />
          </div>
        ))}
      </Slider>

      <Slider {...setting2}>
        {[...images].reverse().map((src, index) => (
          <div
            key={index}
            className="p-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              priority
              src={src}
              alt="logo"
              width={1000}
              height={1000}
              className="shadow-md w-full h-auto "
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default SliderOne;
