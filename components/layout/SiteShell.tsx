import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../atoms/Button";

type SiteShellProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/", label: "Start" },
  { href: "/reinigungsservice-goettingen", label: "Göttingen" },
  { href: "/about", label: "Ueber uns" },
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
      <header className="sticky top-0 z-40 border-b border-[#CFF5D2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-[#1F5F4A]">
            Reinigungsservice Dali
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#1A1A1A] transition hover:text-[#1F5F4A] focus-visible:rounded-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" className="hidden md:inline-flex">
            Angebot anfragen
          </Button>
        </div>
        <nav
          className="mx-auto flex w-full max-w-7xl flex-wrap gap-4 px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1F5F4A] transition hover:text-[#1A1A1A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {children}

      <footer className="border-t border-[#CFF5D2] bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-[#6B7280] md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Reinigungsservice Dali. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#1F5F4A]">
                {item.label}
              </Link>
            ))}
            {legalItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#1F5F4A]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
