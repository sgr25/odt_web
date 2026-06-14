"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

const LOGO_PLACEHOLDERS = [
  "חברת הייטק א'",
  "רשת חינוכית",
  "חברת סטארטאפ",
  "עירייה",
  "בית חולים",
  "קבוצת נדל\"ן",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const total = TESTIMONIALS.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const t = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding bg-section-gradient"
      aria-label="המלצות לקוחות"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            מה אומרים עלינו
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            הסיפורים שמאחורי השינוי
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ממנהלי HR, מנהלי צוות ומנהלי בתי ספר שראו תוצאות אמיתיות.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-card p-8 sm:p-10 min-h-[280px] overflow-hidden">
            {/* Quote mark */}
            <div
              className="absolute top-6 left-8 text-8xl font-black text-primary/10 leading-none select-none"
              aria-hidden
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label={`${t.stars} כוכבים`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl" aria-hidden>★</span>
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-navy">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.role} · {t.org}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors flex items-center justify-center font-bold"
              aria-label="המלצה קודמת"
            >
              →
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full ${
                    i === active
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`עבור להמלצה ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors flex items-center justify-center font-bold"
              aria-label="המלצה הבאה"
            >
              ←
            </button>
          </div>
        </motion.div>

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <p className="text-center text-gray-400 text-sm font-medium mb-6">
            עובדים עם ארגונים מובילים
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {LOGO_PLACEHOLDERS.map((logo) => (
              <div
                key={logo}
                className="bg-white border border-gray-100 rounded-xl px-6 py-3 text-sm font-semibold text-gray-400 shadow-sm hover:shadow-md transition-shadow"
                title="לוגו ארגון — ניתן להחלפה"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
