import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { PHOTOS } from "@/lib/photos";
import { SiteShell } from "../components/layout/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="de" className={inter.variable}>
      <body className="antialiased font-sans">
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
