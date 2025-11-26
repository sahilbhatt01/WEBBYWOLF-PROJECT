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
    <section className="pl-[7rem] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18 } },
        }}
        className="w-full border border-[#D4D4D4] shadow-[0_4px_20px_rgba(0,0,0,0.08)] "
      >
        <div className="flex w-full p-16">
          <motion.div
            variants={fadeLeft}
            className="flex flex-col gap-4 w-[50%]"
          >
            <motion.p
              variants={fadeLeft}
              className="text-[24px] text-[#0546D2] font-semibold tracking-[-4%] font-inter"
            >
              Lorem ipsum dolor sit
            </motion.p>
            <motion.h2
              variants={fadeLeft}
              className="text-[#222] text-[34px] md:text-[42px] font-bold tracking-[-2%] uppercase font-roboto"
            >
              LOREM IPSUM <br /> DOLOR SIT AMET
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="max-w-2xl leading-[25px] text-[18px] font-inter"
            >
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </motion.p>

            <div className="flex flex-col gap-8 w-full mt-16">
              <motion.div
                variants={fadeLeft}
                className="flex gap-[25px] items-center group"
              >
                <div className="w-[146px] h-[146px] overflow-hidden flex-shrink-0">
                  <img
                    src={`/images/thumb-1.png`}
                    alt="thumb-1"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="text-[18px] leading-[25px] font-inter w-[500px]">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum ornare
                  fermentum feugiat.
                </p>
              </motion.div>

              <motion.div
                variants={fadeLeft}
                className="flex gap-[25px] items-center group"
              >
                <div className="w-[142px] h-[142px] overflow-hidden flex-shrink-0">
                  <img
                    src={`/images/thumb-2.png`}
                    alt="thumb-2"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="text-[18px] leading-[25px] font-inter w-[500px]">
                  Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus
                  faucibus urna ullamcorper id dui cursus. Venenatis.
                </p>
              </motion.div>

              <motion.div
                variants={fadeLeft}
                className="flex gap-[25px] items-center group"
              >
                <div className="w-[143px] h-[143px] overflow-hidden flex-shrink-0">
                  <img
                    src={`/images/thumb-3.png`}
                    alt="thumb-3"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="text-[18px] leading-[25px] font-inter w-[500px]">
                  Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi
                  metus gravida eu facilisi enim. Ut diam auctor tortor
                  tincidunt.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeLeft}
              className="flex flex-wrap items-center gap-[20px] mt-10"
            >
              <button className="px-6 w-[179px] h-[38px] bg-[#1959AC] text-white rounded-[5px] font-medium hover:bg-[#0546D2] transition gap-[10px] flex flex-wrap items-center">
                Lorem Ipsum
                <img
                  src="/icons/Arrow 1.svg"
                  alt="arrow-right"
                  className="w-[16px]"
                />
              </button>

              <div className="flex items-center gap-2 text-[#043898] font-medium">
                <img
                  src="/icons/Vector.svg"
                  alt="arrow-right"
                  className="w-[18px]"
                />
                123456789
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="w-full flex justify-end w-full"
          >
            <img
              src="/images/section2.png"
              alt="bikes"
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="h-[20px] w-[95%] bg-gradient-to-r from-green-600 via-blue-600 to-purple-700" />
      </motion.div>
    </section>
  );
}
