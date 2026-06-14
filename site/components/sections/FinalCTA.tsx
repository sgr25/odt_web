"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT, FINAL_CTA } from "@/lib/content";
import LeadForm from "@/components/LeadForm";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="final-cta"
      ref={ref}
      className="section-padding bg-dark-gradient text-white relative overflow-hidden"
      aria-label="קריאה לפעולה"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ea4e24 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ea4e24 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 text-white/80 font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            מוכנים להתחיל?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {FINAL_CTA.title}
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {FINAL_CTA.subtitle}
          </p>
        </motion.div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href={`mailto:${CONTACT.email}`} className="btn-primary text-base">
            <span aria-hidden>✉️</span>
            {FINAL_CTA.ctaSecondary}
          </a>
          <a href={CONTACT.phoneTel} className="btn-white text-base">
            <span aria-hidden>📞</span>
            {CONTACT.phone}
          </a>
        </motion.div>

        {/* Lead form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <LeadForm variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
