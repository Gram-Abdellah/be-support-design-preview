import Link from "next/link";
import type { ReactNode } from "react";

export default function CtaBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "centered",
  narrow = false,
}: {
  title: ReactNode;
  description?: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  variant?: "centered" | "split";
  narrow?: boolean;
}) {
  return (
    <section className="pb-[clamp(56px,6.5vw,96px)]">
      <div className={narrow ? "container-narrow" : "container-page"}>
        {variant === "centered" ? (
          <div className="bg-rust rounded-[20px] p-[clamp(32px,5vw,56px)] text-center">
            <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.1] text-white max-w-[20ch] mx-auto">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-white/85 text-base leading-[1.55] max-w-[46ch] mx-auto">
                {description}
              </p>
            )}
            <Link
              href={ctaHref}
              className="inline-block mt-[26px] bg-white text-navy text-[15px] font-bold px-7 py-[15px] rounded-[10px] hover:bg-cream"
            >
              {ctaLabel}
            </Link>
          </div>
        ) : (
          <div className="bg-rust rounded-[20px] p-[clamp(32px,5vw,56px)] flex flex-wrap gap-6 items-center justify-between">
            <div className="max-w-[46ch]">
              <h2 className="text-[clamp(26px,3.4vw,38px)] leading-[1.1] text-white">{title}</h2>
              {description && (
                <p className="mt-3.5 text-white/85 text-base leading-[1.55]">{description}</p>
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
