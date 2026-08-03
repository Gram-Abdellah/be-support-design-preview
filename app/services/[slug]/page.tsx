import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/cta-banner";
import { services, getServiceBySlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-navy text-white py-[clamp(48px,6vw,84px)]">
        <div className="container-page">
          <div className="flex gap-2 items-center text-[13px] text-white/55 mb-[22px]">
            <Link href="/services" className="text-white/60 hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span className="text-sand">{service.name}</span>
          </div>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[.14em] uppercase font-bold text-sand border border-[rgba(201,183,142,.4)] px-[13px] py-[7px] rounded-full">
                {service.tag}
              </span>
              <h1 className="mt-[22px] text-[clamp(32px,4.6vw,54px)] leading-[1.06] text-white">
                {service.heroTitle} <span className="italic text-sand">{service.heroEmph}</span>
              </h1>
              <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-white/72">{service.heroLead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-rust text-white text-[15px] font-semibold px-6 py-[14px] rounded-[9px] hover:bg-rust-dk"
                >
                  Réserver un appel
                </Link>
                <Link
                  href="/tarifs"
                  className="bg-transparent text-white text-[15px] font-semibold px-[22px] py-[13px] rounded-[9px] border-[1.5px] border-white/30 hover:border-white"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
            <div className="self-stretch min-h-[260px] rounded-[18px] bg-[linear-gradient(135deg,#233457,#16203a)] border border-white/[.08] flex items-center justify-center">
              <div className="text-center text-white/40 p-6">
                <div className="text-[13px] tracking-[.1em] uppercase font-semibold">Visuel du service</div>
                <div className="text-[12.5px] mt-1.5">emplacement image (à fournir)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Le problème</div>
          <h2 className="text-section leading-[1.12] max-w-[22ch]">
            L&apos;administratif grignote vos <span className="italic text-rust">journées.</span>
          </h2>
          <p className="mt-4 max-w-[56ch] text-muted text-body leading-[1.6]">
            Entre les e-mails, les rendez-vous et la paperasse, les tâches à faible valeur
            s&apos;accumulent. Résultat : moins de temps pour vos clients, votre stratégie et votre
            croissance.
          </p>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
            {service.pains.map((p) => (
              <div key={p.k} className="bg-white border border-line rounded-2xl p-[26px]">
                <div className="font-serif text-[15px] text-rust font-semibold">{p.k}</div>
                <h3 className="mt-2.5 text-[19px]">{p.t}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-[1.55]">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="section-pad bg-white border-t border-b border-line">
        <div className="container-page">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-10">
            <div>
              <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Ce qui est inclus</div>
              <h2 className="text-section leading-[1.12] max-w-[16ch]">
                Tout ce qu&apos;un assistant prend en <span className="italic text-rust">charge.</span>
              </h2>
              <p className="mt-4 max-w-[44ch] text-muted text-body leading-[1.6]">
                Une liste claire, adaptée à votre activité. Vous déléguez ce que vous voulez, quand
                vous voulez.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-[15px] font-semibold text-rust">
                Discuter de votre besoin <span>→</span>
              </Link>
            </div>
            <div className="grid gap-3">
              {service.included.map((it) => (
                <div
                  key={it}
                  className="flex gap-3.5 items-start bg-cream border border-line rounded-xl p-[16px_18px]"
                >
                  <span className="flex-none w-6 h-6 rounded-full bg-rust text-white flex items-center justify-center text-[13px] font-bold">
                    ✓
                  </span>
                  <span className="text-[15px] leading-[1.45]">{it}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-4">Comment ça marche</div>
          <h2 className="text-section leading-[1.12] max-w-[20ch]">
            De l&apos;appel à l&apos;exécution, en 4 <span className="italic text-rust">temps.</span>
          </h2>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-[22px]">
            {service.steps.map((st) => (
              <div key={st.n} className="bg-white border border-line rounded-2xl p-[26px]">
                <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-serif text-[15px]">
                  {st.n}
                </div>
                <h3 className="mt-4 text-[19px]">{st.t}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-[1.55]">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad bg-navy text-white">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-4">Les bénéfices</div>
          <h2 className="text-section leading-[1.12] text-white max-w-[22ch]">
            Ce que vous y <span className="italic text-sand">gagnez.</span>
          </h2>
          <div className="mt-9 grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-[18px]">
            {service.stats.map((s) => (
              <div key={s.t} className="bg-white/5 border border-white/[.12] rounded-2xl p-7">
                <div className="font-serif text-[clamp(34px,4vw,48px)] leading-none text-sand">{s.v}</div>
                <div className="mt-3 font-semibold text-[15px]">{s.t}</div>
                <p className="mt-1.5 text-white/60 text-sm leading-[1.5]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        variant="centered"
        title="Prêt à déléguer votre administratif ?"
        description="30 minutes suffisent pour cadrer votre besoin. Sans engagement, sans jargon."
        ctaLabel="Réserver un appel"
        ctaHref="/contact"
      />
    </>
  );
}
