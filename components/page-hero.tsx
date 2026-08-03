import Link from "next/link";
import type { ReactNode } from "react";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface HeroCta {
  label: string;
  href: string;
  variant: "solid" | "outline";
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  ctas,
  breadcrumb,
  center = false,
  titleMaxWidth,
  leadMaxWidth = "58ch",
  extraPaddingBottom,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  ctas?: HeroCta[];
  breadcrumb?: Breadcrumb[];
  center?: boolean;
  titleMaxWidth?: string;
  leadMaxWidth?: string;
  extraPaddingBottom?: string;
}) {
  return (
    <section
      className="bg-navy text-white"
      style={{
        padding: extraPaddingBottom
          ? `clamp(56px,6.5vw,96px) 0 ${extraPaddingBottom}`
          : "clamp(56px,6.5vw,96px) 0",
      }}
    >
      <div className={`container-page ${center ? "text-center" : ""}`}>
        {breadcrumb && (
          <div className="flex gap-2 items-center text-[13px] text-white/55 mb-[22px] flex-wrap">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {b.href ? (
                  <Link href={b.href} className="text-white/60 hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-sand">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-[18px]">
          {eyebrow}
        </div>
        <h1
          className={`text-page leading-[1.06] text-white ${center ? "mx-auto" : ""}`}
          style={{ maxWidth: titleMaxWidth }}
        >
          {title}
        </h1>
        {lead && (
          <p
            className={`mt-[22px] text-[clamp(17px,1.25vw,20px)] leading-[1.6] text-white/72 ${center ? "mx-auto" : ""}`}
            style={{ maxWidth: leadMaxWidth }}
          >
            {lead}
          </p>
        )}
        {ctas && ctas.length > 0 && (
          <div className={`mt-7 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
            {ctas.map((c) =>
              c.variant === "solid" ? (
                <Link
                  key={c.href}
                  href={c.href}
                  className="bg-rust text-white text-[15px] font-semibold px-6 py-[13px] rounded-[9px] hover:bg-rust-dk"
                >
                  {c.label}
                </Link>
              ) : (
                <Link
                  key={c.href}
                  href={c.href}
                  className="bg-transparent text-white text-[15px] font-semibold px-[21px] py-[12px] rounded-[9px] border-[1.5px] border-white/30 hover:border-white"
                >
                  {c.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
