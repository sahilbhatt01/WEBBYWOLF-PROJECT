"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function MotorCyclists() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <main className="min-h-screen bg-white flex justify-center py-10 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="relative w-full max-w-7xl bg-white shadow-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-[650px]"
      >
        <motion.div
          variants={fadeRight}
          className="relative w-full md:w-[45%] h-[230px] md:h-auto"
        >
          <Image
            src="/images/motorcyclists.png"
            alt="Motorcyclists"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeLeft}
          className="flex-1 px-8 py-10 md:max-w-[55%]"
        >
          <p className="text-blue-500 text-sm font-semibold">Lorem ipsum</p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold leading-tight mt-3"
          >
            <span className="text-blue-600">LOREM</span> IPSUM DOLOR SIT AMET
            CONSECTETUR. ENIM DONEC.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 mt-4 leading-relaxed max-w-[80%]"
          >
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
            amet non.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-y-2 mt-6 text-gray-800 font-medium text-lg"
          >
            <p>Lorem Ipsum</p> <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p> <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p> <p>Lorem Ipsum</p>
          </motion.div>

          <motion.button
            variants={fadeUp}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md flex items-center gap-2"
          >
            Lorem Ipsum →
          </motion.button>
        </motion.div>

        <div
          className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r 
                      from-blue-500 via-green-500 to-purple-600"
        />
      </motion.div>
    </main>
  );
}
