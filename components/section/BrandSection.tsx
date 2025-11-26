"use client";

import { motion } from "framer-motion";

export default function BrandSection() {
  const logos = [
    { src: "/logos/hero.png", alt: "Hero", width: "w-20" },
    { src: "/logos/honda.png", alt: "Honda", width: "w-24" },
    { src: "/logos/bajaj.png", alt: "Bajaj", width: "w-25" },
    { src: "/logos/tvs.png", alt: "TVS", width: "w-30" },
    { src: "/logos/royal-enfield.png", alt: "Royal Enfield", width: "w-30" },
    { src: "/logos/yamaha.png", alt: "Yamaha", width: "w-24" },
    { src: "/logos/ktm.png", alt: "KTM", width: "w-20" },
    { src: "/logos/ather.png", alt: "Ather", width: "w-20" },
    { src: "/logos/ola.png", alt: "Ola Electric", width: "w-38" },
    { src: "/logos/revolt.png", alt: "Revolt", width: "w-28" },
    { src: "/logos/ultraviolette.png", alt: "Ultraviolette", width: "w-50" },
    { src: "/logos/tork.png", alt: "Tork Motors", width: "w-35" },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerStagger = {
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="flex justify-center py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        className="rounded-lg w-[90%] max-w-5xl py-10 px-6 flex flex-col items-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-black text-center leading-tight"
        >
          LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.
        </motion.h2>

        {/* Logos */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20 grid grid-cols-4 gap-y-10 gap-x-8 place-items-center w-full"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.width} object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
