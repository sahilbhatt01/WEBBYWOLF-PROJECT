"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SectionOne() {
    return (
        <section id="section1" className="py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-sm text-[#0546D2]">Lorem ipsum dolor sit</p>
                    <h2 className="font-heading text-3xl md:text-4xl mt-2 text-[#222222]">LOREM IPSUM DOLOR SIT AMET</h2>
                    <p className="mt-4 text-gray-600 max-w-lg">Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis proin. Mi porttitor at aliquam mattis malesuada eget integer in nam.</p>

                    <div className="mt-6 space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                    <Image src={`/images/thumb-${i}.png`} width={64} height={64} alt={`thumb-${i}`} className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <button className="px-4 py-2 rounded bg-primary text-white">Lorem Ipsum</button>
                        <div className="text-sm">123456789</div>
                    </div>
                </div>

                <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                    <Image src="/images/section2.png" alt="bikes" width={900} height={700} className="rounded shadow" />
                </motion.div>
            </div>
        </section>
    );
}