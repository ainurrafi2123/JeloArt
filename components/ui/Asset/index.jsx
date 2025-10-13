import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <div className="min-h-screen bg-black" id="asset">
      <section className="w-full px-8 py-12 flex flex-col items-center gap-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl">
          <h3 className="text-4xl md:text-6xl font-semibold text-white text-center">
            Aset Ilustrasi
          </h3>
          <p className="text-base md:text-lg text-slate-300 my-4 md:my-6 text-center">
            Koleksi ilustrasi berkualitas tinggi, mulai dari vektor, ikon, hingga elemen grafis unik yang mendukung 
            kebutuhan desain pengguna.
          </p>
          <div className="mt-2 px-10 h-4 border-t-4 border-image-gradient rounded-full mx-auto"></div>
          <p className="text-base md:text-lg text-slate-300 my-2 md:my-4 text-center">
            Aset ilustrasi kami telah digunakan oleh lebih dari jutaan pengguna Canva di berbagai belahan dunia. 
          </p>
          <a
            href="https://www.canva.com/p/saiside/?utm_medium=referral&utm_source=creator_share&utm_campaign=creator_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange text-white font-medium py-2 px-4 my-5 rounded transition-all hover:bg- active:scale-95">
              Kunjungi
            </button>
          </a>
        </div>
        <div className="w-full">
          <ShuffleGrid />
        </div>
      </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// bikin semua data dari 1 sampai 112
const allIcons = Array.from({ length: 128 }, (_, i) => ({
  id: i + 1,
  src: `/icons/${i + 1}.svg`,
}));

// ambil acak 32 saja
const getRandomIcons = (count) => {
  const shuffled = [...allIcons].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// hasil yang dipakai
const squareData = getRandomIcons(32);

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full aspect-square bg-transparent"
    >
      <img
        src={sq.src}
        alt={`Illustration ${sq.id}`}
        className="w-full h-full object-contain object-center"
      />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    // Start shuffling immediately like the original
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div 
      className="
        grid gap-2
        grid-cols-4 grid-rows-8     /* default HP */
        sm:grid-cols-6 sm:grid-rows-6 /* tablet kecil */
        md:grid-cols-8 md:grid-rows-4 /* tablet besar / laptop */
        lg:grid-cols-8 lg:grid-rows-4 /* monitor */
      "
      style={{
        height: "450px", // Fixed height to prevent CLS
        minHeight: "450px",
      }}
    >
      {squares}
    </div>
  );
};

export default ShuffleHero;
