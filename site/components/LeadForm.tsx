"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/content";

type Variant = "hero" | "dark" | "inline";

interface LeadFormProps {
  variant?: Variant;
}

interface FormData {
  name: string;
  phone: string;
  org: string;
  message: string;
}

const initialData: FormData = {
  name: "",
  phone: "",
  org: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm({ variant = "inline" }: LeadFormProps) {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isDark = variant === "dark";
  const isHero = variant === "hero";

  const inputClass = `w-full rounded-xl px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
    isDark
      ? "bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-primary"
      : "bg-white text-navy placeholder-gray-400 border border-gray-200 focus:border-primary shadow-sm"
  }`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name.trim() || !data.phone.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setData(initialData);
      } else {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "שגיאה בשליחה");
      }
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "שגיאה. נסו שוב או פנו במייל.";
      setErrorMsg(message);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-3xl p-8 text-center ${isDark ? "bg-white/10 border border-white/20" : "bg-green-50 border border-green-200"}`}
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-green-800"}`}>
          קיבלנו! לאה תחזור אליכם תוך 24 שעות
        </h3>
        <p className={`text-sm mb-4 ${isDark ? "text-white/60" : "text-green-700"}`}>
          בינתיים ניתן גם לשלוח לנו מייל ישירות
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="btn-primary text-sm"
        >
          <span aria-hidden>✉️</span>
          שלחו לנו מייל
        </a>
      </motion.div>
    );
  }

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 ${
        isDark
          ? "bg-white/5 border border-white/10 backdrop-blur"
          : isHero
          ? "bg-white/90 backdrop-blur shadow-card border border-white"
          : "bg-white shadow-card border border-gray-100"
      }`}
    >
      <div className="text-center mb-6">
        <h3
          className={`text-xl font-black mb-1 ${isDark ? "text-white" : "text-navy"}`}
        >
          {isHero ? "השאירו פרטים ולאה תחזור אליכם" : "תיאום שיחת ייעוץ חינמית"}
        </h3>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-gray-500"}`}>
          ללא מחויבות • תוך 24 שעות
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor={`${variant}-name`}
              className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-white/70" : "text-gray-600"}`}
            >
              שם מלא *
            </label>
            <input
              id={`${variant}-name`}
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              placeholder="ישראל ישראלי"
              className={inputClass}
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor={`${variant}-phone`}
              className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-white/70" : "text-gray-600"}`}
            >
              טלפון *
            </label>
            <input
              id={`${variant}-phone`}
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
              placeholder="050-0000000"
              className={inputClass}
              autoComplete="tel"
              dir="ltr"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor={`${variant}-org`}
            className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-white/70" : "text-gray-600"}`}
          >
            שם הארגון / החברה
          </label>
          <input
            id={`${variant}-org`}
            type="text"
            name="org"
            value={data.org}
            onChange={handleChange}
            placeholder="חברת / עסק / בית ספר..."
            className={inputClass}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor={`${variant}-message`}
            className={`block text-xs font-semibold mb-1.5 ${isDark ? "text-white/70" : "text-gray-600"}`}
          >
            מה האתגר העיקרי שלכם? (לא חובה)
          </label>
          <textarea
            id={`${variant}-message`}
            name="message"
            value={data.message}
            onChange={handleChange}
            rows={3}
            placeholder="ספרו לנו בכמה מילים..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-sm mb-4 text-center"
            >
              {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={status === "loading" || !data.name.trim() || !data.phone.trim()}
            className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === "loading" ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                שולח...
              </>
            ) : (
              <>
                <span aria-hidden>📧</span>
                שליחה וקבלת פרטים
              </>
            )}
          </button>

          <a
            href={`mailto:${CONTACT.email}`}
            className="btn-secondary flex-1 justify-center text-center"
          >
            <span aria-hidden>✉️</span>
            ליצירת קשר במייל
          </a>
        </div>
      </form>
    </div>
  );
}
