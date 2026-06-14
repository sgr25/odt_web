"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BEFORE_AFTER } from "@/lib/content";

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="transformation"
      ref={ref}
      className="section-padding bg-white"
      aria-label="טרנספורמציה של הצוות"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            לפני ואחרי
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            {BEFORE_AFTER.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {BEFORE_AFTER.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border-2 border-red-100"
          >
            <div className="bg-red-50 px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center text-xl">
                😔
              </div>
              <h3 className="text-xl font-black text-red-700">
                {BEFORE_AFTER.before.label}
              </h3>
            </div>
            <div className="bg-white p-6 space-y-3">
              {BEFORE_AFTER.before.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="mt-1 text-red-400 font-bold flex-shrink-0">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="rounded-3xl overflow-hidden border-2 border-green-100"
          >
            <div className="bg-green-50 px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-xl">
                🌟
              </div>
              <h3 className="text-xl font-black text-green-700">
                {BEFORE_AFTER.after.label}
              </h3>
            </div>
            <div className="bg-white p-6 space-y-3">
              {BEFORE_AFTER.after.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1 text-green-500 font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Arrow in the middle — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:flex justify-center items-center -mt-[21.5rem] mb-[9rem] pointer-events-none"
          aria-hidden
        >
          <div className="w-16 h-16 rounded-full bg-orange-gradient flex items-center justify-center shadow-cta text-white text-2xl font-black z-10">
            ←
          </div>
        </motion.div>
      </div>
    </section>
  );
}
