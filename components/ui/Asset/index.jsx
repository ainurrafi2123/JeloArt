import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <ShuffleGrid />
        <div>
          <h3 className="text-4xl md:text-6xl font-semibold text-white">
            Aset Ilustrasi
          </h3>
          <p className="text-base md:text-lg text-slate-300 my-4 md:my-6">
            Koleksi ilustrasi berkualitas tinggi, mulai dari vektor, ikon, hingga elemen grafis unik yang mendukung 
            kebutuhan desain pengguna.
          </p>
          <div className="mt-2 px-10 h-4 border-t-4 border-image-gradient rounded-full"></div>
          <p className="text-base md:text-lg text-slate-300 my-2 md:my-4">
            Aset ilustrasi kami telah digunakan oleh lebih dari 10.000 pengguna Canva di berbagai belahan dunia. 
          </p>
          <button className="bg-orange text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Kunjungi
          </button>
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

const squareData = [
  {
    id: 1,
    src: "/icons/1.png",
  },
  {
    id: 2,
    src: "/icons/2.png",
  },
  {
    id: 3,
    src: "/icons/3.png",
  },
  {
    id: 4,
    src: "/icons/4.png",
  },
  {
    id: 5,
    src: "/icons/5.png",
  },
  {
    id: 6,
    src: "/icons/6.png",
  },
  {
    id: 7,
    src: "/icons/7.png",
  },
  {
    id: 8,
    src: "/icons/8.png",
  },
  {
    id: 9,
    src: "/icons/9.png",
  },
  {
    id: 10,
    src: "/icons/10.png",
  },
  {
    id: 11,
    src: "/icons/11.png",
  },
  {
    id: 12,
    src: "/icons/12.png",
  },
  {
    id: 13,
    src: "/icons/13.png",
  },
  {
    id: 14,
    src: "/icons/14.png",
  },
  {
    id: 15,
    src: "/icons/15.png",
  },
  {
    id: 16,
    src: "/icons/16.png",
  },
];

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
      className="grid grid-cols-4 grid-rows-4 gap-2"
      style={{
        height: '450px', // Fixed height to prevent CLS
        minHeight: '450px',
      }}
    >
      {squares}
    </div>
  );
};

export default ShuffleHero;