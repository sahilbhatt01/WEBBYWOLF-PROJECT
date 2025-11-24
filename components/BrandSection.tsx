"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BrandSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: false,
    });
  }, []);

  const logos = [
    { src: "/logos/hero.png", alt: "Hero", width: "w-20" },
    { src: "/logos/honda.png", alt: "Honda", width: "w-24" },
    { src: "/logos/bajaj.png", alt: "Bajaj", width: "w-25" },
    { src: "/logos/tvs.png", alt: "TVS", width: "w-30" },
    { src: "/logos/royal-enfield.png", alt: "Royal Enfield", width: "w-28" },
    { src: "/logos/yamaha.png", alt: "Yamaha", width: "w-24" },
    { src: "/logos/ktm.png", alt: "KTM", width: "w-20" },
    { src: "/logos/ather.png", alt: "Ather", width: "w-20" },
    { src: "/logos/ola.png", alt: "Ola Electric", width: "w-35" },
    { src: "/logos/revolt.png", alt: "Revolt", width: "w-28" },
    { src: "/logos/ultraviolette.png", alt: "Ultraviolette", width: "w-40" },
    { src: "/logos/tork.png", alt: "Tork Motors", width: "w-30" },
  ];

  return (
    <section className="flex justify-center py-12">
      <div
        className="border-4 rounded-lg w-[90%] max-w-5xl py-10 px-6 flex flex-col items-center"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h2
          className="text-3xl font-black text-center leading-tight"
          data-aos="fade-up"
        >
          LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-4 gap-y-10 gap-x-8 place-items-center w-full">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.width} h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
