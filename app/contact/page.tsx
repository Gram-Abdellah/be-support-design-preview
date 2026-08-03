import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import NewsletterGuideForm from "@/components/newsletter-guide-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Réservez un appel découverte de 30 minutes avec Be-Support, ou écrivez-nous : nous répondons sous 24h ouvrées.",
};

const slots = [
  { day: "Lun", time: "10:00", active: false },
  { day: "Lun", time: "14:30", active: false },
  { day: "Mar", time: "09:30", active: true },
  { day: "Mer", time: "11:00", active: false },
  { day: "Jeu", time: "15:00", active: false },
  { day: "Ven", time: "10:30", active: false },
];

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
        lead="30 minutes, sans engagement, pour cadrer votre besoin. Choisissez un créneau directement, ou écrivez-nous : on vous répond sous 24h ouvrées."
      />

      <section className="py-[clamp(48px,6vw,80px)]">
        <div className="container-page">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-[26px] items-start">
            {/* BOOKING */}
            <div className="bg-white border-2 border-rust rounded-[20px] p-[clamp(26px,3vw,36px)] relative">
              <span className="absolute -top-[13px] left-7 bg-rust text-white text-[10.5px] tracking-[.08em] uppercase font-bold px-3.5 py-[5px] rounded-full">
                Recommandé
              </span>
              <h2 className="text-[clamp(22px,2.6vw,28px)] leading-[1.15]">Réserver un créneau</h2>
              <p className="mt-2.5 text-muted text-[15px] leading-[1.55]">
                Le plus rapide : choisissez l&apos;heure qui vous arrange, l&apos;invitation part
                automatiquement.
              </p>
              {/* booking embed placeholder */}
              {/* TODO: replace this placeholder with a real Calendly / Cal.com embed. */}
              <div className="mt-[22px] border-[1.5px] border-dashed border-line-2 rounded-[14px] bg-cream p-7 px-5 text-center">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-white border border-line flex items-center justify-center mx-auto text-2xl">
                  📅
                </div>
                <div className="mt-4 font-semibold text-base">Emplacement agenda</div>
                <p className="mt-1.5 text-muted text-[13.5px] leading-[1.5] max-w-[34ch] mx-auto">
                  L&apos;embed Calendly / Cal.com viendra ici. En attendant, la maquette du planning
                  ci-dessous.
                </p>
                <div className="mt-5 grid [grid-template-columns:repeat(auto-fit,minmax(70px,1fr))] gap-2 max-w-[360px] mx-auto">
                  {slots.map((s) => (
                    <div
                      key={`${s.day}-${s.time}`}
                      className="bg-white rounded-[9px] p-[10px_6px]"
                      style={{ border: `1px solid var(${s.active ? "--rust" : "--line"})` }}
                    >
                      <div className="text-[11px] text-muted uppercase tracking-[.06em]">{s.day}</div>
                      <div
                        className="text-sm font-semibold mt-[3px]"
                        style={{ color: `var(${s.active ? "--rust" : "--ink"})` }}
                      >
                        {s.time}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-block mt-5 bg-rust text-white text-[15px] font-semibold px-6 py-[13px] rounded-[10px] hover:bg-rust-dk"
                >
                  Voir tous les créneaux
                </a>
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
