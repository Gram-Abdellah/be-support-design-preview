import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import FaqAccordion from "@/components/faq-accordion";
import { plans, comparisonRows, tarifsFaq } from "@/content/plans";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Trois formules simples pour déléguer votre administratif : Découverte, Standard et Sur mesure. Appel découverte gratuit, remplacement garanti inclus.",
};

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title={
          <>
            Trois formules. <span className="italic text-sand">Sans coûts cachés.</span>
          </>
        }
        titleMaxWidth="20ch"
        leadMaxWidth="52ch"
        lead="Appel découverte gratuit. Engagement minimum de 3 mois puis mensuel. Remplacement de l'assistant garanti, inclus."
        center
        extraPaddingBottom="clamp(70px,9vw,120px)"
      />

      <section
        className="pb-[clamp(56px,6.5vw,96px)]"
        style={{ marginTop: "clamp(-60px,-7vw,-90px)" }}
      >
        <div className="container-page">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-[22px] items-start">
            {plans.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-[20px] p-8 relative shadow-[0_24px_60px_-34px_rgba(20,32,58,.35)]"
                style={{ border: p.border }}
              >
                {p.featured && (
                  <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-rust text-white text-[10.5px] tracking-[.08em] uppercase font-bold px-3.5 py-[5px] rounded-full whitespace-nowrap">
                    Recommandé
                  </span>
                )}
                <div className="text-xs tracking-[.12em] uppercase font-bold" style={{ color: p.accent }}>
                  {p.name}
                </div>
                <p className="mt-2 text-muted text-[13.5px] leading-[1.45] min-h-[38px]">{p.tagline}</p>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-serif text-[44px] leading-none">{p.price}</span>
                  <span className="text-muted text-sm">{p.per}</span>
                </div>
                <div className="text-muted text-[12.5px] mt-1">{p.vat}</div>
                <Link
                  href="/contact"
                  className="block text-center mt-[22px] text-[15px] font-semibold py-[14px] rounded-[10px]"
                  style={{ background: p.btnBg, color: p.btnColor, border: p.btnBorder }}
                >
                  {p.cta}
                </Link>
                <div className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex gap-[11px] items-start text-sm leading-[1.45]">
                      <span className="flex-none text-rust font-bold">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-[26px] text-muted text-[13.5px] max-w-[70ch] mx-auto leading-[1.6]">
            Appel découverte gratuit de 30 min. Les formules mensuelles sont sans engagement au-delà
            des 3 premiers mois. Une prestation à la carte est aussi possible après un diagnostic.
          </p>
        </div>
      </section>

      {/* comparison table */}
      <section className="pb-[clamp(56px,6.5vw,96px)]">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Comparatif</div>
          <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.12] max-w-[22ch]">
            Ce que couvre chaque <span className="italic text-rust">formule.</span>
          </h2>
          <div className="mt-7 overflow-x-auto border border-line rounded-2xl bg-white">
            <table className="w-full border-collapse min-w-[560px] text-[14.5px]">
              <thead>
                <tr className="bg-cream">
                  <th className="text-left px-5 py-4 font-semibold text-muted text-xs tracking-[.08em] uppercase">
                    Prestation
                  </th>
                  <th className="px-4 py-4 font-bold text-ink">Découverte</th>
                  <th className="px-4 py-4 font-bold text-rust">Standard</th>
                  <th className="px-4 py-4 font-bold text-ink">Sur mesure</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.label} className="border-t border-line">
                    <td className="text-left px-5 py-[15px] text-ink">{r.label}</td>
                    <td className="text-center px-4 py-[15px] text-muted">{r.a}</td>
                    <td className="text-center px-4 py-[15px] text-ink font-semibold">{r.b}</td>
                    <td className="text-center px-4 py-[15px] text-muted">{r.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pb-[clamp(56px,6.5vw,96px)]">
        <div className="container-narrow">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4 text-center">
            Questions fréquentes
          </div>
          <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.12] text-center">
            Avant de vous <span className="italic text-rust">lancer.</span>
          </h2>
          <FaqAccordion items={tarifsFaq} defaultOpen={null} />
        </div>
      </section>
    </>
  );
}
