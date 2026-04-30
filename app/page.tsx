import type { Metadata } from "next";
import { HomePage } from "../components/layout/HomePage";

export const metadata: Metadata = {
  title: "Reinigungsservice Goettingen | Reinigungsservice Dali",
  description:
    "Reinigungsservice in Goettingen fuer Zuhause und Buero. Reinigungsservice Dali bietet Gebaeudereinigung, Bueroreinigung, Fensterreinigung und Grundreinigung.",
  keywords: [
    "reinigungsservice goettingen",
    "gebaeudereinigung goettingen",
    "bueroreinigung goettingen",
    "fensterreinigung goettingen",
    "grundreinigung goettingen",
    "reinigungsfirma goettingen",
  ],
};

export default function Page() {
  return <HomePage />;
}
