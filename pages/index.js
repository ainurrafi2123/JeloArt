import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import VisiMisi from "../components/ui/VisiMisi";
import Hero from "../components/ui/Hero";
import AboutUs from "../components/ui/Aboutus";
import Slider from "../components/ui/Slider";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <Slider />
      <AboutUs />
      <VisiMisi />
      <GradientWrapper>
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      {/* <FooterCTA /> */}
    </>
  );
}
