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
    title: "Residential Cleaning",
    imageSrc: PHOTOS.services.home,
    description:
      "Structured weekly and bi-weekly home cleaning plans with reliable teams and consistent quality control.",
  },
  {
    title: "Office Cleaning",
    imageSrc: PHOTOS.services.office,
    description:
      "Professional workspace cleaning designed to maintain hygiene, productivity, and a strong client-facing image.",
  },
  {
    title: "Deep Cleaning",
    imageSrc: PHOTOS.services.deep,
    description:
      "Intensive top-to-bottom cleaning for move-ins, seasonal resets, and high-priority sanitation requirements.",
  },
];

const features = [
  {
    title: "Verified Professionals",
    description:
      "Our trained staff follows a detailed service checklist and strict quality standards on every visit.",
  },
  {
    title: "Transparent Communication",
    description:
      "Fast response times, clear service updates, and dependable scheduling keep every engagement easy to manage.",
  },
  {
    title: "Eco-Conscious Products",
    description:
      "We prioritize effective cleaning products that are safer for families, teams, and indoor environments.",
  },
];

const testimonials = [
  {
    quote:
      "Consistent, punctual, and incredibly detail-oriented. The quality has been excellent from day one.",
    author: "Anna M.",
    role: "Homeowner, Berlin",
    avatarSrc: PHOTOS.people.anna,
  },
  {
    quote:
      "Our office always looks client-ready. Communication is smooth and execution is very professional.",
    author: "Markus M.",
    role: "Operations Manager",
    avatarSrc: PHOTOS.people.markus,
  },
];

const blogPosts = [
  {
    title: "5 Tips to Keep Your Home Fresh Between Visits",
    excerpt:
      "Simple routines that help maintain a cleaner, healthier space all week long.",
    imageSrc: PHOTOS.blog.freshHome,
  },
  {
    title: "Office Hygiene Standards That Boost Productivity",
    excerpt:
      "How a structured cleaning plan improves comfort and team performance.",
    imageSrc: PHOTOS.blog.officeHygiene,
  },
  {
    title: "When to Book a Deep Cleaning Service",
    excerpt:
      "Practical signs that your space needs a full reset beyond routine cleaning.",
    imageSrc: PHOTOS.blog.deepWhen,
  },
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
    <Section className="relative overflow-hidden bg-gradient-to-br from-[#F7F9F8] via-[#EEF8F0] to-[#DDF3E2]">
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
            Premium Cleaning Atelier
          </Typography>
          <Typography as="h1" variant="display" className="mb-5 max-w-2xl">
            Luxury Care for Homes and Offices That Expect Excellence.
          </Typography>
          <Typography variant="bodyMuted" className="mb-8 max-w-xl">
            Bespoke cleaning programs, discreet service teams, and impeccable
            finishing standards for clients who value precision and
            presentation.
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" className="shadow-sm">
              Request Private Consultation
            </Button>
            <Button href="/services" variant="secondary">
              View Signature Services
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#CFF5D2] bg-white p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#1F5F4A]">12+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#6B7280]">
                Years Experience
              </p>
            </div>
            <div className="rounded-xl border border-[#CFF5D2] bg-white p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#1F5F4A]">4.9/5</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#6B7280]">
                Client Rating
              </p>
            </div>
            <div className="rounded-xl border border-[#CFF5D2] bg-white p-4 shadow-sm">
              <p className="text-2xl font-semibold text-[#1F5F4A]">48h</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[#6B7280]">
                Response Window
              </p>
            </div>
          </div>
        </motion.div>
        <div
          ref={cardRef}
          className="rounded-2xl border border-[#A9E5B7] bg-gradient-to-br from-[#E6FBEA] via-[#D9F7DF] to-[#C7F1D0] p-5 shadow-md md:p-8"
        >
          <BrandedImage
            src={PHOTOS.hero}
            alt="Professional cleaning supplies and a tidy, bright space"
            width={640}
            height={420}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="mb-6 h-auto w-full rounded-xl object-cover"
          />
          <Typography as="h2" variant="h2" className="mb-4">
            Elevated Standards, Every Visit
          </Typography>
          <Typography variant="bodyMuted">
            White-glove execution, detail-led checklists, and premium-grade
            consistency designed for discerning private and business clients.
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
          Services
        </Typography>
        <Typography as="h2" variant="h2" className="mb-4">
          Tailored Cleaning for Every Space
        </Typography>
        <Typography variant="bodyMuted" className="mx-auto max-w-3xl">
          Flexible solutions for private homes, business environments, and deep
          cleaning requirements.
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
          Why Choose Us
        </Typography>
        <Typography as="h2" variant="h2" className="mb-4">
          Built on Trust and Consistency
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
          Testimonials
        </Typography>
        <Typography as="h2" variant="h2">
          Trusted by Homeowners and Teams
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.author}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            avatarSrc={testimonial.avatarSrc}
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
          Insights
        </Typography>
        <Typography as="h2" variant="h2" className="mb-4">
          Cleaning Knowledge and Practical Guides
        </Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-2xl border border-[#CFF5D2] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
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

export function FinalCtaSection() {
  return (
    <Section className="bg-[#1F5F4A]">
      <div className="rounded-2xl border border-[#2E7A60] bg-[#1F5F4A] px-6 py-10 text-center md:px-10">
        <Typography as="h2" variant="h2" className="mb-4 text-white">
          Ready for a Cleaner, Healthier Space?
        </Typography>
        <Typography variant="body" className="mx-auto mb-8 max-w-2xl text-[#CFF5D2]">
          Get a fast quote and let our team create a cleaning plan that fits
          your home or business.
        </Typography>
        <Button
          href="/contact"
          className="bg-[#6EE7A8] text-[#1A1A1A] hover:bg-[#5DD898]"
        >
          Contact Us Today
        </Button>
      </div>
    </Section>
  );
}
