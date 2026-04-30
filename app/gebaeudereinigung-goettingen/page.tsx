import type { Metadata } from "next";
import Script from "next/script";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Gebäudereinigung Göttingen",
  description:
    "Gebaeudereinigung in Göttingen durch Reinigungsservice Dali. Strukturierte Unterhaltsreinigung fuer Wohn- und Gewerbeobjekte.",
  keywords: ["gebaeudereinigung göttingen", "unterhaltsreinigung göttingen"],
  alternates: {
    canonical: "/gebaeudereinigung-goettingen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gebaeudereinigung",
  areaServed: "Göttingen",
  provider: { "@type": "LocalBusiness", name: "Reinigungsservice Dali" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Gebäudereinigung Göttingen", item: "/gebaeudereinigung-goettingen" },
  ],
};

export default function GebaeudereinigungPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <Script
        id="service-schema-gebaeudereinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-gebaeudereinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Typography as="p" variant="eyebrow" className="mb-3">
            Gebäudereinigung Göttingen
          </Typography>
          <Typography as="h1" variant="h1" className="mb-5">
            Zuverlaessige Gebaeudereinigung fuer Immobilien in Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Wir reinigen Treppenhaeuser, Gemeinschaftsflaechen, Sanitairbereiche
            und stark frequentierte Zonen mit festen Qualitaetsstandards.
          </Typography>
          <Typography variant="bodyMuted" className="mb-8">
            Unser Team erstellt einen klaren Reinigungsplan, abgestimmt auf
            Objektgroesse, Nutzung und Reinigungsintervalle.
          </Typography>
          <Button href="/contact">Gebaeudereinigung anfragen</Button>
        </div>
      </Section>
    </main>
  );
}
