import type { Metadata } from "next";
import Link from "next/link";
import { PHOTOS } from "@/lib/photos";
import {
  PageIntroSection,
  PricingPackagesSection,
  ServicesGridSection,
} from "../../components/organisms/SharedSections";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Entdecken Sie professionelle Wohnungs-, Buero- und Grundreinigung von Reinigungsservice Dali.",
  keywords: [
    "leistungen göttingen",
    "gebaeudereinigung göttingen",
    "bueroreinigung göttingen",
    "fensterreinigung göttingen",
    "grundreinigung göttingen",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <PageIntroSection
        eyebrow="Leistungen"
        title="Professionelle Reinigungsleistungen fuer jeden Bedarf"
        description="Klare Servicepakete fuer private und gewerbliche Flaechen, umgesetzt mit gleichbleibend hoher Qualitaet."
        imageSrc={PHOTOS.services.office}
        imageAlt="Sauberer, heller Bueroraum bereit fuer professionelle Reinigung"
      />
      <ServicesGridSection />
      <PricingPackagesSection />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Typography as="h2" variant="h2" className="mb-4 text-center">
            Lokale Leistungsseiten fuer Göttingen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6 text-center">
            Detaillierte Informationen zu jeder Leistung in Göttingen.
          </Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["/reinigungsservice-goettingen", "Reinigungsservice Göttingen"],
              ["/gebaeudereinigung-goettingen", "Gebäudereinigung Göttingen"],
              ["/bueroreinigung-goettingen", "Büroreinigung Göttingen"],
              ["/fensterreinigung-goettingen", "Fensterreinigung Göttingen"],
              ["/grundreinigung-goettingen", "Grundreinigung Göttingen"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-[#CFF5D2] bg-[#F7F9F8] px-4 py-2 text-sm font-semibold text-[#1F5F4A] transition hover:bg-[#E6FBEA]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
