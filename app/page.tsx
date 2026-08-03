import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/faq-accordion";
import CtaBanner from "@/components/cta-banner";
import { approach, whyNow, homeServices } from "@/content/home";
import { missions } from "@/content/missions";
import { homePlans } from "@/content/plans";
import { values } from "@/content/values";
import { homeFaq } from "@/content/faq";

export const metadata: Metadata = {
  title: "Support administratif, comptable et créatif pour PME",
  description:
    "Be-Support diagnostique, automatise et exécute vos tâches administratives, comptables, RH et créatives depuis une équipe nearshore basée à Essaouira. Récupérez 10 à 15h par semaine.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white pt-[clamp(60px,6.5vw,104px)]">
        <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-[180px] left-[26%] w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(201,183,142,.16),transparent_66%)] blur-[50px]" />
          <div className="absolute -bottom-[200px] right-[4%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(187,106,53,.24),transparent_66%)] blur-[60px]" />
        </div>
        <div className="relative z-10 container-page">
          <div className="flex flex-col items-start pb-[clamp(56px,6vw,92px)]">
            <div className="anim-hero-up">
              <span className="inline-flex items-center gap-2 text-[11.5px] tracking-[.14em] uppercase font-bold text-sand border border-[rgba(201,183,142,.4)] px-[15px] py-2 rounded-full">
                <span className="pulse-dot w-[7px] h-[7px] rounded-full bg-[#7fbf8e]" />
                Équipe support externalisée · augmentée par l&apos;IA
              </span>
              <h1 className="mt-[22px] text-hero leading-[1.02] text-white">
                Votre entreprise grandit.
                <br />
                Votre organisation doit <span className="italic text-sand">suivre.</span>
              </h1>
              <p className="mt-5 max-w-[46ch] text-[clamp(17px,1.25vw,20px)] leading-[1.6] text-white/72">
                Diagnostic, automatisation et exécution opérationnelle par une équipe dédiée.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-rust text-white text-[15.5px] font-semibold min-h-[50px] px-7 rounded-[10px] hover:bg-rust-dk"
                >
                  Réserver un appel découverte
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center bg-transparent text-white text-[15.5px] font-semibold min-h-[50px] px-[26px] rounded-[10px] border-[1.5px] border-white/30 hover:border-white"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* process band */}
        <div className="relative z-10 bg-sand">
          <div className="container-page py-[21px] flex flex-wrap gap-x-9 gap-y-3.5 items-center justify-center">
            {[
              { n: "1", t: "Analyse", d: "de votre situation admin" },
              { n: "2", t: "Stratégie", d: "avec ou sans IA" },
              { n: "3", t: "Opérationnel", d: "au quotidien" },
            ].map((step, i, arr) => (
              <div key={step.n} className="flex items-center gap-9">
                <div className="flex items-center gap-[11px]">
                  <span className="w-7 h-7 flex-none rounded-full bg-navy text-white flex items-center justify-center font-serif text-[13px]">
                    {step.n}
                  </span>
                  <span>
                    <span className="block font-bold text-navy text-[15px] leading-[1.15]">{step.t}</span>
                    <span className="block text-[12.5px] text-navy/65 leading-[1.2]">{step.d}</span>
                  </span>
                </div>
                {i < arr.length - 1 && <span className="text-navy/40">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* stats band */}
        <div className="relative z-10 bg-navy-2">
          <div className="container-page grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            <div className="p-8 px-[26px] text-center border-r border-white/[.08]">
              <div className="font-serif text-[32px] text-sand">−60%</div>
              <div className="text-sm text-white/60 mt-2 leading-[1.4]">vs un recrutement en CDI</div>
            </div>
            <div className="p-8 px-[26px] text-center border-r border-white/[.08]">
              <div className="font-serif text-[32px] text-sand">48h</div>
              <div className="text-sm text-white/60 mt-2 leading-[1.4]">pour passer du diagnostic à l&apos;action</div>
            </div>
            <div className="p-8 px-[26px] text-center">
              <div className="font-serif text-[32px] text-sand">FR / EN</div>
              <div className="text-sm text-white/60 mt-2 leading-[1.4]">
                équipe francophone ou anglophone, formée à votre secteur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">
            Notre approche en 3 temps
          </div>
          <h2 className="text-section leading-[1.12] max-w-[16ch]">
            Analyser. Décider. <span className="italic text-rust">Agir.</span>
          </h2>
          <p className="mt-4 max-w-[62ch] text-muted text-body leading-[1.6]">
            On ne vous vend pas que des heures. On commence par comprendre où votre temps part, on
            décide ensemble ce qui se délègue, ce qui s&apos;automatise et ce qui revient à une
            personne qualifiée, puis on l&apos;exécute.
          </p>
          <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
            {approach.map((a) => (
              <div key={a.n} className="bg-white border border-line rounded-[18px] p-[30px_28px] flex flex-col">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-serif text-lg">
                  {a.n}
                </div>
                <div className="mt-[22px] text-[11.5px] tracking-[.14em] uppercase text-rust font-bold">{a.tag}</div>
                <h3 className="mt-2 text-[22px] leading-[1.2]">{a.t}</h3>
                <p className="mt-[11px] text-muted text-[15px] leading-[1.6]">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="section-pad bg-white border-t border-b border-line">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Pourquoi maintenant</div>
          <h2 className="text-section leading-[1.12] max-w-[24ch]">
            Aujourd&apos;hui tout va vite. Avancer avant d&apos;être <span className="italic text-rust">dépassé.</span>
          </h2>
          <p className="mt-4 max-w-[64ch] text-muted text-body leading-[1.6]">
            On n&apos;a plus le temps de perdre en efficacité. Be-Support vous aide à garder une
            longueur d&apos;avance : un diagnostic honnête, une stratégie souple, une exécution
            suivie.
          </p>
          <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {whyNow.map((w) => (
              <div key={w.t} className="bg-cream border border-line rounded-2xl p-[26px_24px]">
                <div className="font-serif text-[clamp(28px,3.1vw,35px)] text-rust leading-none">{w.v}</div>
                <h3 className="mt-3.5 text-xl">{w.t}</h3>
                <p className="mt-2.5 text-muted text-[15px] leading-[1.6]">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / RELAIS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Le relais opérationnel</div>
          <h2 className="text-section leading-[1.12] max-w-[26ch]">
            Une fois la stratégie posée, on s&apos;occupe de la <span className="italic text-rust">mise en œuvre.</span>
          </h2>
          <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
            {homeServices.map((s) => (
              <Link
                key={s.n}
                href="/services"
                className="flex flex-col bg-white border border-line rounded-2xl p-[26px_24px] hover:border-line-2 hover:shadow-[0_18px_40px_-24px_rgba(20,32,58,.28)]"
              >
                <div className="w-12 h-12 rounded-xl bg-cream border border-line flex items-center justify-center font-serif text-[19px] font-semibold text-rust">
                  {s.n}
                </div>
                <h3 className="mt-[18px] text-xl leading-[1.2]">{s.t}</h3>
                <p className="mt-2.5 text-muted text-[15px] leading-[1.6] flex-1">{s.d}</p>
                <span className="mt-[18px] text-[15px] font-semibold text-rust">Découvrir →</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block bg-navy text-white text-[15.5px] font-semibold px-[30px] py-[15px] rounded-[11px] hover:bg-navy-2"
            >
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="section-pad bg-navy text-white">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-4">Missions</div>
          <h2 className="text-section leading-[1.12] text-white max-w-[24ch]">
            Des réalisations concrètes, <span className="italic text-sand">pour de vrai.</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-white/62 text-body leading-[1.6]">
            Voici ce que nous avons mis en place pour nos clients, et le type de missions que nous
            couvrons au quotidien.
          </p>
          <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
            {missions.map((m) => (
              <Link
                key={m.t}
                href="/realisations"
                className="block bg-white/5 border border-white/[.12] rounded-[14px] p-6 hover:bg-white/[.09]"
              >
                <div className="font-semibold text-lg text-white">{m.t}</div>
                <div className="mt-2 text-[13px] text-sand uppercase tracking-[.08em]">{m.cat}</div>
                <p className="mt-3 text-white/60 text-[14.5px] leading-[1.55]">{m.d}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/realisations" className="inline-flex items-center gap-2 text-sand font-semibold text-[15px]">
              Voir toutes les réalisations →
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-pad">
        <div className="container-page text-center">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Tarifs</div>
          <h2 className="text-section leading-[1.12] max-w-[20ch] mx-auto">
            Trois formules. <span className="italic text-rust">Pas de coûts cachés.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-[58ch] text-muted text-body leading-[1.6]">
            Appel découverte gratuit. Engagement minimum 3 mois sur les formules mensuelles.
            Remplacement garanti inclus.
          </p>
          <div className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-[22px] text-left">
            {homePlans.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-[18px] p-[30px_28px] relative flex flex-col h-full"
                style={{ border: p.border }}
              >
                {p.featured && (
                  <span className="absolute -top-[13px] left-[30px] bg-rust text-white text-[10.5px] tracking-[.08em] uppercase font-bold px-3.5 py-[5px] rounded-full">
                    Recommandé
                  </span>
                )}
                <div className="text-xs tracking-[.12em] uppercase font-bold" style={{ color: p.accent }}>
                  {p.name}
                </div>
                <div className="mt-3.5 flex items-baseline gap-1.5">
                  <span className="font-serif text-[40px] leading-none text-ink">{p.price}</span>
                  <span className="text-muted text-sm">{p.per}</span>
                </div>
                <Link
                  href="/tarifs"
                  className="block text-center mt-5 text-base font-semibold py-[15px] rounded-[11px]"
                  style={{ background: p.btnBg, color: p.btnColor, border: p.btnBorder }}
                >
                  {p.cta}
                </Link>
                <div className="mt-5 flex flex-col gap-2.5">
                  {p.features.map((f) => (
                    <div key={f} className="flex gap-[11px] text-[15px] leading-[1.45]">
                      <span className="text-rust font-bold">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad bg-white border-t border-b border-line">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Nos 6 valeurs</div>
          <h2 className="text-section leading-[1.12] max-w-[26ch]">
            Une agence qui propose des solutions concrètes et sur <span className="italic text-rust">mesure.</span>
          </h2>
          <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
            {values.map((v) => (
              <div key={v.n} className="bg-cream border border-line rounded-[15px] p-[26px_24px]">
                <div className="font-serif text-[15px] text-rust font-semibold">{v.n}</div>
                <h3 className="mt-[9px] text-[19px]">{v.t}</h3>
                <p className="mt-2 text-muted text-[15px] leading-[1.6]">{v.d}</p>
              </div>
            ))}
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
            Voici ce que nous <span className="italic text-rust">répondons.</span>
          </h2>
          <FaqAccordion items={homeFaq} />
        </div>
      </section>

      <CtaBanner
        title="Prêt à récupérer 10 à 15h par semaine ?"
        description="30 minutes suffisent pour faire le diagnostic et voir si Be-Support peut vous faire gagner du temps. Pas de présentation commerciale : un vrai échange opérationnel."
        ctaLabel="Réserver mon appel de 30 min"
        ctaHref="/contact"
        variant="centered"
        preset="home"
      />
    </>
  );
}
