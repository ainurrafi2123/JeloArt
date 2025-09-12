import arrow from "../../../public/icons/arrow.svg";
import Image from "next/image";

const AboutUs = () => (
  <div className="custom-screen bg-black text-white w-full min-h-[754px] p-5 flex justify-center items-center">
    <div className="w-full">
      {/* Judul + Icon */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xl font-bold gap-8 md:gap-0 pb-10">
        {/* Judul */}
        <div className="text-3xl md:text-6xl text-center md:text-left">
          <h1>Tentang Jelo</h1>
          <h1>Art Studio</h1>
        </div>

        {/* Icon dengan border */}
        <div className="relative rounded-3xl border-4 border-orange w-full max-w-[618px] h-[200px] md:h-[250px] flex items-center justify-center">
          <Image
            src={arrow}
            alt="logo"
            className="w-1/2 md:w-2/3 h-auto"
          />
        </div>
      </div>

      {/* Paragraf */}
      <div className="pt-6 md:pt-10">
        <p className="text-base md:text-lg leading-relaxed text-justify md:text-left">
          Jelo Art adalah studio desain kreatif yang berdiri pada tahun 2022.
          Kami berfokus pada penyediaan template berkualitas tinggi untuk kebutuhan
          presentasi dan media cetak melalui platform Canva. Sebagai contributor
          resmi Canva, kami telah membantu pengguna dengan desain visual yang
          menarik, praktis, dan mudah digunakan. Kami percaya bahwa desain yang baik
          dapat membantu menyampaikan pesan dengan lebih efektif dan berdampak
          positif pada audiens.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
