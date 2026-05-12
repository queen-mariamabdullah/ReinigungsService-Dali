import type { Metadata } from "next";
import { HomePage } from "../components/layout/HomePage";

export const metadata: Metadata = {
  title: "Reinigungsservice Göttingen | GöReinigungsService",
  description:
    "Reinigungsservice in Göttingen fuer Zuhause und Buero. GöReinigungsService bietet Gebaeudereinigung, Bueroreinigung, Fensterreinigung und Grundreinigung.",
  keywords: [
    "reinigungsservice göttingen",
    "gebaeudereinigung göttingen",
    "bueroreinigung göttingen",
    "fensterreinigung göttingen",
    "grundreinigung göttingen",
    "reinigungsfirma göttingen",
  ],
};

export default function Page() {
  return <HomePage />;
}
