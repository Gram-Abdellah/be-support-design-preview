import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import BlogGrid from "@/components/blog-grid";
import NewsletterInlineForm from "@/components/newsletter-inline-form";
import { getFeaturedPost } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog & ressources",
  description:
    "Méthodes, outils et retours de terrain pour déléguer, automatiser et mieux organiser votre PME.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();

  return (
    <>
      <PageHero
        eyebrow="Blog & ressources"
        title={
          <>
            Gagner du temps, <span className="italic text-sand">mode d&apos;emploi.</span>
          </>
        }
        titleMaxWidth="20ch"
        leadMaxWidth="56ch"
        lead="Méthodes, outils et retours de terrain pour déléguer, automatiser et mieux organiser votre PME."
      />

      {featured && (
        <section className="pt-[clamp(40px,5vw,64px)]">
          <div className="container-page">
            <Link
              href={`/blog/${featured.slug}`}
              className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] bg-white border border-line rounded-[20px] overflow-hidden hover:border-line-2 hover:shadow-[0_22px_50px_-30px_rgba(20,32,58,.3)]"
            >
              <div
                className="min-h-[280px] flex items-start p-6"
                style={{ background: `linear-gradient(135deg,${featured.g1},${featured.g2})` }}
              >
                <span className="text-[11px] tracking-[.1em] uppercase font-bold text-white bg-white/[.14] px-3 py-1.5 rounded-full">
                  À la une
                </span>
              </div>
              <div className="p-[clamp(28px,3.5vw,44px)] flex flex-col justify-center">
                <div className="flex gap-3 items-center text-[13px] text-muted mb-3.5">
                  <span className="text-rust font-semibold">{featured.cat}</span>
                  <span>·</span>
                  <span>{featured.read} de lecture</span>
                </div>
                <h2 className="text-[clamp(24px,3vw,34px)] leading-[1.15] max-w-[22ch]">{featured.title}</h2>
                <p className="mt-3.5 text-muted text-body leading-[1.6] max-w-[52ch]">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-[15px] font-semibold text-rust">
                  Lire l&apos;article <span>→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pt-[clamp(36px,4vw,56px)] pb-[clamp(52px,7vw,88px)]">
        <div className="container-page">
          <BlogGrid />

          <div className="mt-11 bg-navy rounded-[20px] p-[clamp(30px,4vw,48px)] flex flex-wrap gap-6 items-center justify-between">
            <div className="max-w-[44ch]">
              <h2 className="text-[clamp(22px,2.8vw,30px)] leading-[1.15] text-white">
                Une ressource utile par mois, pas plus.
              </h2>
              <p className="mt-3 text-white/70 text-[15px] leading-[1.55]">
                Rejoignez les dirigeants qui reçoivent nos méthodes concrètes.
              </p>
            </div>
            <NewsletterInlineForm />
          </div>
        </div>
      </section>
    </>
  );
}
