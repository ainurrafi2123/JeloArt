import arrow from "../../../public/icons/arrow.svg";
import Image from "next/image";

const AboutUs = () => (
  <section className="bg-black text-white w-full" id="tentang-kami">
    <div className="custom-screen min-h-[754px] p-5 flex justify-center items-center">
      <div className="w-full">
        
        {/* Judul + Icon */}
        <div className="flex flex-col md:flex-row justify-between items-center font-bold gap-8 md:gap-16 pb-10">
          
          {/* Judul */}
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl text-center md:text-left space-y-1">
            <h1>Tentang Jelo</h1>
            <h2 className="font-extrabold">Art Studio</h2>
          </div>

          {/* Icon dengan border */}
          <div className="relative rounded-3xl border-4 border-orange
              w-full max-w-[260px] sm:max-w-[320px] md:max-w-[480px] 
              h-[180px] sm:h-[210px] md:h-[260px] 
              flex items-center justify-center p-2 sm:p-3 md:p-4">
            <Image
              src={arrow}
              alt="logo jelo art"
              className="w-1/2 sm:w-2/3 h-auto object-contain"
              priority
            />
          </div>


        </div>

        {/* Paragraf */}
        <div className="pt-6 md:pt-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed justify-center md:text-left">
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
  </section>
);

export default AboutUs;
