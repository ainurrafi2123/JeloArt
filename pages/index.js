import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import Serve from "../components/ui/Serve";
import VisiMisi from "../components/ui/VisiMisi";
import Hero from "../components/ui/Hero";
import AboutUs from "../components/ui/Aboutus";
import Slider from "../components/ui/Slider";
import Testimonials from "../components/ui/Asset";
import ToolKit from "../components/ui/Template";

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
        <Serve />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      {/* <FooterServe /> */}
    </>
  );
}
