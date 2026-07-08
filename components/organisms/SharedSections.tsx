import { PHOTOS } from "@/lib/photos";
import { BUSINESS_CONTACT } from "@/lib/business";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Section } from "../atoms/Section";
import { Typography } from "../atoms/Typography";
import { BrandedImage } from "../molecules/BrandedImage";
import { ConsentMapEmbed } from "../molecules/ConsentMapEmbed";
import { ServiceCard } from "../molecules/ServiceCard";
import { ContactForm } from "./ContactForm";

type PageIntroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageIntroSection({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: PageIntroSectionProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <Section className="border-b border-brand-mint/60 bg-white">
      <div
        className={
          hasImage
            ? "grid items-center gap-10 md:grid-cols-2 md:gap-14"
            : "mx-auto max-w-3xl text-center"
        }
      >
        <div className={hasImage ? "text-left" : "flex flex-col items-center"}>
          <span className="section-eyebrow mb-5">{eyebrow}</span>
          <Typography as="h1" variant="h1" className="mb-5 mt-2">
            {title}
          </Typography>
          <Typography variant="bodyMuted" className={hasImage ? "max-w-xl" : "max-w-2xl"}>
            {description}
          </Typography>
          <Button href="/contact" className="mt-8">
            Angebot anfragen
          </Button>
        </div>
        {hasImage && imageSrc ? (
          <div className="pro-image-frame shadow-card">
            <BrandedImage
              src={imageSrc}
              alt={imageAlt ?? ""}
              width={800}
              height={560}
              className="h-56 w-full object-cover md:h-80"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ) : null}
      </div>
    </Section>
  );
}

export function AboutContentSection() {
  const items = [
    {
      icon: "user" as const,
      title: "Wer ich bin",
      description:
        "ReinigungsService-Göttingen ist ein selbstständiges Einzelunternehmen in Göttingen mit persönlicher Betreuung für private und gewerbliche Kunden.",
    },
    {
      icon: "sparkle" as const,
      title: "Auftrag",
      description:
        "Saubere und gesunde Räume durch konstante Standards, transparente Kommunikation und verlässliche Ausführung.",
    },
    {
      icon: "shield" as const,
      title: "Werte",
      description:
        "Professionalität, Vertrauen und Liebe zum Detail prägen jeden Einsatz – mit direktem Ansprechpartner ohne Umwege.",
    },
  ];

  return (
    <Section className="bg-brand-surface">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-brand-mint bg-white p-6 shadow-card md:p-8"
          >
            <div className="mb-4 inline-flex rounded-xl bg-brand-mintLight p-3 text-brand-forest ring-1 ring-brand-mint">
              <Icon name={item.icon} className="h-6 w-6" strokeWidth={2} />
            </div>
            <Typography as="h3" variant="h3" className="mb-4">
              {item.title}
            </Typography>
            <Typography variant="bodyMuted">{item.description}</Typography>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ProfessionalPositioningSection() {
  const items = [
    {
      icon: "clipboard" as const,
      title: "Professionelle Standards",
      description:
        "Jeder Service folgt dokumentierten Checklisten, Qualitätskontrollen und objektspezifischen Hinweisen für dauerhaft verlässliche Ergebnisse.",
    },
    {
      icon: "award" as const,
      title: "Unser Anspruch",
      description:
        "Als selbstständiger Reinigungsservice arbeite ich persönlich für Kunden, die Wert auf Pünktlichkeit, klare Kommunikation und messbare Reinigungsqualität legen.",
    },
  ];

  return (
    <Section className="bg-white">
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-brand-mint bg-brand-surface p-6 shadow-card md:p-8"
          >
            <div className="mb-4 inline-flex rounded-xl bg-brand-forest p-3 text-[#6EE7A8]">
              <Icon name={item.icon} className="h-6 w-6" strokeWidth={2} />
            </div>
            <Typography as="h2" variant="h2" className="mb-4 text-2xl md:text-3xl">
              {item.title}
            </Typography>
            <Typography variant="bodyMuted">{item.description}</Typography>
          </article>
        ))}
      </div>
    </Section>
  );
}

const serviceItems = [
  {
    title: "Wohnungsreinigung",
    href: "/reinigungsservice-goettingen",
    imageSrc: PHOTOS.services.home,
    description:
      "Regelmäßige Reinigungspakete für mehr Komfort, Hygiene und konstant saubere Wohnräume.",
  },
  {
    title: "Büroreinigung",
    href: "/bueroreinigung-goettingen",
    imageSrc: PHOTOS.services.office,
    description:
      "Flexible Reinigungspläne, damit Arbeitsplätze sauber, repräsentativ und jederzeit einsatzbereit bleiben.",
  },
  {
    title: "Grundreinigung",
    href: "/grundreinigung-goettingen",
    imageSrc: PHOTOS.services.deep,
    description:
      "Gründliche Intensivreinigung für saisonale Neustarts, nach Renovierungen und bei hohem Reinigungsbedarf.",
  },
];

const packages = [
  {
    name: "Basis",
    price: "Ab 89 EUR",
    details: "Ideal für kleinere Wohnungen und regelmäßige Unterhaltsreinigung.",
    icon: "leaf" as const,
  },
  {
    name: "Büro",
    price: "Ab 149 EUR",
    details: "Perfekt für Büroeinheiten mit wöchentlicher Reinigung.",
    icon: "sparkle" as const,
  },
  {
    name: "Grundreinigung",
    price: "Ab 219 EUR",
    details: "Umfassende Reinigung von oben bis unten für jede Objektart.",
    icon: "shield" as const,
  },
];

export function ServicesGridSection() {
  return (
    <Section className="bg-brand-surface">
      <div className="mb-12 text-center">
        <span className="section-eyebrow mb-5">Leistungen</span>
        <Typography as="h2" variant="h2" className="mb-4 mt-5">
          Leistungspakete
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
          Klare und praxisnahe Serviceoptionen, abgestimmt auf private und gewerbliche Anforderungen.
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {serviceItems.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={`${service.title} Bild`}
            href={service.href}
          />
        ))}
      </div>
    </Section>
  );
}

export function PricingPackagesSection() {
  return (
    <Section className="bg-white">
      <div className="mb-12 text-center">
        <span className="section-eyebrow mb-5">Preise</span>
        <Typography as="h2" variant="h2" className="mb-4 mt-5">
          Transparente Pakete
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
          Richtpreise zur Planung. Das finale Angebot wird individuell nach Fläche, Intervall und
          Leistungsumfang erstellt.
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((item) => (
          <article
            key={item.name}
            className="flex flex-col rounded-2xl border border-brand-mint bg-brand-surface p-6 shadow-card md:p-8"
          >
            <div className="mb-5 inline-flex w-fit rounded-xl bg-brand-mintLight p-3 text-brand-forest ring-1 ring-brand-mint">
              <Icon name={item.icon} className="h-6 w-6" strokeWidth={2} />
            </div>
            <Typography as="h3" variant="h3" className="mb-2">
              {item.name}
            </Typography>
            <Typography variant="h2" className="mb-4 font-display text-3xl text-brand-forest">
              {item.price}
            </Typography>
            <Typography variant="bodyMuted" className="mb-6 flex-1">
              {item.details}
            </Typography>
            <Button href="/contact" variant="secondary" className="w-full justify-center text-sm">
              Angebot anfragen
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section className="bg-brand-surface">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <article className="rounded-2xl border border-brand-mint bg-white p-6 shadow-card md:p-8">
          <div className="mb-6 overflow-hidden rounded-2xl border border-brand-mint">
            <BrandedImage
              src={PHOTOS.contact}
              alt="Freundlicher Servicebereich mit Kontaktmöglichkeiten"
              width={1000}
              height={600}
              className="h-48 w-full object-cover md:h-56"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <Typography as="h2" variant="h2" className="mb-4">
            Kontaktinformationen
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Kontaktieren Sie uns für Verfügbarkeit, Leistungsumfang und Preisinformationen.
          </Typography>
          <div className="space-y-4">
            <a
              href={BUSINESS_CONTACT.emailHref}
              className="flex cursor-pointer items-start gap-3 font-body text-[#1F2937] transition hover:text-brand-forest"
            >
              <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-forest" strokeWidth={2} />
              <span>
                <span className="font-semibold">E-Mail:</span> {BUSINESS_CONTACT.email}
              </span>
            </a>
            <a
              href={BUSINESS_CONTACT.phoneHref}
              className="flex cursor-pointer items-start gap-3 font-body text-[#1F2937] transition hover:text-brand-forest"
            >
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand-forest" strokeWidth={2} />
              <span>
                <span className="font-semibold">Telefon:</span> {BUSINESS_CONTACT.phoneDisplay}
              </span>
            </a>
            <p className="flex items-start gap-3 font-body text-[#1F2937]">
              <Icon name="map" className="mt-0.5 h-5 w-5 shrink-0 text-brand-forest" strokeWidth={2} />
              <span>
                <span className="font-semibold">Adresse:</span> Theodor-Heuss-Str. 11, 37075 Göttingen
              </span>
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-mint">
            <ConsentMapEmbed
              title="Karte Göttingen"
              src="https://www.google.com/maps?q=Theodor-Heuss-Str.%2011%2C37075%20G%C3%B6ttingen&z=15&output=embed"
            />
          </div>
        </article>

        <article className="rounded-2xl border border-brand-mint bg-white p-6 shadow-card md:p-8">
          <Typography as="h2" variant="h2" className="mb-2">
            Nachricht senden
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen zurück.
          </Typography>
          <ContactForm />
        </article>
      </div>
    </Section>
  );
}
