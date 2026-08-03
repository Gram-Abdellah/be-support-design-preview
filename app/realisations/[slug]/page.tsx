import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/cta-banner";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
  };
}

export default async function RealisationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <section className="bg-navy text-white py-[clamp(48px,6vw,84px)]">
        <div className="container-narrow">
          <div className="flex gap-2 items-center text-[13px] text-white/55 mb-[22px]">
            <Link href="/realisations" className="text-white/60 hover:text-white">
              Réalisations
            </Link>
            <span>/</span>
            <span className="text-sand">{c.title}</span>
          </div>
          <span className="inline-flex text-[11px] tracking-[.14em] uppercase font-bold text-sand border border-[rgba(201,183,142,.4)] px-[13px] py-[7px] rounded-full">
            {c.serviceTag}
          </span>
          <h1 className="mt-[22px] text-[clamp(30px,4.4vw,52px)] leading-[1.07] text-white max-w-[20ch]">
            {c.headline}
            <span className="italic text-sand">{c.headlineAccent}</span>
          </h1>
          <div className="mt-[30px] grid [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] gap-[18px] max-w-[640px]">
            <div>
              <div className="text-xs text-white/55 uppercase tracking-[.1em]">Client</div>
              <div className="mt-1.5 text-[15px] text-white">{c.client}</div>
            </div>
            <div>
              <div className="text-xs text-white/55 uppercase tracking-[.1em]">Secteur</div>
              <div className="mt-1.5 text-[15px] text-white">{c.sector}</div>
            </div>
            <div>
              <div className="text-xs text-white/55 uppercase tracking-[.1em]">Durée</div>
              <div className="mt-1.5 text-[15px] text-white">{c.duration}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(48px,6vw,80px)]">
        <div className="container-narrow">
          <div
            className="aspect-[16/8] rounded-[18px] flex items-center justify-center text-white/40 mb-[clamp(36px,5vw,56px)]"
            style={{ background: "linear-gradient(135deg,#233457,#16203a)" }}
          >
            <div className="text-center">
              <div className="text-[13px] tracking-[.1em] uppercase font-semibold">Visuel de la mission</div>
              <div className="text-[12.5px] mt-1.5">emplacement image (à fournir)</div>
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(32px,4vw,48px)]">
            {c.blocks.map((b) => (
              <div key={b.k}>
                <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-3">{b.k}</div>
                <h2 className="text-[clamp(22px,2.8vw,30px)] leading-[1.15] max-w-[24ch]">{b.t}</h2>
                <p className="mt-3.5 text-ink text-[16.5px] leading-[1.7] max-w-[64ch]">{b.d}</p>
              </div>
            ))}

            <div className="bg-navy rounded-[20px] p-[clamp(28px,4vw,44px)] text-white">
              <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-5">Résultats</div>
              <div className="grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-6">
                {c.results.map((r) => (
                  <div key={r.l}>
                    <div className="font-serif text-[clamp(36px,4.5vw,52px)] leading-none text-sand">{r.v}</div>
                    <div className="mt-2.5 text-white/72 text-[14.5px] leading-[1.4]">{r.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="m-0 border-l-[3px] border-rust py-1.5 pl-6">
              <p className="font-serif italic text-[clamp(20px,2.6vw,26px)] leading-[1.4] text-ink">
                « {c.quote} »
              </p>
              <footer className="mt-4 text-sm text-muted">{c.quoteAuthor}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <CtaBanner
        variant="centered"
        preset="realisation"
        title="Un cas proche du vôtre ? Parlons-en."
        ctaLabel="Réserver un appel"
        ctaHref="/contact"
        narrow
      />
    </>
  );
}
