import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/**
 * The design uses five distinct centred CTA panels — Home, Be-Stars and the
 * Service / Realisation / Article templates each have their own padding, type
 * scale and button metrics. They are transcribed verbatim here rather than
 * approximated, since the panel height feeds the whole page rhythm.
 */
const CENTERED_PRESETS = {
  home: {
    panelPadding: "clamp(40px,5vw,66px)",
    titleSize: "clamp(30px,3.8vw,46px)",
    titleLeading: "1.08",
    titleMaxWidth: "20ch",
    descMarginTop: "18px",
    descColor: "rgba(255,255,255,.88)",
    descSize: "var(--fs-body)",
    descLeading: "1.6",
    descMaxWidth: "54ch",
    btnMarginTop: "30px",
    btnSize: "15.5px",
    btnPadding: "17px 34px",
    btnRadius: "11px",
  },
  bestars: {
    panelPadding: "clamp(36px,5vw,64px)",
    titleSize: "clamp(26px,3.6vw,42px)",
    titleLeading: "1.08",
    titleMaxWidth: "26ch",
    descMarginTop: "18px",
    descColor: "rgba(255,255,255,.85)",
    descSize: "16.5px",
    descLeading: "1.55",
    descMaxWidth: "48ch",
    btnMarginTop: "26px",
    btnSize: "15px",
    btnPadding: "16px 30px",
    btnRadius: "10px",
  },
  service: {
    panelPadding: "clamp(32px,5vw,56px)",
    titleSize: "clamp(26px,3.6vw,40px)",
    titleLeading: "1.1",
    titleMaxWidth: "20ch",
    descMarginTop: "16px",
    descColor: "rgba(255,255,255,.85)",
    descSize: "16px",
    descLeading: "1.55",
    descMaxWidth: "46ch",
    btnMarginTop: "26px",
    btnSize: "15px",
    btnPadding: "15px 28px",
    btnRadius: "10px",
  },
  realisation: {
    panelPadding: "clamp(30px,4vw,48px)",
    titleSize: "clamp(24px,3.2vw,36px)",
    titleLeading: "1.12",
    titleMaxWidth: "22ch",
    descMarginTop: "16px",
    descColor: "rgba(255,255,255,.85)",
    descSize: "16px",
    descLeading: "1.55",
    descMaxWidth: "46ch",
    btnMarginTop: "22px",
    btnSize: "15px",
    btnPadding: "15px 28px",
    btnRadius: "10px",
  },
  article: {
    panelPadding: "clamp(32px,5vw,56px)",
    titleSize: "clamp(24px,3.2vw,36px)",
    titleLeading: "1.12",
    titleMaxWidth: "24ch",
    descMarginTop: "16px",
    descColor: "rgba(255,255,255,.85)",
    descSize: "16px",
    descLeading: "1.55",
    descMaxWidth: "46ch",
    btnMarginTop: "22px",
    btnSize: "15px",
    btnPadding: "15px 28px",
    btnRadius: "10px",
  },
} as const;

export type CtaPreset = keyof typeof CENTERED_PRESETS;

export default function CtaBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "centered",
  preset = "service",
  narrow = false,
  padTop = false,
}: {
  title: ReactNode;
  description?: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  variant?: "centered" | "split";
  preset?: CtaPreset;
  narrow?: boolean;
  /**
   * Most pages close with `padding: 0 0 clamp(56px,6.5vw,96px)` — the preceding
   * section supplies the gap above. The Service detail template is the one
   * exception: its CTA section is padded top *and* bottom.
   */
  padTop?: boolean;
}) {
  const p = CENTERED_PRESETS[preset];

  return (
    <section
      className={
        padTop ? "py-[clamp(56px,6.5vw,96px)]" : "pb-[clamp(56px,6.5vw,96px)]"
      }
    >
      <div className={narrow ? "container-narrow" : "container-page"}>
        {variant === "centered" ? (
          <div
            className="bg-rust rounded-[20px] text-center"
            style={{ padding: p.panelPadding }}
          >
            <h2
              className="text-white mx-auto"
              style={{
                fontSize: p.titleSize,
                lineHeight: p.titleLeading,
                maxWidth: p.titleMaxWidth,
              }}
            >
              {title}
            </h2>
            {description && (
              <p
                className="mx-auto"
                style={{
                  marginTop: p.descMarginTop,
                  color: p.descColor,
                  fontSize: p.descSize,
                  lineHeight: p.descLeading,
                  maxWidth: p.descMaxWidth,
                }}
              >
                {description}
              </p>
            )}
            <Link
              href={ctaHref}
              className="inline-block bg-white text-navy font-bold hover:bg-cream"
              style={
                {
                  marginTop: p.btnMarginTop,
                  fontSize: p.btnSize,
                  padding: p.btnPadding,
                  borderRadius: p.btnRadius,
                } as CSSProperties
              }
            >
              {ctaLabel}
            </Link>
          </div>
        ) : (
          <div className="bg-rust rounded-[20px] p-[clamp(32px,5vw,56px)] flex flex-wrap gap-6 items-center justify-between">
            <div className="max-w-[46ch]">
              <h2 className="text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-white">{title}</h2>
              {description && (
                <p className="mt-3.5 text-white/85 text-[16px] leading-[1.55]">{description}</p>
              )}
            </div>
            <Link
              href={ctaHref}
              className="bg-white text-navy text-[15px] font-bold px-[26px] py-[15px] rounded-[10px] whitespace-nowrap hover:bg-cream"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
