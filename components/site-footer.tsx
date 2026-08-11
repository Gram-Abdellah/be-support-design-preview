"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/lang-provider";
import { FOOTER_DICT, FOOTER_HREFS, LEGAL_HREFS, type Lang } from "@/lib/i18n";
import { services } from "@/content/services";

const LANG_META: { code: string; id: Lang }[] = [
  { code: "FR", id: "fr" },
  { code: "EN", id: "en" },
  { code: "NL", id: "nl" },
];

export default function SiteFooter() {
  const pathname = usePathname() || "/";
  const { lang, setLang } = useLang();
  const t = FOOTER_DICT[lang];
  const navLinks = t.navLabels.map((label, i) => ({
    label,
    href: FOOTER_HREFS[i],
    sand: i === 7,
  }));
  const serviceLinks = t.servicesList.map((label, i) => ({
    label,
    href: `/services/${services[i]?.slug ?? ""}`,
  }));

  if (pathname === "/cgv-cgu-be-stars") return null;

  return (
    <footer className="bg-navy text-white pt-[clamp(48px,6vw,72px)] pb-0 font-sans">
      <div className="container-page">
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))] gap-x-8 gap-y-10 pb-12">
          <div className="min-w-[220px]">
            <Link href="/" aria-label="Be-Support, accueil" className="inline-flex">
              <Image
                src="/logo-white-full.png"
                alt="Be-Support, Your time saving partner"
                height={52}
                width={145}
                className="h-[52px] w-auto block"
              />
            </Link>
            <p className="mt-3.5 text-white/[.62] text-sm leading-[1.6] max-w-[34ch]">{t.blurb}</p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="#"
                className="w-10 h-10 rounded-[10px] bg-white/[.08] flex items-center justify-center text-white text-[13px] font-semibold hover:bg-rust"
              >
                in
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-[9px] bg-[#25D366] text-[#0a2a12] text-sm font-bold px-4 rounded-[10px] h-10"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[.14em] uppercase text-sand font-bold mb-4">{t.nav}</div>
            <div className="flex flex-col gap-[11px]">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[14.5px] hover:text-white ${
                    l.sand ? "text-sand font-semibold" : "text-white/70 font-normal"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[.14em] uppercase text-sand font-bold mb-4">{t.services}</div>
            <div className="flex flex-col gap-[11px]">
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="text-white/70 text-[14.5px] hover:text-white">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[.14em] uppercase text-sand font-bold mb-4">{t.legal}</div>
            <div className="flex flex-col gap-[11px]">
              {t.legalList.map((l, i) => (
                <Link
                  key={l}
                  href={LEGAL_HREFS[i]}
                  className="text-white/70 text-[14.5px] hover:text-white"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[.14em] uppercase text-sand font-bold mb-4">Contact</div>
            <div className="flex flex-col gap-[11px] text-white/70 text-[14.5px]">
              <a href="mailto:info@be-support.eu" className="text-white/70 hover:text-white">
                info@be-support.eu
              </a>
              <a href="tel:+32494913676" className="text-white/70 hover:text-white">
                +32 494 91 36 76
              </a>
              <span>
                Ghazoua, Essaouira
                <br />
                {t.country}
              </span>
              <a href="#" className="inline-flex items-center gap-2 text-[#25D366] font-semibold mt-0.5">
                WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-[22px] flex flex-wrap justify-between gap-3 items-center">
          <span className="text-white/50 text-[13px]">
            © {new Date().getFullYear()} Be-Support, {t.rights}
          </span>
          <div className="flex gap-2 items-center">
            {LANG_META.map((l) => (
              <button
                key={l.id}
                onClick={() => setLang(l.id)}
                className={`bg-transparent border-0 cursor-pointer font-sans text-[13px] px-1.5 py-1 ${
                  l.id === lang ? "font-bold text-white" : "font-normal text-white/50"
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
