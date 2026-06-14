"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT, SERVICES } from "@/lib/content";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-white"
      aria-label="השירותים שלנו"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            מה אנחנו מציעים
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            סדנאות לכל סוג ארגון
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            כל סדנה מותאמת אישית — לצרכים, לגודל הצוות ולמטרות שלכם.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
              className={`card-base p-6 flex flex-col relative ${
                service.highlight
                  ? "border-2 border-primary ring-2 ring-primary/10"
                  : "border border-gray-100"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  הכי פופולרי
                </div>
              )}

              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-black text-navy mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-semibold mb-4">
                {service.tagline}
              </p>

              <div className="text-xs font-medium text-secondary bg-secondary/5 rounded-lg px-3 py-2 mb-4 inline-block">
                מתאים ל: {service.audience}
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-navy mb-3">
                  תוצאה צפויה: {service.outcomes}
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={`w-full text-center py-2.5 rounded-full font-bold text-sm transition-all duration-300 block ${
                    service.highlight
                      ? "bg-primary text-white hover:bg-primary-dark shadow-cta"
                      : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  }`}
                >
                  פרטים נוספים
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">לא מצאתם מה שחיפשתם? יש לנו עוד —</p>
          <a href={`mailto:${CONTACT.email}`} className="btn-primary">
            שלחו מייל ונתאים בשבילכם
          </a>
        </motion.div>
      </div>
    </section>
  );
}
