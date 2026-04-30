import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";
import {
  ContactSection,
  PageIntroSection,
} from "../../components/organisms/SharedSections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Reinigungsservice Dali for a quote. Reach us via form, email, phone, or our Göttingen location.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <PageIntroSection
        eyebrow="Contact"
        title="Let’s Plan Your Cleaning Service"
        description="Tell us what you need and we will respond quickly with a clear, tailored quote."
        imageSrc={PHOTOS.contactIntro}
        imageAlt="Bright, welcoming interior where we plan your cleaning service"
      />
      <ContactSection />
    </main>
  );
}
