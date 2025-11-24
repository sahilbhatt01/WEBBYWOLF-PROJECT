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

  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        
        {/* LEFT TEXT */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}  // 👈 REPEAT ANIMATION
          className="flex flex-col justify-center space-y-6"
        >
          <motion.span className="text-xs tracking-widest text-gray-500 font-semibold" variants={textItem}>
            NO LIMITS
          </motion.span>

          <motion.h2 className="text-4xl font-bold text-gray-900 leading-tight" variants={textItem}>
            LOREM IPSUM DOLOR SIT AMET
          </motion.h2>

          <motion.p className="text-gray-600 max-w-md" variants={textItem}>
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>

          <motion.button
            variants={textItem}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-5 py-3 rounded-md w-fit"
          >
            Lorem Ipsum →
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((num, i) => {
            let classes = "";
            if (num <= 2) classes = "col-span-1 h-40";
            if (num === 3) classes = "col-span-2 h-40";
            if (num === 4 || num === 5) classes = "col-span-2 h-52";
            if (num === 6) classes = "col-span-2 h-48";
            if (num === 7 || num === 8) classes = "col-span-1 h-48";

            return (
              <motion.div
                key={i}
                className={`${classes} relative rounded-lg overflow-hidden group`}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}  // 👈 REPEAT ANIMATION
                whileHover={{ scale: 1.04, rotate: 0.5 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={`/images/image${num}.png`}
                  alt=""
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
