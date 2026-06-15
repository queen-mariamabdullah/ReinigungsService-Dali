"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { PHOTOS } from "@/lib/photos";
import { Button } from "../atoms/Button";
import { Section } from "../atoms/Section";
import { Typography } from "../atoms/Typography";
import { BrandedImage } from "../molecules/BrandedImage";
import { FeatureItem } from "../molecules/FeatureItem";
import { ServiceCard } from "../molecules/ServiceCard";
import { TestimonialCard } from "../molecules/TestimonialCard";

const services = [
  {
    title: "Wohnungsreinigung",
    imageSrc: PHOTOS.services.home,
    description:
      "Strukturierte Reinigungspläne im wöchentlichen oder zweiwöchentlichen Rhythmus mit persönlicher Betreuung und klarer Qualitätskontrolle.",
  },
  {
    title: "Büroreinigung",
    imageSrc: PHOTOS.services.office,
    description:
      "Professionelle Reinigung von Arbeitsbereichen für Hygiene, Produktivität und einen überzeugenden Eindruck bei Kunden.",
  },
  {
    title: "Grundreinigung",
    imageSrc: PHOTOS.services.deep,
    description:
      "Intensive Reinigung von oben bis unten - ideal bei Einzug, saisonalen Neustarts und besonders hohen Hygieneanforderungen.",
  },
];

const features = [
  {
    title: "Persönliche Fachkompetenz",
    description:
      "Jeder Einsatz folgt klaren Checklisten und hohen Qualitätsstandards – ausgeführt vom Inhaber selbst.",
  },
  {
    title: "Transparente Kommunikation",
    description:
      "Schnelle Rückmeldungen, klare Serviceabsprachen und verlässliche Termine machen die Zusammenarbeit einfach planbar.",
  },
  {
    title: "Umweltbewusste Mittel",
    description:
      "Ich setze auf wirksame Reinigungsprodukte, die für Familien, Büros und Innenräume besser verträglich sind.",
  },
];

const testimonials = [
  {
    quote:
      "Zuverlässig, pünktlich und sehr gründlich. Die Qualität war vom ersten Tag an hervorragend.",
    author: "Anna M.",
    role: "Privatkundin, Göttingen",
  },
  {
    quote:
      "Unser Büro ist immer sauber und repräsentativ. Kommunikation und Ausführung sind absolut professionell.",
    author: "Markus M.",
    role: "Geschäftskunde, Göttingen",
  },
];

const blogPosts = [
  {
    title: "5 Tipps für ein sauberes Zuhause zwischen den Terminen",
    excerpt:
      "Einfache Routinen, mit denen Ihr Zuhause die ganze Woche sauber und gepflegt bleibt.",
    imageSrc: PHOTOS.blog.freshHome,
  },
  {
    title: "Hygienestandards im Büro, die Produktivität fördern",
    excerpt:
      "Wie ein strukturierter Reinigungsplan Komfort und Produktivität im Büro verbessert.",
    imageSrc: PHOTOS.blog.officeHygiene,
  },
  {
    title: "Wann sich eine Grundreinigung wirklich lohnt",
    excerpt:
      "Praktische Hinweise, wann eine intensive Grundreinigung über die Routine hinaus sinnvoll ist.",
    imageSrc: PHOTOS.blog.deepWhen,
  },
];

const localPages = [
  { href: "/reinigungsservice-goettingen", label: "Reinigungsservice Göttingen" },
  { href: "/gebaeudereinigung-goettingen", label: "Gebäudereinigung Göttingen" },
  { href: "/bueroreinigung-goettingen", label: "Büroreinigung Göttingen" },
  { href: "/fensterreinigung-goettingen", label: "Fensterreinigung Göttingen" },
  { href: "/grundreinigung-goettingen", label: "Grundreinigung Göttingen" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 18, opacity: 0.6 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    );
  }, []);

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-brand-surface via-brand-mintLight to-brand-mint/30">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#6EE7A8]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#1F5F4A]/15 blur-3xl" />
      <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45 }}
        >
          <Typography as="p" variant="eyebrow" className="mb-4">
            ReinigungsService-Göttingen
          </Typography>
          <Typography as="h1" variant="display" className="mb-5 max-w-2xl">
            Sauberkeit auf Höchstem Niveau für Zuhause und Büro
          </Typography>
          <Typography variant="bodyMuted" className="mb-8 max-w-xl">
            Selbstständiger Reinigungsservice mit persönlicher Betreuung und
            konstanter Qualität für private und gewerbliche Kunden in Göttingen.
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" className="shadow-sm">
              Jetzt Angebot anfragen
            </Button>
            <Button href="/services" variant="secondary">
              Leistungen ansehen
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#CFF5D2] bg-white p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#1F5F4A]">12+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#6B7280]">
                Jahre Erfahrung
              </p>
            </div>
            <div className="rounded-xl border border-[#CFF5D2] bg-white p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#1F5F4A]">4.9/5</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#6B7280]">
                Kundenbewertung
              </p>
            </div>
            <div className="rounded-xl border border-[#CFF5D2] bg-white p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#1F5F4A]">48h</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#6B7280]">
                Rückmeldung
              </p>
            </div>
          </div>
        </motion.div>
        <div
          ref={cardRef}
          className="pro-image-frame p-4 md:p-5"
        >
          <BrandedImage
            src={PHOTOS.hero}
            alt="Professionelle Reinigung in Göttingen"
            width={640}
            height={420}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="mb-6 h-auto w-full rounded-xl object-cover"
          />
          <Typography as="h2" variant="h2" className="mb-4">
            Sorgfalt bei jedem Einsatz
          </Typography>
          <Typography variant="bodyMuted">
            Klare Checklisten, persönliche Ausführung und nachvollziehbare
            Ergebnisse bei jedem Termin.
          </Typography>
        </div>
      </div>
    </Section>
  );
}

export function ServicesSection() {
  return (
    <Section className="bg-white">
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.45 }}
      >
        <Typography as="p" variant="eyebrow" className="mb-3">
          Leistungen
        </Typography>
        <Typography as="h2" variant="h2" className="mb-4">
          Passende Reinigung für jede Fläche
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
          Flexible Lösungen für Privathaushalte, Unternehmen und intensive
          Reinigungsanforderungen.
        </Typography>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={`${service.title} photo`}
          />
        ))}
      </div>
    </Section>
  );
}

export function WhyChooseUsSection() {
  return (
    <Section className="bg-[#F7F9F8]">
      <div className="mb-12 text-center">
        <Typography as="p" variant="eyebrow" className="mb-3">
          Warum wir
        </Typography>
        <Typography as="h2" variant="h2" className="mb-4">
          Verlässlich, gründlich, professionell
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <div className="mb-12 text-center">
        <Typography as="p" variant="eyebrow" className="mb-3">
          Kundenstimmen
        </Typography>
        <Typography as="h2" variant="h2">
          Vertrauen von Privat- und Gewerbekunden
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.author}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
          />
        ))}
      </div>
    </Section>
  );
}

export function BlogPreviewSection() {
  return (
    <Section className="bg-[#F7F9F8]">
      <div className="mb-12 text-center">
        <Typography as="p" variant="eyebrow" className="mb-3">
          Ratgeber
        </Typography>
        <Typography as="h2" variant="h2" className="mb-4">
          Tipps rund um Reinigung und Hygiene
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-2xl border border-[#CFF5D2] bg-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-cardHover"
          >
            <div className="overflow-hidden border-b border-[#CFF5D2]">
              <BrandedImage
                src={post.imageSrc}
                alt={post.title}
                width={800}
                height={400}
                className="h-40 w-full object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="p-6">
              <Typography as="h3" variant="h3" className="mb-3">
                {post.title}
              </Typography>
              <Typography variant="bodyMuted">{post.excerpt}</Typography>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function LocalCoverageSection() {
  return (
    <Section className="bg-white">
      <div className="mb-10 text-center">
        <Typography as="p" variant="eyebrow" className="mb-3">
          Göttingen Servicegebiet
        </Typography>
        <Typography as="h2" variant="h2" className="mb-4">
          Reinigungsservice in Göttingen und Umgebung
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
          Finden Sie schnell die passende Leistung für Ihren Standort und
          Bedarf.
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {localPages.map((item) => (
          <Button key={item.href} href={item.href} variant="secondary" className="text-sm md:text-base">
            {item.label}
          </Button>
        ))}
      </div>
    </Section>
  );
}

export function FinalCtaSection() {
  return (
    <Section className="bg-[#1F5F4A]">
      <div className="rounded-2xl border border-[#2E7A60] bg-[#1F5F4A] px-6 py-10 text-center md:px-10">
        <Typography as="h2" variant="h2" className="mb-4 text-white">
          Bereit für ein sauberes Umfeld?
        </Typography>
        <Typography variant="body" className="mx-auto mb-8 max-w-2xl text-[#CFF5D2]">
          Erhalten Sie schnell ein Angebot. Wir erstellen einen Reinigungsplan,
          der zu Ihrem Objekt passt.
        </Typography>
        <Button
          href="/contact"
          className="bg-[#6EE7A8] text-[#1A1A1A] hover:bg-[#5DD898]"
        >
          Jetzt Kontakt aufnehmen
        </Button>
      </div>
    </Section>
  );
}
