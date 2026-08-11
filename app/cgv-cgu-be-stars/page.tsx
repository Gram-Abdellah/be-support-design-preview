import type { Metadata } from "next";
import Image from "next/image";
import DocumentActions from "@/components/document-actions";
import { beStarsTerms } from "@/content/be-stars-terms";

export const metadata: Metadata = {
  title: "CGV-CGU Be-Stars",
  description: "Conditions générales spécifiques aux prestations Be-Stars.",
};

export default function BeStarsTermsPage() {
  return (
    <div className="document-desk">
      <DocumentActions />
      <article className="document-sheet">
        <header className="document-heading">
          <div>
            <div className="document-overline">Be-Stars · Document contractuel</div>
            <h1>Conditions Générales de Vente et d&apos;Utilisation — Be-Stars</h1>
            <p>Bema Consulting / Be-Support · Dernière mise à jour : janvier 2026</p>
          </div>
          <Image src="/logo-mark-color.png" alt="Be-Support" width={148} height={44} className="document-logo" priority />
        </header>

        <div className="document-notice">
          Gabarit destiné à recevoir le texte juridique définitif validé par votre conseil. Les
          sections ci-dessous couvrent le périmètre spécifique des prestations Be-Stars (audit de
          conformité et accompagnement au classement des hébergements touristiques).
        </div>

        <div className="document-sections">
          {beStarsTerms.map((section) => (
            <section key={section.num}>
              <h2>
                <span>{section.num}.</span>
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="document-footer">
          <span>Be-Stars — marque de Bema Consulting / Be-Support</span>
          <span>www.be-support.eu · contact@be-support.eu</span>
        </footer>
      </article>
    </div>
  );
}
