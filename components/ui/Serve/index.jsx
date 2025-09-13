import rocket from "../../../public/icons/roket.gif";
import and from "../../../public/icons/and.svg";
import Image from "next/image";

const Serve = () => (
  <div className="bg-black text-white w-full">
    <div className="custom-screen min-h-[554px] p-5 flex justify-center items-center">
      <div className="w-full">

        {/* Judul + Icon Rocket */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xl font-bold gap-8 md:gap-12 pb-10">
          {/* Teks Judul */}
          <div className="text-4xl md:text-8xl text-center md:text-left leading-tight">
            <h1>Kami</h1>
            <h2>Menyediakan</h2>
          </div>

          {/* Icon dengan border (Rocket) */}
          <div className="relative rounded-3xl border-4 border-orange w-full max-w-[408px] h-[210px] md:h-[220px] flex items-center justify-center bg-black overflow-hidden">
            <Image
              src={rocket}
              alt="rocket"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Group teks + AND */}
        <div className="pt-6 md:pt-10 flex justify-center md:justify-end">
          <div className="flex items-center gap-8 text-2xl md:text-6xl font-normal">
            <p className="text-right">Template</p>
            <Image
              src={and}
              alt="and"
              className="w-12 md:w-16 h-auto"
            />
            <p className="text-left">Aset Ilustrasi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Serve;
