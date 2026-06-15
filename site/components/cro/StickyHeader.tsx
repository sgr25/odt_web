"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CONTACT } from "@/lib/content";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "על לאה" },
    { href: "#services", label: "סדנאות" },
    { href: "#how-it-works", label: "איך זה עובד" },
    { href: "#results", label: "תוצאות" },
    { href: "#testimonials", label: "המלצות" },
    { href: "#faq", label: "שאלות נפוצות" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" as const }}
          className="fixed top-0 right-0 left-0 z-40 backdrop-blur-md border-b border-[#a8bfcc] shadow-sm"
          style={{ backgroundColor: "#c2d4df" }}
          role="banner"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#hero" aria-label="לאה גרינברג ODT - חזרה לראש הדף">
              <Image
                src="/brand/לוגו ליקי.png"
                alt="לאה גרינברג ODT"
                width={120}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600"
              aria-label="ניווט ראשי"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.phoneTel}
                className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-primary transition-colors"
                aria-label={`התקשרו: ${CONTACT.phone}`}
              >
                <span aria-hidden>📞</span>
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href="#contact-form"
                className="btn-primary text-sm py-2.5 px-5"
              >
                תיאום שיחת ייעוץ
              </a>
              {/* Mobile hamburger */}
              <button
                className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 hover:text-primary"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="פתח תפריט"
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
                aria-label="תפריט ניידים"
              >
                <div className="px-4 py-4 flex flex-col gap-3">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-navy font-medium py-1 hover:text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href={CONTACT.phoneTel}
                    className="text-secondary font-bold py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    📞 {CONTACT.phone}
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
