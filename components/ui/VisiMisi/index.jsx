import Vector from "../../../public/icons/Vector.svg";
import Image from "next/image";

const VisiMisi = () => {
    return (
        <div className="h-auto w-full">
            {/* Visi Kami */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-10">
                <div>
                <h1 className="text-6xl font-bold pb-8">Visi Kami</h1>
                <p className="text-lg">
                    Menjadi mitra utama pengguna global dalam<br />
                    menciptakan karya visual yang efektif dan<br />
                    menginspirasi melalui platform Canva.
                </p>
                </div>
                <div>
                    <Image src={Vector} alt="Vector" height={350} />
                </div>
            </div>

            {/* Misi Kami */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-10">
                <div>
                    <h1 className="text-6xl font-bold mb-[50px]">Misi Kami</h1>
                    <div>
                        <Image src={Vector} alt="Vector" height={350} />
                    </div>
                </div>
                <div className="bg-black w-[500px] h-auto flex flex-col gap-6 p-10 text-white">
                    <div>
                        <h1 className="text-xl font-semibold pb-3">Kualitas Template</h1>
                        <p className="text-base">
                        Menghasilkan template berkualitas tinggi yang<br />
                        inovatif dan relevan. Kami berkomitmen untuk terus<br />
                        memperbarui dan menyempurnakan koleksi<br />
                        template kami agar selalu selaras dengan tren<br />
                        desain terkini dan kebutuhan pasar.
                        </p>
                    </div>
                <hr />
                    <div>
                        <h1 className="text-xl font-semibold pb-3">Mudah Digunakan</h1>
                        <p className="text-base">
                        Menyediakan pengalaman desain yang mudah diakses<br />
                        bagi pengguna Canva. Kami yakin bahwa setiap individu,
                        tanpa memandang tingkat keterampilan desainnya,
                        seharusnya bisa menghasilkan karya yang mengesankan
                        dan profesional.
                        </p>
                    </div>
                <hr />
                    <div>
                        <h1 className="text-xl font-semibold pb-3">Fungsional</h1>
                        <p className="text-base">
                        Kami mendukung pengguna untuk memenuhi<br />
                        kebutuhan visual dengan desain fungsional dan<br />
                        menarik, memastikan setiap elemen dan desain<br />
                        efektif untuk konteks pribadi, bisnis, dan pendidikan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi

