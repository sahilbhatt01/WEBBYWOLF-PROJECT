"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const cards = [
    {
      icon: "/icons/icon-1.svg",
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra.",
      name: "Jane Cooper",
      avatar: "/avatars/user1.png",
    },
    {
      icon: "/icons/icon-2.svg",
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus enim, ipsum morbi euismod pellentesque.",
      name: "Ralph Edwards",
      avatar: "/avatars/user2.png",
    },
    {
      icon: "/icons/icon-3.svg",
      text: "Viverra lacus suspendisse elit, adipiscing orci. Viverra blandit sem neque pretium. Duis sem semper fermentum consequat.",
      name: "Courtney Henry",
      avatar: "/avatars/user3.png",
    },
    {
      icon: "/icons/icon-4.svg",
      text: "Hendrerit augue ut nec quis integer risus. Maecenas ultrices lorem at massa pretium vulputate.",
      name: "Cameron Williamson",
      avatar: "/avatars/user4.png",
    },
    {
      icon: "/icons/icon-1.svg",
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra.",
      name: "Jane Cooper",
      avatar: "/avatars/user1.png",
    },
    {
      icon: "/icons/icon-2.svg",
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus enim, ipsum morbi euismod pellentesque.",
      name: "Ralph Edwards",
      avatar: "/avatars/user2.png",
    },
    {
      icon: "/icons/icon-3.svg",
      text: "Viverra lacus suspendisse elit, adipiscing orci. Viverra blandit sem neque pretium. Duis sem semper fermentum consequat.",
      name: "Courtney Henry",
      avatar: "/avatars/user3.png",
    },
    {
      icon: "/icons/icon-4.svg",
      text: "Hendrerit augue ut nec quis integer risus. Maecenas ultrices lorem at massa pretium vulputate.",
      name: "Cameron Williamson",
      avatar: "/avatars/user4.png",
    },
    {
      icon: "/icons/icon-1.svg",
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra.",
      name: "Jane Cooper",
      avatar: "/avatars/user1.png",
    },
    {
      icon: "/icons/icon-2.svg",
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus enim, ipsum morbi euismod pellentesque.",
      name: "Ralph Edwards",
      avatar: "/avatars/user2.png",
    },
    {
      icon: "/icons/icon-3.svg",
      text: "Viverra lacus suspendisse elit, adipiscing orci. Viverra blandit sem neque pretium. Duis sem semper fermentum consequat.",
      name: "Courtney Henry",
      avatar: "/avatars/user3.png",
    },
    {
      icon: "/icons/icon-4.svg",
      text: "Hendrerit augue ut nec quis integer risus. Maecenas ultrices lorem at massa pretium vulputate.",
      name: "Cameron Williamson",
      avatar: "/avatars/user4.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-blue-600 text-white py-20 px-6 pt-20 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-sm opacity-80">Join other Sun harvesters</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold mt-2"
        >
          LOREM IPSUM DOLOR SIT AMET
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 opacity-90 max-w-2xl"
        >
          Dui euismod iaculis libero, aliquet vitae at elementum porttitor...
        </motion.p>

        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-md font-semibold"
        >
          Lorem Ipsum
        </motion.button>

        <div className="mt-12 relative">
          <div className="absolute left-0 -bottom-16 flex items-center gap-4 z-20 ">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-white text-blue-600 shadow-lg flex items-center justify-center hover:bg-gray-200 transition-all">
              ❮
            </button>

            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-white text-blue-600 shadow-lg flex items-center justify-center hover:bg-gray-200 transition-all">
              ❯
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-20"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white text-black p-6 rounded-sm shadow-md h-full flex flex-col min-h-[350px]"
                >
                  <div className="w-12 h-12">
                    <img
                      src={card.icon}
                      alt="icon"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  <p className="mt-4 text-sm text-gray-700 leading-relaxed flex-grow">
                    {card.text}
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={card.avatar}
                      width={40}
                      height={40}
                      alt="User avatar"
                      className="rounded-full object-cover"
                    />
                    <span className="font-semibold text-sm">{card.name}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
