export const why = [
  {
    t: "Un levier de prix",
    d: "Sur un segment comparable, une étoile de plus permet un tarif moyen supérieur et attire une clientèle à plus fort pouvoir d’achat.",
  },
  {
    t: "La visibilité OTA",
    d: "La plupart des voyageurs filtrent par étoiles. Sans classement, votre établissement n’apparaît tout simplement pas.",
  },
  {
    t: "Échéance mai 2027",
    d: "L’arrêté 985-24 accorde 24 mois pour se mettre en conformité. Plus vous attendez, plus la file s’allonge.",
  },
];

export const norms = [
  {
    code: "RGC",
    t: "Règlement général de construction",
    d: "Normes communes : accessibilité, sécurité, dimensions, hauteurs sous plafond.",
  },
  {
    code: "NEDF",
    t: "Équipement, décoration & fonctionnement",
    d: "Mobilier, literie, salles de bain, éclairage, équipements et technologies.",
  },
  {
    code: "NPQS",
    t: "Normes de qualité de service",
    d: "Accueil, langues, propreté, service, restauration, ménage, réactivité.",
  },
];

export const refs = [
  "Loi 80-14 relative aux établissements touristiques et autres formes d’hébergement.",
  "Arrêté conjoint n° 985-24 (Bulletin officiel n° 7407 du 27 mai 2025), fixant les normes de classement.",
  "Décret n° 2-23-441 (13 juillet 2023), pris pour l’application de la loi 80-14.",
];

export const audit = [
  {
    n: "1",
    t: "Visite complète sur site",
    d: "Une journée d’inspection selon les trois familles de normes RGC, NEDF, NPQS.",
  },
  {
    n: "2",
    t: "Rapport d’écart détaillé",
    d: "Livré sous 7 jours : conformités, écarts et investissements à prévoir, chiffrés.",
  },
  {
    n: "3",
    t: "Retour téléphonique",
    d: "On commente le rapport ensemble, avec un plan d’action priorisé.",
  },
];

export const deliverables = [
  "Rapport chiffré par norme (RGC, NEDF, NPQS)",
  "Nombre d’étoiles atteignable et écarts majeurs",
  "Étoile cible et liste d’actions à mener",
  "Plan d’action priorisé, du simple au structurant",
];

export const pricingGrid = [
  { size: "1 à 5 chambres", price: "2 500 DH" },
  { size: "6 à 10 chambres", price: "3 500 DH" },
  { size: "11 à 20 chambres", price: "5 000 DH" },
  { size: "21 à 50 chambres", price: "6 500 DH" },
  { size: "51 chambres et plus", price: "8 000 DH" },
];

export const carte = [
  {
    t: "Relecture du dossier avant dépôt",
    d: "On vérifie votre dossier et on corrige les points sensibles avant soumission.",
    price: "2 000 DH",
  },
  {
    t: "Accompagnement à la visite officielle",
    d: "On vous accompagne le jour de la visite de classement : préparation, présence, débrief.",
    price: "1 500 DH",
  },
  {
    t: "Modèles de procédures NPQS",
    d: "Des modèles prêts à l’emploi (accueil, ménage, restauration, sécurité) à adapter.",
    price: "1 500 DH",
  },
  {
    t: "Glossaire hôtelier trilingue",
    d: "Un vocabulaire hôtelier FR/EN/AR essentiel, prêt à afficher côté personnel.",
    price: "1 200 DH",
  },
];

export const mystery = [
  "Check-in anonyme (accueil, courtoisie, langues parlées)",
  "État du room service (qualité, équipement, literie)",
  "Restauration (qualité, présentation, service)",
  "Espaces communs (propreté, signalétique, accessibilité)",
  "Propreté et entretien des chambres",
  "Réactivité aux demandes et réclamations",
];

export const beStarsFaq = [
  {
    q: "Que se passe-t-il après mai 2027 si je ne suis pas en conformité ?",
    a: "Au-delà de l’échéance, le classement officiel et l’accès à certains canaux de réservation ne sont plus garantis. Un audit permet d’anticiper.",
  },
  {
    q: "Combien de temps dure une procédure complète ?",
    a: "L’audit se fait en 1 jour, le rapport est livré sous 7 jours. La mise en conformité dépend ensuite des écarts constatés.",
  },
  {
    q: "Quelle est la différence entre RGC, NEDF et NPQS ?",
    a: "RGC concerne la construction, NEDF l’équipement et la décoration, NPQS la qualité de service. Les trois familles composent le score final.",
  },
  {
    q: "Mon riad ou ma maison d’hôtes est-il concerné ?",
    a: "Oui. Le classement couvre hôtels, riads, maisons d’hôtes, résidences, campings et bivouacs.",
  },
  {
    q: "Que se passe-t-il si l’étoile visée n’est pas atteinte au premier dépôt ?",
    a: "Le rapport d’écart identifie précisément les actions manquantes. Nos options à la carte vous aident à combler l’écart.",
  },
  {
    q: "Faut-il fermer l’établissement pendant l’audit ?",
    a: "Non. L’audit se déroule en activité et ne perturbe pas l’accueil de vos clients.",
  },
];

export const beStarsProFaq = [
  {
    q: "Que se passe-t-il après mai 2027 si je ne suis pas en conformité ?",
    a: "Le délai de mise en conformité prévu par la réglementation arrive à son terme. Un audit permet d’anticiper plutôt que de subir.",
  },
  ...beStarsFaq.slice(1),
];
