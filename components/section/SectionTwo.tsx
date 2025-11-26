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
    <section className=" w-full h-[936px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.18 } } }}
        className="h-[916px] flex justify-end"
      >
        <div className="w-[95%]  py-[45px] flex gap-8">
          <div className="w-full h-full">
            <div className="h-[342px] flex w-full justify-start p-[25px] ">
              <div className="max-w-[70%] flex flex-col gap-[15px]">
                <motion.p
                  variants={fadeLeft}
                  className="text-[24px] tracking-[-4%] font-semibold text-[#0546D2] font-inter"
                >
                  Lorem ipsum dolor sit amet
                </motion.p>

                <motion.h3
                  variants={fadeLeft}
                  className="text-3xl md:text-[42px] font-bold text-[#222] font-roboto tracking-[-2%] w-[500px] h-[147px]"
                >
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
                </motion.h3>

                <motion.p variants={fadeLeft} className="text-[18px]">
                  Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper
                  etiam leo eleifend commodo in vitae sit amet. Amet massa
                  malesuada est pretium. Donec pharetra mi lacus suspendisse at
                  arcu.
                </motion.p>
              </div>
            </div>
            <div className="h-[484px] flex items-center">
              <motion.div
                variants={{ fadeLeft }}
                className="h-[384px] w-full px-5 flex flex-col gap-[20px]"
              >
                <motion.div variants={fadeRight} className="flex gap-[16px]">
                  <img
                    src="/icons/icon.png"
                    alt=""
                    className="w-[36px] h-[38.47px]"
                  />
                  <div>
                    <motion.h4
                      variants={fadeLeft}
                      className="text-[20px] font-inter tracking-[-2%] font-semibold text-[#222222]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </motion.h4>
                    <motion.p
                      variants={fadeLeft}
                      className="text-[18px] font-inter font-regular leading-[25px] text-black"
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
                    className="w-[36px] h-[38.47px]"
                  />
                  <div>
                    <motion.h4
                      variants={fadeLeft}
                      className="text-[20px] font-inter tracking-[-2%] font-semibold text-[#222222]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </motion.h4>
                    <motion.p
                      variants={fadeLeft}
                      className="text-[18px] font-inter font-regular leading-[25px] text-black"
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
                    className="w-[36px] h-[38.47px]"
                  />
                  <div>
                    <motion.h4
                      variants={fadeLeft}
                      className="text-[20px] font-inter tracking-[-2%] font-semibold text-[#222222]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                      egestas.
                    </motion.h4>
                    <motion.p
                      variants={fadeLeft}
                      className="text-[18px] font-inter font-regular leading-[25px] text-black"
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
            className="w-full flex justify-end items-center"
          >
            <img
              src="/images/people.png"
              alt="people talking"
              className="h-[620px] w-[577px]"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="h-[20px] ml-[8%] w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-700" />
    </section>
  );
}
