import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import NewsletterGuideForm from "@/components/newsletter-guide-form";
import CalendlyInlineWidget from "./calendly-inline-widget";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Réservez un appel découverte de 30 minutes avec Be-Support, ou écrivez-nous : nous répondons sous 24h ouvrées.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Réservez votre appel <span className="italic text-sand">découverte.</span>
          </>
        }
        titleMaxWidth="18ch"
        leadMaxWidth="56ch"
        lead="30 minutes, sans engagement, pour cadrer votre besoin. Choisissez un créneau directement, ou écrivez-nous : on vous répond sous 24h ouvrées."
      />

      <section className="py-[clamp(48px,6vw,80px)]">
        <div className="container-page">
          <div className="grid min-[1100px]:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)] gap-[26px] items-start">
            {/* BOOKING */}
            <div className="min-w-0 bg-white border-2 border-rust rounded-[20px] relative">
              <span className="absolute -top-[13px] left-7 bg-rust text-white text-[10.5px] tracking-[.08em] uppercase font-bold px-3.5 py-[5px] rounded-full">
                Recommandé
              </span>
              <div className="px-[clamp(20px,3vw,32px)] pt-[clamp(26px,3vw,36px)]">
                <h2 className="text-[clamp(22px,2.6vw,28px)] leading-[1.15]">Réserver un créneau</h2>
                <p className="mt-2.5 text-muted text-[15px] leading-[1.55]">
                  Le plus rapide : choisissez l&apos;heure qui vous arrange, l&apos;invitation part
                  automatiquement.
                </p>
              </div>
              <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
              />
              <div className="mt-[22px] min-w-0 rounded-b-[18px] border-t border-line bg-cream">
                <CalendlyInlineWidget />
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white border border-line rounded-[20px] p-[clamp(26px,3vw,36px)]">
              <h2 className="text-[clamp(22px,2.6vw,28px)] leading-[1.15]">Ou écrivez-nous</h2>
              <p className="mt-2.5 text-muted text-[15px] leading-[1.55]">
                On revient vers vous sous 24h ouvrées.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* direct contacts */}
          <div className="mt-[26px] grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-[18px]">
            <a
              href="mailto:info@be-support.eu"
              className="bg-white border border-line rounded-2xl p-6 block hover:border-line-2"
            >
              <div className="text-[22px]">✉️</div>
              <div className="mt-3 text-xs tracking-[.1em] uppercase text-muted font-semibold">Email</div>
              <div className="mt-1 font-semibold text-ink">info@be-support.eu</div>
            </a>
            <a href="#" className="bg-white border border-line rounded-2xl p-6 block hover:border-line-2">
              <div className="text-[22px]">💬</div>
              <div className="mt-3 text-xs tracking-[.1em] uppercase text-muted font-semibold">WhatsApp</div>
              <div className="mt-1 font-semibold text-green">+32 494 91 36 76</div>
            </a>
            <div className="bg-white border border-line rounded-2xl p-6">
              <div className="text-[22px]">📍</div>
              <div className="mt-3 text-xs tracking-[.1em] uppercase text-muted font-semibold">Adresse</div>
              <div className="mt-1 font-semibold text-ink">Ghazoua, Essaouira, Maroc</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / GUIDE */}
      <section className="pb-[clamp(52px,7vw,92px)]">
        <div className="container-page">
          <div className="bg-navy text-white rounded-[22px] p-[clamp(36px,5vw,64px)] grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(28px,4vw,56px)] items-center">
            <div>
              <div className="text-label tracking-[.2em] uppercase text-sand font-bold mb-4">Guide gratuit</div>
              <h2 className="text-[clamp(26px,3.2vw,38px)] leading-[1.12] text-white max-w-[18ch]">
                Les 10 tâches à déléguer <span className="italic text-sand">en premier.</span>
              </h2>
              <p className="mt-4 max-w-[46ch] text-white/72 text-base leading-[1.6]">
                Recevez notre guide PDF et, une fois par mois, des méthodes concrètes pour gagner du
                temps dans votre PME. Sans spam, désabonnement en un clic.
              </p>
            </div>
            <div>
              <NewsletterGuideForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
