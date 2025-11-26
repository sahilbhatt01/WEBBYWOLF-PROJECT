"use client";
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
    <section className="mb-10 h-auto md:h-[913px] bg-white w-full flex flex-col-reverse md:flex-row">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18 } },
        }}
        className="w-full md:w-[40%] flex flex-col gap-6 justify-center px-6 md:pl-[7rem] pt-10 md:pt-0"
      >
        <motion.h1
          variants={fadeLeft}
          className="text-3xl md:text-[64px] leading-[38px] md:leading-[70px] font-roboto font-bold text-[#222]"
        >
          Lorem ipsum dolor sit amet
        </motion.h1>

        <motion.p
          variants={fadeLeft}
          className="text-black text-inter text-[16px] md:text-[18px] leading-[22px] md:leading-[25px]"
        >
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque. Justo suspendisse tristique posuere quis
          eget viverra. Nunc euismod ultrices etiam nulla habitasse.
        </motion.p>

        {/* FORM */}
        <motion.div variants={fadeLeft}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-3 max-w-[459px] h-auto md:h-[47px] mt-6"
          >
            <input
              {...register("email")}
              placeholder="Enter your email"
              className="w-full h-[46px] border rounded-[8px] border-[#C3C3C3] px-3 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="flex items-center px-4 gap-2 rounded-[5px] bg-primary text-white text-[15px] font-bold text-inter w-full md:w-[127px] h-[47px]"
            >
              Submit
              <img
                src="/icons/Arrow 1.svg"
                alt="arrow-right"
                className="w-[16px]"
              />
            </motion.button>
          </form>

          {errors.email && (
            <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>
          )}
        </motion.div>

        <motion.div
          variants={fadeLeft}
          className="flex items-center gap-2 mt-2"
        >
          <img
            src="/icons/check-icon.svg"
            alt="check-icon"
            className="w-[30px] h-[29px]"
          />
          <span className="text-[15px] leading-[25px] text-inter">
            No credit card required
          </span>
        </motion.div>
      </motion.div>

      <div className="w-full md:w-[60%] mt-10 md:mt-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeRight}
          className="flex items-center justify-end w-full"
        >
          <img
            src="/images/hero-bike.png"
            alt="motorcycle"
            className="w-full md:w-auto h-auto md:h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
