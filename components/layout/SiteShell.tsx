"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHOTO_LICENSE } from "@/lib/photos";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";

type SiteShellProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

const serviceLinks = [
  { href: "/reinigungsservice-goettingen", label: "Reinigungsservice" },
  { href: "/bueroreinigung-goettingen", label: "Büroreinigung" },
  { href: "/grundreinigung-goettingen", label: "Grundreinigung" },
  { href: "/fensterreinigung-goettingen", label: "Fensterreinigung" },
];

const legalItems = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-brand-mint/50 bg-white/95 py-2 shadow-[0_4px_24px_-8px_rgba(31,95,74,0.12)] backdrop-blur-xl"
            : "border-b border-transparent bg-white py-3 md:py-3.5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 md:px-6">
          <Link href="/" className="group flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-forest text-white shadow-sm ring-1 ring-brand-forest/20 transition group-hover:bg-brand-forestDark">
              <Icon name="sparkle" className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold tracking-tight text-brand-forest md:text-lg">
                ReinigungsService-Göttingen
              </span>
              <span className="mt-0.5 hidden truncate text-xs font-medium text-[#6B7280] sm:block">
                Selbstständiger Reinigungsservice · Göttingen
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              href="tel:+49301234567"
              className="hidden cursor-pointer items-center gap-2 rounded-xl px-3 py-2 font-body text-sm font-semibold text-brand-forest transition hover:bg-brand-mintLight xl:inline-flex"
            >
              <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
              +49 30 1234567
            </Link>
            <Button
              href="/contact"
              className="hidden px-4 py-2.5 text-sm shadow-sm sm:inline-flex md:px-5 md:py-2.5"
            >
              Angebot anfragen
            </Button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-brand-mint bg-white p-2.5 text-brand-forest shadow-sm transition hover:bg-brand-mintLight lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 cursor-pointer bg-[#0A1F18]/60 backdrop-blur-sm"
              aria-label="Menü schließen"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-white shadow-2xl"
              aria-label="Mobile Navigation"
            >
              <div className="flex items-center justify-between border-b border-brand-mint/60 bg-brand-surface px-5 py-4">
                <span className="font-display text-sm font-bold text-brand-forest">Menü</span>
                <button
                  type="button"
                  className="cursor-pointer rounded-lg p-2 text-brand-forest hover:bg-brand-mintLight"
                  aria-label="Menü schließen"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {navItems.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index }}
                    >
                      <Link
                        href={item.href}
                        className={`flex cursor-pointer items-center rounded-xl px-4 py-3.5 font-body text-base font-semibold transition ${
                          active
                            ? "bg-brand-forest text-white"
                            : "text-[#1F2937] hover:bg-brand-mintLight hover:text-brand-forest"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="my-3 border-t border-brand-mint/60 pt-3">
                  <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Leistungen
                  </p>
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block cursor-pointer rounded-xl px-4 py-2.5 font-body text-sm font-medium text-[#374151] hover:bg-brand-mintLight hover:text-brand-forest"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-3 border-t border-brand-mint/60 bg-brand-surface p-4">
                <Link
                  href="tel:+49301234567"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-brand-mint bg-white px-4 py-3 font-body text-sm font-semibold text-brand-forest"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Anrufen
                </Link>
                <Button href="/contact" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
                  Angebot anfragen
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {children}

      <footer className="border-t border-[#2E7A60] bg-brand-forest text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <Icon name="sparkle" className="h-5 w-5 text-[#6EE7A8]" strokeWidth={2} />
                </span>
                <span className="font-display text-lg font-bold text-white">
                  ReinigungsService-Göttingen
                </span>
              </Link>
              <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-[#CFF5D2]">
                Selbstständiger Reinigungsservice in Göttingen – persönliche Betreuung für
                Zuhause und Büro mit verlässlicher Qualität.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:hello@goereinigungsservice.de"
                  className="flex cursor-pointer items-center gap-3 font-body text-sm text-white/90 transition hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-[#6EE7A8]" strokeWidth={2} />
                  hello@goereinigungsservice.de
                </a>
                <a
                  href="tel:+49301234567"
                  className="flex cursor-pointer items-center gap-3 font-body text-sm text-white/90 transition hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-[#6EE7A8]" strokeWidth={2} />
                  +49 30 1234567
                </a>
                <p className="flex items-start gap-3 font-body text-sm text-white/90">
                  <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0 text-[#6EE7A8]" strokeWidth={2} />
                  Theodor-Heuss-Str. 11, 37075 Göttingen
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-[#6EE7A8]">
                Navigation
              </p>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-white/85 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-[#6EE7A8]">
                Leistungen in Göttingen
              </p>
              <ul className="space-y-2.5">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-white/85 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/gebaeudereinigung-goettingen"
                    className="font-body text-sm text-white/85 transition hover:text-white"
                  >
                    Gebäudereinigung
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-[#6EE7A8]">
                Angebot anfragen
              </p>
              <p className="mb-5 font-body text-sm leading-relaxed text-[#CFF5D2]">
                Kostenlose Beratung und transparentes Angebot innerhalb von 48 Stunden.
              </p>
              <Button
                href="/contact"
                className="bg-[#6EE7A8] text-[#1A1A1A] shadow-lg hover:bg-[#5DD898]"
              >
                Jetzt Kontakt aufnehmen
              </Button>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {legalItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-white/70 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 font-body text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} ReinigungsService-Göttingen. Alle Rechte vorbehalten.</p>
            <p>
              {PHOTO_LICENSE.notice}{" "}
              <a
                href={PHOTO_LICENSE.licenseUrl}
                className="cursor-pointer underline underline-offset-2 transition hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash License
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
