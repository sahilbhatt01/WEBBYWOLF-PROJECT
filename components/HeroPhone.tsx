"use client";

import { motion } from "framer-motion";

export default function HeroPhone() {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="py-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm text-blue-600 font-medium">Lorem Ipsum</p>

          <motion.h1
            className="text-4xl font-bold leading-snug mt-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Lorem Ipsum Dolor <br /> Sit Amet
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 max-w-md text-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src="/logos/google-play.png"
              alt="Google Play Button"
              className="h-12 cursor-pointer"
            />
            <img
              src="/logos/app-store.png"
              alt="App Store Button"
              className="h-12 cursor-pointer"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src="/images/hero-phone.png"
            alt="Phone Image"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
