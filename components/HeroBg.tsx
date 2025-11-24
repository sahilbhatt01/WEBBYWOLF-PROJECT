"use client";
import { useEffect } from "react";

export default function HeroBg() {
  // Parallax background effect
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const section = document.getElementById("hero-section");
      if (section) {
        section.style.backgroundPositionY = `${y * 0.4}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden mt-15 mb-10"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 animate-fadeIn"></div>

      {/* Floating Logo */}
      <div className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-lg text-white px-6 py-2 rounded font-bold shadow-lg animate-floating">
        LOGO
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6 text-white">
        {/* Animated Title */}
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
        </h1>

        {/* Animated Paragraphs */}
        <p className="hero-text delay-1 text-sm md:text-base leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet.
          Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu
          vulputate sed ut.
        </p>

        <p className="hero-text delay-2 text-sm md:text-base leading-relaxed mb-10">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper
          in tincidunt pellentesque cras mauris in vitae.
        </p>

        {/* Button */}
        <button className="group relative bg-[#0546D2] px-6 py-3 rounded text-white font-semibold hover:bg-[#1959AC] transition transform hover:scale-105 overflow-hidden">
          <span className="relative z-10">Lorem Ipsum →</span>

          {/* Ripple */}
          <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition duration-500 rounded-full"></span>
        </button>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        /* Fade In Background */
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1.2s ease-out forwards; }

        /* Floating Logo */
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-floating { animation: floating 3s ease-in-out infinite; }

        /* Typewriter Effect Title */
        .hero-title {
          display: inline-block;
          overflow: hidden;
          white-space: wrap;
          animation: typing 3s steps(40, end), fadeInText 1s ease-out;
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeInText {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Paragraph smooth fade + slight upward motion */
        .hero-text {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1.4s ease-out forwards;
        }
        .delay-1 { animation-delay: 1.4s; }
        .delay-2 { animation-delay: 1.8s; }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Optional Glow Effect for Title */
        .hero-title:hover {
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          0% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          100% { text-shadow: 0 0 20px rgba(255,255,255,0.7); }
        }
      `}</style>
    </section>
  );
}
