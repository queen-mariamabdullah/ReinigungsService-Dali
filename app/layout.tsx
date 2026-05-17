import type { Metadata } from "next";
import Script from "next/script";
import { SiteShell } from "../components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "GöReinigungsService",
    template: "%s | GöReinigungsService",
  },
  description:
    "Professionelle Reinigungsleistungen für private und gewerbliche Kunden in Göttingen mit verlässlicher Ausführung.",
  keywords: [
    "reinigungsservice göttingen",
    "gebäudereinigung göttingen",
    "büroreinigung göttingen",
    "fensterreinigung göttingen",
    "grundreinigung göttingen",
  ],
  category: "Reinigungsdienstleistungen",
  authors: [{ name: "GöReinigungsService" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GöReinigungsService",
    description:
      "Professionelle Reinigungsleistungen für private und gewerbliche Kunden in Göttingen mit verlässlicher Ausführung.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/GöReinigungsService-hero-main.svg",
        width: 640,
        height: 420,
        alt: "GöReinigungsService team at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GöReinigungsService",
    description:
      "Professionelle Reinigungsleistungen in Göttingen.",
    images: ["/GöReinigungsService-hero-main.svg"],
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
              name: "GöReinigungsService",
              image: "/GöReinigungsService-hero-main.svg",
              telephone: "+49 30 1234567",
              email: "hello@goereinigungsservice.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Theodor-Heuss-Str. 11",
                postalCode: "37075",
                addressLocality: "Göttingen",
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
