import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { BUSINESS_CONTACT } from "@/lib/business";
import { PHOTOS } from "@/lib/photos";
import { SiteShell } from "../components/layout/SiteShell";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "ReinigungsService-Göttingen",
    template: "%s | ReinigungsService-Göttingen",
  },
  description:
    "Professionelle Reinigungsleistungen als selbstständiges Einzelunternehmen in Göttingen mit verlässlicher Ausführung.",
  keywords: [
    "reinigungsservice göttingen",
    "gebäudereinigung göttingen",
    "büroreinigung göttingen",
    "fensterreinigung göttingen",
    "grundreinigung göttingen",
  ],
  category: "Reinigungsdienstleistungen",
  authors: [{ name: "ReinigungsService-Göttingen" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ReinigungsService-Göttingen",
    description:
      "Professionelle Reinigungsleistungen als selbstständiges Einzelunternehmen in Göttingen mit verlässlicher Ausführung.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: PHOTOS.hero,
        width: 1400,
        height: 933,
        alt: "ReinigungsService-Göttingen bei der professionellen Reinigung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReinigungsService-Göttingen",
    description:
      "Professionelle Reinigungsleistungen in Göttingen.",
    images: [PHOTOS.hero],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${libreBaskerville.variable} ${sourceSans.variable}`}>
      <body className="antialiased font-body">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ReinigungsService-Göttingen",
              description:
                "Selbstständiger Reinigungsservice in Göttingen (Einzelunternehmen).",
              image: PHOTOS.hero,
              telephone: BUSINESS_CONTACT.phoneDisplay,
              email: BUSINESS_CONTACT.email,
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
