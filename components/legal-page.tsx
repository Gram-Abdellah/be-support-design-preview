import type { LegalDoc } from "@/content/legal";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const sections = doc.sections.map((s, i) => ({
    ...s,
    id: `sec-${i + 1}`,
    num: `${romans[i]}.`,
  }));

  return (
    <>
      <section className="bg-navy text-white py-[clamp(44px,6vw,76px)]">
        <div className="container-legal">
          <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-4">Document légal</div>
          <h1 className="text-[clamp(30px,4.4vw,50px)] leading-[1.08] text-white max-w-[22ch]">{doc.title}</h1>
          <div className="mt-4.5 flex flex-wrap gap-3.5 items-center text-white/60 text-sm">
            <span>Dernière mise à jour : {doc.updated}</span>
            <span className="opacity-40">·</span>
            <span>Bema Consulting / Be-Support</span>
          </div>
        </div>
      </section>

      <section className="pt-[clamp(40px,5vw,64px)] pb-[clamp(52px,7vw,88px)]">
        <div className="container-legal grid grid-cols-1 gap-11">
          <div className="grid grid-cols-1 min-[760px]:grid-cols-[240px_minmax(0,1fr)] gap-11">
            {/* TOC */}
            <aside className="self-start min-[760px]:sticky min-[760px]:top-[92px]">
              <div className="text-[11px] tracking-[.16em] uppercase text-muted font-bold mb-4">Sommaire</div>
              <nav className="flex flex-col gap-0.5 border-l border-line-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-[13.5px] leading-[1.4] text-muted py-2 pl-4 -ml-px border-l-2 border-transparent hover:text-rust hover:border-rust"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <a href="#" className="inline-flex items-center gap-1.5 mt-[22px] text-[13.5px] font-semibold">
                ↓ Télécharger le PDF
              </a>
            </aside>

            {/* body */}
            <div className="min-w-0">
              <div className="bg-cream-2 border border-line rounded-[14px] p-[20px_22px] mb-9 text-muted text-[14.5px] leading-[1.6]">
                Ce document est fourni à titre informatif standard et ne constitue pas un conseil
                juridique. Pour toute question relative à votre situation particulière, consultez un
                professionnel du droit.
              </div>
              <div className="flex flex-col gap-[clamp(28px,4vw,40px)]">
                {sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-[92px]">
                    <div className="flex gap-3.5 items-baseline">
                      <span className="font-serif text-lg text-rust font-semibold flex-none">{s.num}</span>
                      <h2 className="text-[clamp(21px,2.6vw,27px)] leading-[1.2]">{s.title}</h2>
                    </div>
                    <div className="mt-3.5 pl-[34px] flex flex-col gap-3.5">
                      {s.paras.map((p, i) => (
                        <p key={i} className="text-ink text-base leading-[1.7]">
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
              <div className="mt-11 pt-6 border-t border-line text-muted text-sm leading-[1.6]">
                Pour toute question relative à ce document :{" "}
                <a href="mailto:info@be-support.eu">info@be-support.eu</a>. Bema Consulting /
                Be-Support, Ghazoua, Essaouira, Maroc.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
