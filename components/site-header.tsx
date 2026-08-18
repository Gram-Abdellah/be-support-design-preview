"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang-provider";
import { HEADER_DICT, NAV_KEYS, type Lang } from "@/lib/i18n";
import { services } from "@/content/services";

const LANG_META: { code: string; id: Lang; name: string }[] = [
  { code: "FR", id: "fr", name: "Français" },
  { code: "EN", id: "en", name: "English" },
  { code: "NL", id: "nl", name: "Nederlands" },
];

function activeKeyFromPath(pathname: string): string {
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/approche")) return "approche";
  if (pathname.startsWith("/tarifs")) return "tarifs";
  if (pathname.startsWith("/realisations")) return "realisations";
  if (pathname.startsWith("/a-propos")) return "apropos";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/contact")) return "contact";
  return "";
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const light = pathname === "/be-stars-pro";
  const documentPage = pathname === "/cgv-cgu-be-stars";
  const { lang, setLang } = useLang();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobServicesOpen, setMobServicesOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const active = activeKeyFromPath(pathname);
  const t = HEADER_DICT[lang];
  const desktopActiveClass = light
    ? "text-rust"
    : "text-white";
  const mobileActiveClass = light
    ? "text-rust border-line"
    : "text-white border-white/[.08]";
  const activeUnderlineClass = "underline decoration-current decoration-2 underline-offset-[10px]";

  const groupAServices = services.filter((s) => s.group === "A");
  const groupBServices = services.filter((s) => s.group === "B");
  const groupA = t.sA.map(([name, tag], i) => ({
    n: "0" + (i + 1),
    name,
    tag,
    href: `/services/${groupAServices[i]?.slug ?? ""}`,
  }));
  const groupB = t.sB.map(([name, tag], i) => ({
    n: "0" + (i + 5),
    name,
    tag,
    href: `/services/${groupBServices[i]?.slug ?? ""}`,
  }));
  const allServices = [...groupA, ...groupB];

  // Close dropdowns when navigating. This adjusts state during render (React's
  // documented pattern for resetting state when a prop/derived value changes)
  // instead of an effect, avoiding an extra cascading render on every route change.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
    setLangOpen(false);
    setMobileOpen(false);
    setMobServicesOpen(false);
  }

  // Close dropdowns on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
        setLangOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (documentPage) return null;

  return (
    <header
      ref={rootRef}
      className={`sticky top-0 z-[60] border-b font-sans ${
        light ? "bg-white border-line" : "bg-terra border-white/[.14]"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Be-Support, accueil" className="flex items-center">
          <Image
            src={light ? "/logo-color.png" : "/logo-color-full.png"}
            alt={light ? "Be-Support" : "Be-Support — Your time saving partner"}
            height={light ? 32 : 44}
            width={light ? 85 : 123}
            className={`${light ? "h-8" : "h-11"} w-auto block`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden min-[900px]:flex items-center gap-1">
          <div className="relative">
            <button
              onClick={() => {
                setServicesOpen((v) => !v);
                setLangOpen(false);
              }}
              className={`flex items-center gap-1.5 border-0 cursor-pointer font-sans text-[14.5px] font-medium rounded-[7px] px-3 py-2.5 ${
                light ? "hover:text-rust hover:bg-cream" : "hover:text-white hover:bg-white/[.06]"
              } ${
                active === "services"
                  ? desktopActiveClass
                  : servicesOpen
                    ? light
                      ? "text-rust bg-cream"
                      : "text-white bg-white/[.06]"
                  : light
                    ? "text-ink bg-transparent"
                    : "text-white/[.82] bg-transparent"
              }`}
            >
              <span className={active === "services" ? activeUnderlineClass : undefined}>{t.services}</span>
              <span
                className="inline-block text-[9px] opacity-70 transition-transform duration-200"
                style={{ transform: `rotate(${servicesOpen ? 180 : 0}deg)` }}
              >
                ▼
              </span>
            </button>
            {servicesOpen && (
              <div className="anim-rise absolute top-[calc(100%+10px)] left-0 w-[520px] bg-white border border-line rounded-[14px] shadow-[0_24px_60px_-20px_rgba(20,32,58,.35)] p-[18px] grid grid-cols-2 gap-x-[22px] gap-y-1.5">
                <div className="col-span-2 text-[10.5px] tracking-[.14em] uppercase text-rust font-bold px-2 pt-0.5 pb-1">
                  {t.groupA}
                </div>
                {groupA.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex gap-[11px] px-2 py-[9px] rounded-[9px] items-start hover:bg-cream"
                  >
                    <span className="flex-none w-[30px] h-[30px] rounded-[8px] bg-cream border border-line flex items-center justify-center font-serif text-[13px] text-rust font-semibold">
                      {s.n}
                    </span>
                    <span className="block">
                      <span className="block text-sm font-semibold text-ink leading-[1.25]">{s.name}</span>
                      <span className="block text-xs text-muted mt-0.5 leading-[1.3]">{s.tag}</span>
                    </span>
                  </Link>
                ))}
                <div className="col-span-2 text-[10.5px] tracking-[.14em] uppercase text-rust font-bold px-2 pt-3 pb-1 border-t border-line mt-1.5">
                  {t.groupB}
                </div>
                {groupB.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex gap-[11px] px-2 py-[9px] rounded-[9px] items-start hover:bg-cream"
                  >
                    <span className="flex-none w-[30px] h-[30px] rounded-[8px] bg-cream border border-line flex items-center justify-center font-serif text-[13px] text-rust font-semibold">
                      {s.n}
                    </span>
                    <span className="block">
                      <span className="block text-sm font-semibold text-ink leading-[1.25]">{s.name}</span>
                      <span className="block text-xs text-muted mt-0.5 leading-[1.3]">{s.tag}</span>
                    </span>
                  </Link>
                ))}
                <Link
                  href={light ? "/be-stars-pro" : "/be-stars"}
                  className="col-span-2 mt-1.5 flex gap-[11px] p-3 rounded-[9px] items-center bg-navy hover:bg-navy-2"
                >
                  <span className="flex-none w-[30px] h-[30px] rounded-[8px] bg-[rgba(201,183,142,.2)] flex items-center justify-center text-sand text-[13px]">
                    ★
                  </span>
                  <span className="block">
                    <span className="block text-sm font-semibold text-white leading-[1.25]">
                      Be-Stars <span className="text-sand">·</span> Classement hôtelier Maroc
                    </span>
                    <span className="block text-xs text-white/60 mt-0.5">{t.bestarsSub}</span>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="col-span-2 p-[11px] text-center bg-cream rounded-[9px] text-[13.5px] font-semibold text-ink hover:bg-line"
                >
                  {t.all}
                </Link>
              </div>
            )}
          </div>

          {NAV_KEYS.map((item, i) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={active === item.key ? "page" : undefined}
              className={`text-[14.5px] font-medium rounded-[7px] px-3 py-2.5 ${
                light ? "hover:text-rust hover:bg-cream" : "hover:text-white hover:bg-white/[.06]"
              } ${
                active === item.key
                  ? desktopActiveClass
                  : light
                    ? "text-ink"
                    : "text-white/[.82]"
              }`}
            >
              <span className={active === item.key ? activeUnderlineClass : undefined}>{t.nav[i]}</span>
            </Link>
          ))}

          <span className={`w-px h-[22px] mx-2.5 ${light ? "bg-line-2" : "bg-white/25"}`} />

          <div className="relative">
            <button
              onClick={() => {
                setLangOpen((v) => !v);
                setServicesOpen(false);
              }}
              className={`flex items-center gap-[7px] bg-transparent border-0 cursor-pointer font-sans text-sm font-semibold rounded-[7px] px-1.5 py-2.5 ${
                light ? "hover:text-rust" : "hover:text-white"
              } ${
                langOpen ? (light ? "text-rust" : "text-white") : light ? "text-ink" : "text-white/[.82]"
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="opacity-90">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18"></path>
                <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"></path>
              </svg>
              {lang.toUpperCase()}
              <span
                className="text-[8px] opacity-70 transition-transform duration-200"
                style={{ transform: `rotate(${langOpen ? 180 : 0}deg)` }}
              >
                ▼
              </span>
            </button>
            {langOpen && (
              <div className="anim-rise absolute top-[calc(100%+8px)] right-0 bg-white border border-line rounded-[11px] shadow-[0_20px_50px_-20px_rgba(20,32,58,.35)] p-1.5 min-w-[150px]">
                {LANG_META.map((l) => {
                  const on = l.id === lang;
                  return (
                    <button
                      key={l.id}
                      onClick={() => setLang(l.id)}
                      className={`flex w-full items-center justify-between gap-2.5 border-0 cursor-pointer font-sans text-sm rounded-lg px-3 py-2.5 text-left hover:bg-cream ${
                        on ? "font-bold bg-cream" : "font-medium bg-transparent"
                      } text-ink`}
                    >
                      {l.name}
                      <span className="text-rust text-[13px]">{on ? "✓" : ""}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          className="min-[900px]:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2"
        >
          <span className={`w-6 h-0.5 rounded-sm ${light ? "bg-navy" : "bg-white"}`} />
          <span className={`w-6 h-0.5 rounded-sm ${light ? "bg-navy" : "bg-white"}`} />
          <span className={`w-6 h-0.5 rounded-sm ${light ? "bg-navy" : "bg-white"}`} />
        </button>
      </div>

      {mobileOpen && (
        <div
          className={`anim-rise min-[900px]:hidden border-t pt-3.5 pb-[22px] ${
            light ? "bg-white border-line" : "bg-terra-dk border-white/[.14]"
          }`}
        >
          <div className="container-page flex flex-col">
            <button
              onClick={() => setMobServicesOpen((v) => !v)}
              className={`flex items-center justify-between border-0 cursor-pointer font-sans text-base font-semibold py-[13px] px-1 border-b ${
                active === "services"
                  ? mobileActiveClass
                  : light
                    ? "text-ink border-line bg-transparent"
                    : "text-white border-white/[.08] bg-transparent"
              }`}
            >
              <span className={active === "services" ? activeUnderlineClass : undefined}>{t.services}</span>
              <span className="text-rust">{mobServicesOpen ? "−" : "+"}</span>
            </button>
            {mobServicesOpen && (
              <div className="pt-1.5 pb-3 px-1 flex flex-col gap-0.5">
                {allServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`text-[14.5px] px-2.5 py-2.5 rounded-lg ${
                      light ? "text-muted hover:bg-cream hover:text-navy" : "text-white/75 hover:bg-white/[.06] hover:text-white"
                    }`}
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  href={light ? "/be-stars-pro" : "/be-stars"}
                  className={`text-[14.5px] px-2.5 py-2.5 rounded-lg ${
                    light ? "text-muted hover:bg-cream hover:text-navy" : "text-white/75 hover:bg-white/[.06] hover:text-white"
                  }`}
                >
                  ★ {t.bestarsItem}
                </Link>
              </div>
            )}
            {NAV_KEYS.map((item, i) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={active === item.key ? "page" : undefined}
                className={`text-base font-semibold py-[13px] px-1 border-b ${
                  active === item.key
                    ? mobileActiveClass
                    : light
                      ? "text-ink border-line"
                      : "text-white border-white/[.08]"
                }`}
              >
                <span className={active === item.key ? activeUnderlineClass : undefined}>{t.nav[i]}</span>
              </Link>
            ))}
            <div className="flex gap-2 pt-4 pb-1">
              {LANG_META.map((l) => {
                const on = l.id === lang;
                return (
                  <button
                    key={l.id}
                    onClick={() => setLang(l.id)}
                    className={`flex-1 cursor-pointer font-sans text-sm font-semibold py-[11px] rounded-[9px] border ${
                      on
                        ? "bg-rust border-rust text-white"
                        : light
                          ? "bg-cream border-line-2 text-ink"
                          : "bg-white/[.06] border-white/[.14] text-white/80"
                    }`}
                  >
                    {l.code}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
