export interface ServicePain {
  k: string;
  t: string;
  d: string;
}

export interface ServiceStep {
  n: string;
  t: string;
  d: string;
}

export interface ServiceStat {
  v: string;
  t: string;
  d: string;
}

export interface Service {
  n: string;
  slug: string;
  group: "A" | "B";
  name: string;
  tag: string;
  desc: string;
  chips: string[];
  heroTitle: string;
  heroEmph: string;
  heroLead: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  problemTitle?: string;
  problemEmph?: string;
  problemLead?: string;
  includedTitle?: string;
  includedEmph?: string;
  includedLead?: string;
  ctaTitle?: string;
  pains: ServicePain[];
  included: string[];
  steps: ServiceStep[];
  stats: ServiceStat[];
}

export const services: Service[] = [
  {
    n: "01",
    slug: "secretariat-assistance-administrative",
    group: "A",
    name: "Secrétariat & assistance administrative",
    tag: "Support & gestion · 01",
    desc: "Agenda, e-mails, prise de rendez-vous, traitement des documents et suivi administratif au quotidien.",
    chips: ["Agenda", "E-mails", "Documents"],
    heroTitle: "Secrétariat & assistance",
    heroEmph: "administrative.",
    heroLead:
      "Un assistant dédié gère votre agenda, vos e-mails et vos documents pour que vous restiez sur ce qui compte : votre activité.",
    heroImage: "/images/services/admin.png",
    heroImageAlt: "Agenda, e-mails, checklist et appels pris en charge",
    heroImageWidth: 1536,
    heroImageHeight: 1024,
    problemTitle: "Vous perdez du temps avec votre",
    problemEmph: "administratif ?",
    problemLead:
      "E-mails, rendez-vous, documents : ces tâches sont indispensables, mais rien n'oblige que ce soit vous qui les fassiez. Chaque heure passée dessus est une heure prise sur vos clients et votre croissance.",
    pains: [
      {
        k: "01",
        t: "Le temps qui file",
        d: "Jusqu’à 15 heures par semaine passées sur des tâches sans valeur ajoutée.",
      },
      {
        k: "02",
        t: "La charge mentale",
        d: "Rien ne doit passer entre les mailles : rendez-vous, relances, documents.",
      },
      {
        k: "03",
        t: "Le coût d’un recrutement",
        d: "Embaucher pour ça coûte cher et prend des mois avant d’être opérationnel.",
      },
    ],
    included: [
      "Gestion et tri de la boîte e-mail",
      "Tenue de l’agenda et prise de rendez-vous",
      "Rédaction et mise en forme de documents",
      "Suivi administratif et classement",
      "Préparation de réunions et comptes-rendus",
      "Accueil téléphonique et filtrage des appels",
    ],
    steps: [
      { n: "1", t: "Appel découverte", d: "On identifie les tâches à déléguer en priorité." },
      { n: "2", t: "Assistant dédié", d: "Un profil formé à vos outils vous est présenté." },
      { n: "3", t: "Mise en route", d: "Démarrage rapide, à votre rythme et sur vos outils." },
      { n: "4", t: "Suivi continu", d: "Points réguliers et ajustements. Remplacement garanti." },
    ],
    stats: [
      {
        v: "100%",
        t: "dédié à vous",
        d: "un assistant attitré qui connaît votre activité, vos outils et vos priorités.",
      },
      {
        v: "Flexible",
        t: "sans engagement lourd",
        d: "vous ajustez le volume d’heures selon vos besoins, mois après mois.",
      },
      { v: "FR / EN", t: "bilingue", d: "vos échanges en français comme en anglais." },
    ],
  },
  {
    n: "02",
    slug: "support-comptable-facturation",
    group: "A",
    name: "Support comptable & facturation",
    tag: "Support & gestion · 02",
    desc: "Devis, factures, relances clients et préparation des pièces pour votre comptable, sans retard.",
    chips: ["Devis", "Factures", "Relances"],
    heroTitle: "Support comptable &",
    heroEmph: "facturation.",
    heroLead:
      "Devis, factures, relances et pièces comptables : nous tenons votre facturation à jour pour que votre trésorerie ne dépende plus de votre disponibilité.",
    heroImage: "/images/services/compta.png",
    heroImageAlt: "Facture, paiement et suivi comptable pris en charge",
    heroImageWidth: 1333,
    heroImageHeight: 555,
    problemTitle: "Vos factures partent-elles toujours",
    problemEmph: "à temps ?",
    problemLead:
      "Une facture émise en retard, c'est un paiement encaissé en retard. Et quand les relances passent après le reste, la trésorerie subit avant même que le chiffre d'affaires ne bouge.",
    includedTitle: "Tout ce que nous prenons en",
    includedEmph: "charge.",
    ctaTitle: "Prêt à confier votre facturation ?",
    pains: [
      {
        k: "01",
        t: "Les retards d’émission",
        d: "Une facture oubliée en fin de mois décale tout l’encaissement du trimestre.",
      },
      {
        k: "02",
        t: "Les relances qu’on n’ose pas faire",
        d: "Relancer un client prend du temps et de l’énergie. Nous le faisons pour vous, avec tact.",
      },
      {
        k: "03",
        t: "Les pièces éparpillées",
        d: "Votre comptable réclame les justificatifs. Les rassembler chaque mois est un travail à part entière.",
      },
    ],
    included: [
      "Établissement des devis et des factures",
      "Envoi et suivi des règlements clients",
      "Relances amiables des impayés",
      "Rapprochement des paiements reçus",
      "Collecte et classement des justificatifs",
      "Préparation des pièces pour votre comptable",
    ],
    steps: [
      { n: "1", t: "Appel découverte", d: "On passe en revue votre cycle de facturation actuel." },
      {
        n: "2",
        t: "Prise en main des outils",
        d: "Nous nous connectons à votre logiciel de facturation existant.",
      },
      { n: "3", t: "Mise en route", d: "Démarrage rapide, à votre rythme et sur vos outils." },
      {
        n: "4",
        t: "Suivi mensuel",
        d: "Un point sur les encours, les relances et les pièces transmises.",
      },
    ],
    stats: [
      {
        v: "100%",
        t: "dédié à vous",
        d: "un assistant attitré qui connaît vos clients, vos échéances et vos outils.",
      },
      {
        v: "Mensuel",
        t: "rythme régulier",
        d: "un cycle de facturation et de relances tenu chaque mois, sans oubli.",
      },
      { v: "FR / EN", t: "bilingue", d: "vos échanges clients en français comme en anglais." },
    ],
  },
  {
    n: "03",
    slug: "gestion-rh-recrutement",
    group: "A",
    name: "Gestion RH & recrutement",
    tag: "Support & gestion · 03",
    desc: "Sourcing de candidats, tri des CV, planification des entretiens et onboarding administratif.",
    chips: ["Sourcing", "Entretiens", "Onboarding"],
    heroTitle: "Gestion RH &",
    heroEmph: "recrutement.",
    heroLead:
      "Un assistant dédié sourcing, présélectionne et organise vos entretiens pour que vous ne perdiez plus vos soirées à trier des CV.",
    pains: [
      {
        k: "01",
        t: "Le temps du sourcing",
        d: "Chercher, trier et relancer des candidats prend des heures sans garantie de résultat.",
      },
      {
        k: "02",
        t: "Les entretiens mal cadrés",
        d: "Sans coordination claire, la planification des entretiens devient un jeu de chaises musicales.",
      },
      {
        k: "03",
        t: "L’onboarding bâclé",
        d: "Un mauvais départ administratif coûte cher en engagement et en turnover.",
      },
    ],
    included: [
      "Rédaction et diffusion des offres",
      "Sourcing et présélection de candidats",
      "Planification et confirmation des entretiens",
      "Suivi administratif du processus de recrutement",
      "Préparation des dossiers d’onboarding",
      "Coordination avec vos outils RH existants",
    ],
    steps: [
      { n: "1", t: "Appel découverte", d: "On cadre le profil recherché et le calendrier de recrutement." },
      { n: "2", t: "Assistant dédié", d: "Un profil formé à votre secteur et vos outils RH vous est présenté." },
      { n: "3", t: "Mise en route", d: "Lancement du sourcing sous 48h." },
      { n: "4", t: "Suivi continu", d: "Points réguliers sur le pipeline. Remplacement garanti." },
    ],
    stats: [
      { v: "18", t: "candidats qualifiés", d: "présentés en moyenne par mission." },
      { v: "3 sem.", t: "pour recruter", d: "du sourcing à la décision finale." },
      { v: "48h", t: "pour démarrer", d: "entre l’accord et la première mission." },
    ],
  },
  {
    n: "04",
    slug: "automatisation-ia",
    group: "A",
    name: "Automatisation IA",
    tag: "Support & gestion · 04",
    desc: "Cartographie de vos process répétitifs et mise en place d’automatisations qui vous rendent des heures.",
    chips: ["Process", "Workflows", "Gain de temps"],
    heroTitle: "Automatisation",
    heroEmph: "IA.",
    heroLead:
      "On cartographie vos tâches répétitives et on met en place les automatisations (Make, n8n, IA générative) qui vous rendent des heures, sans jargon technique.",
    pains: [
      {
        k: "01",
        t: "Les tâches qui se répètent",
        d: "Rappels, relances, reporting : les mêmes gestes, chaque semaine, sans valeur ajoutée.",
      },
      {
        k: "02",
        t: "La « magie IA » qui fait peur",
        d: "Beaucoup promettent l’automatisation sans jamais expliquer comment elle fonctionne réellement.",
      },
      {
        k: "03",
        t: "Le manque de temps pour s’y mettre",
        d: "Automatiser demande un temps de mise en place que peu de dirigeants peuvent dégager.",
      },
    ],
    included: [
      "Cartographie de vos process répétitifs",
      "Automatisations sur Make et n8n",
      "Génération de documents standardisés par IA",
      "Rappels et relances automatisés",
      "Reporting automatique et tableaux de bord",
      "Formation de votre équipe aux outils mis en place",
    ],
    steps: [
      { n: "1", t: "Appel découverte", d: "On identifie les process les plus chronophages à automatiser." },
      { n: "2", t: "Plan & priorités", d: "On chiffre le gain de temps attendu par automatisation." },
      { n: "3", t: "Mise en place", d: "Déploiement progressif, testé avant mise en production." },
      { n: "4", t: "Suivi continu", d: "Ajustements et nouvelles automatisations au fil de vos besoins." },
    ],
    stats: [
      { v: "−60%", t: "temps support", d: "sur les tâches automatisables." },
      { v: "24/7", t: "disponibilité", d: "des réponses et rappels automatisés." },
      { v: "48h", t: "pour démarrer", d: "entre l’accord et la première automatisation." },
    ],
  },
  {
    n: "05",
    slug: "webdesign-webmarketing",
    group: "B",
    name: "Webdesign & webmarketing",
    tag: "Création & visibilité · 05",
    desc: "Création et refonte de site, SEO, gestion des réseaux sociaux et campagnes qui font venir des clients.",
    chips: ["Site web", "SEO", "Réseaux"],
    heroTitle: "Webdesign &",
    heroEmph: "webmarketing.",
    heroLead:
      "Un site rapide et crédible, trouvé sur Google, pensé pour transformer les visiteurs en clients. De la conception au référencement, une seule équipe s'occupe de votre visibilité.",
    heroImage: "/images/services/webdesign.png",
    heroImageAlt: "De la maquette au site en ligne, jusqu'aux résultats marketing",
    heroImageWidth: 1461,
    heroImageHeight: 366,
    problemTitle: "Être présent sur le web ne suffit plus. Il faut être",
    problemEmph: "visible !",
    problemLead:
      "Chaque jour, des clients cherchent exactement ce que vous proposez. La seule question : est-ce vous qu'ils trouvent, ou vos concurrents ?",
    includedTitle: "Tout ce qui construit votre",
    includedEmph: "visibilité.",
    includedLead:
      "Du site au référencement, chaque brique travaille pour le même objectif : que vos clients vous trouvent, vous croient et vous contactent.",
    ctaTitle: "Prêt à être trouvé par vos clients ?",
    pains: [
      {
        k: "01",
        t: "Invisible sur Google",
        d: "Vos clients cherchent vos services chaque jour. Si vous n’apparaissez pas, ils appellent vos concurrents.",
      },
      {
        k: "02",
        t: "7 secondes pour convaincre",
        d: "C’est le temps qu’un visiteur accorde à votre site avant de juger votre sérieux. Un design daté fait fuir.",
      },
      {
        k: "03",
        t: "Des visites sans lendemain",
        d: "Un site qui n’appelle pas à l’action reste une vitrine. Le vôtre doit générer des appels et des devis.",
      },
    ],
    included: [
      "Création ou refonte complète de votre site",
      "Référencement Google (SEO) et fiche Google Business",
      "Pages pensées pour convertir : appels, devis, rendez-vous",
      "Gestion de vos réseaux sociaux",
      "Campagnes d’acquisition ciblées",
      "Suivi des performances et rapports clairs",
    ],
    steps: [
      {
        n: "1",
        t: "Diagnostic visibilité",
        d: "Où en êtes-vous sur Google ? Que voient vos prospects ? On fait le point.",
      },
      {
        n: "2",
        t: "Conception & création",
        d: "Un site crédible, rapide et à votre image, structuré pour convertir.",
      },
      {
        n: "3",
        t: "Mise en ligne & référencement",
        d: "Votre site publié, indexé et positionné sur les recherches qui comptent.",
      },
      {
        n: "4",
        t: "Optimisation continue",
        d: "Analyse des visites, ajustements et campagnes pour progresser chaque mois.",
      },
    ],
    stats: [
      {
        v: "Visible",
        t: "là où l’on vous cherche",
        d: "sur Google, sur les réseaux et sur mobile, devant vos concurrents.",
      },
      {
        v: "Crédible",
        t: "dès la première visite",
        d: "un site professionnel qui inspire confiance et donne envie de vous appeler.",
      },
      {
        v: "Rentable",
        t: "pensé pour convertir",
        d: "des pages qui transforment les visites en appels, devis et rendez-vous.",
      },
    ],
  },
  {
    n: "06",
    slug: "infographie",
    group: "B",
    name: "Infographie",
    tag: "Création & visibilité · 06",
    desc: "Identité visuelle, supports print et digitaux, présentations soignées et cohérentes avec votre marque.",
    chips: ["Identité", "Print", "Supports"],
    heroTitle: "Infographie.",
    heroEmph: "",
    heroLead:
      "Une identité visuelle claire, des supports print et digitaux soignés, des présentations qui donnent envie de vous faire confiance.",
    pains: [
      {
        k: "01",
        t: "Une image dispersée",
        d: "Des supports qui ne se ressemblent pas envoient un message d’amateurisme.",
      },
      {
        k: "02",
        t: "Le temps perdu sur Canva",
        d: "Bricoler ses propres visuels prend du temps et donne rarement un résultat professionnel.",
      },
      {
        k: "03",
        t: "Des présentations bâclées",
        d: "Un devis ou une présentation mal mis en forme peut coûter un client.",
      },
    ],
    included: [
      "Création ou refonte d’identité visuelle",
      "Supports print (cartes, brochures, flyers)",
      "Supports digitaux (réseaux sociaux, présentations)",
      "Mise en page de documents commerciaux",
      "Gabarits réutilisables pour votre équipe",
      "Cohérence de marque sur tous les supports",
    ],
    steps: [
      { n: "1", t: "Appel découverte", d: "On cadre vos besoins visuels et votre identité actuelle." },
      { n: "2", t: "Plan & assistant dédié", d: "Un profil créatif formé à votre marque vous est présenté." },
      { n: "3", t: "Mise en route", d: "Premiers gabarits livrés sous 48h." },
      { n: "4", t: "Suivi continu", d: "Production régulière de supports. Remplacement garanti." },
    ],
    stats: [
      { v: "100%", t: "cohérence", d: "de vos supports, print comme digital." },
      { v: "48h", t: "premier gabarit", d: "livré dès le lancement de la mission." },
      { v: "FR / EN", t: "bilingue", d: "des supports adaptés à vos marchés." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const groupA = services.filter((s) => s.group === "A");
export const groupB = services.filter((s) => s.group === "B");
