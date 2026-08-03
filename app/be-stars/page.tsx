import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/faq-accordion";
import CtaBanner from "@/components/cta-banner";
import {
  why,
  norms,
  refs,
  audit,
  deliverables,
  pricingGrid,
  carte,
  mystery,
  beStarsFaq,
} from "@/content/be-stars";

export const metadata: Metadata = {
  title: "Be-Stars — Classement hôtelier au Maroc",
  description:
    "Audit de conformité loi 80-14 / décret 985-24 : sécurisez le classement en étoiles de votre établissement touristique au Maroc avant mai 2027.",
};

export default function BeStarsPage() {
  return (
    <>
      <div className="bg-sand text-navy text-[13.5px] text-center px-4 py-3 font-semibold">
        ⚠ Échéance : mai 2027 · Sécurisez votre classement avant la fin de la classification
        officielle.
      </div>

      {/* HERO */}
      <section className="bg-navy text-white py-[clamp(48px,6vw,84px)]">
        <div className="container-page">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[.14em] uppercase font-bold text-sand border border-[rgba(201,183,142,.4)] px-[13px] py-[7px] rounded-full">
            <span className="w-[7px] h-[7px] rounded-full bg-green" />
            Be-Stars · Classement hôtelier au Maroc
          </span>
          <h1 className="mt-[22px] text-page leading-[1.05] text-white max-w-[20ch]">
            Votre classement en étoiles,{" "}
            <span className="italic text-sand">sécurisé avant mai 2027.</span>
          </h1>
          <p className="mt-5 max-w-[60ch] text-[17.5px] leading-[1.6] text-white/72">
            La nouvelle loi 80-14 et le décret 985-24 redéfinissent les règles de classement des
            établissements touristiques au Maroc. Audit de conformité, plan d&apos;action et
            accompagnement jusqu&apos;au classement officiel : hôtels, riads, maisons d&apos;hôtes,
            résidences, campings et bivouacs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-rust text-white text-[15px] font-semibold px-6 py-[14px] rounded-[9px] hover:bg-rust-dk"
            >
              Réserver mon audit diagnostic
            </Link>
            <a
              href="#loi"
              className="bg-transparent text-white text-[15px] font-semibold px-[22px] py-[13px] rounded-[9px] border-[1.5px] border-white/30 hover:border-white"
            >
              Comprendre la nouvelle loi
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Pourquoi agir</div>
          <h2 className="text-section leading-[1.12] max-w-[24ch]">
            Sans classement, vous disparaissez des canaux de <span className="italic text-rust">réservation.</span>
          </h2>
          <p className="mt-4 max-w-[56ch] text-muted text-body leading-[1.6]">
            Le classement n&apos;est plus un trophée : c&apos;est un levier commercial mesurable, et
            désormais une obligation légale avec une échéance.
          </p>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {why.map((w) => (
              <div key={w.t} className="bg-white border border-line rounded-2xl p-7">
                <div className="font-serif italic text-xl text-rust">{w.t}</div>
                <p className="mt-3 text-muted text-[14.5px] leading-[1.6]">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL FRAMEWORK */}
      <section id="loi" className="section-pad bg-navy text-white scroll-mt-20">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-4">Cadre légal</div>
          <h2 className="text-section leading-[1.12] text-white max-w-[26ch]">
            Loi 80-14 + décret 985-24 : ce qui change pour <span className="italic text-sand">vous.</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-white/70 text-base leading-[1.6]">
            Le décret 985-24 (Bulletin officiel n° 7407 du 27 mai 2025) définit trois familles de
            normes et un système de points qui détermine le nombre d&apos;étoiles attribuées.
          </p>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
            {norms.map((n) => (
              <div key={n.code} className="bg-white/5 border border-white/[.12] rounded-2xl p-[26px]">
                <div className="font-serif text-2xl text-sand">{n.code}</div>
                <div className="mt-1.5 font-semibold text-[14.5px] text-white">{n.t}</div>
                <p className="mt-2.5 text-white/60 text-sm leading-[1.55]">{n.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2.5">
            {refs.map((r) => (
              <div key={r} className="bg-navy-2 border border-white/[.08] rounded-[10px] p-[14px_18px] text-sm text-white/72">
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SERVICE */}
      <section className="section-pad bg-white border-b border-line">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Service principal</div>
          <h2 className="text-section leading-[1.12] max-w-[26ch]">
            Audit de conformité : en 1 jour, vous savez où vous en <span className="italic text-rust">êtes.</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-muted text-body leading-[1.6]">
            Notre équipe visite votre établissement et l&apos;évalue selon les trois familles de
            normes. Vous repartez avec un rapport chiffré et un plan d&apos;action priorisé.
          </p>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {audit.map((a) => (
              <div key={a.n} className="bg-cream border border-line rounded-2xl p-[26px]">
                <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-serif text-[15px]">
                  {a.n}
                </div>
                <h3 className="mt-4 text-lg">{a.t}</h3>
                <p className="mt-2 text-muted text-sm leading-[1.55]">{a.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 bg-navy rounded-[18px] p-[clamp(28px,3.5vw,40px)] grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(24px,4vw,48px)] items-center">
            <div className="max-w-[34ch]">
              <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-3">Livrables</div>
              <h3 className="text-[clamp(20px,2.4vw,26px)] leading-[1.2] text-white">
                Ce que vous recevez à l&apos;issue de l&apos;audit
              </h3>
              <p className="mt-3 text-white/62 text-[14.5px] leading-[1.6]">
                Des documents concrets, exploitables immédiatement pour lancer votre mise en
                conformité.
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              {deliverables.map((d) => (
                <div key={d} className="flex gap-3.5 items-center py-[14px] border-t border-white/10">
                  <span className="w-[26px] h-[26px] flex-none rounded-full bg-[rgba(187,106,53,.18)] text-sand flex items-center justify-center text-[13px] font-bold">
                    ✓
                  </span>
                  <span className="text-[15px] text-white/90 leading-[1.4]">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">
            Frais d&apos;audit et de diagnostic
          </div>
          <h2 className="text-section leading-[1.12] max-w-[24ch]">
            Une grille claire, selon la taille de votre <span className="italic text-rust">établissement.</span>
          </h2>
          <p className="mt-4 text-muted text-base">Tous les prix sont nets, sans frais cachés.</p>
          <div className="mt-7 max-w-[640px] overflow-hidden border border-line rounded-2xl bg-white">
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr className="bg-cream">
                  <th className="text-left px-[22px] py-4 text-xs tracking-[.08em] uppercase text-muted font-semibold">
                    Taille de l&apos;établissement
                  </th>
                  <th className="text-right px-[22px] py-4 text-xs tracking-[.08em] uppercase text-muted font-semibold">
                    Prix
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingGrid.map((g) => (
                  <tr key={g.size} className="border-t border-line">
                    <td className="px-[22px] py-[15px] text-ink">{g.size}</td>
                    <td className="px-[22px] py-[15px] text-right font-bold text-rust">{g.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted text-[13.5px] italic">
            Audit complet en 1 jour · rapport livré sous 7 jours · retour téléphonique inclus.
          </p>
        </div>
      </section>

      {/* A LA CARTE */}
      <section className="section-pad bg-navy text-white">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-4">Aller plus loin</div>
          <h2 className="text-section leading-[1.12] text-white max-w-[24ch]">
            Des options disponibles <span className="italic text-sand">à la carte.</span>
          </h2>
          <p className="mt-4 max-w-[56ch] text-white/70 text-base leading-[1.6]">
            Quatre services conçus pour vous accompagner après l&apos;audit, jusqu&apos;au classement
            officiel.
          </p>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
            {carte.map((c) => (
              <div key={c.t} className="bg-white rounded-2xl p-6 text-ink flex flex-col">
                <h3 className="text-lg leading-[1.2]">{c.t}</h3>
                <p className="mt-2 text-muted text-sm leading-[1.55] flex-1">{c.d}</p>
                <div className="mt-4 font-serif text-[22px] text-rust">{c.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-rust rounded-2xl p-[26px] flex flex-wrap gap-[18px] items-center justify-between">
            <div>
              <div className="font-bold text-lg text-white">Pack complet</div>
              <div className="text-white/85 text-sm mt-1">
                Audit diagnostic + relecture du dossier + modèles NPQS + glossaire trilingue
              </div>
            </div>
            <div className="text-right">
              <div className="font-serif text-[30px] text-white">8 500 DH</div>
              <div className="text-white/80 text-[12.5px]">économie de 1 200 DH</div>
            </div>
          </div>
        </div>
      </section>

      {/* MYSTERY VISIT */}
      <section className="section-pad bg-white border-b border-line">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">
            Classement 5 étoiles et plus
          </div>
          <h2 className="text-section leading-[1.12] max-w-[24ch]">
            Visite mystère requise : on vous <span className="italic text-rust">y prépare.</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-muted text-body leading-[1.6]">
            À partir de 5 étoiles, le décret 985-24 impose une évaluation anonyme par un client
            mystère. Cette visite pèse lourd dans la décision finale.
          </p>
          <div className="mt-7 bg-cream border border-line rounded-[18px] p-[clamp(24px,3vw,36px)]">
            <p className="text-ink text-base leading-[1.7] max-w-[70ch]">
              Un évaluateur indépendant séjourne dans votre établissement comme un client ordinaire,
              sans s&apos;identifier, et note l&apos;expérience selon les normes de qualité de service
              (NPQS). Le rapport est transmis directement au comité de classement.
            </p>
            <div className="mt-6 grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-2.5">
              {mystery.map((m) => (
                <div key={m} className="flex gap-2.5 text-[14.5px] leading-[1.45]">
                  <span className="text-rust font-bold">✓</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
            <div className="mt-[22px] border-l-[3px] border-rust bg-cream-2 rounded-r-xl p-[16px_20px] text-[14.5px] text-ink leading-[1.6]">
              Le rapport de visite mystère pèse dans la décision finale. Be-Stars réalise une
              simulation préalable pour identifier les points faibles et vous préparer sereinement.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-narrow">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4 text-center">
            Questions fréquentes
          </div>
          <h2 className="text-section leading-[1.12] text-center">
            Ce que les exploitants nous demandent le plus <span className="italic text-rust">souvent.</span>
          </h2>
          <FaqAccordion items={beStarsFaq} defaultOpen={null} />
        </div>
      </section>

      <CtaBanner
        variant="centered"
        title="Un jour pour l'audit. Sept jours pour le rapport. Sans surprise."
        description="L'échéance de mai 2027 approche, et la file d'attente s'allonge chaque mois."
        ctaLabel="Réserver mon audit diagnostic"
        ctaHref="/contact"
      />
    </>
  );
}
