"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { BUSINESS_CONTACT } from "@/lib/business";
import { PHOTOS } from "@/lib/photos";
import { useMotionSafe } from "@/lib/motion";
import { Button } from "../atoms/Button";
import { Icon, IconProps } from "../atoms/Icon";

const HeroScene3D = dynamic(
  () => import("./HeroScene3D").then((mod) => mod.HeroScene3D),
  { ssr: false },
);

const trustIndicators: { icon: IconProps["name"]; text: string }[] = [
  { icon: "shield", text: "Verlässliche Qualität" },
  { icon: "clock", text: "48h Rückmeldung" },
  { icon: "award", text: "12+ Jahre Erfahrung" },
  { icon: "leaf", text: "Umweltbewusst" },
];

const stats = [
  { value: "12+", label: "Jahre Erfahrung" },
  { value: "4.9/5", label: "Kundenbewertung" },
  { value: "100%", label: "Persönliche Ausführung" },
];

const particles = [
  { left: "10%", top: "22%", duration: 4.1, delay: 0.2 },
  { left: "28%", top: "70%", duration: 4.8, delay: 0.8 },
  { left: "46%", top: "36%", duration: 4.5, delay: 0.4 },
  { left: "67%", top: "64%", duration: 5.0, delay: 1.1 },
  { left: "82%", top: "42%", duration: 4.3, delay: 1.5 },
  { left: "58%", top: "16%", duration: 4.7, delay: 0.9 },
];

export function PremiumCleaningHero() {
  const { prefersReducedMotion, instant } = useMotionSafe();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Base dark scrim — keeps text readable over bright photo areas */}
        <div className="absolute inset-0 z-10 bg-[#0A1F18]/75" />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0F2E24]/95 via-[#1A1A1A]/80 to-[#1F5F4A]/88" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1F18]/90 via-[#0A1F18]/55 to-transparent lg:via-[#0A1F18]/40" />
        <Image
          src={PHOTOS.hero}
          alt="Professionelle Reinigung in Göttingen"
          fill
          priority
          sizes="100vw"
          className={PHOTOS.hero.endsWith(".svg") ? "object-contain opacity-35" : "object-cover"}
          unoptimized={PHOTOS.hero.endsWith(".svg")}
        />
        {!prefersReducedMotion ? (
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-tr from-brand-forest/25 via-transparent to-[#6EE7A8]/10"
            animate={{ opacity: [0.4, 0.55, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-brand-forest/25 via-transparent to-[#6EE7A8]/10 opacity-50" />
        )}
      </div>

      {!prefersReducedMotion ? (
        <div className="pointer-events-none absolute inset-0 z-[12]">
          <div className="absolute right-0 top-0 h-full w-full opacity-55 lg:w-[52%]">
            <HeroScene3D />
          </div>
        </div>
      ) : null}

      {!prefersReducedMotion ? (
        <div className="pointer-events-none absolute inset-0 z-10">
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute h-2 w-2 rounded-full bg-white/25"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -28, 0], opacity: [0.15, 0.45, 0.15] }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="space-y-8 lg:col-span-7"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            {...instant}
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6EE7A8]/40 bg-[#1A523F] px-4 py-2 font-body text-sm font-semibold text-white shadow-lg">
                <Star className="h-4 w-4 fill-[#6EE7A8] text-[#6EE7A8]" strokeWidth={0} />
                ReinigungsService-Göttingen
              </span>
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
            >
              <h1 className="font-display text-[2.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl xl:text-[4.1rem]">
                Professionelle Reinigung
                <span className="mt-1 block text-[#B8F5CE] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  in Göttingen
                </span>
              </h1>
              <p className="max-w-2xl font-body text-lg font-medium leading-[1.7] text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-xl">
                Zuverlässige Reinigung für Privathaushalte und Büros: feste Ansprechpartner,
                strukturierte Abläufe und sauber dokumentierte Ergebnisse.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.55 }}
            >
              <Button
                href="/contact"
                className="group cursor-pointer bg-[#6EE7A8] px-8 py-4 font-body text-lg font-semibold text-[#1A1A1A] shadow-2xl shadow-[#6EE7A8]/30 hover:bg-[#5DD898]"
              >
                Jetzt Angebot anfragen
                <Icon name="arrow" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-white/70 bg-[#1A523F]/90 px-8 py-4 font-body text-lg font-semibold text-white shadow-lg transition hover:bg-[#1F5F4A]"
              >
                Kostenlos beraten lassen
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4 sm:gap-4"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              {trustIndicators.map((indicator) => (
                <motion.div
                  key={indicator.text}
                  className="flex flex-col items-center gap-2.5 rounded-xl border border-[#2E7A60] bg-[#1A523F]/95 p-3 shadow-lg sm:p-4"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 320 }}
                >
                  <Icon name={indicator.icon} className="h-7 w-7 text-[#6EE7A8] sm:h-8 sm:w-8" strokeWidth={2} />
                  <span className="text-center font-body text-xs font-semibold leading-snug text-white sm:text-sm">
                    {indicator.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 rounded-xl border border-white/25 bg-[#0F2E24]/55 px-4 py-3 sm:max-w-xl sm:flex-row sm:items-center sm:justify-between"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.45 }}
            >
              <a href={BUSINESS_CONTACT.phoneHref} className="font-body text-sm font-semibold text-white/95">
                {BUSINESS_CONTACT.phoneDisplay}
              </a>
              <a href={BUSINESS_CONTACT.emailHref} className="font-body text-sm text-white/90">
                {BUSINESS_CONTACT.email}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center lg:col-span-5"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-full space-y-5">
              <motion.div
                className="rounded-3xl border border-white/30 bg-white p-6 shadow-2xl sm:p-8"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-mintLight">
                    <Icon name="sparkle" className="h-6 w-6 text-brand-forest" strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[#111827]">Unsere Erfolge</h2>
                </div>

                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center justify-between rounded-xl bg-brand-surface px-4 py-3.5 transition hover:bg-brand-mintLight/60"
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.08 }}
                    >
                      <span className="font-body text-[0.9375rem] font-semibold text-[#374151]">{stat.label}</span>
                      <span className="font-display text-2xl font-bold text-brand-forest sm:text-3xl">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 border-t border-brand-mint pt-5">
                  <div className="mb-3 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
                    ))}
                  </div>
                    <p className="font-body text-sm font-medium leading-relaxed text-[#1F2937]">
                    &ldquo;Zuverlässig, pünktlich und sehr gründlich. Die Qualität war vom ersten
                    Tag an hervorragend.&rdquo;
                  </p>
                  <p className="mt-2 font-body text-xs font-semibold text-[#6B7280]">
                    — Anna M., Privatkundin · Göttingen
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-gradient-to-r from-brand-forest to-[#2E7A60] p-5 shadow-xl sm:p-6"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Icon name="user" className="h-7 w-7 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Vom Inhaber persönlich
                    </h3>
                    <p className="font-body text-sm font-semibold leading-relaxed text-white">
                      Einzelunternehmen mit direkter Verantwortung in Göttingen
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
