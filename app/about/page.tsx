import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  AboutContentSection,
  PageIntroSection,
  ProfessionalPositioningSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "Ueber uns",
  description:
    "Lernen Sie Reinigungsservice Dali kennen: unsere Mission, Werte und professionellen Reinigungsstandards.",
  keywords: ["reinigungsfirma göttingen", "ueber uns reinigungsservice dali"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <PageIntroSection
        eyebrow="Ueber uns"
        title="Ein modernes Reinigungsteam, dem Sie vertrauen koennen"
        description="Wir kombinieren verlaessliche Serviceablaeufe mit hoher Ausfuehrungsqualitaet, damit Wohn- und Gewerbeflaechen dauerhaft sauber bleiben."
        imageSrc={PHOTOS.aboutTeam}
        imageAlt="Professionelles Teammeeting mit Fokus auf Qualitaet und Zuverlaessigkeit"
      />
      <AboutContentSection />
      <ProfessionalPositioningSection />
    </main>
  );
}
