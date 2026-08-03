import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalDocs } from "@/content/legal";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Be-Support, marque de Bema Consulting.",
};

export default function MentionsLegalesPage() {
  return <LegalPage doc={legalDocs["mentions-legales"]} />;
}
