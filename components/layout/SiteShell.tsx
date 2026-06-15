import Link from "next/link";
import { ReactNode } from "react";
import { PHOTO_LICENSE } from "@/lib/photos";
import { Button } from "../atoms/Button";

type SiteShellProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/", label: "Start" },
  { href: "/reinigungsservice-goettingen", label: "Göttingen" },
  { href: "/about", label: "Über uns" },
  { href: "/services", label: "Leistungen" },
  { href: "/contact", label: "Kontakt" },
];

const legalItems = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
];

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-mint/70 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3.5 md:px-6 md:py-4">
          <Link href="/" className="group min-w-0">
            <span className="block truncate text-base font-bold tracking-tight text-brand-forest md:text-lg">
              ReinigungsService-Göttingen
            </span>
            <span className="mt-0.5 hidden text-xs font-medium text-[#6B7280] sm:block">
              Selbstständiger Reinigungsservice · Göttingen
            </span>
          </Link>
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Hauptnavigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#1A1A1A] hover:text-brand-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" className="shrink-0 px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base">
            Angebot anfragen
          </Button>
        </div>
        <nav
          className="mx-auto flex w-full max-w-7xl flex-wrap gap-x-4 gap-y-2 border-t border-brand-mint/50 px-4 py-3 md:hidden"
          aria-label="Mobile Navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-forest hover:text-[#1A1A1A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {children}

      <footer className="border-t border-brand-mint/70 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-brand-forest">
                ReinigungsService-Göttingen
              </p>
              <p className="mt-1 text-sm text-[#6B7280]">
                Einzelunternehmen · Theodor-Heuss-Str. 11 · 37075 Göttingen
              </p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-[#6B7280]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-brand-forest">
                  {item.label}
                </Link>
              ))}
              {legalItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-brand-forest">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-brand-mint/50 pt-4 text-xs text-[#9CA3AF] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} ReinigungsService-Göttingen. Alle
              Rechte vorbehalten.
            </p>
            <p>
              {PHOTO_LICENSE.notice}{" "}
              <a
                href={PHOTO_LICENSE.licenseUrl}
                className="underline decoration-brand-mint underline-offset-2 hover:text-brand-forest"
                target="_blank"
                rel="noopener noreferrer"
              >
                {PHOTO_LICENSE.licenseUrl}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
