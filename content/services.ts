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
      { n: "3", t: "Mise en route", d: "Prise en main sous 48h, à votre rythme." },
      { n: "4", t: "Suivi continu", d: "Points réguliers et ajustements. Remplacement garanti." },
    ],
    stats: [
      { v: "−15h", t: "par semaine", d: "de tâches administratives reprises." },
      { v: "48h", t: "pour démarrer", d: "entre l’accord et la première mission." },
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
      "Un assistant dédié rédige vos devis, émet vos factures et relance vos impayés, pour que votre trésorerie ne dépende plus de votre agenda.",
    pains: [
      {
        k: "01",
        t: "Les factures qui traînent",
        d: "Chaque jour de retard sur une facture, c’est un jour de trésorerie en moins.",
      },
      {
        k: "02",
        t: "Les relances qu’on repousse",
        d: "Relancer un client gêne, alors on repousse, et les impayés s’accumulent.",
      },
      {
        k: "03",
        t: "Le désordre avant le comptable",
        d: "Pièces éparpillées, justificatifs manquants : chaque clôture devient une corvée.",
      },
    ],
    included: [
      "Rédaction et envoi des devis",
      "Émission et suivi des factures",
      "Relances clients graduées et cadrées",
      "Préparation des pièces pour le comptable",
      "Suivi de trésorerie de premier niveau",
      "Archivage numérique organisé",
    ],
    steps: [
      { n: "1", t: "Appel découverte", d: "On cartographie votre cycle devis-facture-relance." },
      { n: "2", t: "Assistant dédié", d: "Un profil formé à vos outils de facturation vous est présenté." },
      { n: "3", t: "Mise en route", d: "Prise en main sous 48h, avec vos modèles existants." },
      { n: "4", t: "Suivi continu", d: "Reporting régulier et ajustements. Remplacement garanti." },
    ],
    stats: [
      { v: "−30j", t: "délai de paiement", d: "grâce à des relances systématiques." },
      { v: "0", t: "oubli de relance", d: "un suivi cadré, sans rien laisser filer." },
      { v: "48h", t: "pour démarrer", d: "entre l’accord et la première mission." },
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
      "Un site qui convertit, un référencement qui vous trouve de nouveaux clients, et des réseaux sociaux animés sans y penser tous les jours.",
    pains: [
      {
        k: "01",
        t: "Un site à l’abandon",
        d: "Un site vieillissant ou introuvable sur Google, c’est des clients qui ne vous trouvent jamais.",
      },
      {
        k: "02",
        t: "Les réseaux sociaux irréguliers",
        d: "Publier sans rythme, c’est perdre en visibilité et en crédibilité auprès de votre audience.",
      },
      {
        k: "03",
        t: "Le manque de temps créatif",
        d: "Entre gérer l’activité et créer du contenu, le contenu passe toujours en dernier.",
      },
    ],
    included: [
      "Création ou refonte de site web",
      "Optimisation SEO on-page et technique",
      "Gestion et calendrier éditorial des réseaux sociaux",
      "Campagnes publicitaires ciblées",
      "Suivi des statistiques et ajustements",
      "Rédaction de contenus optimisés",
    ],
    steps: [
      { n: "1", t: "Appel découverte", d: "On cadre vos objectifs digitaux et votre présence actuelle." },
      { n: "2", t: "Plan & assistant dédié", d: "Un profil formé à votre secteur vous est présenté." },
      { n: "3", t: "Mise en route", d: "Lancement du chantier prioritaire sous 48h." },
      { n: "4", t: "Suivi continu", d: "Reporting régulier sur trafic et conversions. Remplacement garanti." },
    ],
    stats: [
      { v: "+40%", t: "de réservations", d: "grâce à une présence en ligne cohérente." },
      { v: "x3", t: "de portée", d: "sur les réseaux sociaux animés régulièrement." },
      { v: "48h", t: "pour démarrer", d: "entre l’accord et la première mission." },
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
