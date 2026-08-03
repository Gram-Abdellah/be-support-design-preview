import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { legalDocs } from "@/content/legal";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions générales d'utilisation du site Be-Support, marque de Bema Consulting.",
};

export default function CguPage() {
  return <LegalPage doc={legalDocs.cgu} />;
}
