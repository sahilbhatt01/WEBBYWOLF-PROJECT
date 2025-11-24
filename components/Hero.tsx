"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});
type NewsletterForm = z.infer<typeof newsletterSchema>;

export default function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  function onSubmit(data: NewsletterForm) {
    console.log(data);
    alert("Thanks! We received your email.");
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50, scale: 0.96 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <section className="pb-20 bg-white overflow-x-hidden">
      <div className="w-full px-4 md:pl-[5rem] grid grid-cols-1 md:grid-cols-2 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
          className="space-y-5"
        >
          <motion.h1
            variants={fadeLeft}
            className="text-4xl md:text-5xl font-bold text-[#222]"
          >
            Lorem ipsum dolor sit amet
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            className="text-gray-600 text-base max-w-md"
          >
            Lorem ipsum dolor sit amet consectetur. Nunc urna arcu eget arcu sed
            hendrerit et consectetur.
          </motion.p>

          <motion.div variants={fadeLeft}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex gap-3 max-w-md mt-4"
            >
              <input
                {...register("email")}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="px-4 py-3 rounded bg-primary text-white"
              >
                Submit
              </motion.button>
            </form>
            {errors.email && (
              <p className="text-sm text-red-500 mt-2">
                {errors.email.message}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={fadeLeft}
            className="flex items-center gap-2 text-gray-500 text-sm"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"
                stroke="#1959AC"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>No credit card required</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeRight}
          className="relative w-full h-[420px] md:h-[560px] overflow-hidden"
        >
          <Image
            src="/images/hero-bike.png"
            alt="motorcycle"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
