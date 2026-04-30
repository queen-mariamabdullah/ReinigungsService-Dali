import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  AboutContentSection,
  PageIntroSection,
  ProfessionalPositioningSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Reinigungsservice Dali, our mission, values, and professional cleaning standards.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <PageIntroSection
        eyebrow="About Us"
        title="A Modern Cleaning Team You Can Trust"
        description="We combine reliable service systems with premium-quality execution to help homes and businesses stay spotless."
        imageSrc={PHOTOS.aboutTeam}
        imageAlt="Professional team meeting focused on service quality and reliability"
      />
      <AboutContentSection />
      <ProfessionalPositioningSection />
    </main>
  );
}
