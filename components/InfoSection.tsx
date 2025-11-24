"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function InfoSection() {
  const cards = [
    {
      image: "/images/img1.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: `Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. 
      Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec 
      et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.`,
    },
    {
      image: "/images/img2.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: `Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. 
      Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec 
      et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.`,
    },
    {
      image: "/images/img3.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: `Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. 
      Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec 
      et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.`,
    },
    {
      image: "/images/img4.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      text: `Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. 
      Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec 
      et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.`,
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section className="w-full py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.p
          className="text-blue-600 font-medium text-sm mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>

        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          LOREM IPSUM DOLOR SIT
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="border rounded-xl overflow-hidden shadow-sm bg-white"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={600}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <motion.h3
                  className="font-semibold mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-4 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {card.text}
                </motion.p>

                <motion.a
                  href="#"
                  className="text-blue-600 font-medium text-sm inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
