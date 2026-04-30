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
  title: "Services",
  description:
    "Explore professional home, office, and deep cleaning services from Reinigungsservice Dali.",
  keywords: [
    "services goettingen",
    "gebaeudereinigung goettingen",
    "bueroreinigung goettingen",
    "fensterreinigung goettingen",
    "grundreinigung goettingen",
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <PageIntroSection
        eyebrow="Services"
        title="Professional Cleaning Services for Every Need"
        description="Clear service options for residential and commercial spaces, delivered with quality and consistency."
        imageSrc={PHOTOS.services.office}
        imageAlt="Clean, bright office space ready for professional maintenance"
      />
      <ServicesGridSection />
      <PricingPackagesSection />
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <Typography as="h2" variant="h2" className="mb-4 text-center">
            Lokale Leistungsseiten fuer Goettingen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6 text-center">
            Detaillierte Informationen zu jeder Leistung in Goettingen.
          </Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["/reinigungsservice-goettingen", "Reinigungsservice Goettingen"],
              ["/gebaeudereinigung-goettingen", "Gebaeudereinigung Goettingen"],
              ["/bueroreinigung-goettingen", "Bueroreinigung Goettingen"],
              ["/fensterreinigung-goettingen", "Fensterreinigung Goettingen"],
              ["/grundreinigung-goettingen", "Grundreinigung Goettingen"],
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
