import type { Metadata } from "next";
import Script from "next/script";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Bueroreinigung Goettingen",
  description:
    "Professionelle Bueroreinigung in Goettingen. Reinigungsservice Dali sorgt fuer hygienische, gepflegte und kundenfreundliche Arbeitsumgebungen.",
  keywords: ["bueroreinigung goettingen", "office cleaning goettingen"],
  alternates: {
    canonical: "/bueroreinigung-goettingen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bueroreinigung",
  areaServed: "Goettingen",
  provider: { "@type": "LocalBusiness", name: "Reinigungsservice Dali" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Bueroreinigung Goettingen", item: "/bueroreinigung-goettingen" },
  ],
};

export default function BueroreinigungPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <Script
        id="service-schema-bueroreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-bueroreinigung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Typography as="p" variant="eyebrow" className="mb-3">
            Bueroreinigung Goettingen
          </Typography>
          <Typography as="h1" variant="h1" className="mb-5">
            Bueroreinigung in Goettingen fuer produktive Teams
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Ein sauberes Buero reduziert Ausfallzeiten, staerkt den ersten
            Eindruck bei Kunden und verbessert das Arbeitsumfeld.
          </Typography>
          <Typography variant="bodyMuted" className="mb-8">
            Wir bieten fruehe, spaete und flexible Einsatzzeiten fuer laufende
            Bueroreinigung in Goettingen.
          </Typography>
          <Button href="/contact">Bueroreinigung anfragen</Button>
        </div>
      </Section>
    </main>
  );
}
