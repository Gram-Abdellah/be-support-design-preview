export interface CaseStudyBlock {
  k: string;
  t: string;
  d: string;
}

export interface CaseStudyResult {
  v: string;
  l: string;
}

export interface CaseStudy {
  slug: string;
  cat: string;
  g1: string;
  g2: string;
  title: string;
  /**
   * Narrative hero headline, split so the trailing fragment renders in italic
   * sand like the design ("Rendre 12 heures par semaine a un cabinet d'" +
   * "architectes."). Distinct from `title`, which labels the card/breadcrumb.
   */
  headline: string;
  headlineAccent: string;
  summary: string;
  stat1: string;
  stat1l: string;
  stat2: string;
  stat2l: string;
  client: string;
  sector: string;
  duration: string;
  serviceTag: string;
  blocks: CaseStudyBlock[];
  results: CaseStudyResult[];
  quote: string;
  quoteAuthor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cabinet-architectes",
    cat: "Secrétariat",
    g1: "#233457",
    g2: "#16203a",
    title: "Cabinet d’architectes",
    headline: "Rendre 12 heures par semaine à un cabinet d’",
    headlineAccent: "architectes.",
    summary:
      "Gestion d’agenda et coordination des appels d’offres pour une équipe de 6 personnes.",
    stat1: "−12h",
    stat1l: "/ semaine",
    stat2: "100%",
    stat2l: "RDV suivis",
    client: "Cabinet · 6 personnes",
    sector: "Architecture",
    duration: "Depuis 8 mois",
    serviceTag: "Secrétariat & assistance",
    blocks: [
      {
        k: "Contexte",
        t: "Un cabinet qui grandit plus vite que son organisation",
        d: "Six architectes, des projets en parallèle et une charge administrative qui débordait sur les soirées. Les appels d’offres, l’agenda partagé et la relation clients se géraient au fil de l’eau, sans personne pour en avoir la responsabilité.",
      },
      {
        k: "Le défi",
        t: "Reprendre la main sans embaucher",
        d: "Le cabinet ne voulait ni recruter à temps plein, ni multiplier les outils. L’objectif : décharger la coordination et le secrétariat, tout en gardant une trace fiable de chaque décision et de chaque rendez-vous.",
      },
      {
        k: "Ce que Be-Support a fait",
        t: "Une assistante dédiée, formée aux outils du cabinet",
        d: "Après un diagnostic d’une journée, une assistante dédiée a pris en charge l’agenda, le suivi des appels d’offres et la boîte e-mail. Deux automatisations ont été mises en place pour les relances et la préparation des réunions. Un point hebdomadaire cadre les priorités.",
      },
    ],
    results: [
      { v: "−12h", l: "récupérées chaque semaine par la direction" },
      { v: "100%", l: "des rendez-vous et échéances suivis" },
      { v: "0", l: "appel d’offres manqué depuis le démarrage" },
    ],
    quote:
      "On a récupéré un temps qu’on croyait perdu. L’assistante connaît nos dossiers mieux que nous certains matins.",
    quoteAuthor: "Dirigeante, cabinet d’architectes (Bruxelles)",
  },
  {
    slug: "studio-de-design",
    cat: "Comptabilité",
    g1: "#2a2c3f",
    g2: "#181a2c",
    title: "Studio de design",
    headline: "Trente jours de trésorerie regagnés pour un studio de ",
    headlineAccent: "design.",
    summary:
      "Facturation, relances et préparation des pièces comptables mensuelles.",
    stat1: "−30j",
    stat1l: "délai de paiement",
    stat2: "0",
    stat2l: "oubli de relance",
    client: "Studio · 4 personnes",
    sector: "Design graphique",
    duration: "Depuis 6 mois",
    serviceTag: "Support comptable & facturation",
    blocks: [
      {
        k: "Contexte",
        t: "Une trésorerie fragilisée par des factures en retard",
        d: "Le studio facturait au fil de l’eau, sans process de relance. Les délais de paiement s’allongeaient, et personne n’avait le temps de suivre les impayés sérieusement.",
      },
      {
        k: "Le défi",
        t: "Fiabiliser le cycle facturation sans y consacrer un poste dédié",
        d: "L’objectif : une facturation systématique, des relances cadrées, et des pièces prêtes pour le comptable en fin de mois, sans recruter en interne.",
      },
      {
        k: "Ce que Be-Support a fait",
        t: "Un cycle devis-facture-relance mis sous contrôle",
        d: "Un assistant dédié a repris l’émission des factures, la relance graduée des impayés et la préparation mensuelle des pièces comptables. Un tableau de suivi partagé donne une visibilité en temps réel sur la trésorerie.",
      },
    ],
    results: [
      { v: "−30j", l: "de délai moyen de paiement" },
      { v: "0", l: "oubli de relance depuis le démarrage" },
      { v: "100%", l: "des pièces prêtes avant clôture" },
    ],
    quote:
      "On ne perd plus de trace d’une facture. Le suivi est net, et notre comptable nous le confirme chaque mois.",
    quoteAuthor: "Cofondateur, studio de design (Lyon)",
  },
  {
    slug: "agence-immobiliere",
    cat: "RH",
    g1: "#2b3350",
    g2: "#171f38",
    title: "Agence immobilière",
    headline: "Dix-huit candidats qualifiés en trois semaines pour une ",
    headlineAccent: "agence.",
    summary:
      "Sourcing et présélection de candidats commerciaux, planification des entretiens.",
    stat1: "18",
    stat1l: "candidats qualifiés",
    stat2: "3 sem.",
    stat2l: "pour recruter",
    client: "Agence · 12 personnes",
    sector: "Immobilier",
    duration: "Mission ponctuelle",
    serviceTag: "Gestion RH & recrutement",
    blocks: [
      {
        k: "Contexte",
        t: "Une équipe commerciale à renforcer rapidement",
        d: "L’agence devait recruter deux négociateurs pour la saison, sans avoir de service RH interne ni le temps de trier des dizaines de candidatures.",
      },
      {
        k: "Le défi",
        t: "Recruter vite, sans sacrifier la qualité",
        d: "L’objectif : constituer un vivier de candidats qualifiés en quelques semaines, avec des entretiens organisés sans aller-retours interminables.",
      },
      {
        k: "Ce que Be-Support a fait",
        t: "Un sourcing ciblé et une coordination sans friction",
        d: "Diffusion des offres, présélection sur critères définis avec la direction, puis planification et confirmation des entretiens. Un tableau de suivi a permis à l’agence de comparer les profils en un coup d’œil.",
      },
    ],
    results: [
      { v: "18", l: "candidats qualifiés présentés" },
      { v: "3 sem.", l: "entre le lancement et l’embauche" },
      { v: "2", l: "postes pourvus sur le périmètre confié" },
    ],
    quote:
      "On a reçu des profils déjà triés et pertinents. Il ne restait plus qu’à choisir.",
    quoteAuthor: "Responsable d’agence (Namur)",
  },
  {
    slug: "e-commerce-local",
    cat: "Automatisation",
    g1: "#243b3a",
    g2: "#16211f",
    title: "E-commerce local",
    headline: "Soixante pour cent de support en moins pour un ",
    headlineAccent: "e-commerçant.",
    summary:
      "Automatisation du suivi de commandes et des réponses clients récurrentes.",
    stat1: "−60%",
    stat1l: "temps support",
    stat2: "24/7",
    stat2l: "réponses",
    client: "Boutique en ligne · 3 personnes",
    sector: "E-commerce",
    duration: "Depuis 10 mois",
    serviceTag: "Automatisation IA",
    blocks: [
      {
        k: "Contexte",
        t: "Un service client débordé par les questions répétitives",
        d: "Suivi de commande, délais de livraison, questions sur les retours : les mêmes demandes revenaient sans cesse, monopolisant l’équipe.",
      },
      {
        k: "Le défi",
        t: "Répondre plus vite sans épuiser l’équipe",
        d: "L’objectif : automatiser les réponses aux questions récurrentes tout en gardant un vrai contact humain pour les cas complexes.",
      },
      {
        k: "Ce que Be-Support a fait",
        t: "Des automatisations Make couplées à une IA générative",
        d: "Mise en place d’automatisations pour le suivi de commande et les réponses de premier niveau, avec escalade automatique vers un humain pour les demandes sensibles. Reporting hebdomadaire sur les volumes traités.",
      },
    ],
    results: [
      { v: "−60%", l: "de temps consacré au support répétitif" },
      { v: "24/7", l: "réponses disponibles en continu" },
      { v: "+90%", l: "de satisfaction sur les réponses automatisées" },
    ],
    quote:
      "Nos clients ont une réponse immédiate, et notre équipe se concentre enfin sur ce qui compte.",
    quoteAuthor: "Fondatrice, e-commerce (Liège)",
  },
  {
    slug: "restaurant-traiteur",
    cat: "Webmarketing",
    g1: "#3a2f2a",
    g2: "#211a16",
    title: "Restaurant & traiteur",
    headline: "Quarante pour cent de réservations en plus pour un ",
    headlineAccent: "traiteur.",
    summary: "Gestion des réseaux sociaux et campagnes locales de saison.",
    stat1: "+40%",
    stat1l: "réservations",
    stat2: "x3",
    stat2l: "portée",
    client: "Restaurant · 8 personnes",
    sector: "Restauration",
    duration: "Depuis 1 an",
    serviceTag: "Webdesign & webmarketing",
    blocks: [
      {
        k: "Contexte",
        t: "Une présence en ligne irrégulière",
        d: "Le restaurant publiait sporadiquement, sans ligne éditoriale ni suivi des campagnes locales, malgré un fort potentiel saisonnier.",
      },
      {
        k: "Le défi",
        t: "Tenir un rythme de publication sans y penser tous les jours",
        d: "L’objectif : une présence régulière sur les réseaux, des campagnes ciblées lors des périodes clés, et une génération de réservations mesurable.",
      },
      {
        k: "Ce que Be-Support a fait",
        t: "Un calendrier éditorial et des campagnes saisonnières",
        d: "Mise en place d’un calendrier éditorial mensuel, création de visuels, et campagnes publicitaires ciblées pour les événements et menus de saison. Suivi des statistiques et ajustements réguliers.",
      },
    ],
    results: [
      { v: "+40%", l: "de réservations sur les périodes de campagne" },
      { v: "x3", l: "de portée sur les réseaux sociaux" },
      { v: "12", l: "publications par mois en moyenne" },
    ],
    quote:
      "Les tables se remplissent avant même l’ouverture de service certains soirs.",
    quoteAuthor: "Gérant, restaurant & traiteur (Charleroi)",
  },
  {
    slug: "cooperative-agricole",
    cat: "Secrétariat",
    g1: "#2c2540",
    g2: "#181428",
    title: "Coopérative agricole",
    headline: "Quinze heures par semaine rendues à une ",
    headlineAccent: "coopérative.",
    summary:
      "Suivi administratif et gestion documentaire multi-sites, bilingue FR/EN.",
    stat1: "−15h",
    stat1l: "/ semaine",
    stat2: "2",
    stat2l: "langues",
    client: "Coopérative · 5 sites",
    sector: "Agriculture",
    duration: "Depuis 5 mois",
    serviceTag: "Secrétariat & assistance",
    blocks: [
      {
        k: "Contexte",
        t: "Une administration éclatée sur plusieurs sites",
        d: "Cinq sites, des documents dispersés, et une coordination administrative qui reposait sur des échanges informels entre responsables.",
      },
      {
        k: "Le défi",
        t: "Centraliser sans complexifier",
        d: "L’objectif : un point de centralisation documentaire unique, bilingue, sans imposer de nouvel outil lourd aux équipes de terrain.",
      },
      {
        k: "Ce que Be-Support a fait",
        t: "Un suivi documentaire centralisé et bilingue",
        d: "Mise en place d’un classement documentaire partagé, suivi administratif hebdomadaire par site, et traduction courante des échanges FR/EN avec les partenaires internationaux de la coopérative.",
      },
    ],
    results: [
      { v: "−15h", l: "de charge administrative par semaine" },
      { v: "5", l: "sites suivis depuis un point central" },
      { v: "2", l: "langues de travail maîtrisées au quotidien" },
    ],
    quote:
      "On a enfin une vision claire de nos documents, quel que soit le site concerné.",
    quoteAuthor: "Directeur, coopérative agricole (Wallonie)",
  },
];

export const caseStudyCategories = [
  "Tous",
  "Secrétariat",
  "Comptabilité",
  "RH",
  "Automatisation",
  "Webmarketing",
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
