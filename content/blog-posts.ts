export interface BlogPost {
  slug: string;
  cat: string;
  read: string;
  title: string;
  date: string;
  g1: string;
  g2: string;
  featured?: boolean;
  excerpt: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  body: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "10-taches-a-deleguer-en-premier",
    cat: "Organisation",
    read: "6 min",
    title: "Les 10 tâches qu'un dirigeant de PME devrait déléguer en premier",
    date: "12 juin 2026",
    g1: "#233457",
    g2: "#16203a",
    featured: true,
    excerpt:
      "Toutes les heures ne se valent pas. Voici comment repérer celles à confier tout de suite, et l'ordre dans lequel s'y prendre.",
    author: "Yasmina Z.",
    authorRole: "Fondatrice de Be-Support",
    authorInitials: "YZ",
    body: [
      {
        type: "p",
        text: "Un dirigeant passe en moyenne une journée entière par semaine sur des tâches que quelqu'un d'autre pourrait faire aussi bien. La question n'est pas de savoir *si* déléguer, mais **par quoi commencer**.",
      },
      {
        type: "p",
        text: "La plupart des chefs d'entreprise repoussent la délégation parce qu'ils imaginent une longue mise en place. En réalité, il suffit d'un premier périmètre bien choisi pour ressentir l'effet dès la première semaine.",
      },
      { type: "h2", text: "Comment repérer une tâche à déléguer" },
      {
        type: "p",
        text: "Trois critères suffisent : la tâche est **répétitive**, elle ne demande pas votre expertise propre, et elle peut être décrite en quelques phrases. Si les trois sont réunis, elle est candidate au départ.",
      },
      {
        type: "ul",
        items: [
          "Le tri et les réponses de premier niveau aux e-mails",
          "La prise et la confirmation de rendez-vous",
          "L'établissement des devis et des factures",
          "Les relances de paiement",
          "La préparation des réunions et comptes-rendus",
          "La mise en forme de documents et présentations",
        ],
      },
      { type: "h2", text: "L'ordre compte" },
      {
        type: "p",
        text: "Commencez par ce qui vous coûte le plus d'énergie mentale, pas forcément le plus d'heures. Libérer la charge de « ne rien oublier » a souvent plus d'effet que gagner deux heures sur une tâche isolée.",
      },
      {
        type: "p",
        text: "Une fois ce premier périmètre stabilisé, on élargit. C'est exactement la logique de notre diagnostic : cibler, déléguer, mesurer, puis recommencer.",
      },
    ],
  },
  {
    slug: "5-automatisations-simples",
    cat: "Automatisation",
    read: "5 min",
    title: "5 automatisations simples qui font gagner une journée par mois",
    date: "12 juin 2026",
    g1: "#243b3a",
    g2: "#16211f",
    excerpt:
      "Pas besoin d'un service informatique pour automatiser : cinq chantiers accessibles à toute PME, avec Make ou n8n.",
    author: "Yasmina Z.",
    authorRole: "Fondatrice de Be-Support",
    authorInitials: "YZ",
    body: [
      {
        type: "p",
        text: "L'automatisation n'est pas réservée aux grandes structures avec un service informatique. Avec des outils comme Make ou n8n, une PME peut automatiser des tâches répétitives en quelques jours, sans écrire une ligne de code.",
      },
      { type: "h2", text: "Les cinq chantiers les plus rentables" },
      {
        type: "ul",
        items: [
          "Les relances de factures impayées, déclenchées automatiquement",
          "L'envoi de confirmations et rappels de rendez-vous",
          "La génération de documents standardisés (devis, contrats types)",
          "La synchronisation entre votre boîte mail et votre CRM",
          "Le reporting hebdomadaire envoyé automatiquement à l'équipe",
        ],
      },
      {
        type: "p",
        text: "Chacun de ces chantiers représente entre 2 et 6 heures par mois récupérées, sans compter la charge mentale en moins. L'essentiel est de commencer petit, de mesurer, puis d'étendre.",
      },
      { type: "h2", text: "Ce qui reste humain" },
      {
        type: "p",
        text: "L'automatisation traite le répétitif. Les échanges qui demandent du jugement, de l'empathie ou une décision commerciale restent entre les mains d'une personne. C'est cette combinaison qui fait la différence, pas l'automatisation seule.",
      },
    ],
  },
  {
    slug: "relances-clients-script-impayes",
    cat: "Comptabilité",
    read: "4 min",
    title: "Relances clients : le script qui évite les impayés sans froisser",
    date: "28 mai 2026",
    g1: "#2a2c3f",
    g2: "#181a2c",
    excerpt:
      "Relancer un client gêne souvent plus que de perdre l'argent. Un script cadré change la donne, sans dégrader la relation.",
    author: "Yasmina Z.",
    authorRole: "Fondatrice de Be-Support",
    authorInitials: "YZ",
    body: [
      {
        type: "p",
        text: "La plupart des dirigeants repoussent leurs relances parce qu'ils redoutent de froisser un bon client. Résultat : les impayés s'accumulent, et la gêne grandit avec le retard.",
      },
      { type: "h2", text: "Un cadre en trois temps" },
      {
        type: "p",
        text: "Une relance efficace suit toujours la même progression : un rappel amical à J+3, un message plus factuel à J+10, puis un appel direct à J+20. Chaque étape a un ton différent, mais jamais agressif.",
      },
      {
        type: "ul",
        items: [
          "J+3 : rappel cordial, on suppose un oubli",
          "J+10 : message factuel avec la facture en pièce jointe",
          "J+20 : appel téléphonique pour comprendre le blocage",
        ],
      },
      {
        type: "p",
        text: "Le plus important : appliquer ce cadre systématiquement, sans exception ni jugement au cas par cas. C'est cette régularité, plus que la fermeté, qui réduit les délais de paiement.",
      },
    ],
  },
  {
    slug: "recruter-sans-y-passer-ses-soirees",
    cat: "RH",
    read: "7 min",
    title: "Recruter sans y passer ses soirées : un process en 4 étapes",
    date: "14 mai 2026",
    g1: "#2b3350",
    g2: "#171f38",
    excerpt:
      "Trier des CV le soir après une journée de travail n'est pas soutenable. Voici un process de recrutement qui tient en quatre étapes.",
    author: "Yasmina Z.",
    authorRole: "Fondatrice de Be-Support",
    authorInitials: "YZ",
    body: [
      {
        type: "p",
        text: "Recruter prend du temps parce que la plupart des dirigeants font tout eux-mêmes : rédiger l'offre, trier les candidatures, planifier les entretiens, relancer les candidats. Un process en quatre étapes permet de déléguer l'essentiel sans perdre la main sur la décision finale.",
      },
      { type: "h2", text: "Les quatre étapes" },
      {
        type: "ul",
        items: [
          "Cadrage du profil recherché avec des critères écrits, pas seulement en tête",
          "Sourcing et présélection sur ces critères, par une personne dédiée",
          "Planification groupée des entretiens sur une ou deux journées",
          "Décision finale par le dirigeant, sur un nombre réduit de profils qualifiés",
        ],
      },
      {
        type: "p",
        text: "Le gain n'est pas seulement du temps : c'est aussi la qualité de la décision. Face à trois profils déjà triés, on choisit mieux que face à quarante CV reçus en vrac.",
      },
    ],
  },
  {
    slug: "boite-mail-a-zero",
    cat: "Organisation",
    read: "6 min",
    title: "La boîte mail à zéro : méthode pour les dirigeants débordés",
    date: "30 avril 2026",
    g1: "#233457",
    g2: "#16203a",
    excerpt:
      "Une boîte mail qui déborde, c'est une charge mentale permanente. Une méthode simple pour reprendre le contrôle, durablement.",
    author: "Yasmina Z.",
    authorRole: "Fondatrice de Be-Support",
    authorInitials: "YZ",
    body: [
      {
        type: "p",
        text: "Une boîte de réception à 2000 messages non lus n'est pas un problème de discipline personnelle : c'est un problème de process. Sans tri systématique, tout dirigeant fini par crouler sous les mails.",
      },
      { type: "h2", text: "Trier avant de traiter" },
      {
        type: "p",
        text: "La méthode la plus efficace consiste à séparer le tri du traitement. Une personne dédiée qualifie chaque message (urgent, à traiter, à archiver, sans suite) avant qu'il n'atteigne votre attention.",
      },
      {
        type: "p",
        text: "Vous ne voyez alors que ce qui mérite réellement votre arbitrage, avec un contexte déjà préparé. Le reste est traité, classé ou répondu selon des règles établies avec vous.",
      },
      { type: "h2", text: "Le résultat concret" },
      {
        type: "p",
        text: "Les dirigeants qui adoptent cette méthode rapportent en moyenne une heure gagnée par jour, et surtout une baisse nette du stress lié à la peur d'avoir raté quelque chose d'important.",
      },
    ],
  },
  {
    slug: "reseaux-sociaux-rythme-sans-y-penser",
    cat: "Web",
    read: "5 min",
    title: "Réseaux sociaux : tenir un rythme sans y penser tous les jours",
    date: "16 avril 2026",
    g1: "#3a2f2a",
    g2: "#211a16",
    excerpt:
      "La régularité compte plus que la créativité pure sur les réseaux sociaux. Comment tenir un calendrier éditorial sans en faire une contrainte quotidienne.",
    author: "Yasmina Z.",
    authorRole: "Fondatrice de Be-Support",
    authorInitials: "YZ",
    body: [
      {
        type: "p",
        text: "La plupart des PME publient par à-coups : beaucoup en début d'année, plus rien passé février. Cette irrégularité coûte plus en visibilité qu'un contenu parfois imparfait mais régulier.",
      },
      { type: "h2", text: "Le calendrier plutôt que l'inspiration" },
      {
        type: "p",
        text: "Un calendrier éditorial mensuel, préparé à l'avance, évite de dépendre de l'inspiration du jour. Il suffit ensuite d'un créneau court chaque semaine pour valider les contenus préparés.",
      },
      {
        type: "p",
        text: "Déléguer la production (visuels, textes courts, publication) tout en gardant la validation finale permet de tenir ce rythme sans que cela devienne une charge quotidienne pour le dirigeant.",
      },
    ],
  },
  {
    slug: "nearshore-et-ia-pme",
    cat: "Automatisation",
    read: "8 min",
    title: "Nearshore et IA : ce que ça change vraiment pour une PME",
    date: "2 avril 2026",
    g1: "#2c2540",
    g2: "#181428",
    excerpt:
      "Entre nearshore et intelligence artificielle, beaucoup de promesses circulent. Voici ce qui change concrètement pour une PME de Belgique ou de France.",
    author: "Yasmina Z.",
    authorRole: "Fondatrice de Be-Support",
    authorInitials: "YZ",
    body: [
      {
        type: "p",
        text: "Le nearshore n'est pas nouveau, mais son association avec l'IA générative change la nature du service rendu à une PME. Ce n'est plus seulement une question de coût, mais de rapidité d'exécution.",
      },
      { type: "h2", text: "Ce que le nearshore apporte" },
      {
        type: "p",
        text: "Une équipe qualifiée, sur un fuseau horaire compatible avec l'Europe, à un coût maîtrisé. Le Maroc en particulier offre une proximité culturelle et linguistique rare pour les entreprises francophones.",
      },
      { type: "h2", text: "Ce que l'IA change" },
      {
        type: "p",
        text: "L'IA générative permet à une même personne de traiter davantage de volume sur les tâches structurées (rédaction, reporting, premières réponses), tout en gardant un humain responsable des décisions et de la relation client.",
      },
      {
        type: "p",
        text: "La combinaison des deux permet à une PME d'accéder à un support complet, réactif et abordable, sans les inconvénients classiques de la délocalisation pure.",
      },
    ],
  },
];

export const blogCategories = [
  "Tous",
  "Organisation",
  "Automatisation",
  "Comptabilité",
  "RH",
  "Web",
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost() {
  return blogPosts.find((p) => p.featured);
}

export function getNonFeaturedPosts() {
  return blogPosts.filter((p) => !p.featured);
}
