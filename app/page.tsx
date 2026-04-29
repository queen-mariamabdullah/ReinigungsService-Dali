import type { Metadata } from "next";
import { HomePage } from "../components/layout/HomePage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional residential and office cleaning in Germany with reliable teams and premium standards.",
};

export default function Page() {
  return <HomePage />;
}
