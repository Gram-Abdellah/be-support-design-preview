"use client";

import Link from "next/link";
import { useState } from "react";
import { blogCategories, getNonFeaturedPosts } from "@/content/blog-posts";

export default function BlogGrid() {
  const [filter, setFilter] = useState("Tous");
  const all = getNonFeaturedPosts();
  const posts = filter === "Tous" ? all : all.filter((p) => p.cat === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2.5 mb-[30px]">
        {blogCategories.map((label) => {
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
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="flex flex-col bg-white border border-line rounded-[18px] overflow-hidden hover:border-line-2 hover:shadow-[0_18px_40px_-24px_rgba(20,32,58,.28)]"
          >
            <div
              className="aspect-video"
              style={{ background: `linear-gradient(135deg,${p.g1},${p.g2})` }}
            />
            <div className="p-[22px] flex flex-col flex-1">
              <div className="flex gap-2.5 items-center text-[12.5px] text-muted mb-2.5">
                <span className="text-rust font-semibold">{p.cat}</span>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h3 className="text-[19px] leading-[1.25] flex-1">{p.title}</h3>
              <div className="mt-4 text-[13px] text-muted">{p.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
