"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Research", "Plan", "Design"] as const;
type Tab = (typeof tabs)[number];

export default function CheckToolSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Research");

  const tabContent: Record<Tab, string> = {
    Research:
      "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
    Plan: "Planning helps structure your workflow. Nulla facilisi. Sed fermentum urna a tincidunt posuere.",
    Design:
      "Design focuses on usability and visuals. Suspendisse potenti. Integer posuere erat a ante.",
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-25 my-20 py-20 gap-12">
      <motion.div
        className="flex-1 max-w-2xl h-full pl-0 md:pl-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          LOREM IPSUM DOLOR SIT AMET
        </motion.h2>

        <motion.div
          className="border border-gray-200 rounded-lg p-6 bg-gray-100"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="flex space-x-3 mb-6 bg-[#F4F7FB] p-2 rounded-lg border border-gray-200"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-200 cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-[#E8EEF7] text-gray-900 shadow-sm scale-[1.03]"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-sm"
                  }
                `}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 leading-relaxed mb-4"
            >
              {tabContent[activeTab]}
            </motion.p>
          </AnimatePresence>

          <motion.a
            href="#"
            className="text-blue-600 font-semibold hover:underline inline-block"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ x: 5 }}
          >
            Check tools →
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 60 },
          show: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/images/Handshake.png"
            alt="Handshake"
            width={600}
            height={400}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
