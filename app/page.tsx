import type { Metadata } from "next";
import { HomePage } from "../components/layout/HomePage";

export const metadata: Metadata = {
  title: "Reinigungsservice Göttingen | Reinigungsservice Dali",
  description:
    "Reinigungsservice in Göttingen fuer Zuhause und Buero. Reinigungsservice Dali bietet Gebaeudereinigung, Bueroreinigung, Fensterreinigung und Grundreinigung.",
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
