import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  AboutContentSection,
  PageIntroSection,
  ProfessionalPositioningSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie ReinigungsService-Göttingen kennen: unsere Mission, Werte und professionellen Reinigungsstandards.",
  keywords: ["reinigungsfirma göttingen", "über uns reinigungsservice göttingen"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <PageIntroSection
        eyebrow="Über uns"
        title="Ein modernes Reinigungsteam, dem Sie vertrauen können"
        description="Wir kombinieren verlässliche Serviceabläufe mit hoher Ausführungsqualität, damit Wohn- und Gewerbeflächen dauerhaft sauber bleiben."
        imageSrc={PHOTOS.aboutTeam}
        imageAlt="Professionelle Teambesprechung mit Fokus auf Qualität und Zuverlässigkeit"
      />
      <AboutContentSection />
      <ProfessionalPositioningSection />
    </main>
  );
}
