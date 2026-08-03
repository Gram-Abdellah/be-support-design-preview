"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<Record<number, boolean>>(
    defaultOpen != null ? { [defaultOpen]: true } : {}
  );

  return (
    <div className="mt-7 bg-white border border-line rounded-2xl overflow-hidden">
      {items.map((f, i) => (
        <button
          key={f.q}
          onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
          className="w-full text-left bg-transparent border-0 border-b border-line last:border-b-0 cursor-pointer font-sans p-0"
        >
          <div className="flex justify-between items-center gap-4 px-6 py-[22px]">
            <span className="text-[17px] font-medium text-ink">{f.q}</span>
            <span className="text-rust text-[22px] flex-none">{open[i] ? "−" : "+"}</span>
          </div>
          {open[i] && (
            <p className="px-6 pb-6 text-muted text-[15.5px] leading-[1.65] text-left">{f.a}</p>
          )}
        </button>
      ))}
    </div>
  );
}
