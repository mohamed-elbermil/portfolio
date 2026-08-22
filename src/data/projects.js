import fitnessAreaBanner from "../assets/images/projects/fitness-area-banner.png";
import fitnessAreaHero from "../assets/images/projects/fitness-area-hero.png";
import fitnessAreaCta from "../assets/images/projects/fitness-area-cta.png";
import fitnessAreaPricing from "../assets/images/projects/fitness-area-pricing.png";
import miniatureYoutube1 from "../assets/images/projects/miniature-1.png";
import miniatureYoutube2 from "../assets/images/projects/miniature-2.png";
import miniatureYoutube3 from "../assets/images/projects/miniature-4.png";
import miniatureYoutube4 from "../assets/images/projects/behance-1.png";
import miniatureYoutube5 from "../assets/images/projects/behance-2.png";
import miniatureYoutube6 from "../assets/images/projects/behance-3.png";
import miniatureYoutube7 from "../assets/images/projects/behance-4.png";
import formasecretHero from "../assets/images/projects/formasecret-hero.png";
import formasecretThumb from "../assets/images/projects/miniature-formasecret.png";
import formasecretFormations from "../assets/images/projects/format-secret-1.png";
import formasecretTitresPro from "../assets/images/projects/format-secret-2.png";
import theBossPost from "../assets/images/projects/big-pink.png";
import theBossPostOriginal from "../assets/images/projects/big-pink-original.png";
import theBossChaine from "../assets/images/projects/big-rose-chaine.png";
import theBossStickers from "../assets/images/projects/big-rose-stickers.png";
import theBossFinale from "../assets/images/projects/finale.mp4";
import theBossTeasing from "../assets/images/projects/teasing-making-of-the-boss.mp4";

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
    categories: ["Graphisme", "Web", "Vidéo"],
    tags: ["React", "CSS3", "JavaScript", "Motion Design"],
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/39a8ec147774929.Y3JvcCwxMDgwLDg0NCwwLDg1.png",
    heroImage: fitnessAreaBanner,
    description:
      "Interface fitness développée en bootcamp, migrée vers React. Design amélioré et performances optimisées.",
    problem:
      "Le site d'origine, conçu en HTML/CSS, manquait d'impact et d'ergonomie. La présentation des formules manquait de clarté, la hiérarchie visuelle était floue et l'accès à la séance découverte n'était pas assez mis en valeur. L'enjeu était de restructurer l'interface pour rendre la lecture plus fluide (clarification des tarifs, mise en avant des avantages et retravail des appels à l'action) tout en migrant le projet sous React pour le rendre plus performant et plus simple à maintenir.",
    year: "2021 - 2022",
    gallery: [fitnessAreaHero, fitnessAreaCta, fitnessAreaPricing],
    videos: [
      {
        embed: "https://www.youtube.com/embed/pzeNhG7iZhg",
        title: "Vidéo publicitaire",
        description:
          "Le marché du fitness est saturé de publicités qui se ressemblent toutes : mêmes codes visuels, mêmes promesses, même énergie forcée. L'enjeu de cette vidéo était de créer un concept publicitaire qui sorte du lot pour Fitness-Area, en misant sur un montage dynamique et un motion design distinctif.",
      },
      {
        embed: "https://www.youtube.com/embed/So04TFZkLEE",
        title: "Motion design",
        description:
          "Deuxième vidéo concept, cette fois avec pour enjeu de trouver le bon équilibre entre motivation et pression : donner envie de se dépasser sans tomber dans un discours culpabilisant, à travers un travail de montage et de motion design.",
      },
    ],
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
    compareEmbed: "https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=26822d68-96f1-11f1-ba1b-0e6f42328d7d",
    gallery: [miniatureYoutube1, miniatureYoutube2, miniatureYoutube3, miniatureYoutube4, miniatureYoutube5, miniatureYoutube6, miniatureYoutube7],
    link: "https://www.behance.net/gallery/228643009/Youtubes-Thumbnails",
  },
  {
    slug: "the-boss-nft",
    title: "The Boss — Collection NFT",
    category: "Graphisme",
    tags: ["Illustration", "NFT", "Motion Design"],
    image: theBossPost,
    description:
      "Création d'un personnage NFT, \"The Boss\" - design du personnage, déclinaisons en produits dérivés et vidéos de présentation.",
    problem:
      "Le projet consistait à créer un personnage capable de porter à lui seul une collection NFT : un visuel assez fort pour fonctionner en PFP, mais aussi se décliner sur des produits dérivés (stickers, bijoux) sans perdre en reconnaissabilité. Au-delà de l'illustration, l'enjeu était de présenter le personnage de façon vivante, à travers une vidéo de reveal et un making-of retraçant les étapes de création, pour raconter le processus autant que le résultat.",
    year: "2026",
    galleryFramed: true,
    gallery: [theBossPostOriginal, theBossChaine, theBossStickers],
    videos: [
      { src: theBossTeasing, label: "Teaser de lancement", featured: true },
      {
        src: theBossFinale,
        title: "Making-of du dessin",
        description:
          "Capture de ma session de travail en direct, du premier coup de crayon jusqu'aux finitions du personnage - pour montrer le processus de création, pas seulement le résultat final.",
      },
    ],
  },
];
