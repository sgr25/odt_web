"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HOW_IT_WORKS } from "@/lib/content";

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-padding bg-dark-gradient text-white"
      aria-label="איך זה עובד"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white/80 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            התהליך
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {HOW_IT_WORKS.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 right-[12.5%] left-[12.5%] h-0.5 bg-white/20"
            aria-hidden
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-3xl shadow-lg z-10 relative">
                    {step.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 scale-125 blur-sm" aria-hidden />
                </div>

                {/* Step number */}
                <span className="text-primary font-black text-sm tracking-widest mb-2">
                  שלב {step.number}
                </span>

                <h3 className="text-xl font-black text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a href="#contact-form" className="btn-white text-base">
            <span aria-hidden>📞</span>
            מתחילים עם שיחת היכרות חינמית
          </a>
        </motion.div>
      </div>
    </section>
  );
}
