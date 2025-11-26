"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion, useScroll, useTransform } from "framer-motion";

export default function LoremSection() {
  const slides = [
    {
      image: "/images/image2.png",
      title: "Artist & Investor",
      text: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor…",
    },
    {
      image: "/images/image1.png",
      title: "Traveler & Rider",
      text: "Pharetra adipiscing vitae et congue ultrices. Sem porta euismod tincidunt…",
    },
    {
      image: "/images/ride-bike.png",
      title: "Photographer",
      text: "Cursus vulputate feugiat et nibh massa. Ultrices fermentum pretium…",
    },
    {
      image: "/images/image5.png",
      title: "Designer & Creator",
      text: "Fusce elementum, sapien a fringilla gravida, justo purus convallis leo…",
    },
    {
      image: "/images/image6.png",
      title: "Musician & Producer",
      text: "Aliquam erat volutpat. Nunc vulputate magna vel nibh interdum, sed luctus…",
    },
    {
      image: "/images/image7.png",
      title: "Explorer & Adventurer",
      text: "Suspendisse potenti. Curabitur nec sapien a metus luctus dignissim…",
    },
  ];

  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);

  const [rot, setRot] = useState({ x: 0, y: 0 });
  const handle3DMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRot({ x: (y - rect.height / 2) / 20, y: -(x - rect.width / 2) / 20 });
  };
  const handle3DLeave = () => setRot({ x: 0, y: 0 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 md:pt-75 overflow-visible">
      <motion.div
        className="text-center max-w-3xl mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies.
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            el: paginationRef.current!,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.pagination.el = paginationRef.current;
          }}
          className="w-full"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative flex justify-start w-full">
                <motion.div
                  className="w-[65%]"
                  ref={parallaxRef}
                  style={{ y: parallaxY }}
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={800}
                    className="rounded-lg object-cover shadow-md"
                  />
                </motion.div>

                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-md bg-white shadow-xl rounded-2xl p-8 cursor-pointer"
                  onMouseMove={handle3DMove}
                  onMouseLeave={handle3DLeave}
                  style={{
                    transform: `perspective(900px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                    transition: "transform 0.15s ease-out",
                  }}
                  variants={slideRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {item.text}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline flex items-center gap-1"
                  >
                    Read Full Story →
                  </a>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="py-[20px] flex justify-center gap-[4px]"
          ref={paginationRef}
        ></div>
      </div>
    </section>
  );
}
