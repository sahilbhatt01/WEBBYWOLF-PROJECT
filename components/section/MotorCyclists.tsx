"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function MotorCyclists() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="bg-white relative flex h-[691px] justify-start my-40">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="h-full w-[95%] bg-[#F8F8F8]"
      >
        <div className="h-[671px] w-50% py-14 flex w-full justify-start gap-2">
          <div className="h-full w-[50%]">
            <img
              src="/images/motorcyclists.png"
              alt="Motorcyclists"
              className="object-contain max-h-[550px] absolute top-[-64px]"
            />
          </div>
          <motion.div
            variants={fadeLeft}
            className="flex w-full justify-center w-[50%]"
          >
            <div className="flex flex-col gap-8">
              <p className="text-[#0546D2] font-semibold text-[24px] font-semibold tracking-[-4%] font-inter">
                Lorem ipsum
              </p>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-[42px] font-bold tracking-[-2%] uppercase w-[600px] font-roboto"
              >
                <span className="text-[#1959AC]">LOREM</span> IPSUM DOLOR SIT
                AMET CONSECTETUR. ENIM DONEC.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[18px] leading-[25px] max-w-[70%] font-inter tracking-[-4%]"
              >
                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio
                enim amet non.
              </motion.p>

              <div className="flex gap-40">
                <div className="flex flex-col gap-8">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>

                <div className="flex flex-col gap-8">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>

              <motion.button
                variants={fadeUp}
                className="w-[179px] h-[38px] bg-primary hover:bg-blue-700 text-white px-6 mt-6 rounded-[5px] text-[15px] font-bold flex items-center gap-[10px] cursor-pointer"
              >
                Lorem Ipsum
                <img
                  src="/icons/Arrow 1.svg"
                  alt="arrow-right"
                  className="w-[16px]"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="h-[20px] w-[95%] bg-gradient-to-r from-green-600 via-blue-600 to-purple-700" />
      </motion.div>
    </section>
  );
}
