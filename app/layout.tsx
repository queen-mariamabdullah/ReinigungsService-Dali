import type { Metadata } from "next";
import Script from "next/script";
import { SiteShell } from "../components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Reinigungsservice Dali",
    template: "%s | Reinigungsservice Dali",
  },
  description:
    "Premium cleaning services for homes and businesses in Germany.",
  openGraph: {
    title: "Reinigungsservice Dali",
    description:
      "Premium cleaning services for homes and businesses in Germany.",
    locale: "de_DE",
    type: "website",
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
              image: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f",
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
