import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import CtaBanner from "@/components/cta-banner";
import { groupA, groupB } from "@/content/services";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Six expertises, une seule équipe dédiée : secrétariat, comptabilité, RH, automatisation IA, webdesign et infographie pour votre PME.",
};

function ServiceCard({ s }: { s: (typeof groupA)[number] }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="flex flex-col bg-white border border-line rounded-2xl p-7 hover:border-line-2 hover:shadow-[0_18px_40px_-24px_rgba(20,32,58,.28)]"
    >
      <div className="w-[46px] h-[46px] rounded-xl bg-cream border border-line flex items-center justify-center font-serif text-rust text-[19px] font-semibold">
        {s.n}
      </div>
      <h3 className="mt-5 text-[21px] leading-[1.2]">{s.name}</h3>
      <p className="mt-2.5 text-muted text-[14.5px] leading-[1.55] flex-1">{s.desc}</p>
      <div className="mt-4 flex flex-wrap gap-[7px]">
        {s.chips.map((c) => (
          <span
            key={c}
            className="text-xs text-ink bg-cream border border-line px-2.5 py-[5px] rounded-full"
          >
            {c}
          </span>
        ))}
      </div>
      <span className="mt-[18px] inline-flex items-center gap-1.5 text-sm font-semibold text-rust">
        Découvrir <span>→</span>
      </span>
    </Link>
  );
}

export default function ServicesPage() {
  const steps = [
    { n: "1", t: "Diagnostic", d: "Un appel de 30 min pour comprendre votre besoin et cibler les tâches à déléguer en priorité." },
    { n: "2", t: "Plan & assistant dédié", d: "Nous vous présentons un assistant formé à vos outils et un plan clair, à votre rythme." },
    { n: "3", t: "Exécution & suivi", d: "La mission tourne, avec un point régulier et des ajustements. Remplacement garanti si besoin." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={
          <>
            Un pôle complet, du secrétariat à la <span className="italic text-sand">création.</span>
          </>
        }
        titleMaxWidth="18ch"
        lead="Six expertises, une seule équipe dédiée. Déléguez l'administratif et le créatif à des assistants formés à vos outils et augmentés par l'IA, et reprenez 10 à 15 heures par semaine."
        ctas={[
          { label: "Réserver un appel", href: "/contact", variant: "solid" },
          { label: "Voir les tarifs", href: "/tarifs", variant: "outline" },
        ]}
      />

      <section className="pt-[clamp(56px,6.5vw,96px)] pb-[clamp(20px,3vw,32px)]">
        <div className="container-page">
          <div className="flex items-baseline gap-4 flex-wrap mb-7">
            <div className="text-label tracking-[.2em] uppercase text-rust font-bold">Support &amp; gestion</div>
            <div className="flex-1 h-px bg-line-2 min-w-[40px]" />
          </div>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))] gap-5">
            {groupA.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>

          <div className="flex items-baseline gap-4 flex-wrap mt-11 mb-7">
            <div className="text-label tracking-[.2em] uppercase text-rust font-bold">Création &amp; visibilité</div>
            <div className="flex-1 h-px bg-line-2 min-w-[40px]" />
          </div>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))] gap-5">
            {groupB.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[clamp(20px,3vw,32px)] pb-[clamp(52px,7vw,88px)]">
        <div className="container-page">
          <div className="bg-white border border-line rounded-[20px] p-[clamp(28px,4vw,48px)]">
            <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Comment ça marche</div>
            <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.12] max-w-[24ch]">
              Quel que soit le service, la même <span className="italic text-rust">mécanique.</span>
            </h2>
            <div className="mt-8 grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-[22px]">
              {steps.map((st) => (
                <div key={st.n}>
                  <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-serif text-[15px]">
                    {st.n}
                  </div>
                  <h3 className="mt-4 text-[19px]">{st.t}</h3>
                  <p className="mt-2 text-muted text-[14.5px] leading-[1.55]">{st.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        variant="split"
        title="Un doute sur le bon service ? On en parle en 30 minutes."
        description="Un appel découverte pour cadrer votre besoin, sans engagement."
        ctaLabel="Réserver un appel"
        ctaHref="/contact"
      />
    </>
  );
}
