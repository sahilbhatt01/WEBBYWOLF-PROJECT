"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    {
      name: "About",
      submenu: ["Team", "Company", "Careers"],
    },
    {
      name: "Services",
      submenu: ["Web Development", "UI/UX Design", "Brand Strategy"],
    },
    {
      name: "Pricing",
      submenu: ["Basic Plan", "Pro Plan", "Enterprise"],
    },
  ];

  return (
   <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 
        ${scrolled ? "backdrop-blur-xl border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.05)] bg-white/70" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-[25px] py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#DBDBDB] h-[60px] w-[156px] px-[20px] py-1 tracking-[-0.02em] text-[32px] font-extrabold text-center shadow-sm hover:shadow-md transition"
          >
            LOGO
          </motion.div>
        </a>

        <div className="hidden md:flex items-center gap-[40px] h-[22px] w-[126px] text-[18px] text-primary font-medium">
          {navItems.map((item, index: any) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoverMenu(index)}
              onMouseLeave={() => setHoverMenu(null)}
            >
              <button className="relative group">
                <motion.div
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.div>

                <motion.div
                  className="absolute bottom-[-4px] left-0 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: hoverMenu === index ? "100%" : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </button>

              <AnimatePresence>
                {hoverMenu === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-full mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-200 p-4"
                  >
                    <motion.ul
                      className="space-y-4 text-xs"
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {item.submenu.map((sub, i) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -12 },
                            show: { opacity: 1, x: 0 },
                          }}
                        >
                          <motion.a
                            href="#"
                            className="relative flex items-center gap-2 hover:text-primary transition"
                            whileHover={{ x: 6 }}
                          >
                            → {sub}
                            <motion.div
                              className="absolute bottom-[-3px] left-0 h-[1.5px] bg-primary rounded-full"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.25 }}
                            />
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden md:flex">
          <motion.button
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.94 }}
            className="px-[24px] py-2 bg-white text-black text-[15px] w-[125px] h-[38px] text-center font-bold shadow hover:shadow-lg transition"
          >
            Sign In
          </motion.button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#222"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t shadow-lg rounded-b-2xl"
          >
            <div className="px-6 py-6 space-y-6">
              {navItems.map((item, i) => (
                <details
                  key={i}
                  className="bg-gray-50 p-4 rounded-xl border shadow-sm text-sm"
                >
                  <summary className="cursor-pointer font-medium">
                    {item.name}
                  </summary>
                  <div className="ml-3 mt-3 space-y-3 text-xs">
                    {item.submenu.map((sub, j) => (
                      <a key={j} href="#" className="relative block">
                        {sub}
                        <span className="block h-[1.5px] bg-primary scale-x-0 hover:scale-x-100 transition-transform origin-left mt-1"></span>
                      </a>
                    ))}
                  </div>
                </details>
              ))}

              <button className="w-full py-3 rounded-xl bg-primary text-white text-sm shadow hover:shadow-md transition">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
