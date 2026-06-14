"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CONTACT, HERO } from "@/lib/content";
import LeadForm from "@/components/LeadForm";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const lines = HERO.headline.split("\n");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient"
      aria-label="כותרת ראשית"
    >
      {/* Decorative circles */}
      <div
        aria-hidden
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #c7d5da 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #ddd1c9 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column — copy */}
        <div className="order-2 lg:order-1">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-secondary mb-6 shadow-sm"
          >
            <span>✨</span>
            <span>סדנאות ODT מותאמות אישית</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                custom={i + 1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`block ${i === 0 ? "text-navy" : "text-gradient-orange"}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href="#contact-form" className="btn-primary text-base">
              {HERO.cta}
              <span aria-hidden>←</span>
            </a>
            <a href="#how-it-works" className="btn-secondary text-base">
              {HERO.ctaSecondary}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            {HERO.trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-navy shadow-sm"
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — claw machine image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
        >
          <div className="relative w-full max-w-md">
            <div
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle at center, #2000af33 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
              aria-hidden
            />
            <Image
              src="/brand/claw-machine.jpeg"
              alt="מכונת הצלחות – שיתוף פעולה, אמון, תקשורת, מוטיבציה"
              width={500}
              height={600}
              className="relative rounded-3xl drop-shadow-2xl w-full object-contain"
              priority
            />
            {/* Floating tags */}
            <motion.div
              className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" as const }}
            >
              שיתוף פעולה
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-4 bg-secondary text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut" as const,
                delay: 0.5,
              }}
            >
              מוטיבציה
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-0 bg-white text-secondary text-sm font-bold px-3 py-1.5 rounded-full shadow-lg border border-secondary/20"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut" as const,
                delay: 1,
              }}
            >
              אמון
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Inline lead form */}
      <div id="contact-form" className="relative z-10 max-w-2xl mx-auto w-full px-4 sm:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <LeadForm variant="hero" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden
      >
        <div className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-navy/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
