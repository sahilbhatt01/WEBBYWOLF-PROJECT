"use client";

import { motion } from "framer-motion";

export default function DolorSection() {
  return (
    <section className="flex justify-center items-center py-20 px-4 text-center">
      <div className="max-w-xl">
        <motion.div
          className="inline-block bg-gray-200 font-bold px-6 py-2 rounded mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          LOGO
        </motion.div>

        <motion.h1
          className="text-3xl font-extrabold mb-4 text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          LOREM IPSUM DOLOR SIT AMET <br />
          CONSECTETUR. DUI.
        </motion.h1>

        <motion.p
          className="text-sm text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </motion.p>

        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Lorem Ipsum →
        </motion.button>
      </div>
    </section>
  );
}
