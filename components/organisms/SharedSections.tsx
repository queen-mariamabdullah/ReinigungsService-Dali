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
              className="h-56 w-full object-cover md:h-64"
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
        <article className="rounded-2xl bg-[#F7F9F8] p-6 md:p-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Who We Are
          </Typography>
          <Typography variant="bodyMuted">
            We are a Germany-based cleaning team delivering reliable and
            premium-quality service for homes and businesses.
          </Typography>
        </article>
        <article className="rounded-2xl bg-[#F7F9F8] p-6 md:p-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Mission
          </Typography>
          <Typography variant="bodyMuted">
            Create cleaner, healthier spaces through consistent standards,
            transparent communication, and dependable execution.
          </Typography>
        </article>
        <article className="rounded-2xl bg-[#F7F9F8] p-6 md:p-8">
          <Typography as="h3" variant="h3" className="mb-4">
            Values
          </Typography>
          <Typography variant="bodyMuted">
            Professionalism, trust, and attention to detail are built into
            every visit we deliver.
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
            Professional Standards
          </Typography>
          <Typography variant="bodyMuted">
            Every service follows a documented checklist, quality review points,
            and client-specific notes to ensure dependable results over time.
          </Typography>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <Typography as="h2" variant="h2" className="mb-4">
            Service Positioning
          </Typography>
          <Typography variant="bodyMuted">
            We operate as a premium partner for homes and businesses that value
            punctuality, communication, and measurable cleaning quality.
          </Typography>
        </article>
      </div>
    </Section>
  );
}

const serviceItems = [
  {
    title: "Home Cleaning",
    imageSrc: PHOTOS.services.home,
    description:
      "Routine cleaning packages designed for comfort, hygiene, and consistent results in private residences.",
  },
  {
    title: "Office Cleaning",
    imageSrc: PHOTOS.services.office,
    description:
      "Flexible service plans that keep workspaces clean, presentable, and ready for employees and guests.",
  },
  {
    title: "Deep Cleaning",
    imageSrc: PHOTOS.services.deep,
    description:
      "Detailed intensive cleaning for seasonal resets, post-renovation needs, and high-attention spaces.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "From €89",
    details: "Ideal for small apartments and routine upkeep.",
  },
  {
    name: "Business",
    price: "From €149",
    details: "Perfect for office spaces with weekly maintenance.",
  },
  {
    name: "Deep Clean",
    price: "From €219",
    details: "Comprehensive top-to-bottom reset for any property.",
  },
];

export function ServicesGridSection() {
  return (
    <Section className="bg-white">
      <div className="mb-12">
        <Typography as="h2" variant="h2" className="mb-4 text-center">
          Service Packages
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl text-center">
          Clear and practical service options tailored to residential and
          commercial requirements.
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {serviceItems.map((service) => (
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

export function PricingPackagesSection() {
  return (
    <Section className="bg-[#F7F9F8]">
      <div className="mb-12 text-center">
        <Typography as="h2" variant="h2" className="mb-4">
          Transparent Packages
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
          Indicative pricing for planning. Final quotes are tailored to your
          space, frequency, and service scope.
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
        <article className="rounded-2xl bg-[#F7F9F8] p-6 md:p-8">
          <div className="mb-6 overflow-hidden rounded-2xl border border-[#CFF5D2]">
            <BrandedImage
              src={PHOTOS.contact}
              alt="Friendly service desk and welcome area"
              width={1000}
              height={600}
              className="h-48 w-full object-cover md:h-56"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <Typography as="h2" variant="h2" className="mb-4">
            Contact Information
          </Typography>
          <Typography variant="bodyMuted" className="mb-6">
            Reach out for availability, service scope, and pricing details.
          </Typography>
          <div className="space-y-4">
            <Typography variant="body">
              <span className="font-semibold">Email:</span> hello@reinigung-dali.de
            </Typography>
            <Typography variant="body">
              <span className="font-semibold">Phone:</span> +49 30 1234567
            </Typography>
            <Typography variant="body">
              <span className="font-semibold">Location:</span> Theodor-Heuss-Str.11, 37075 Göttingen
            </Typography>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#CFF5D2]">
            <ConsentMapEmbed
              title="Göttingen map"
              src="https://www.google.com/maps?q=Theodor-Heuss-Str.11%2C37075%20Goettingen&z=15&output=embed"
            />
          </div>
        </article>

        <article className="rounded-2xl border border-[#CFF5D2] bg-white p-6 shadow-sm md:p-8">
          <Typography as="h2" variant="h2" className="mb-6">
            Send a Message
          </Typography>
          <ContactForm />
        </article>
      </div>
    </Section>
  );
}
