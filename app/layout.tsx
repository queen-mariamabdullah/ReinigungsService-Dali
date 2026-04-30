import type { Metadata } from "next";
import Script from "next/script";
import { SiteShell } from "../components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Reinigungsservice Dali",
    template: "%s | Reinigungsservice Dali",
  },
  description:
    "Professional residential and commercial cleaning services in Goettingen with dependable, high-standard execution.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reinigungsservice Dali",
    description:
      "Professional residential and commercial cleaning services in Goettingen with dependable, high-standard execution.",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/hero-main.png", width: 1024, height: 768, alt: "Reinigungsservice Dali team at work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reinigungsservice Dali",
    description:
      "Professional residential and commercial cleaning services in Goettingen.",
    images: ["/hero-main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Reinigungsservice Dali",
              image: "/hero-main.png",
              telephone: "+49 30 1234567",
              email: "hello@reinigung-dali.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Theodor-Heuss-Str.11",
                postalCode: "37075",
                addressLocality: "Goettingen",
                addressCountry: "DE",
              },
            }),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
