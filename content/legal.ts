export interface LegalSection {
  title: string;
  paras: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}

export const legalDocs: Record<string, LegalDoc> = {
  "mentions-legales": {
    slug: "mentions-legales",
    title: "Mentions légales",
    updated: "janvier 2025",
    sections: [
      {
        title: "Éditeur du site",
        paras: [
          "Le présent site est édité par Bema Consulting, exploitant la marque commerciale Be-Support, société basée à Ghazoua, Essaouira, Maroc.",
          "Contact : info@be-support.eu · +32 494 91 36 76.",
        ],
      },
      {
        title: "Directrice de la publication",
        paras: [
          "La direction de la publication est assurée par la fondatrice de Be-Support, Yasmina Z., référente RGPD de la structure.",
        ],
      },
      {
        title: "Hébergement",
        paras: [
          "Le site est hébergé par un prestataire d’hébergement web tiers. Les coordonnées complètes de l’hébergeur sont communiquées sur demande à l’adresse info@be-support.eu.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paras: [
          "L’ensemble des contenus présents sur ce site (textes, visuels, logos, mise en page) est la propriété de Bema Consulting / Be-Support, sauf mention contraire, et ne peut être reproduit sans autorisation préalable écrite.",
          "Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation est susceptible de constituer une contrefaçon.",
        ],
      },
      {
        title: "Responsabilité",
        paras: [
          "Be-Support s’efforce d’assurer l’exactitude des informations diffusées sur ce site, mais ne saurait être tenue responsable des erreurs, omissions ou de l’indisponibilité temporaire des informations.",
          "L’utilisateur reste seul responsable de l’usage qu’il fait des informations et contenus disponibles sur ce site.",
        ],
      },
      {
        title: "Liens hypertextes",
        paras: [
          "Ce site peut contenir des liens vers des sites tiers. Be-Support n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
        ],
      },
      {
        title: "Droit applicable",
        paras: [
          "Les présentes mentions légales sont soumises au droit belge. Tout litige relève, à défaut d’accord amiable, du Tribunal de commerce de Bruxelles.",
        ],
      },
      {
        title: "Contact",
        paras: [
          "Pour toute question relative à ces mentions légales, vous pouvez nous écrire à info@be-support.eu.",
        ],
      },
    ],
  },
  "politique-de-confidentialite": {
    slug: "politique-de-confidentialite",
    title: "Politique de confidentialité",
    updated: "janvier 2025",
    sections: [
      {
        title: "Responsable du traitement",
        paras: [
          "Bema Consulting, exploitant la marque Be-Support, est responsable du traitement des données personnelles collectées via ce site et dans le cadre de la relation commerciale.",
        ],
      },
      {
        title: "Données collectées",
        paras: [
          "Nous collectons les données que vous nous transmettez volontairement : nom, adresse e-mail, entreprise et contenu de votre message via le formulaire de contact, ou votre adresse e-mail lors d’une inscription à notre newsletter.",
          "Aucune donnée sensible n’est collectée sans votre consentement explicite.",
        ],
      },
      {
        title: "Finalités du traitement",
        paras: [
          "Vos données sont utilisées pour répondre à vos demandes, vous adresser les contenus auxquels vous vous êtes inscrit, et assurer le suivi de la relation commerciale.",
          "Elles ne sont en aucun cas revendues ou cédées à des tiers à des fins commerciales.",
        ],
      },
      {
        title: "Base légale",
        paras: [
          "Le traitement repose selon les cas sur votre consentement (formulaire, newsletter) ou sur l’exécution de mesures précontractuelles et contractuelles (devis, prestation de service).",
        ],
      },
      {
        title: "Durée de conservation",
        paras: [
          "Les données issues du formulaire de contact sont conservées trois ans à compter du dernier échange. Les données liées à un contrat sont conservées pour la durée légale de conservation des documents commerciaux et comptables.",
        ],
      },
      {
        title: "Vos droits",
        paras: [
          "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur vos données personnelles.",
          "Vous pouvez exercer ces droits à tout moment en écrivant à info@be-support.eu.",
        ],
      },
      {
        title: "Sécurité",
        paras: [
          "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre l’accès non autorisé, la perte ou l’altération.",
        ],
      },
      {
        title: "Cookies",
        paras: [
          "Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de suivi publicitaire n’est déposé sans votre consentement préalable.",
        ],
      },
    ],
  },
  cgv: {
    slug: "cgv",
    title: "Conditions Générales de Vente",
    updated: "janvier 2025",
    sections: [
      {
        title: "Champ d’application",
        paras: [
          "Les présentes conditions générales de vente s’appliquent automatiquement à l’ensemble des prestations fournies par Be-Support, marque de Bema Consulting.",
          "Toute commande implique l’acceptation sans réserve du présent document, qui prévaut sur tout autre.",
        ],
      },
      {
        title: "Commande",
        paras: [
          "La commande est formalisée par écrit ou par tout moyen équivalent assurant la preuve de l’accord contractuel.",
          "Toute modification demandée par le client peut entraîner un ajustement du prix et du délai.",
        ],
      },
      {
        title: "Description des services",
        paras: [
          "Be-Support propose un service de support administratif, comptable, RH et créatif à distance.",
          "La liste des services n’est pas exhaustive et peut évoluer.",
        ],
      },
      {
        title: "Exécution de la prestation",
        paras: [
          "Les prestations sont réalisées à distance, aux dates convenues avec le client.",
          "Les interventions ont généralement lieu du lundi au vendredi, de 9h00 à 18h00.",
        ],
      },
      {
        title: "Obligations du client",
        paras: [
          "Le client s’engage à fournir les informations et accès nécessaires à la bonne exécution de la mission.",
          "Toute réclamation doit être notifiée dans un délai de sept jours suivant la prestation.",
        ],
      },
      {
        title: "Conditions financières",
        paras: [
          "Sauf mention contraire, les prix applicables sont ceux figurant sur le devis accepté.",
          "Une facture est émise à la fin de chaque mois, payable par virement sous 15 jours.",
        ],
      },
      {
        title: "Confidentialité & données",
        paras: [
          "L’assistant affecté est tenu au secret professionnel le plus strict.",
          "Be-Support traite les données personnelles conformément au RGPD.",
        ],
      },
      {
        title: "Durée & résiliation",
        paras: [
          "Le contrat est conclu pour une durée déterminée ou indéterminée selon l’offre souscrite.",
          "En cas de manquement, une résiliation peut intervenir après mise en demeure restée sans effet.",
        ],
      },
      {
        title: "Droit applicable",
        paras: [
          "Les présentes conditions sont soumises au droit belge.",
          "Tout litige relève, à défaut d’accord amiable, du Tribunal de commerce de Bruxelles.",
        ],
      },
    ],
  },
  cgu: {
    slug: "cgu",
    title: "Conditions Générales d’Utilisation",
    updated: "janvier 2025",
    sections: [
      {
        title: "Objet",
        paras: [
          "Les présentes conditions générales d’utilisation ont pour objet de définir les modalités d’accès et d’utilisation du site be-support.eu par tout visiteur.",
        ],
      },
      {
        title: "Accès au site",
        paras: [
          "Le site est accessible gratuitement à tout utilisateur disposant d’un accès à internet. Tous les frais nécessaires à cet accès (matériel, connexion) restent à la charge de l’utilisateur.",
        ],
      },
      {
        title: "Usage du site",
        paras: [
          "L’utilisateur s’engage à faire un usage loyal du site et à ne pas porter atteinte à son bon fonctionnement, à sa sécurité, ou aux droits des tiers.",
          "Toute tentative d’extraction massive de contenu ou d’atteinte à l’intégrité technique du site est strictement interdite.",
        ],
      },
      {
        title: "Formulaires et comptes",
        paras: [
          "Certaines fonctionnalités (formulaire de contact, inscription à la newsletter) nécessitent la saisie d’informations personnelles. L’utilisateur garantit l’exactitude des informations transmises.",
        ],
      },
      {
        title: "Disponibilité du site",
        paras: [
          "Be-Support met tout en œuvre pour assurer l’accès au site 24h/24, sans garantie de continuité absolue. Le site peut être interrompu pour maintenance sans préavis.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paras: [
          "L’ensemble des éléments du site (structure, textes, visuels) est protégé par le droit de la propriété intellectuelle et reste la propriété de Bema Consulting / Be-Support.",
        ],
      },
      {
        title: "Modification des CGU",
        paras: [
          "Be-Support se réserve le droit de modifier les présentes conditions à tout moment. La version en vigueur est celle publiée sur le site au moment de la consultation.",
        ],
      },
      {
        title: "Droit applicable",
        paras: [
          "Les présentes conditions sont soumises au droit belge. Tout litige relève, à défaut d’accord amiable, du Tribunal de commerce de Bruxelles.",
        ],
      },
    ],
  },
};

export function getLegalDoc(slug: string) {
  return legalDocs[slug];
}
