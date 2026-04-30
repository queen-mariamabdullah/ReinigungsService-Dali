import type { Metadata } from "next";
import Script from "next/script";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Fensterreinigung Göttingen",
  description:
    "Fensterreinigung in Göttingen fuer private und gewerbliche Objekte. Reinigungsservice Dali liefert streifenfreie Ergebnisse.",
  keywords: ["fensterreinigung göttingen", "fenster putzen göttingen"],
  alternates: {
    canonical: "/fensterreinigung-goettingen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Fensterreinigung",
  areaServed: "Göttingen",
  provider: { "@type": "LocalBusiness", name: "Reinigungsservice Dali" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Fensterreinigung Göttingen", item: "/fensterreinigung-goettingen" },
  ],
};

export default function FensterreinigungPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <Script
        id="service-schema-fensterreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-fensterreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Typography as="p" variant="eyebrow" className="mb-3">
            Fensterreinigung Göttingen
          </Typography>
          <Typography as="h1" variant="h1" className="mb-5">
            Streifenfreie Fensterreinigung in Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Wir reinigen Fenster, Rahmen und Glasflaechen mit systematischer
            Vorgehensweise fuer ein klares Ergebnis.
          </Typography>
          <Typography variant="bodyMuted" className="mb-8">
            Ideal fuer Wohnungen, Haeuser, Praxen und Bueros mit regelmaessigem
            Reinigungsbedarf.
          </Typography>
          <Button href="/contact">Fensterreinigung anfragen</Button>
        </div>
      </Section>
    </main>
  );
}
