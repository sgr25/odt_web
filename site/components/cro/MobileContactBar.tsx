"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/content";

export default function MobileContactBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" as const }}
          className="fixed bottom-0 right-0 left-0 z-40 sm:hidden bg-white border-t border-gray-200 shadow-2xl"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          role="complementary"
          aria-label="פס יצירת קשר"
        >
          <div className="grid grid-cols-3 divide-x divide-x-reverse divide-gray-200">
            {/* Call */}
            <a
              href={CONTACT.phoneTel}
              className="flex flex-col items-center justify-center py-3 gap-1 text-secondary hover:bg-secondary/5 transition-colors"
              aria-label={`התקשרו: ${CONTACT.phone}`}
            >
              <span className="text-xl" aria-hidden>📞</span>
              <span className="text-xs font-semibold">התקשרו</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex flex-col items-center justify-center py-3 gap-1 bg-primary text-white"
              aria-label="שלח מייל"
            >
              <span className="text-xl" aria-hidden>✉️</span>
              <span className="text-xs font-bold">מייל</span>
            </a>

            {/* Form */}
            <a
              href="#contact-form"
              className="flex flex-col items-center justify-center py-3 gap-1 text-navy hover:bg-navy/5 transition-colors"
              aria-label="מלאו טופס יצירת קשר"
            >
              <span className="text-xl" aria-hidden>📝</span>
              <span className="text-xs font-semibold">טופס</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
