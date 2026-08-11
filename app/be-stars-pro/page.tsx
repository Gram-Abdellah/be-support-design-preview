import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/faq-accordion";
import {
  audit,
  beStarsProFaq,
  carte,
  deliverables,
  mystery,
  norms,
  pricingGrid,
  refs,
  why,
} from "@/content/be-stars";

export const metadata: Metadata = {
  title: "Be-Stars Pro — Classement officiel des hébergements touristiques",
  description:
    "Audit de conformité, plan d’action et accompagnement au classement hôtelier au Maroc selon la loi 80-14 et l’arrêté conjoint n° 985-24.",
};

const roman = ["i.", "ii.", "iii."];

export default function BeStarsProPage() {
  return (
    <>
      <section className="bg-cream pt-[clamp(56px,7vw,104px)] text-center">
        <div className="w-[min(900px,92vw)] mx-auto">
          <div className="inline-flex items-center gap-3 text-rust font-serif text-base tracking-[.34em]">
            ★ ★ ★ ★ ★
          </div>
          <div className="mt-[18px] text-label tracking-[.24em] uppercase text-muted font-bold">
            Be-Stars · Classement officiel des hébergements touristiques
          </div>
          <h1 className="mt-[22px] text-[clamp(40px,5.4vw,74px)] leading-[1.02] font-normal tracking-[-.015em]">
            Chaque étoile se <span className="italic text-rust">prépare.</span>
            <br />
            Nous la sécurisons avec vous.
          </h1>
          <p className="mt-6 mx-auto max-w-[56ch] text-[clamp(16px,1.3vw,18.5px)] leading-[1.65] text-muted">
            La loi 80-14 et l&apos;arrêté conjoint n° 985-24 redéfinissent le classement des
            établissements touristiques au Maroc. Audit de conformité, plan d&apos;action et
            accompagnement jusqu&apos;au classement officiel, avant l&apos;échéance de mai 2027.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-rust text-white text-[15px] font-semibold px-[30px] py-4 rounded-[10px] hover:bg-rust-dk"
            >
              Réserver mon audit diagnostic
            </Link>
            <a
              href="#loi"
              className="bg-transparent text-navy text-[15px] font-semibold px-7 py-[15px] rounded-[10px] border-[1.5px] border-line-2 hover:border-navy"
            >
              Comprendre la nouvelle loi
            </a>
          </div>
        </div>
        <div className="container-page mt-[clamp(44px,5.5vw,72px)]">
          <div className="relative rounded-t-[18px] overflow-hidden h-[clamp(220px,32vw,420px)]">
            <Image
              src="/images/be-stars/courtyard.jpg"
              alt="Cour intérieure d'un riad marocain"
              fill
              sizes="92vw"
              className="object-cover object-[center_55%]"
              priority
            />
          </div>
        </div>
      </section>

      <div className="bg-navy text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-3.5 py-[18px]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sand" />
            <span className="text-sm text-white/85">
              Échéance réglementaire : <strong className="text-sand font-semibold">mai 2027</strong>
            </span>
          </div>
          <div className="text-[13.5px] text-white/60">
            Hôtels · Riads · Maisons d&apos;hôtes · Résidences · Campings · Bivouacs
          </div>
        </div>
      </div>

      <section className="bg-white py-[clamp(60px,7vw,100px)]">
        <div className="container-page">
          <div className="text-center max-w-[60ch] mx-auto">
            <div className="text-label tracking-[.24em] uppercase text-rust font-bold">Pourquoi agir</div>
            <h2 className="mt-4 text-section leading-[1.08] font-normal">
              Sans classement, vous disparaissez des canaux de réservation.
            </h2>
          </div>
          <div className="mt-[clamp(36px,4.5vw,56px)] grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(24px,3vw,44px)]">
            {why.map((item, index) => (
              <div key={item.t} className="text-center px-[clamp(4px,1vw,16px)]">
                <div className="font-serif italic text-[15px] text-sand">{roman[index]}</div>
                <div className="mt-3 mx-auto w-11 h-[1.5px] bg-rust" />
                <h3 className="mt-[18px] text-[22px] leading-[1.2] font-normal">{item.t}</h3>
                <p className="mt-3 text-muted text-[15px] leading-[1.65]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="loi" className="bg-navy text-white py-[clamp(60px,7vw,100px)] scroll-mt-[120px]">
        <div className="container-page grid min-[900px]:grid-cols-2 gap-[clamp(28px,4vw,72px)] items-start">
          <div>
            <div className="text-label tracking-[.24em] uppercase text-sand font-bold">Cadre légal</div>
            <h2 className="mt-4 text-section leading-[1.08] text-white font-normal">
              Trois familles de normes. Un système de points. Vos étoiles.
            </h2>
            <p className="mt-[18px] text-white/70 text-base leading-[1.65] max-w-[48ch]">
              L&apos;arrêté conjoint n° 985-24, publié au Bulletin officiel n° 7407 du 27 mai 2025,
              redéfinit le classement. Les normes obligatoires doivent être respectées à 100 %. Les
              normes complémentaires exigent un minimum de 70 % des points.
            </p>
            <div className="mt-[26px] flex flex-col gap-2.5">
              {refs.map((item) => (
                <div key={item} className="flex gap-3 items-start text-sm text-white/65 leading-[1.55]">
                  <span className="text-sand flex-none font-serif">§</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            {norms.map((item) => (
              <div
                key={item.code}
                className="bg-white/5 border border-white/[.12] rounded-[14px] p-[24px_26px] grid grid-cols-[auto_1fr] gap-5 items-center"
              >
                <div className="font-serif text-[28px] text-sand w-[76px]">{item.code}</div>
                <div>
                  <div className="font-semibold text-[15px] text-white">{item.t}</div>
                  <p className="mt-[7px] text-white/60 text-[13.5px] leading-[1.55]">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(60px,7vw,100px)]">
        <div className="container-page grid min-[900px]:grid-cols-2 gap-[clamp(28px,4vw,72px)] items-start">
          <div className="min-[900px]:sticky min-[900px]:top-[130px]">
            <div className="text-label tracking-[.24em] uppercase text-rust font-bold">Service principal</div>
            <h2 className="mt-4 text-section leading-[1.08] max-w-[18ch] font-normal">
              Audit de conformité. En un jour, vous savez où vous en <span className="italic text-rust">êtes.</span>
            </h2>
            <p className="mt-[18px] text-muted text-base leading-[1.65] max-w-[44ch]">
              Notre équipe visite votre établissement et l&apos;évalue selon les trois familles de
              normes. Vous repartez avec un rapport chiffré et un plan d&apos;action priorisé.
            </p>
            <div className="hidden min-[900px]:block relative mt-6 rounded-[14px] overflow-hidden h-[220px]">
              <Image
                src="/images/be-stars/audit-tablet.webp"
                alt="Inspection d'une chambre d'hôtel avec tablette de contrôle"
                fill
                sizes="(min-width: 900px) 44vw, 0px"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              {audit.map((item, index) => (
                <div key={item.n} className="grid grid-cols-[auto_1fr] gap-[clamp(18px,2.5vw,28px)] pb-[30px]">
                  <div className="flex flex-col items-center">
                    <div className="w-[42px] h-[42px] rounded-full bg-navy text-sand flex items-center justify-center font-serif text-[17px] flex-none">
                      {item.n}
                    </div>
                    {index < audit.length - 1 && <div className="flex-1 w-[1.5px] bg-line-2 mt-2" />}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-[21px] leading-[1.2] font-normal">{item.t}</h3>
                    <p className="mt-[9px] text-muted text-[15px] leading-[1.6] max-w-[50ch]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-line rounded-2xl p-[clamp(24px,3vw,32px)]">
              <div className="text-label tracking-[.24em] uppercase text-rust font-bold">Livrables</div>
              <div className="mt-4 flex flex-col">
                {deliverables.map((item) => (
                  <div key={item} className="flex gap-3.5 items-center py-[13px] border-t border-line">
                    <span className="text-rust font-serif italic flex-none">✓</span>
                    <span className="text-[15px] leading-[1.45]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 border-y border-line py-[clamp(60px,7vw,100px)]">
        <div className="w-[min(760px,92vw)] mx-auto text-center">
          <div className="text-label tracking-[.24em] uppercase text-rust font-bold">
            Frais d&apos;audit et de diagnostic
          </div>
          <h2 className="mt-4 text-section leading-[1.08] font-normal">
            Une grille claire, selon la taille de votre établissement.
          </h2>
          <p className="mt-3.5 text-muted text-[15.5px]">Tous les prix sont nets, sans frais cachés.</p>
          <div className="mt-8 text-left">
            {pricingGrid.map((item) => (
              <div key={item.size} className="flex items-baseline gap-4 py-[17px] border-b border-line-2">
                <span className="font-serif text-[clamp(17px,1.8vw,21px)]">{item.size}</span>
                <span className="flex-1 border-b border-dotted border-line-2 -translate-y-[5px]" />
                <span className="font-serif text-[clamp(18px,1.9vw,22px)] font-semibold text-rust whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-[18px] text-muted text-[13.5px] italic">
            Audit complet en 1 jour · rapport livré sous 7 jours · retour téléphonique inclus.
          </p>
        </div>
      </section>

      <section className="py-[clamp(60px,7vw,100px)]">
        <div className="container-page">
          <div className="text-center max-w-[56ch] mx-auto">
            <div className="text-label tracking-[.24em] uppercase text-rust font-bold">Aller plus loin</div>
            <h2 className="mt-4 text-section leading-[1.08] font-normal">
              Des options disponibles <span className="italic text-rust">à la carte.</span>
            </h2>
          </div>
          <div className="mt-[clamp(32px,4vw,48px)] grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {carte.map((item, index) => (
              <div key={item.t} className="bg-white border border-line rounded-2xl p-[26px] flex flex-col text-left">
                <div className="font-serif italic text-sm text-sand">Option {String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-2.5 text-lg leading-[1.25] font-normal">{item.t}</h3>
                <p className="mt-[9px] text-muted text-[13.5px] leading-[1.6] flex-1">{item.d}</p>
                <div className="mt-[18px] pt-3.5 border-t border-line font-serif text-[21px] text-rust">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[18px] bg-navy rounded-2xl p-[28px_clamp(24px,3vw,34px)] flex flex-wrap gap-[18px] items-center justify-between">
            <div>
              <div className="font-serif text-[21px] text-white">Pack complet</div>
              <div className="text-white/70 text-[13.5px] mt-[5px] max-w-[48ch]">
                Audit diagnostic + relecture du dossier + modèles NPQS + glossaire trilingue
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-[22px]">
              <div className="text-right">
                <div className="font-serif text-[30px] text-sand">8 500 DH</div>
                <div className="text-white/60 text-[12.5px]">économie de 1 200 DH</div>
              </div>
              <Link href="/contact" className="bg-rust text-white text-sm font-semibold px-[22px] py-[13px] rounded-[9px] hover:bg-rust-dk">
                Choisir le pack
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-line py-[clamp(60px,7vw,100px)]">
        <div className="container-page grid min-[900px]:grid-cols-2 gap-[clamp(28px,4vw,64px)] items-center">
          <div className="relative rounded-2xl overflow-hidden min-h-[clamp(240px,30vw,380px)] order-2 min-[900px]:order-none">
            <Image
              src="/images/be-stars/mystery.webp"
              alt="Remise de clé et thé à la menthe, accueil hôtelier"
              fill
              sizes="(min-width: 900px) 44vw, 92vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-label tracking-[.24em] uppercase text-rust font-bold">
              Évaluation par client mystère
            </div>
            <h2 className="mt-4 text-section leading-[1.08] max-w-[20ch] font-normal">
              La visite mystère fait partie du classement. On vous <span className="italic text-rust">y prépare.</span>
            </h2>
            <p className="mt-4 text-muted text-base leading-[1.65] max-w-[52ch]">
              Le nouveau dispositif de classement s&apos;appuie sur des visites mystères. Un évaluateur
              professionnel séjourne dans votre établissement comme un client ordinaire et évalue la
              qualité de service sur l&apos;ensemble du parcours, de la réservation au départ. Son rapport
              alimente la décision de classement.
            </p>
            <div className="mt-[22px] grid gap-[9px]">
              {mystery.map((item) => (
                <div key={item} className="flex gap-2.5 text-[14.5px] leading-[1.5] text-ink">
                  <span className="text-rust flex-none">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-[22px] bg-cream rounded-xl p-[16px_20px] text-[14.5px] text-ink leading-[1.6] max-w-[56ch]">
              Be-Stars réalise une <strong>simulation préalable</strong> pour identifier les points faibles
              et vous préparer sereinement à l&apos;évaluation officielle.
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[clamp(48px,6vw,80px)] pb-[clamp(60px,7vw,100px)]">
        <div className="container-page">
          <div className="bg-white border border-line rounded-2xl p-[clamp(24px,3.5vw,36px)] flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-[18px] min-w-0">
              <div className="flex-none w-[52px] h-[52px] rounded-xl bg-cream border border-line flex items-center justify-center text-rust font-serif font-semibold text-[13px]">
                PDF
              </div>
              <div className="min-w-0">
                <div className="text-[16.5px] font-bold text-ink">CGV-CGU Be-Stars</div>
                <div className="mt-1 text-sm text-muted leading-[1.5]">
                  Conditions générales spécifiques aux prestations d&apos;audit et de classement Be-Stars.
                </div>
              </div>
            </div>
            <Link
              href="/cgv-cgu-be-stars"
              target="_blank"
              className="flex-none inline-flex items-center gap-2 bg-navy text-white text-[14.5px] font-semibold px-[22px] py-[13px] rounded-[9px] hover:bg-navy-2"
            >
              Consulter et télécharger <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[clamp(60px,7vw,100px)]">
        <div className="container-narrow">
          <div className="text-center">
            <div className="text-label tracking-[.24em] uppercase text-rust font-bold">Questions fréquentes</div>
            <h2 className="mt-4 text-section leading-[1.08] font-normal">
              Ce que les exploitants nous demandent le plus souvent.
            </h2>
          </div>
          <FaqAccordion items={beStarsProFaq} defaultOpen={null} />
        </div>
      </section>

      <section className="pb-[clamp(56px,7vw,96px)]">
        <div className="container-page">
          <div className="bg-navy rounded-[22px] p-[clamp(44px,5.5vw,76px)] text-center">
            <div className="inline-flex text-sand font-serif text-[15px] tracking-[.34em]">★ ★ ★ ★ ★</div>
            <h2 className="mt-[18px] mx-auto text-[clamp(28px,3.6vw,46px)] leading-[1.06] text-white max-w-[24ch] font-normal">
              Un jour pour l&apos;audit. Sept jours pour le rapport. <span className="italic text-sand">Sans surprise.</span>
            </h2>
            <p className="mt-[18px] mx-auto text-white/72 text-base leading-[1.55] max-w-[46ch]">
              L&apos;échéance de mai 2027 approche, et la file d&apos;attente s&apos;allonge chaque mois.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="bg-rust text-white text-[15px] font-bold px-[30px] py-4 rounded-[10px] hover:bg-rust-dk">
                Réserver mon audit diagnostic
              </Link>
              <Link href="/contact" className="bg-transparent text-white text-[15px] font-bold px-7 py-[15px] rounded-[10px] border-[1.5px] border-white/35 hover:border-white">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
