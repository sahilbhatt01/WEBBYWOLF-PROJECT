"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#151822] text-white py-12 mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // animation triggers every time it comes in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LOGO */}
        <div>
          <div className="bg-[#F3F6FB] text-black inline-block px-3 py-2 rounded font-bold">
            LOGO
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            Building modern websites with interactive UI components.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-pink-500 transition">Instagram</a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest updates right in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </motion.footer>
  );
}
