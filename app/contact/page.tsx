import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  ContactSection,
  PageIntroSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Reinigungsservice Dali fuer ein Angebot - per Formular, E-Mail, Telefon oder direkt in Göttingen.",
  keywords: ["kontakt reinigungsservice göttingen", "angebot reinigungsfirma göttingen"],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <PageIntroSection
        eyebrow="Kontakt"
        title="Planen wir gemeinsam Ihre Reinigung"
        description="Teilen Sie uns Ihren Bedarf mit und Sie erhalten zeitnah ein klares, individuelles Angebot."
        imageSrc={PHOTOS.contactIntro}
        imageAlt="Freundlicher Empfangsbereich fuer die Planung Ihrer Reinigung"
      />
      <ContactSection />
    </main>
  );
}
