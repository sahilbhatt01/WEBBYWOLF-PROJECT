"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionOne() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50, scale: 0.96 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <section className="py-20 bg-[#F5F8FF] overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
          className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                     p-6 md:p-10 border border-gray-100 relative overflow-hidden"
        >
          {/* Top Label */}
          <motion.p
            variants={fadeLeft}
            className="text-sm text-[#0546D2] font-semibold mb-4"
          >
            Lorem ipsum dolor sit
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT TEXT COLUMN */}
            <motion.div variants={fadeLeft}>
              <h2
                className="text-[#222] text-[34px] md:text-[42px] font-bold leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                LOREM IPSUM <br /> DOLOR SIT AMET
              </h2>

              <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis malesuada
                eget integer in nam. Non nisi iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </p>

              <div className="mt-8 space-y-6">
                {/* LIST ITEM 1 */}
                <motion.div
                  variants={fadeLeft}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-20 h-20 rounded overflow-hidden shadow-sm flex-shrink-0">
                    <Image
                      src={`/images/thumb-1.png`}
                      width={80}
                      height={80}
                      alt="thumb-1"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum ornare
                    fermentum feugiat.
                  </p>
                </motion.div>

                {/* LIST ITEM 2 */}
                <motion.div
                  variants={fadeLeft}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-20 h-20 rounded overflow-hidden shadow-sm flex-shrink-0">
                    <Image
                      src={`/images/thumb-2.png`}
                      width={80}
                      height={80}
                      alt="thumb-2"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus
                    faucibus urna ullamcorper id dui cursus. Venenatis.
                  </p>
                </motion.div>

                {/* LIST ITEM 3 */}
                <motion.div
                  variants={fadeLeft}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-20 h-20 rounded overflow-hidden shadow-sm flex-shrink-0">
                    <Image
                      src={`/images/thumb-3.png`}
                      width={80}
                      height={80}
                      alt="thumb-3"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Vestibulum nisi
                    morbi metus gravida eu facilisi enim. Ut diam auctor tortor
                    tincidunt.
                  </p>
                </motion.div>
              </div>

              {/* BUTTON + PHONE */}
              <motion.div
                variants={fadeLeft}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <button className="px-6 py-2.5 bg-[#1959AC] text-white rounded-md font-medium hover:bg-[#0546D2] transition">
                  Lorem Ipsum
                </button>

                <div className="flex items-center gap-2 text-[#1959AC] font-medium">
                  <svg width="18" height="18" fill="currentColor">
                    <path d="M3 2l3 1 2 5-2 1c1 3 3 5 6 6l1-2 5 2 1 3c-1 2-4 3-6 3C8 21 3 16 3 10c0-2 1-5 3-8z" />
                  </svg>
                  123456789
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              variants={fadeRight}
              className="relative w-full h-[300px] md:h-[500px]"
            >
              {/* TOP CURVE BAR */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10 
                              w-24 h-6 bg-white rounded-b-full"
              ></div>

              <div className="rounded-lg overflow-hidden shadow-md w-full h-full">
                <Image
                  src="/images/section2.png"
                  alt="bikes"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Gradient Line */}
          <div
            className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r
                          from-[#0546D2] via-[#02C366] to-[#8200FF]"
          ></div>
        </motion.div>
      </div>
    </section>
  );
}
