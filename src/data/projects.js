import fitnessAreaBanner from "../assets/images/projects/fitness-area-banner.png";
import fitnessAreaHero from "../assets/images/projects/fitness-area-hero.png";
import fitnessAreaCta from "../assets/images/projects/fitness-area-cta.png";
import fitnessAreaPricing from "../assets/images/projects/fitness-area-pricing.png";
import miniatureYoutube1 from "../assets/images/projects/miniature-1.png";
import miniatureYoutube2 from "../assets/images/projects/miniature-2.png";
import miniatureYoutube3 from "../assets/images/projects/miniature-4.png";
import miniatureYoutube4 from "../assets/images/projects/behance-1.png";
import miniatureYoutube5 from "../assets/images/projects/behance-2.png";
import formasecretHero from "../assets/images/projects/formasecret-hero.png";
import formasecretThumb from "../assets/images/projects/miniature-formasecret.png";
import formasecretFormations from "../assets/images/projects/format-secret-1.png";
import formasecretTitresPro from "../assets/images/projects/format-secret-2.png";

export const CATEGORIES = ["Tous", "Graphisme", "Web", "Vidéo"];

export const projects = [
    {
    slug: "formasecret",
    title: "FormaSecret",
    category: "Web",
    tags: ["React", "CSS3", "JavaScript"],
    image: formasecretThumb,
    description:
      "Refonte du site vitrine de FormaSecret, organisme de formation certifié Qualiopi (management, vente & efficacité professionnelle) - migration HTML/CSS/JS vers React.",
    problem:
      "Le site de FormaSecret était à l'origine développé en HTML, CSS et JavaScript. En tant qu'organisme de formation certifié Qualiopi, son contenu évolue régulièrement (fiches formations, avis clients, indicateurs de confiance), ce qui rendait la maintenance de plus en plus lourde sur cette base statique. L'enjeu de la refonte était de migrer l'ensemble du site vers React pour découper l'interface en composants réutilisables et fiabiliser les mises à jour futures, tout en conservant l'identité visuelle et la clarté du parcours déjà en place.",
    year: "2026",
    gallery: [formasecretHero, formasecretFormations, formasecretTitresPro],
    link: "https://formasecret.fr/",
  },
  {
    slug: "fitness-area",
    title: "Fitness-Area",
    category: "Web",
    tags: ["React", "CSS3", "JavaScript"],
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/39a8ec147774929.Y3JvcCwxMDgwLDg0NCwwLDg1.png",
    heroImage: fitnessAreaBanner,
    description:
      "Interface fitness développée en bootcamp, migrée vers React. Design amélioré et performances optimisées.",
    problem:
      "Le site d'origine, conçu en HTML/CSS, manquait d'impact et d'ergonomie. La présentation des formules manquait de clarté, la hiérarchie visuelle était floue et l'accès à la séance découverte n'était pas assez mis en valeur. L'enjeu était de restructurer l'interface pour rendre la lecture plus fluide (clarification des tarifs, mise en avant des avantages et retravail des appels à l'action) tout en migrant le projet sous React pour le rendre plus performant et plus simple à maintenir.",
    year: "2021 - 2022",
    gallery: [fitnessAreaHero, fitnessAreaCta, fitnessAreaPricing],
    link: "https://fitness-area-mohamed-e.vercel.app/",
  },
  {
    slug: "netflix-interface",
    title: "Netflix Interface",
    category: "Web",
    tags: ["React", "Bootstrap", "JavaScript"],
    image:
      "https://www.journaldugeek.com/app/uploads/2025/01/netflix-jeux-mobiles.jpg",
    description:
      "Reproduction pixel-perfect de l'interface Netflix - migration HTML/CSS vers React.",
    problem:
      "Ce projet a d'abord été réalisé en HTML, CSS et JavaScript, avec les bases que j'avais à l'époque, avant d'être entièrement repris en React. La difficulté principale a été de découper une interface pensée à l'origine comme un ensemble de pages statiques en composants réutilisables, tout en recréant proprement la gestion des états (survols, carrousels, affichage dynamique des contenus) qui reposait auparavant sur du JavaScript directement lié au DOM. Cette migration m'a demandé de repenser la structure du projet plutôt que de simplement traduire le code existant, et m'a permis de mieux comprendre la logique des composants et du state en React.",
    year: "2025",
    gallery: [
      "https://www.journaldugeek.com/app/uploads/2025/01/netflix-jeux-mobiles.jpg",
    ],
    link: "https://github.com/mohamed-elbermil/netflix-interface",
  },
  {
    slug: "miniatures-youtube",
    title: "Miniatures YouTube",
    category: "Graphisme",
    tags: ["Figma", "Illustrator", "Design"],
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9024c0228643009.Y3JvcCw2NTUsNTEyLDcwMiwyNzQ.png",
    description:
      "Création de miniatures attractives pour YouTube, mettant en valeur mes compétences graphiques.",
    problem:
      "La création de miniatures percutantes demandait une bibliothèque d'assets graphiques (icônes, textures, éléments détourés) que je ne possédais pas au démarrage du projet. Ce manque de ressources visuelles a failli ralentir la production et menaçait l'homogénéité des miniatures. L'enjeu était de constituer rapidement une base d'éléments réutilisables et cohérents, tout en conservant un fort impact visuel capable de maximiser le taux de clic malgré ces contraintes de temps et de moyens.",
    year: "2025",
    gallery: [miniatureYoutube1, miniatureYoutube2, miniatureYoutube3, miniatureYoutube4, miniatureYoutube5],
    link: "https://www.behance.net/gallery/228643009/Youtubes-Thumbnails",
  },
  {
    slug: "kaza-agence-immo",
    title: "Kaza - Agence Immo",
    category: "Graphisme",
    tags: ["Figma", "UI/UX", "Maquette"],
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f20352228694521.Y3JvcCw5NjcsNzU3LDE5OCw5NQ.png",
    description:
      "Maquette UX/UI complète pour une agence immobilière - parcours utilisateur et prototypage.",
    problem:
      "Le site devait présenter une offre immobilière riche (biens, filtres, fiches détaillées) sans jamais devenir illisible pour les personnes malvoyantes ou peu à l'aise avec le digital. Les maquettes existantes du secteur reposaient souvent sur de petites typographies, des contrastes faibles et des parcours de recherche complexes. L'enjeu était de concevoir une plateforme immobilière accessible dès la maquette (contrastes renforcés, hiérarchie typographique claire, parcours de recherche simplifié) sans sacrifier la richesse d'information attendue sur ce type de plateforme.",
    year: "[À COMPLÉTER]",
    link: "https://www.behance.net/gallery/228694521/Kaza-Agence-Immobiliere",
  },
  {
    slug: "fitness-area-publicite",
    title: "Fitness-Area Publicité",
    category: "Vidéo",
    tags: ["Vidéo", "Motion Design", "Publicité"],
    image: "https://img.youtube.com/vi/pzeNhG7iZhg/maxresdefault.jpg",
    videoEmbed: "https://www.youtube.com/embed/pzeNhG7iZhg",
    description:
      "Vidéo publicitaire concept pour le projet Fitness-Area - montage et motion design.",
    problem:
      "Le marché du fitness est saturé de publicités qui se ressemblent toutes : mêmes codes visuels, mêmes promesses, même énergie forcée. L'enjeu de cette vidéo était de créer un concept publicitaire qui sorte du lot pour Fitness-Area, en misant sur un montage dynamique et un motion design distinctif capable de capter l'attention en quelques secondes, tout en restant fidèle à l'identité de la marque.",
    year: "2022",
    link: "https://www.youtube.com/watch?v=pzeNhG7iZhg",
  },
  {
    slug: "fitness-area-pub",
    title: "Fitness Area Pub",
    category: "Vidéo",
    tags: ["Vidéo", "Motion Design", "Publicité"],
    image: "https://img.youtube.com/vi/So04TFZkLEE/maxresdefault.jpg",
    videoEmbed: "https://www.youtube.com/embed/So04TFZkLEE",
    description:
      "Deuxième vidéo publicitaire concept pour Fitness-Area - montage et motion design.",
    problem:
      "Pour cette deuxième vidéo, la difficulté était de trouver le bon équilibre entre motivation et pression : donner envie de se dépasser sans tomber dans un discours culpabilisant qui pourrait décourager les clients potentiels. Le travail de montage et de motion design devait porter un message positif et engageant, capable de donner envie de franchir le pas sans jouer sur la pression physique ou l'urgence.",
    year: "2022",
    link: "https://www.youtube.com/watch?v=So04TFZkLEE",
  },

];
