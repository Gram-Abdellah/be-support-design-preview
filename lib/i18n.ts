export type Lang = "fr" | "en" | "nl";

export interface HeaderDict {
  services: string;
  groupA: string;
  groupB: string;
  all: string;
  cta: string;
  bestarsSub: string;
  bestarsItem: string;
  nav: string[];
  sA: [string, string][];
  sB: [string, string][];
}

export interface FooterDict {
  nav: string;
  services: string;
  legal: string;
  country: string;
  rights: string;
  blurb: string;
  navLabels: string[];
  servicesList: string[];
  legalList: string[];
}

export const HEADER_DICT: Record<Lang, HeaderDict> = {
  fr: {
    services: "Services",
    groupA: "Support & gestion",
    groupB: "Création & visibilité",
    all: "Voir tous les services →",
    cta: "Réserver un appel",
    bestarsSub: "Audit loi 80-14 / arrêté conjoint n° 985-24",
    bestarsItem: "★ Be-Stars : Classement hôtelier",
    nav: ["Approche", "Tarifs", "Réalisations", "À propos", "Blog", "Contact"],
    sA: [
      ["Secrétariat & assistance administrative", "Gestion quotidienne"],
      ["Support comptable & facturation", "Devis, factures, relances"],
      ["Gestion RH & recrutement", "Sourcing & onboarding"],
      ["Automatisation IA", "Process & gains de temps"],
    ],
    sB: [
      ["Webdesign & webmarketing", "Site, SEO, réseaux"],
      ["Infographie", "Identité & supports"],
    ],
  },
  en: {
    services: "Services",
    groupA: "Support & management",
    groupB: "Creative & visibility",
    all: "See all services →",
    cta: "Book a call",
    bestarsSub: "Audit law 80-14 / joint order no. 985-24",
    bestarsItem: "★ Be-Stars: Hotel classification",
    nav: ["Approach", "Pricing", "Case studies", "About", "Blog", "Contact"],
    sA: [
      ["Secretarial & admin support", "Day-to-day management"],
      ["Accounting & invoicing", "Quotes, invoices, follow-ups"],
      ["HR & recruitment", "Sourcing & onboarding"],
      ["AI automation", "Processes & time saved"],
    ],
    sB: [
      ["Web design & marketing", "Site, SEO, social"],
      ["Graphic design", "Identity & assets"],
    ],
  },
  nl: {
    services: "Diensten",
    groupA: "Support & beheer",
    groupB: "Creatie & zichtbaarheid",
    all: "Alle diensten →",
    cta: "Plan een gesprek",
    bestarsSub: "Audit wet 80-14 / gezamenlijk besluit nr. 985-24",
    bestarsItem: "★ Be-Stars: Hotelclassificatie",
    nav: ["Aanpak", "Tarieven", "Realisaties", "Over ons", "Blog", "Contact"],
    sA: [
      ["Secretariaat & administratie", "Dagelijks beheer"],
      ["Boekhouding & facturatie", "Offertes, facturen, herinneringen"],
      ["HR & werving", "Sourcing & onboarding"],
      ["AI-automatisering", "Processen & tijdwinst"],
    ],
    sB: [
      ["Webdesign & marketing", "Site, SEO, social"],
      ["Grafisch ontwerp", "Identiteit & materiaal"],
    ],
  },
};

export const NAV_KEYS = [
  { key: "approche", href: "/approche" },
  { key: "tarifs", href: "/tarifs" },
  { key: "realisations", href: "/realisations" },
  { key: "apropos", href: "/a-propos" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export const FOOTER_DICT: Record<Lang, FooterDict> = {
  fr: {
    nav: "Navigation",
    services: "Services",
    legal: "Légal",
    country: "Maroc",
    rights: "une marque de Bema Consulting. Tous droits réservés.",
    blurb:
      "Votre partenaire gain de temps. Support administratif, comptable et créatif à distance pour les PME de Belgique et de France.",
    navLabels: [
      "Accueil",
      "Services",
      "Approche",
      "Tarifs",
      "Réalisations",
      "À propos",
      "Blog",
      "★ Be-Stars",
    ],
    servicesList: [
      "Secrétariat & assistance",
      "Support comptable & facturation",
      "Gestion RH & recrutement",
      "Automatisation IA",
      "Webdesign & webmarketing",
      "Infographie",
    ],
    legalList: [
      "Mentions légales",
      "Politique de confidentialité",
      "CGV",
      "CGU",
    ],
  },
  en: {
    nav: "Navigation",
    services: "Services",
    legal: "Legal",
    country: "Morocco",
    rights: "a Bema Consulting brand. All rights reserved.",
    blurb:
      "Your time-saving partner. Remote administrative, accounting and creative support for SMEs in Belgium and France.",
    navLabels: [
      "Home",
      "Services",
      "Approach",
      "Pricing",
      "Case studies",
      "About",
      "Blog",
      "★ Be-Stars",
    ],
    servicesList: [
      "Secretarial & admin support",
      "Accounting & invoicing",
      "HR & recruitment",
      "AI automation",
      "Web design & marketing",
      "Graphic design",
    ],
    legalList: [
      "Legal notice",
      "Privacy policy",
      "Terms of sale",
      "Terms of use",
    ],
  },
  nl: {
    nav: "Navigatie",
    services: "Diensten",
    legal: "Juridisch",
    country: "Marokko",
    rights: "een merk van Bema Consulting. Alle rechten voorbehouden.",
    blurb:
      "Uw partner voor tijdwinst. Administratieve, boekhoudkundige en creatieve support op afstand voor kmo's in België en Frankrijk.",
    navLabels: [
      "Home",
      "Diensten",
      "Aanpak",
      "Tarieven",
      "Realisaties",
      "Over ons",
      "Blog",
      "★ Be-Stars",
    ],
    servicesList: [
      "Secretariaat & administratie",
      "Boekhouding & facturatie",
      "HR & werving",
      "AI-automatisering",
      "Webdesign & marketing",
      "Grafisch ontwerp",
    ],
    legalList: [
      "Wettelijke vermeldingen",
      "Privacybeleid",
      "Verkoopvoorwaarden",
      "Gebruiksvoorwaarden",
    ],
  },
};

export const FOOTER_HREFS = [
  "/",
  "/services",
  "/approche",
  "/tarifs",
  "/realisations",
  "/a-propos",
  "/blog",
  "/be-stars",
];

export const LEGAL_HREFS = [
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/cgv",
  "/cgu",
];
