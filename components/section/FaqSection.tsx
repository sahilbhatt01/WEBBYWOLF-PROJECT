"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const answerVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-2 my-20">
      <motion.h2
        className="text-[22px] font-extrabold mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </motion.h2>

      {faqData.map((item, i) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false, margin: "-100px" });

        return (
          <motion.div
            key={i}
            ref={ref}
            className="border-t border-gray-300 py-5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            {/* Question */}
            <motion.div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(i)}
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="font-semibold text-[15px]">{item.question}</p>
              <span className="text-xl select-none leading-none pr-1">
                {openIndex === i ? "−" : "+"}
              </span>
            </motion.div>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-3 text-gray-600 text-[13px] leading-relaxed max-w-[720px]"
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      <div className="border-t border-gray-300 mt-3"></div>
    </div>
  );
}
