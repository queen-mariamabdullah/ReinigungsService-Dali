import Image from "next/image";
import { PHOTOS } from "@/lib/photos";
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
    <Section className="bg-[#F7F9F8]">
      <div
        className={
          hasImage
            ? "grid items-center gap-8 md:grid-cols-2 md:gap-12"
            : "mx-auto max-w-4xl text-center"
        }
      >
        <div className={hasImage ? "text-left" : ""}>
          <Typography as="p" variant="eyebrow" className="mb-3">
            {eyebrow}
          </Typography>
          <Typography as="h1" variant="h1" className="mb-6">
            {title}
          </Typography>
          <Typography variant="bodyMuted">{description}</Typography>
        </div>
        {hasImage && imageSrc ? (
          <div className="overflow-hidden rounded-2xl border border-[#CFF5D2] bg-white shadow-sm">
            <BrandedImage
              src={imageSrc}
              alt={imageAlt ?? ""}
              width={800}
              height={560}
              className="h-56 w-full object-cover md:h-72"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ) : null}
      </div>
    </Section>
  );
}

export function AboutContentSection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-8 md:grid-cols-3">
        <article className="rounded-2xl border border-[#E3EFE5] bg-[#F7F9F8] p-6 md:p-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Wer wir sind
          </Typography>
          <Typography variant="bodyMuted">
            Wir sind ein Reinigungsteam aus Göttingen und bieten zuverlaessige
            Servicequalitaet fuer private und gewerbliche Kunden.
          </Typography>
        </article>
        <article className="rounded-2xl border border-[#E3EFE5] bg-[#F7F9F8] p-6 md:p-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Auftrag
          </Typography>
          <Typography variant="bodyMuted">
            Saubere und gesunde Raeume durch konstante Standards, transparente
            Kommunikation und verlaessliche Ausfuehrung.
          </Typography>
        </article>
        <article className="rounded-2xl border border-[#E3EFE5] bg-[#F7F9F8] p-6 md:p-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Werte
          </Typography>
          <Typography variant="bodyMuted">
            Professionalitaet, Vertrauen und Liebe zum Detail praegen jeden
            Einsatz unseres Teams.
          </Typography>
        </article>
      </div>
    </Section>
  );
}

export function ProfessionalPositioningSection() {
  return (
    <Section className="bg-[#F7F9F8]">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <Typography as="h2" variant="h2" className="mb-4">
            Professionelle Standards
          </Typography>
          <Typography variant="bodyMuted">
            Jeder Service folgt dokumentierten Checklisten, Qualitaetskontrollen
            und objektspezifischen Hinweisen fuer dauerhaft verlaessliche Ergebnisse.
          </Typography>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <Typography as="h2" variant="h2" className="mb-4">
            Unser Anspruch
          </Typography>
          <Typography variant="bodyMuted">
            Wir arbeiten als Premium-Partner fuer Kunden, die Wert auf
            Puenktlichkeit, klare Kommunikation und messbare Reinigungsqualitaet legen.
          </Typography>
        </article>
      </div>
    </Section>
  );
}

const serviceItems = [
  {
    title: "Wohnungsreinigung",
    imageSrc: PHOTOS.services.home,
    description:
      "Regelmaessige Reinigungspakete fuer mehr Komfort, Hygiene und konstant saubere Wohnraeume.",
  },
  {
    title: "Bueroreinigung",
    imageSrc: PHOTOS.services.office,
    description:
      "Flexible Reinigungsplaene, damit Arbeitsplaetze sauber, repraesentativ und jederzeit einsatzbereit bleiben.",
  },
  {
    title: "Grundreinigung",
    imageSrc: PHOTOS.services.deep,
    description:
      "Gruendliche Intensivreinigung fuer saisonale Neustarts, nach Renovierungen und bei hohem Reinigungsbedarf.",
  },
];

const packages = [
  {
    name: "Basis",
    price: "Ab 89 EUR",
    details: "Ideal fuer kleinere Wohnungen und regelmaessige Unterhaltsreinigung.",
  },
  {
    name: "Buero",
    price: "Ab 149 EUR",
    details: "Perfekt fuer Bueroeinheiten mit woechentlicher Reinigung.",
  },
  {
    name: "Grundreinigung",
    price: "Ab 219 EUR",
    details: "Umfassende Reinigung von oben bis unten fuer jede Objektart.",
  },
];

export function ServicesGridSection() {
  return (
    <Section className="bg-white">
      <div className="mb-12">
        <Typography as="h2" variant="h2" className="mb-4 text-center">
          Leistungspakete
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl text-center">
          Klare und praxisnahe Serviceoptionen, abgestimmt auf private und
          gewerbliche Anforderungen.
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
          />
        ))}
      </div>
    </Section>
  );
}

export function PricingPackagesSection() {
  return (
    <Section className="bg-[#F7F9F8]">
      <div className="mb-12 text-center">
        <Typography as="h2" variant="h2" className="mb-4">
          Transparente Pakete
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
          Richtpreise zur Planung. Das finale Angebot wird individuell nach
          Flaeche, Intervall und Leistungsumfang erstellt.
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-[#CFF5D2] bg-white p-6 shadow-sm md:p-8"
          >
            <Typography as="h3" variant="h3" className="mb-3">
              {item.name}
            </Typography>
            <Typography variant="h2" className="mb-3">
              {item.price}
            </Typography>
            <Typography variant="bodyMuted">{item.details}</Typography>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <article className="rounded-2xl border border-[#E3EFE5] bg-[#F7F9F8] p-6 md:p-8">
          <div className="mb-6 overflow-hidden rounded-2xl border border-[#CFF5D2]">
            <BrandedImage
              src={PHOTOS.contact}
              alt="Freundlicher Servicebereich mit Kontaktmoeglichkeiten"
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
            Kontaktieren Sie uns fuer Verfuegbarkeit, Leistungsumfang und Preisinformationen.
          </Typography>
          <div className="space-y-4">
            <Typography variant="body">
              <span className="font-semibold">E-Mail:</span> hello@reinigung-dali.de
            </Typography>
            <Typography variant="body">
              <span className="font-semibold">Telefon:</span> +49 30 1234567
            </Typography>
            <Typography variant="body">
              <span className="font-semibold">Adresse:</span> Theodor-Heuss-Str.11, 37075 Göttingen
            </Typography>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#CFF5D2]">
            <ConsentMapEmbed
              title="Karte Göttingen"
              src="https://www.google.com/maps?q=Theodor-Heuss-Str.11%2C37075%20Goettingen&z=15&output=embed"
            />
          </div>
        </article>

        <article className="rounded-2xl border border-[#CFF5D2] bg-white p-6 shadow-sm md:p-8">
          <Typography as="h2" variant="h2" className="mb-6">
            Nachricht senden
          </Typography>
          <ContactForm />
        </article>
      </div>
    </Section>
  );
}
