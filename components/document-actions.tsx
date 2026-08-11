"use client";

export default function DocumentActions() {
  return (
    <div className="document-actions" aria-label="Actions du document">
      <button type="button" onClick={() => window.print()}>
        Imprimer
      </button>
      <a href="/documents/cgv-cgu-be-stars.pdf" download>
        Télécharger le PDF
      </a>
    </div>
  );
}
