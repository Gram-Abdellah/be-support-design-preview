import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import CtaBanner from "@/components/cta-banner";
import CaseStudiesGrid from "@/components/case-studies-grid";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les missions concrètes menées par Be-Support : secrétariat, comptabilité, RH, automatisation et webmarketing pour des PME de Belgique et de France.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title={
          <>
            Des missions concrètes, <span className="italic text-sand">pour de vrai.</span>
          </>
        }
        titleMaxWidth="18ch"
        lead="Un aperçu de ce que nous mettons en place pour nos clients, et du type de missions que nous couvrons au quotidien."
      />

      <section className="pt-[clamp(40px,5vw,64px)] pb-[clamp(52px,7vw,88px)]">
        <div className="container-page">
          <CaseStudiesGrid />
        </div>
      </section>

      <CtaBanner
        variant="split"
        title="Votre projet, la prochaine réalisation ?"
        description="Parlons de ce que vous voulez déléguer."
        ctaLabel="Réserver un appel"
        ctaHref="/contact"
      />
    </>
  );
}
