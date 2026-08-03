import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalDocs } from "@/content/legal";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente des prestations Be-Support, marque de Bema Consulting.",
};

export default function CgvPage() {
  return <LegalPage doc={legalDocs.cgv} />;
}
