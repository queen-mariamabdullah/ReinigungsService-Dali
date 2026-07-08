import {
  BlogPreviewSection,
  FinalCtaSection,
  HeroSection,
  LocalCoverageSection,
  ProcessSection,
  ServicesSection,
  SocialProofSection,
  TestimonialsSection,
  TrustBarSection,
  WhyChooseUsSection,
} from "../organisms/HomeSections";

export function HomePage() {
  return (
    <main className="min-h-screen bg-brand-surface text-[#1A1A1A]">
      <HeroSection />
      <TrustBarSection />
      <SocialProofSection />
      <TestimonialsSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <BlogPreviewSection />
      <LocalCoverageSection />
      <FinalCtaSection />
    </main>
  );
}
