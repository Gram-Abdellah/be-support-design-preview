import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import CtaBanner from "@/components/cta-banner";
import { phases, principles, timeline } from "@/content/approche";

export const metadata: Metadata = {
  title: "Notre approche",
  description:
    "Analyser, décider, agir : la méthode Be-Support en 3 temps pour diagnostiquer, planifier puis exécuter la délégation de vos tâches administratives.",
};

export default function ApprochePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre approche"
        title={
          <>
            Analyser. Décider. <span className="italic text-sand">Agir.</span>
          </>
        }
        titleMaxWidth="16ch"
        lead="On ne délègue pas au hasard. On part de là où votre temps se perd, on décide ensemble de ce qui peut être automatisé et de ce qui doit être pris en charge, puis on exécute."
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">La méthode en 3 temps</div>
          <h2 className="text-section leading-[1.12] max-w-[24ch]">
            Un diagnostic clair avant la moindre <span className="italic text-rust">action.</span>
          </h2>
          <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
            {phases.map((p) => (
              <div key={p.n} className="bg-white border border-line rounded-[18px] p-[30px] flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-serif text-[17px]">
                    {p.n}
                  </div>
                  <div className="text-[11px] tracking-[.16em] uppercase text-rust font-bold">{p.tag}</div>
                </div>
                <h3 className="mt-5 text-[22px] leading-[1.2]">{p.t}</h3>
                <p className="mt-2.5 text-muted text-[14.5px] leading-[1.55]">{p.d}</p>
                <div className="mt-[18px] pt-[18px] border-t border-line flex flex-col gap-2.5">
                  {p.items.map((it) => (
                    <div key={it} className="flex gap-2.5 items-start text-sm text-ink leading-[1.4]">
                      <span className="text-rust font-bold">✓</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-t border-b border-line">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Nos principes</div>
          <h2 className="text-section leading-[1.12] max-w-[22ch]">
            Ce qui rend la méthode <span className="italic text-rust">fiable.</span>
          </h2>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
            {principles.map((pr) => (
              <div key={pr.k} className="bg-cream border border-line rounded-2xl p-6">
                <div className="font-serif text-sm text-rust font-semibold">{pr.k}</div>
                <h3 className="mt-2.5 text-lg">{pr.t}</h3>
                <p className="mt-2 text-muted text-sm leading-[1.55]">{pr.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="bg-navy rounded-[20px] p-[clamp(30px,4vw,52px)] text-white">
            <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-4">Les délais</div>
            <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.12] text-white max-w-[24ch]">
              Un cadre <span className="italic text-sand">rapide,</span> annoncé dès le départ.
            </h2>
            <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] gap-5">
              {timeline.map((tl) => (
                <div key={tl.v} className="border-l-2 border-sand pl-[18px]">
                  <div className="font-serif text-[30px] text-sand">{tl.v}</div>
                  <div className="mt-1.5 text-white/70 text-sm">{tl.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        variant="split"
        title="Commençons par le diagnostic."
        description="30 minutes pour voir clair. La suite, seulement si elle a du sens pour vous."
        ctaLabel="Réserver un appel"
        ctaHref="/contact"
      />
    </>
  );
}
