import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import CtaBanner from "@/components/cta-banner";
import { stats, reassure, team } from "@/content/apropos";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Be-Support est une marque de Bema Consulting, créée en 2024 à Essaouira. Une équipe bilingue française et anglaise au service des PME de Belgique et de France.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Une équipe humaine, un modèle <span className="italic text-sand">nearshore.</span>
          </>
        }
        titleMaxWidth="18ch"
        lead="Be-Support est une marque de Bema Consulting, créée en 2024. Nous accompagnons les PME de Belgique et de France depuis Essaouira, au Maroc, avec une équipe bilingue française et anglaise."
      />

      <section className="pt-[clamp(40px,5vw,64px)]">
        <div className="container-page">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] gap-[18px]">
            {stats.map((s) => (
              <div key={s.l} className="bg-white border border-line rounded-2xl p-[26px]">
                <div className="font-serif text-[clamp(30px,3.6vw,42px)] leading-none text-rust">{s.v}</div>
                <div className="mt-2.5 text-sm text-muted leading-[1.4]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-11 items-start">
            <div>
              <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Notre histoire</div>
              <h2 className="text-[clamp(26px,3.4vw,38px)] leading-[1.12] max-w-[18ch]">
                Pourquoi Essaouira, et pourquoi <span className="italic text-rust">maintenant.</span>
              </h2>
              <div className="mt-5 flex flex-col gap-4 text-ink text-[16.5px] leading-[1.7]">
                <p>
                  Nous avons créé Be-Support en 2024 avec une conviction simple : les PME perdent un
                  temps précieux sur des tâches qui n&apos;ont pas besoin d&apos;elles. Un support
                  fiable, à distance, change tout.
                </p>
                <p>
                  Le modèle nearshore d&apos;Essaouira nous permet d&apos;offrir une équipe qualifiée,
                  bilingue et sur un fuseau horaire compatible avec l&apos;Europe. Pas de décalage qui
                  freine, pas de barrière de langue.
                </p>
                <p>
                  Nous restons une équipe à taille humaine : chaque client a un interlocuteur qui
                  connaît ses dossiers, pas un centre d&apos;appels anonyme.
                </p>
              </div>
            </div>
            <div
              className="aspect-[4/5] rounded-[18px] flex items-center justify-center text-white/40"
              style={{ background: "linear-gradient(135deg,#233457,#16203a)" }}
            >
              <div className="text-center p-6">
                <div className="text-[13px] tracking-[.1em] uppercase font-semibold">Photo équipe / bureau</div>
                <div className="text-[12.5px] mt-1.5">Essaouira (à fournir)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-t border-b border-line">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Ce qui vous rassure</div>
          <h2 className="text-section leading-[1.12] max-w-[22ch]">
            Travailler à distance, en toute <span className="italic text-rust">confiance.</span>
          </h2>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-[18px]">
            {reassure.map((r) => (
              <div key={r.k} className="bg-cream border border-line rounded-2xl p-[26px]">
                <div className="font-serif text-[15px] text-rust font-semibold">{r.k}</div>
                <h3 className="mt-2.5 text-[19px]">{r.t}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-[1.55]">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">L&apos;équipe</div>
          <h2 className="text-section leading-[1.12] max-w-[20ch]">
            Des visages, pas un <span className="italic text-rust">standard.</span>
          </h2>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-5">
            {team.map((m) => (
              <div key={m.name} className="bg-white border border-line rounded-[18px] overflow-hidden">
                <div
                  className="aspect-square flex items-center justify-center font-serif text-4xl text-white/65"
                  style={{ background: `linear-gradient(135deg,${m.g1},${m.g2})` }}
                >
                  {m.i}
                </div>
                <div className="p-[18px]">
                  <div className="font-semibold text-base">{m.name}</div>
                  <div className="text-muted text-[13.5px] mt-[3px]">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        variant="split"
        title="Faisons connaissance."
        description="Un appel de 30 minutes pour voir si nous sommes le bon partenaire."
        ctaLabel="Réserver un appel"
        ctaHref="/contact"
      />
    </>
  );
}
