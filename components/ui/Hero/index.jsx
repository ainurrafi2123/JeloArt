import NavLink from "../NavLink"

const Hero = () => (
    <header id="hero">
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-6 max-w-6xl mx-auto text-center px-4 lg:px-8">
                {/* Judul Utama */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
                    Cari Template Siap Pakai?
                </h1>

                {/* Sub Judul */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold">
                    Kunjungi Akun Kami
                </h2>

                {/* Deskripsi */}
                <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 mt-4">
                    Temukan berbagai pilihan template presentasi siap pakai yang dan mudah digunakan.
                </p>

                {/* CTA */}
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="https://www.canva.com/p/saiside/?utm_medium=referral&utm_source=creator_share&utm_campaign=creator_share"
                        aria-label="Kunjungi akun Canva kami"
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 active:scale-95 transition font-semibold"
                        rel="noopener noreferrer"
                    >
                        <span>Kunjungi Kami</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                            aria-hidden="true"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
                            />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </div>
    </header>
)

export default Hero