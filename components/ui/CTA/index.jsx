import rocket from "../../../public/icons/rocket.png";
import Image from "next/image";

const AboutUs = () => (
  <div className="custom-screen bg-black text-white w-full min-h-[754px] p-5 flex justify-center items-center">
    <div className="w-full">
      {/* Judul + Icon */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xl font-bold gap-8 md:gap-0 pb-10">
        {/* Judul */}
        <div className="text-3xl md:text-6xl text-center md:text-left">
          <h1>Kami</h1>
          <h1>Menyediakan</h1>
        </div>

        {/* Icon dengan border */}
        <div className="relative rounded-3xl border-4 border-orange w-full max-w-[618px] h-[200px] md:h-[250px] flex items-center justify-center">
          <Image
            src={rocket}
            alt="rocket"
            className="w-1/2 md:w-1/3 h-auto"
          />
        </div>
      </div>

      {/* Paragraf */}
      <div className="pt-6 md:pt-10">
      </div>
    </div>
  </div>
);

export default AboutUs;
