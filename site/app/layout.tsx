import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Schema from "@/components/Schema";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "לאה גרינברג – סדנאות ODT | גיבוש צוותים ופיתוח ארגוני",
  description:
    "סדנאות ODT חווייתיות לארגונים, בתי ספר וחברות. מחזקות אמון, שיתוף פעולה ומוטיבציה בצוות. בהתאמה אישית לכל ארגון. לתיאום שיחת ייעוץ: 058-3225303",
  keywords: [
    "סדנאות ODT",
    "יום גיבוש לעובדים",
    "גיבוש צוות",
    "פעילות גיבוש לעובדים",
    "ODT לארגונים",
    "סדנאות לצוותים",
    "פיתוח צוותים",
    "לאה גרינברג",
    "סדנאות מנהיגות",
    "יום כיף לעובדים",
    "גיבוש עובדים",
  ],
  authors: [{ name: "לאה גרינברג" }],
  creator: "לאה גרינברג",
  publisher: "לאה גרינברג – סדנאות ODT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://odt-leag.co.il",
    siteName: "לאה גרינברג – סדנאות ODT",
    title: "לאה גרינברג – סדנאות ODT | גיבוש צוותים ופיתוח ארגוני",
    description:
      "סדנאות ODT חווייתיות לארגונים, בתי ספר וחברות. מחזקות אמון, שיתוף פעולה ומוטיבציה. בהתאמה אישית לכל ארגון.",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "לאה גרינברג – סדנאות ODT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "לאה גרינברג – סדנאות ODT",
    description: "סדנאות ODT חווייתיות לארגונים, בתי ספר וחברות.",
    images: ["/brand/og-image.jpg"],
  },
  alternates: {
    canonical: "https://odt-leag.co.il",
  },
  metadataBase: new URL("https://odt-leag.co.il"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased bg-white text-navy overflow-x-hidden">
        <Schema />
        {children}
      </body>
    </html>
  );
}
