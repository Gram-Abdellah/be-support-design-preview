export interface Plan {
  name: string;
  featured: boolean;
  tagline?: string;
  price: string;
  per: string;
  vat?: string;
  accent: string;
  border: string;
  btnBg: string;
  btnColor: string;
  btnBorder: string;
  cta: string;
  features: string[];
}

// Home page pricing preview (short feature lists)
export const homePlans: Plan[] = [
  {
    name: "Découverte",
    featured: false,
    price: "390 €",
    per: "HT",
    accent: "var(--muted)",
    border: "1px solid var(--line)",
    btnBg: "var(--navy)",
    btnColor: "#fff",
    btnBorder: "0",
    cta: "Démarrer le diagnostic",
    features: [
      "Audit de vos process & outils",
      "Cartographie du temps perdu",
      "Plan d’action priorisé & chiffré",
      "Recommandation « avec ou sans IA »",
      "Sans engagement de suite",
    ],
  },
  {
    name: "Standard",
    featured: true,
    price: "1 100 €",
    per: "HT/mois",
    accent: "var(--rust)",
    border: "2px solid var(--rust)",
    btnBg: "var(--rust)",
    btnColor: "#fff",
    btnBorder: "0",
    cta: "Réserver un appel",
    features: [
      "Diagnostic & plan d’action inclus",
      "Gestion e-mails & agenda",
      "Accueil téléphonique (demi-journée)",
      "Devis & facturation de base",
      "Reporting mensuel",
      "Remplacement garanti, sans interruption",
    ],
  },
  {
    name: "Sur-mesure",
    featured: false,
    price: "dès 1 900 €",
    per: "HT/mois",
    accent: "var(--muted)",
    border: "1px solid var(--line)",
    btnBg: "transparent",
    btnColor: "var(--ink)",
    btnBorder: "1.5px solid var(--line-2)",
    cta: "Construire mon offre",
    features: [
      "Tout le contenu Standard",
      "Profil polyvalent, dédié à 100 % à votre activité",
      "Planning, CRM & suivi des contrats",
      "Suivi des automatisations IA inclus",
      "Point hebdomadaire vidéo",
      "Remplacement garanti, sans interruption",
    ],
  },
];

// Tarifs page detailed plans
export const plans: Plan[] = [
  {
    name: "Découverte",
    featured: false,
    tagline: "Pour tester la délégation sur un périmètre ciblé.",
    price: "590 €",
    per: "/ mois",
    vat: "HT · ~10h / mois",
    accent: "var(--muted)",
    border: "1px solid var(--line)",
    btnBg: "var(--navy)",
    btnColor: "#fff",
    btnBorder: "0",
    cta: "Démarrer le diagnostic",
    features: [
      "Audit de vos process et outils",
      "~10 heures d’assistance / mois",
      "Un canal de communication dédié",
      "Reporting mensuel",
      "Sans engagement au-delà de 3 mois",
    ],
  },
  {
    name: "Standard",
    featured: true,
    tagline: "Le choix des PME : un assistant présent au quotidien.",
    price: "1 100 €",
    per: "/ mois",
    vat: "HT · ~25h / mois",
    accent: "var(--rust)",
    border: "2px solid var(--rust)",
    btnBg: "var(--rust)",
    btnColor: "#fff",
    btnBorder: "0",
    cta: "Réserver un appel",
    features: [
      "Tout Découverte, plus :",
      "~25 heures d’assistance / mois",
      "Assistant dédié formé à vos outils",
      "Reporting hebdomadaire",
      "Remplacement garanti, sans interruption",
      "Accès à l’automatisation IA",
    ],
  },
  {
    name: "Sur mesure",
    featured: false,
    tagline: "Pour un besoin large ou multi-services.",
    price: "dès 1 900 €",
    per: "/ mois",
    vat: "HT · volume défini ensemble",
    accent: "var(--muted)",
    border: "1px solid var(--line)",
    btnBg: "transparent",
    btnColor: "var(--ink)",
    btnBorder: "1.5px solid var(--line-2)",
    cta: "Construire mon offre",
    features: [
      "Tout Standard, plus :",
      "Volume d’heures sur mesure",
      "Plusieurs services combinés",
      "Interlocuteur unique de coordination",
      "Points de suivi rapprochés",
    ],
  },
];

export const comparisonRows = [
  { label: "Appel découverte", a: "✓", b: "✓", c: "✓" },
  { label: "Assistant dédié", a: "Non", b: "✓", c: "✓" },
  { label: "Heures / mois", a: "~10h", b: "~25h", c: "sur mesure" },
  { label: "Automatisation IA", a: "Non", b: "✓", c: "✓" },
  { label: "Fréquence de reporting", a: "Mensuel", b: "Hebdo", c: "Hebdo" },
  { label: "Remplacement garanti", a: "✓", b: "✓", c: "✓" },
];

export const tarifsFaq = [
  {
    q: "Y a-t-il un engagement ?",
    a: "Un minimum de 3 mois pour installer une vraie collaboration, puis c’est mensuel et sans engagement.",
  },
  {
    q: "Que se passe-t-il si l’assistant ne convient pas ?",
    a: "Le remplacement est garanti et inclus, sans interruption de service, pendant toute la durée du contrat.",
  },
  {
    q: "Les heures non utilisées sont-elles reportées ?",
    a: "On cadre le volume au diagnostic. Un ajustement de formule est possible d’un mois à l’autre selon vos besoins.",
  },
  {
    q: "Facturez-vous à la tâche ?",
    a: "Le modèle est mensuel pour la régularité, mais une prestation ponctuelle à la carte reste possible après diagnostic.",
  },
];
