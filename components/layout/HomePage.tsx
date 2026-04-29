import {
  BlogPreviewSection,
  FinalCtaSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "../organisms/HomeSections";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FinalCtaSection />
    </main>
  );
}
