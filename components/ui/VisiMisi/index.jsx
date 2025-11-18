import Vector from "../../../public/icons/Vector.svg";
import Mining from "../../../public/icons/Mining.svg";
import Image from "next/image";

const VisiMisi = () => {
    return (
        <div className="h-auto w-full" id="visi-misi">
        {/* Visi Kami */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6 lg:px-10 py-10">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pb-6">Visi Kami</h1>
                    <p className="text-base sm:text-lg">
                      Menjadi mitra utama pengguna global dalam menciptakan
                        karya visual yang efektif dan menginspirasi melalui 
                        pemanfaatan platform digital, sekaligus mendorong
                        pertumbuhan ekosistem ekonomi kreatif lokal 
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image src={Mining} alt="Vector" height={250} className="w-40 sm:w-60 md:w-auto" />
                </div>
            </div>

            {/* Misi Kami */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6 lg:px-10 py-10">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Misi Kami</h1>
                    <div className="flex justify-center md:justify-start">
                        <Image src={Vector} alt="Vector" height={250} className="w-40 sm:w-60 md:w-auto" />
                    </div>
                </div>

                <div className="bg-black w-full md:w-[500px] flex flex-col gap-6 p-6 sm:p-10 text-white">
                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold pb-3">Inspiratif</h1>
                        <p className="text-sm sm:text-base">
                        Secara konsisten menyajikan konten visual yang inspiratif di berbagai platform digital.
                        </p>
                    </div>
                    <hr className="border-image-gradient border-t-4 " />

                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold pb-3">Jangkauan Luas</h1>
                        <p className="text-sm sm:text-base">
                        Memperluas jangkauan global agar karya visual <br />
                        lokal dapat dinikmati dan dimanfaatkan secara
                        lebih luas oleh komunitas internasional.
                        </p>
                    </div>
                    <hr className="border-image-gradient border-t-4 " />

                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold pb-3">Ekonomi Kreatif</h1>
                        <p className="text-sm sm:text-base">
                        Mengubah ide-ide visual menjadi<br />
                        kebutuhan visual dengan desain fungsional dan <br />
                        nilai ekonomi nyata, mendukung ekosistem kreatif <br />
                        dari bidang hiburan hingga kebutuhan komunikasi visual praktis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi

