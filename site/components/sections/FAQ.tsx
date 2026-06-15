"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CONTACT, FAQ } from "@/lib/content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding bg-white"
      aria-label="שאלות ותשובות"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            שאלות נפוצות
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            יש לכם שאלות? יש לנו תשובות
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            כל מה שצריך לדעת לפני שמחליטים — בשקיפות מלאה.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-right text-navy font-semibold hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="leading-snug">{item.q}</span>
                <span
                  className={`text-primary text-xl transition-transform duration-300 mr-4 flex-shrink-0 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 bg-hero-gradient rounded-3xl p-8"
        >
          <p className="text-navy font-bold text-lg mb-2">
            עוד לא מצאתם תשובה?
          </p>
          <p className="text-gray-600 mb-6">
            לאה תשמח לענות על כל שאלה!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`mailto:${CONTACT.email}`} className="btn-primary">
              <span aria-hidden>✉️</span>
              שלחו לנו מייל
            </a>
            <a href={CONTACT.phoneTel} className="btn-secondary">
              <span aria-hidden>📞</span>
              {CONTACT.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
