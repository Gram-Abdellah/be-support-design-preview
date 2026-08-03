"use client";

import Link from "next/link";
import { useState } from "react";
import { caseStudies, caseStudyCategories } from "@/content/case-studies";

export default function CaseStudiesGrid() {
  const [filter, setFilter] = useState("Tous");
  const cases = filter === "Tous" ? caseStudies : caseStudies.filter((c) => c.cat === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2.5 mb-[30px]">
        {caseStudyCategories.map((label) => {
          const on = label === filter;
          return (
            <button
              key={label}
              onClick={() => setFilter(label)}
              className={`font-sans text-[13.5px] font-semibold px-4 py-[9px] rounded-full cursor-pointer border ${
                on ? "bg-navy border-navy text-white" : "bg-white border-line-2 text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/realisations/${c.slug}`}
            className="flex flex-col bg-white border border-line rounded-[18px] overflow-hidden hover:border-line-2 hover:shadow-[0_18px_40px_-24px_rgba(20,32,58,.28)]"
          >
            <div
              className="aspect-[16/10] flex items-end p-[18px]"
              style={{ background: `linear-gradient(135deg,${c.g1},${c.g2})` }}
            >
              <span className="text-[11px] tracking-[.1em] uppercase font-bold text-white bg-black/[.28] px-3 py-1.5 rounded-full backdrop-blur-[4px]">
                {c.cat}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl leading-[1.2]">{c.title}</h3>
              <p className="mt-2 text-muted text-sm leading-[1.5] flex-1">{c.summary}</p>
              <div className="mt-4 flex gap-4 flex-wrap">
                <div>
                  <div className="font-serif text-[22px] text-rust">{c.stat1}</div>
                  <div className="text-xs text-muted">{c.stat1l}</div>
                </div>
                <div>
                  <div className="font-serif text-[22px] text-rust">{c.stat2}</div>
                  <div className="text-xs text-muted">{c.stat2l}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
