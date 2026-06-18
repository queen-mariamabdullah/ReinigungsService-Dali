"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PHOTOS } from "@/lib/photos";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  useMotionSafe,
} from "@/lib/motion";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Section } from "../atoms/Section";
import { Typography } from "../atoms/Typography";
import { BrandedImage } from "../molecules/BrandedImage";
import { FeatureItem } from "../molecules/FeatureItem";
import { ServiceCard } from "../molecules/ServiceCard";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { PremiumCleaningHero } from "./PremiumCleaningHero";

const services = [
  {
    title: "Wohnungsreinigung",
    href: "/reinigungsservice-goettingen",
    imageSrc: PHOTOS.services.home,
    description:
      "Strukturierte Reinigungspläne im wöchentlichen oder zweiwöchentlichen Rhythmus mit persönlicher Betreuung und klarer Qualitätskontrolle.",
  },
  {
    title: "Büroreinigung",
    href: "/bueroreinigung-goettingen",
    imageSrc: PHOTOS.services.office,
    description:
      "Professionelle Reinigung von Arbeitsbereichen für Hygiene, Produktivität und einen überzeugenden Eindruck bei Kunden.",
  },
  {
    title: "Grundreinigung",
    href: "/grundreinigung-goettingen",
    imageSrc: PHOTOS.services.deep,
    description:
      "Intensive Reinigung von oben bis unten – ideal bei Einzug, saisonalen Neustarts und besonders hohen Hygieneanforderungen.",
  },
];

const features = [
  {
    icon: "user" as const,
    title: "Persönliche Fachkompetenz",
    description:
      "Jeder Einsatz folgt klaren Checklisten und hohen Qualitätsstandards – ausgeführt vom Inhaber selbst.",
  },
  {
    icon: "message" as const,
    title: "Transparente Kommunikation",
    description:
      "Schnelle Rückmeldungen, klare Serviceabsprachen und verlässliche Termine machen die Zusammenarbeit einfach planbar.",
  },
  {
    icon: "leaf" as const,
    title: "Umweltbewusste Mittel",
    description:
      "Ich setze auf wirksame Reinigungsprodukte, die für Familien, Büros und Innenräume besser verträglich sind.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: "message" as const,
    title: "Anfrage & Beratung",
    description: "Sie schildern Ihren Bedarf – ich melde mich innerhalb von 48 Stunden mit Rückfragen oder einem Terminvorschlag.",
  },
  {
    step: "02",
    icon: "clipboard" as const,
    title: "Besichtigung & Plan",
    description: "Vor Ort klären wir Umfang, Rhythmus und Besonderheiten. Sie erhalten ein transparentes Angebot.",
  },
  {
    step: "03",
    icon: "sparkle" as const,
    title: "Reinigung & Qualität",
    description: "Persönliche Ausführung nach Checkliste – mit klarer Qualitätskontrolle bei jedem Einsatz.",
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

const trustMetrics = [
  { value: "12+", label: "Jahre Erfahrung", icon: "award" as const },
  { value: "4.9/5", label: "Kundenbewertung", icon: "star" as const },
  { value: "48h", label: "Rückmeldung", icon: "clock" as const },
  { value: "100%", label: "Persönliche Ausführung", icon: "user" as const },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const { viewport, transition } = useMotionSafe();
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <motion.div
      className={`mb-12 flex max-w-3xl flex-col md:mb-14 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      transition={transition}
    >
      <span className="section-eyebrow mb-5 w-fit">{eyebrow}</span>
      <Typography as="h2" variant="h2" className="mb-4 mt-5">
        {title}
      </Typography>
      {description ? (
        <Typography variant="bodyMuted" className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
          {description}
        </Typography>
      ) : null}
    </motion.div>
  );
}

export function HeroSection() {
  return <PremiumCleaningHero />;
}

export function TrustBarSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section className="section-band py-8 md:py-10" containerClassName="!max-w-7xl">
      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {trustMetrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={fadeInUp}
            transition={transition}
            className="flex items-center gap-4 rounded-2xl border border-brand-mint/80 bg-brand-surface px-4 py-4 md:px-5 md:py-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mintLight text-brand-forest ring-1 ring-brand-mint">
              <Icon name={metric.icon} className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="font-display text-2xl font-bold leading-none text-brand-forest md:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1.5 font-body text-xs font-semibold text-[#6B7280] md:text-sm">
                {metric.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function ProcessSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section id="ablauf" className="bg-brand-surface">
      <SectionHeader
        align="center"
        eyebrow="Ablauf"
        title="In drei Schritten zu Ihrer Reinigung"
        description="Transparent, unkompliziert und mit persönlicher Betreuung vom ersten Kontakt bis zum regelmäßigen Service."
      />
      <motion.ol
        className="relative grid gap-6 md:grid-cols-3 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-14 hidden h-0.5 bg-gradient-to-r from-brand-mint via-brand-forest/30 to-brand-mint md:block"
        />
        {processSteps.map((item) => (
          <motion.li
            key={item.step}
            variants={fadeInUp}
            transition={transition}
            className="relative rounded-2xl border border-brand-mint/80 bg-white p-6 shadow-card md:p-8"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="inline-flex rounded-xl bg-brand-forest p-3 text-[#6EE7A8] shadow-sm">
                <Icon name={item.icon} className="h-6 w-6" strokeWidth={2} />
              </div>
              <span className="font-display text-sm font-bold uppercase tracking-wider text-brand-forest/40">
                Schritt {item.step}
              </span>
            </div>
            <Typography as="h3" variant="h3" className="mb-3">
              {item.title}
            </Typography>
            <Typography variant="bodyMuted">{item.description}</Typography>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}

export function ServicesSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section id="leistungen" className="bg-white">
      <SectionHeader
        align="center"
        eyebrow="Leistungen"
        title="Passende Reinigung für jede Fläche"
        description="Flexible Lösungen für Privathaushalte, Unternehmen und intensive Reinigungsanforderungen."
      />
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeInUp} transition={transition}>
            <ServiceCard
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={`${service.title} photo`}
              href={service.href}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
        transition={transition}
      >
        <Button href="/services" variant="secondary" className="cursor-pointer">
          Alle Leistungen ansehen
        </Button>
      </motion.div>
    </Section>
  );
}

export function WhyChooseUsSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section className="relative overflow-hidden bg-brand-surface">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-mint/40 blur-3xl" />
      <div className="relative">
        <SectionHeader
          align="center"
          eyebrow="Warum wir"
          title="Verlässlich, gründlich, professionell"
          description="Vertrauen entsteht durch persönliche Verantwortung – nicht durch anonyme Teams."
        />
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp} transition={transition}>
              <FeatureItem
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function TestimonialsSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section className="bg-white">
      <SectionHeader
        align="center"
        eyebrow="Kundenstimmen"
        title="Vertrauen von Privat- und Gewerbekunden"
      />
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.author} variants={fadeInUp} transition={transition}>
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function BlogPreviewSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section className="bg-white">
      <SectionHeader
        align="center"
        eyebrow="Ratgeber"
        title="Tipps rund um Reinigung und Hygiene"
        description="Praktische Hinweise für Zuhause und Büro – von Ihrem Reinigungsservice in Göttingen."
      />
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {blogPosts.map((post) => (
          <motion.article
            key={post.title}
            variants={fadeInUp}
            transition={transition}
            className="group flex flex-col overflow-hidden rounded-2xl border border-brand-mint bg-brand-surface shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-cardHover"
          >
            <div className="overflow-hidden border-b border-brand-mint">
              <BrandedImage
                src={post.imageSrc}
                alt={post.title}
                width={800}
                height={400}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="section-eyebrow mb-4 w-fit py-1 text-[0.65rem]">Ratgeber</span>
              <Typography as="h3" variant="h3" className="mb-3">
                {post.title}
              </Typography>
              <Typography variant="bodyMuted" className="mb-4 flex-1">
                {post.excerpt}
              </Typography>
              <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-forest">
                Weiterlesen
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export function LocalCoverageSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section className="bg-brand-surface">
      <SectionHeader
        align="center"
        eyebrow="Göttingen Servicegebiet"
        title="Reinigungsservice in Göttingen und Umgebung"
        description="Finden Sie schnell die passende Leistung für Ihren Standort und Bedarf."
      />
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {localPages.map((item) => (
          <motion.div key={item.href} variants={fadeInUp} transition={transition}>
            <Link
              href={item.href}
              className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-brand-mint bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-forest/25 hover:shadow-cardHover"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mintLight text-brand-forest ring-1 ring-brand-mint transition group-hover:bg-brand-forest group-hover:text-[#6EE7A8]">
                <Icon name="map" className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-body text-sm font-semibold text-[#1F2937] md:text-base">
                {item.label}
              </span>
              <Icon
                name="arrow"
                className="ml-auto h-4 w-4 shrink-0 text-brand-forest opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                strokeWidth={2}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function FinalCtaSection() {
  const { viewport, transition } = useMotionSafe();

  return (
    <Section className="bg-white pb-20 pt-8 md:pb-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-brand-forest px-6 py-12 text-center shadow-2xl md:px-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={scaleIn}
        transition={transition}
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#6EE7A8]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6EE7A8]/40 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-white md:text-sm">
            <Icon name="sparkle" className="h-4 w-4 text-[#6EE7A8]" strokeWidth={2} />
            Jetzt starten
          </span>
          <Typography as="h2" variant="h2" className="mb-4 mt-6 text-white">
            Bereit für ein sauberes Umfeld?
          </Typography>
          <Typography variant="body" className="mx-auto mb-8 max-w-2xl text-lg font-medium text-white/95">
            Erhalten Sie schnell ein Angebot. Wir erstellen einen Reinigungsplan, der zu Ihrem
            Objekt passt.
          </Typography>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              className="cursor-pointer bg-[#6EE7A8] px-8 text-[#1A1A1A] shadow-lg hover:bg-[#5DD898]"
            >
              Jetzt Kontakt aufnehmen
            </Button>
            <Link
              href="tel:+49301234567"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-white/50 bg-white/10 px-6 py-3 font-body text-base font-semibold text-white transition hover:bg-white/20"
            >
              <Icon name="phone" className="h-5 w-5" strokeWidth={2} />
              Anrufen
            </Link>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
