"use client";

import { useState } from "react";
import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import Serve from "../components/ui/Serve";
import VisiMisi from "../components/ui/VisiMisi";
import Hero from "../components/ui/Hero";
import AboutUs from "../components/ui/Aboutus";
import Slider from "../components/ui/Slider";
import Testimonials from "../components/ui/Asset";
import ToolKit from "../components/ui/Template";

// import preloader
import Preloader from "../components/ui/Preloader";

export default function Home() {
  const [complete, setComplete] = useState(false);

  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>

      {/* tampilkan Preloader dulu */}
      {!complete && <Preloader setComplete={setComplete} />}

      {/* setelah preloader selesai, konten muncul */}
      {complete && (
        <>
          <Hero />
          <Slider />
          <AboutUs />
          <VisiMisi />
          <GradientWrapper>
            <Serve />
          </GradientWrapper>
          <ToolKit />
          <GradientWrapper>
            <Testimonials />
          </GradientWrapper>
          {/* <FooterServe /> */}
        </>
      )}
    </>
  );
}
