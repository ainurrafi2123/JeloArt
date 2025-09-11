import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Cari Template Untuk Design Kunjungi Situs Kami
                </h1>
                <p className="max-w-xl mx-auto">
                    Desain profesional untuk berbagai kebutuhan presentasi,
                    baik bisnis, edukasi, maupun acara formal, dan lain-lain
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="https://www.canva.com/p/saiside/?utm_medium=referral&utm_source=creator_share&utm_campaign=creator_share"
                        className="text-gray  hover:text-black hover:underline "
                    >
                        <div className="flex justify-center gap-2">
                            <div>
                                Kunjungi Kami
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero