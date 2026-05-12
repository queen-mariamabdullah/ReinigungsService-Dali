import type { Metadata } from "next";
import { HomePage } from "../components/layout/HomePage";

export const metadata: Metadata = {
  title: "Reinigungsservice Göttingen | GöReinigungsService",
  description:
    "Reinigungsservice in Göttingen für Zuhause und Büro. GöReinigungsService bietet Gebäudereinigung, Büroreinigung, Fensterreinigung und Grundreinigung.",
  keywords: [
    "reinigungsservice göttingen",
    "gebäudereinigung göttingen",
    "büroreinigung göttingen",
    "fensterreinigung göttingen",
    "grundreinigung göttingen",
    "reinigungsfirma göttingen",
  ],
};

export default function Page() {
  return <HomePage />;
}
