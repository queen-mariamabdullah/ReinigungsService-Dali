import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  PageIntroSection,
  PricingPackagesSection,
  ServicesGridSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "Services | Reinigungsservice Dali",
  description:
    "Explore professional home, office, and deep cleaning services from Reinigungsservice Dali.",
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
    </main>
  );
}
