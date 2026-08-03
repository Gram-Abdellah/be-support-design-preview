import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/cta-banner";
import { blogPosts, getBlogPostBySlug } from "@/content/blog-posts";
import { renderInline } from "@/lib/format";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <header className="bg-navy text-white py-[clamp(48px,6vw,84px)]">
        <div className="w-[min(760px,92vw)] mx-auto">
          <div className="flex gap-2 items-center text-[13px] text-white/55 mb-6">
            <Link href="/blog" className="text-white/60 hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-sand">{post.cat}</span>
          </div>
          <h1 className="text-[clamp(30px,4.4vw,50px)] leading-[1.08] text-white">{post.title}</h1>
          <div className="mt-[26px] flex flex-wrap gap-[18px] items-center text-white/70 text-sm">
            <div className="flex items-center gap-2.5">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm text-white"
                style={{ background: "linear-gradient(135deg,#2b3350,#171f38)" }}
              >
                {post.authorInitials}
              </span>
              {post.author}
            </div>
            <span className="opacity-40">·</span>
            <span>{post.date}</span>
            <span className="opacity-40">·</span>
            <span>{post.read} de lecture</span>
            <span className="opacity-40">·</span>
            <span className="text-sand font-semibold">{post.cat}</span>
          </div>
        </div>
      </header>

      <div className="w-[min(760px,92vw)] mx-auto">
        <div
          className="aspect-[16/8] rounded-[18px] flex items-center justify-center text-white/40 relative z-10 mb-9"
          style={{
            background: `linear-gradient(135deg,${post.g1},${post.g2})`,
            marginTop: "clamp(-40px,-5vw,-60px)",
          }}
        >
          <div className="text-center">
            <div className="text-[13px] tracking-[.1em] uppercase font-semibold">Image de couverture</div>
            <div className="text-[12.5px] mt-1.5">emplacement (à fournir)</div>
          </div>
        </div>

        <div className="prose pb-[clamp(40px,5vw,64px)]">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items?.map((it) => <li key={it}>{it}</li>)}
                </ul>
              );
            return <p key={i}>{block.text && renderInline(block.text)}</p>;
          })}
        </div>
      </div>

      {/* author box */}
      <div className="w-[min(760px,92vw)] mx-auto mb-[clamp(48px,6vw,72px)]">
        <div className="bg-white border border-line rounded-[18px] p-7 flex gap-5 flex-wrap items-center">
          <span
            className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-[22px] text-white flex-none"
            style={{ background: "linear-gradient(135deg,#2b3350,#171f38)" }}
          >
            {post.authorInitials}
          </span>
          <div className="flex-1 min-w-[220px]">
            <div className="font-semibold text-[17px]">{post.author}</div>
            <div className="text-rust text-[13.5px] mt-[2px]">{post.authorRole}</div>
            <p className="mt-2.5 text-muted text-[14.5px] leading-[1.55]">
              Elle accompagne les PME de Belgique et de France dans la délégation de leur
              administratif, depuis Essaouira.
            </p>
          </div>
        </div>
      </div>

      {/* related */}
      <section className="pb-[clamp(56px,6.5vw,96px)]">
        <div className="container-page">
          <div className="text-label tracking-[.2em] uppercase text-rust font-bold mb-5">À lire ensuite</div>
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="flex flex-col bg-white border border-line rounded-[18px] overflow-hidden hover:border-line-2 hover:shadow-[0_18px_40px_-24px_rgba(20,32,58,.28)]"
              >
                <div className="aspect-video" style={{ background: `linear-gradient(135deg,${r.g1},${r.g2})` }} />
                <div className="p-5">
                  <div className="text-[12.5px] text-rust font-semibold mb-2">{r.cat}</div>
                  <h3 className="text-lg leading-[1.25]">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        variant="centered"
        preset="article"
        title="Envie de passer de la lecture à l'action ?"
        ctaLabel="Réserver un appel"
        ctaHref="/contact"
      />
    </article>
  );
}
