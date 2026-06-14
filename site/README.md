# לאה גרינברג – סדנאות ODT | אתר לידים

אתר שיווקי מקצועי לסדנאות ODT. בנוי עם Next.js 16, TypeScript, TailwindCSS v4, Framer Motion — עם תמיכה מלאה בעברית ו-RTL.

---

## ⚡ הפעלה מהירה

```bash
cd site
npm install
cp .env.example .env.local   # הוסיפו את RESEND_API_KEY
npm run dev                   # http://localhost:3000
```

---

## 📁 מבנה הפרויקט

```
site/
├── app/
│   ├── globals.css          ← נושא מותאם (Tailwind v4 @theme)
│   ├── layout.tsx           ← RTL, גופן Heebo, מטאדאטה SEO
│   ├── page.tsx             ← עמוד ראשי — מאסף כל הסקשנים
│   └── api/lead/route.ts    ← API לשליחת לידים דרך Resend
├── components/
│   ├── sections/            ← כל סקשן בדף בנפרד
│   │   ├── Hero.tsx
│   │   ├── PainAmplification.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Solution.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Results.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── cro/                 ← אלמנטים להגדלת המרות
│   │   ├── FloatingWhatsApp.tsx   ← כפתור WhatsApp קבוע
│   │   ├── StickyHeader.tsx       ← כותרת דביקה עם CTA
│   │   └── MobileContactBar.tsx   ← בר יצירת קשר מובייל
│   ├── LeadForm.tsx         ← טופס ליד (3 וריאנטים)
│   └── Schema.tsx           ← JSON-LD schema markup
├── lib/
│   └── content.ts           ← כל הטקסט והמידע — מקור אמת יחיד
└── public/
    └── brand/
        └── claw-machine.jpeg ← תמונת הסדנה (מהמודעה)
```

---

## 🎨 שינוי תוכן

כל הטקסט, פרטי יצירת קשר, המלצות ומספרים נמצאים בקובץ אחד:

**`lib/content.ts`**

שנו שם, טלפון, מייל, המלצות, מספרים, שאלות נפוצות — הכל שם.

---

## 🖼️ החלפת תמונות

| קובץ | שימוש |
|------|-------|
| `public/brand/claw-machine.jpeg` | תמונת ה-hero (מכונת הצלחות) |
| `public/brand/leah-photo.jpg` | **להוסיף** — תמונה מקצועית של לאה |
| `public/brand/og-image.jpg` | **להוסיף** — תמונת Open Graph (1200×630) |

---

## 📧 הגדרת שליחת מיילים (Resend)

1. הירשמו בחינם ב-[resend.com](https://resend.com)
2. צרו API key
3. הוסיפו ל-`.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
4. לפני deployment — אמתו את הדומיין שלכם ב-Resend (כדי לשלוח מהדומיין שלכם)

> **בלי** RESEND_API_KEY: הטופס עדיין עובד — הלחצן מפנה לווטסאפ עם הפרטים.

---

## 🚀 פריסה ל-Vercel

```bash
# מתוך תיקיית site/
npx vercel --prod
```

הוסיפו את RESEND_API_KEY ב-Environment Variables של Vercel.

---

## 🔧 שינוי צבעים

הצבעים מוגדרים ב-`app/globals.css` תחת `@theme`:

```css
@theme {
  --color-primary: #ea4e24;     /* כתום — CTA ראשי */
  --color-secondary: #2000af;   /* אינדיגו — משני */
  --color-navy: #0d0a2e;        /* כחול כהה — טקסט */
  /* ... */
}
```

---

## 📞 פרטי יצירת קשר

- טלפון: `058-3225303`
- מייל: `odt.leag@gmail.com`
- WhatsApp: מוגדר אוטומטית מהטלפון

לשינוי — ערכו את `CONTACT` ב-`lib/content.ts`.
