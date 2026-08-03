import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalDocs } from "@/content/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles par Be-Support, marque de Bema Consulting.",
};

export default function PolitiqueConfidentialitePage() {
  return <LegalPage doc={legalDocs["politique-de-confidentialite"]} />;
}
