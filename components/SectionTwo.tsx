"use client";
import Image from "next/image";
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
    <section className="relative py-20 bg-white overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full h-[6px]
                bg-gradient-to-r from-[#1959AC] via-[#38C67A] to-[#630C8C]"
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.18 } } }}
        >
          <motion.p variants={fadeLeft} className="text-sm text-[#0546D2]">
            Lorem ipsum dolor sit amet
          </motion.p>

          <motion.h3
            variants={fadeLeft}
            className="text-3xl md:text-4xl font-bold text-[#222]"
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </motion.h3>

          <motion.p variants={fadeLeft} className="mt-4 text-gray-600 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend commodo in vitae sit amet. Amet massa malesuada est
            pretium. Donec pharetra mi lacus suspendisse at arcu.
          </motion.p>

          <motion.ul variants={fadeLeft} className="mt-6 space-y-6">
            <li className="flex gap-3 items-start">
              <Image
                src="/icon/icon.png"
                width={28}
                height={28}
                alt=""
                className="mt-1"
              />
              <p className="text-gray-700">
                <strong>
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                  egestas.
                </strong>
                <br />
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu
                non viverra. Risus quam mattis consectetur vitae interdum magna
                et ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                libero. Ipsum ut tortor.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <Image
                src="/icon/icon.png"
                width={28}
                height={28}
                alt=""
                className="mt-1"
              />
              <p className="text-gray-700">
                <strong>
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra.
                </strong>
                <br />
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu
                non viverra. Risus quam mattis consectetur vitae interdum magna
                et ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                libero. Ipsum ut tortor.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <Image
                src="/icon/icon.png"
                width={28}
                height={28}
                alt=""
                className="mt-1"
              />
              <p className="text-gray-700">
                <strong>
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                  egestas.
                </strong>
                <br />
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu
                non viverra. Risus quam mattis consectetur vitae interdum magna
                et ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                libero. Ipsum ut tortor.
              </p>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeRight}
        >
          <Image
            src="/images/people.png"
            width={700}
            height={520}
            alt="people talking"
            className="rounded-lg w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
