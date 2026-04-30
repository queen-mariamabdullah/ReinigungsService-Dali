import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PHOTOS } from "@/lib/photos";
import { Button } from "../../components/atoms/Button";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";
import { BrandedImage } from "../../components/molecules/BrandedImage";

export const metadata: Metadata = {
  title: "Reinigungsservice Göttingen",
  description:
    "Reinigungsservice Dali ist Ihr Partner fuer Reinigungsservice in Göttingen: Gebaeudereinigung, Bueroreinigung, Fensterreinigung und Grundreinigung.",
  keywords: [
    "reinigungsservice göttingen",
    "reinigungsfirma göttingen",
    "gebaeudereinigung göttingen",
    "bueroreinigung göttingen",
  ],
  alternates: {
    canonical: "/reinigungsservice-goettingen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Leistungen bietet Ihr Reinigungsservice in Göttingen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir bieten Gebaeudereinigung, Bueroreinigung, Fensterreinigung und Grundreinigung fuer private und gewerbliche Kunden in Göttingen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell erhalte ich ein Angebot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel erhalten Sie innerhalb von 24 bis 48 Stunden ein transparentes Angebot.",
      },
    },
    {
      "@type": "Question",
      name: "Sind regelmaessige Reinigungsplaene moeglich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir erstellen individuelle Reinigungsplaene fuer woechentliche, zweiwoechentliche oder flexible Einsaetze.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Reinigungsservice",
  areaServed: "Göttingen",
  provider: { "@type": "LocalBusiness", name: "Reinigungsservice Dali" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: "/" },
    { "@type": "ListItem", position: 2, name: "Reinigungsservice Göttingen", item: "/reinigungsservice-goettingen" },
  ],
};

export default function GoettingenLandingPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <Script
        id="faq-schema-goettingen"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-goettingen"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema-goettingen"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Section className="bg-white">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Typography as="p" variant="eyebrow" className="mb-3">
              Reinigungsservice Göttingen
            </Typography>
            <Typography as="h1" variant="h1" className="mb-5">
              Ihr professioneller Reinigungsservice in Göttingen
            </Typography>
            <Typography variant="bodyMuted" className="mb-8">
              Reinigungsservice Dali bietet zuverlaessige Reinigung fuer Wohn-
              und Gewerbeflaechen in Göttingen. Wir arbeiten mit klaren
              Checklisten, festen Standards und messbarer Qualitaet.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Jetzt Angebot anfragen</Button>
              <Button href="/services" variant="secondary">
                Leistungen ansehen
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#CFF5D2] bg-[#F7F9F8] p-4">
            <BrandedImage
              src={PHOTOS.hero}
              alt="Reinigungsservice Dali in Göttingen bei der professionellen Reinigung"
              width={900}
              height={620}
              priority
              className="h-full w-full rounded-xl object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F9F8]">
        <div className="mb-8 text-center">
          <Typography as="h2" variant="h2" className="mb-3">
            Unsere Reinigungsleistungen in Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
            Waehlbare Servicebausteine fuer Privatkunden, Bueros und
            gewerbliche Objekte.
          </Typography>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              href: "/gebaeudereinigung-goettingen",
              title: "Gebäudereinigung Göttingen",
              text: "Regelmaessige Unterhaltsreinigung fuer Wohn- und Gewerbeimmobilien.",
            },
            {
              href: "/bueroreinigung-goettingen",
              title: "Büroreinigung Göttingen",
              text: "Saubere Arbeitsplaetze fuer Produktivitaet, Hygiene und Kundenwirkung.",
            },
            {
              href: "/fensterreinigung-goettingen",
              title: "Fensterreinigung Göttingen",
              text: "Streifenfreie Fensterreinigung fuer Wohnungen, Haeuser und Bueros.",
            },
            {
              href: "/grundreinigung-goettingen",
              title: "Grundreinigung Göttingen",
              text: "Intensive Tiefenreinigung fuer Neustarts, Umzuege und Sonderfaelle.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-[#CFF5D2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Typography as="h3" variant="h3" className="mb-2">
                {item.title}
              </Typography>
              <Typography variant="bodyMuted">{item.text}</Typography>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Typography as="h2" variant="h2" className="mb-6 text-center">
            Haeufige Fragen zum Reinigungsservice in Göttingen
          </Typography>
          <div className="space-y-5">
            <article className="rounded-xl border border-[#DCEFE0] p-5">
              <Typography as="h3" variant="h3" className="mb-2">
                Welche Gebiete in Göttingen bedienen Sie?
              </Typography>
              <Typography variant="bodyMuted">
                Wir bedienen das Stadtgebiet Göttingen und umliegende
                Bereiche. Kontaktieren Sie uns kurz fuer eine schnelle
                Verfuegbarkeitspruefung.
              </Typography>
            </article>
            <article className="rounded-xl border border-[#DCEFE0] p-5">
              <Typography as="h3" variant="h3" className="mb-2">
                Arbeiten Sie mit festen Teams?
              </Typography>
              <Typography variant="bodyMuted">
                Ja, wo moeglich planen wir feste Teams ein, damit Qualitaet und
                Kommunikation langfristig stabil bleiben.
              </Typography>
            </article>
          </div>
        </div>
      </Section>
    </main>
  );
}
