import Image from "next/image";
import { CONTACT } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-navy text-white"
      role="contentinfo"
      aria-label="כותרת תחתונה"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-3">
            <Image
              src="/brand/לוגו ליקי.png"
              alt="לאה גרינברג ODT"
              width={130}
              height={44}
              className="h-11 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-white/60 text-sm mb-4">{CONTACT.title}</p>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            סדנאות ODT חווייתיות לארגונים, בתי ספר וחברות. בהתאמה אישית לכל
            צוות.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-white mb-4">יצירת קשר</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={CONTACT.phoneTel}
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
                aria-label={`התקשרו: ${CONTACT.phone}`}
              >
                <span aria-hidden>📞</span>
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
              >
                <span aria-hidden>✉️</span>
                מייל
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
              >
                <span aria-hidden>✉️</span>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-bold text-white mb-4">ניווט מהיר</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "#hero", label: "ראשי" },
              { href: "#about", label: "על לאה" },
              { href: "#services", label: "סדנאות" },
              { href: "#how-it-works", label: "איך זה עובד" },
              { href: "#results", label: "תוצאות" },
              { href: "#testimonials", label: "המלצות" },
              { href: "#faq", label: "שאלות נפוצות" },
              { href: "#final-cta", label: "צרו קשר" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>
            © {year} {CONTACT.name} – סדנאות ODT. כל הזכויות שמורות.
          </p>
          <p>
            נבנה באהבה עם Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
