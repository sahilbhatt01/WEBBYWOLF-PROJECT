"use client";
import { motion } from "framer-motion";

export default function SectionTwo() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white h-auto md:h-[985px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.18 } } }}
        className="flex flex-col-reverse md:flex-row justify-end h-auto md:h-[985px]"
      >
        <div className="w-full py-[45px] flex flex-col md:flex-row gap-8 md:w-[95%] px-4 md:px-0">
          <div className="w-full h-full">
            <div className="flex justify-start p-[25px] h-auto">
              <div className="max-w-full md:max-w-[70%] flex flex-col gap-[20px]">
                <motion.p
                  variants={fadeLeft}
                  className="text-[20px] md:text-[24px] tracking-[-4%] font-semibold text-[#0546D2] font-inter"
                >
                  Lorem ipsum dolor sit amet
                </motion.p>

                <motion.h3
                  variants={fadeLeft}
                  className="text-2xl md:text-[42px] font-bold text-[#222] font-roboto tracking-[-2%] w-full md:w-[500px]"
                >
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
                </motion.h3>

                <motion.p
                  variants={fadeLeft}
                  className="text-[16px] md:text-[18px]"
                >
                  Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper
                  etiam leo eleifend commodo in vitae sit amet. Amet massa
                  malesuada est pretium. Donec pharetra mi lacus suspendisse at
                  arcu.
                </motion.p>
              </div>
            </div>

            <div className="h-auto md:h-[484px] flex items-center mt-6">
              <motion.div
                variants={{ fadeLeft }}
                className="w-full md:w-[70%] px-2 md:px-5 flex flex-col gap-[20px]"
              >
                <motion.div variants={fadeRight} className="flex gap-[16px]">
                  <img
                    src="/icons/icon.png"
                    alt=""
                    className="w-[32px] md:w-[36px] h-[32px] md:h-[38.47px]"
                  />
                  <div>
                    <motion.h4
                      variants={fadeLeft}
                      className="text-[18px] md:text-[20px] font-inter tracking-[-2%] font-semibold text-[#222]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </motion.h4>
                    <motion.p
                      variants={fadeLeft}
                      className="text-[16px] md:text-[18px] font-inter leading-[22px] md:leading-[25px]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et
                      arcu eu non viverra. Risus quam mattis consectetur vitae
                      interdum magna et ornare gravida vestibulum. Donec turpis
                      nulla felis mauris eu libero. Ipsum ut tortor.
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div variants={fadeRight} className="flex gap-[16px]">
                  <img
                    src="/icons/icon.png"
                    alt=""
                    className="w-[32px] md:w-[36px] h-[32px] md:h-[38.47px]"
                  />
                  <div>
                    <motion.h4
                      variants={fadeLeft}
                      className="text-[18px] md:text-[20px] font-inter tracking-[-2%] font-semibold text-[#222]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </motion.h4>
                    <motion.p
                      variants={fadeLeft}
                      className="text-[16px] md:text-[18px] font-inter leading-[22px] md:leading-[25px]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et
                      arcu eu non viverra. Risus quam mattis consectetur vitae
                      interdum magna et ornare gravida vestibulum. Donec turpis
                      nulla felis mauris eu libero. Ipsum ut tortor.
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div variants={fadeRight} className="flex gap-[16px]">
                  <img
                    src="/icons/icon.png"
                    alt=""
                    className="w-[32px] md:w-[36px] h-[32px] md:h-[38.47px]"
                  />
                  <div>
                    <motion.h4
                      variants={fadeLeft}
                      className="text-[18px] md:text-[20px] font-inter tracking-[-2%] font-semibold text-[#222]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </motion.h4>
                    <motion.p
                      variants={fadeLeft}
                      className="text-[16px] md:text-[18px] font-inter leading-[22px] md:leading-[25px]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et
                      arcu eu non viverra. Risus quam mattis consectetur vitae
                      interdum magna et ornare gravida vestibulum. Donec turpis
                      nulla felis mauris eu libero. Ipsum ut tortor.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeRight}
            className="w-full md:w-[50%] flex justify-center md:justify-end items-center mt-6 md:mt-0"
          >
            <img
              src="/images/people.png"
              alt="people talking"
              className="w-[90%] md:w-[577px] h-auto md:h-[620px]"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="h-[20px] ml-0 md:ml-[8%] w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-700" />
    </section>
  );
}
