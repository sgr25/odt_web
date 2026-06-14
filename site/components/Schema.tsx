import { FAQ } from "@/lib/content";

export default function Schema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "לאה גרינברג – סדנאות ODT",
    description:
      "סדנאות ODT חווייתיות לארגונים, בתי ספר וחברות. מחזקות אמון, שיתוף פעולה ומוטיבציה בצוות. בהתאמה אישית לכל ארגון.",
    url: "https://odt-leag.co.il",
    telephone: "+972583225303",
    email: "odt.leag@gmail.com",
    priceRange: "$$",
    currenciesAccepted: "ILS",
    inLanguage: "he",
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    serviceType: [
      "סדנאות ODT",
      "גיבוש צוותים",
      "פיתוח ארגוני",
      "סדנאות מנהיגות",
    ],
    founder: {
      "@type": "Person",
      name: "לאה גרינברג",
      jobTitle: "מנחת סדנאות ODT",
    },
    sameAs: [],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "סדנאות ODT לארגונים",
    provider: {
      "@type": "Person",
      name: "לאה גרינברג",
    },
    serviceType: "Team Development Workshop",
    description:
      "סדנאות ODT מותאמות אישית לארגונים, בתי ספר וחברות לחיזוק גיבוש, תקשורת ומוטיבציה.",
    areaServed: "Israel",
    inLanguage: "he",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
