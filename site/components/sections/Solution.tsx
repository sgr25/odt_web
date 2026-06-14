"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT, SOLUTION } from "@/lib/content";

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-hero-gradient"
      aria-label="על לאה גרינברג"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Photo placeholder */}
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-gray to-brand-beige flex flex-col items-center justify-center gap-4 border-4 border-white">
                <div className="text-7xl">👩‍🏫</div>
                <div className="text-center px-6">
                  <p className="font-bold text-navy text-xl">{CONTACT.name}</p>
                  <p className="text-secondary font-medium text-sm mt-1">{CONTACT.title}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    ניתן לשלוח תמונה מקצועית<br />להחלפה כאן
                  </p>
                </div>
              </div>

              {/* Floating credential card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-secondary/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                    🎓
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">מנחת ODT מוסמכת</p>
                    <p className="text-xs text-gray-500">ניסיון רב שנים</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating star card */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl p-3 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="text-center">
                  <p className="text-2xl font-black">98%</p>
                  <p className="text-xs font-medium opacity-90">שביעות רצון</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                המדריכה שלכם
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
                {SOLUTION.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {SOLUTION.bio}
              </p>

              {/* Quote */}
              <blockquote className="relative bg-white rounded-2xl p-6 shadow-card mb-8 border-r-4 border-primary">
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  {SOLUTION.quote}
                </p>
                <footer className="mt-3 text-sm font-semibold text-primary">
                  — {CONTACT.name}
                </footer>
              </blockquote>

              {/* Credentials grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {SOLUTION.credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                  >
                    <span className="text-2xl">{cred.icon}</span>
                    <span className="text-sm font-semibold text-navy">
                      {cred.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact-form" className="btn-primary">
                  תיאום שיחת ייעוץ
                  <span aria-hidden>←</span>
                </a>
                <a
                  href={CONTACT.phoneTel}
                  className="btn-secondary"
                  aria-label={`התקשרו ללאה: ${CONTACT.phone}`}
                >
                  <span aria-hidden>📞</span>
                  {CONTACT.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
