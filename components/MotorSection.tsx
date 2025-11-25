"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MotorSection() {
  const textContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white py-20 px-10 my-20 relative">
        {/* Text Section */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-[25%] left-[5%] transform -translate-y-1/2 space-y-6 z-10 h-[250px]"
        >
          <motion.span
            className="text-xl tracking-widest text-gray-500 font-semibold"
            variants={textItem}
          >
            NO LIMITS
          </motion.span>

          <motion.h2
            className="text-4xl mt-4 font-bold text-gray-900 leading-tight"
            variants={textItem}
          >
            LOREM IPSUM DOLOR SIT AMET
          </motion.h2>

          <motion.p className="mt-4 text-gray-600 max-w-md" variants={textItem}>
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
            pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>

          <motion.button
            variants={textItem}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 mt-4 text-white px-5 py-3 rounded-md w-fit"
          >
            Lorem Ipsum →
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full h-96 lg:h-[750px]" 
        >
          <Image
            src="/images/Section6-Images.png"
            alt="Motorcyclists"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
    </section>
  );
}
