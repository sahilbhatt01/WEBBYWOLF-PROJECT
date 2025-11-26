"use client";

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
    <section className="pl-4 pr-4 md:pl-[7rem] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18 } },
        }}
        className="w-full border border-[#D4D4D4] shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
      >
        <div className="flex flex-col-reverse md:flex-row w-full p-6 md:p-16 gap-10 md:gap-0">
          <motion.div
            variants={fadeLeft}
            className="flex flex-col gap-4 w-full md:w-[50%]"
          >
            <motion.p
              variants={fadeLeft}
              className="text-[20px] md:text-[24px] text-[#0546D2] font-semibold tracking-[-4%] font-inter"
            >
              Lorem ipsum dolor sit
            </motion.p>

            <motion.h2
              variants={fadeLeft}
              className="text-[#222] text-[28px] md:text-[42px] font-bold tracking-[-2%] uppercase font-roboto leading-tight"
            >
              LOREM IPSUM <br /> DOLOR SIT AMET
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="max-w-full md:max-w-2xl leading-[22px] md:leading-[25px] text-[16px] md:text-[18px] font-inter"
            >
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </motion.p>

            <div className="flex flex-col gap-8 w-full mt-10 md:mt-16">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  variants={fadeLeft}
                  className="flex gap-[20px] md:gap-[25px] items-start group"
                >
                  <div className="w-[110px] h-[110px] md:w-[146px] md:h-[146px] overflow-hidden flex-shrink-0 rounded-md">
                    <img
                      src={`/images/thumb-${num}.png`}
                      alt={`thumb-${num}`}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  <p className="text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] font-inter w-full md:w-[500px]">
                    {num === 1 &&
                      "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat."}
                    {num === 2 &&
                      "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."}
                    {num === 3 &&
                      "Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt."}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeLeft}
              className="flex flex-col md:flex-row items-start md:items-center gap-[14px] md:gap-[20px] mt-8 md:mt-10"
            >
              <button className="px-6 w-full md:w-[179px] h-[42px] md:h-[38px] bg-[#1959AC] text-white rounded-[5px] font-medium hover:bg-[#0546D2] transition flex items-center justify-center gap-[10px]">
                Lorem Ipsum
                <img
                  src="/icons/Arrow 1.svg"
                  alt="arrow-right"
                  className="w-[16px]"
                />
              </button>

              <div className="flex items-center gap-2 text-[#043898] font-medium">
                <img src="/icons/Vector.svg" alt="phone" className="w-[18px]" />
                123456789
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="w-full md:w-[50%] flex justify-center md:justify-end"
          >
            <img
              src="/images/section2.png"
              alt="bikes"
              className="object-cover w-full md:w-auto max-w-[500px] md:max-w-[500px]"
            />
          </motion.div>
        </div>

        <div className="h-[10px] md:h-[20px] w-[90%] md:w-[95%] mx-auto bg-gradient-to-r from-green-600 via-blue-600 to-purple-700" />
      </motion.div>
    </section>
  );
}
