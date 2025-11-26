"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InfoSection2() {
  return (
    <section className="relative w-full md:h-[720px] h-auto py-20 my-20">

      <div className="h-[700px] flex  items-center justify-center bg-[#eaeaea]">
        <div className="w-[85%] h-full flex gap-12 items-center justify-center">
          <div className="w-[40%]">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#004c97] leading-tight">
                LOREM IPSUM DOLOR SIT <br />
                AMET CONSECTETUR. <br />
                DIGNISSIM TELLUS.
              </h2>

              <p className="text-gray-700 mt-5">
                Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
                blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
                tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
                porta nisl felis. Massa in facilisis semper libero eget eu
                quisque bibendum platea. Tortor fames.
              </p>

              <button className="mt-6 px-5 py-2 bg-[#004c97] text-white rounded-md shadow hover:bg-[#003b78] transition">
                Lorem Ipsum →
              </button>
            </motion.div>
          </div>
          <div className="w-[60%] flex justify-end">
          <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
         className="absolute top-[-10px]">
              <Image
                src="/images/your-image.png"
                alt="People interacting near a scooter"
                width={600}
                height={400}
                className="shadow-lg rounded-sm object-cover"
              />
            </motion.div>
          </div>
        </div>

      </div>
      <div className="h-[20px] w-[80%] bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 rounded" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute bg-white shadow-xl rounded-md p-6 max-w-lg bottom-[-35%] left-[7%] z-20"
      >
         <div className="top-3 right-3 text-red-500 text-xl">📌</div>

          <h3 className="font-semibold text-lg mb-4">Lorem ipsum dolor sit</h3>

          <p className="text-gray-700 mb-3">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
            amet habitasse semper.
          </p>

          <p className="text-gray-700 mb-3">
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
            placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id
            tristique sit.
          </p>

          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
            quisque scelerisque facilisi. Ultrices lectus viverra pharetra
            commodo.
          </p>
      </motion.div>
    </section>
  );
}
