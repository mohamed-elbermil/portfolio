import fitnessAreaBanner from "../assets/images/projects/fitness-area-banner.png";
import fitnessAreaHero from "../assets/images/projects/fitness-area-hero.png";
import fitnessAreaCta from "../assets/images/projects/fitness-area-cta.png";
import fitnessAreaPricing from "../assets/images/projects/fitness-area-pricing.png";
import fitnessAreaCarte from "../assets/images/projects/carte-fitness-area.jpg";
import fitnessAreaGourde from "../assets/images/projects/gourde-fitness-area.jpg";
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
import poolRoom1 from "../assets/images/projects/pool1.png";
import poolRoom2 from "../assets/images/projects/pool2.png";
import poolRoom3 from "../assets/images/projects/pool3.png";
import poolRoom4 from "../assets/images/projects/pool4.png";

export const CATEGORIES = ["Tous", "Web & Apps", "3D & Motion", "Branding & Graphisme"];

export const projects = [
    {
    slug: "formasecret",
    title: "FormaSecret",
    category: "Web & Apps",
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
    category: "Web & Apps",
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
    galleryCarousel: true,
    mockups: [
      {
        image: fitnessAreaCarte,
        title: "Carte adhérent",
        description:
          "La carte adhérent Fitness-Area sert de badge d'accès : elle permet aux membres d'entrer et de sortir librement du club à toute heure d'ouverture, sans passer par l'accueil.",
      },
      {
        image: fitnessAreaGourde,
        title: "Gourde du club",
        description:
          "Distribuée aux nouveaux adhérents et disponible à l'accueil, la gourde Fitness-Area accompagne les séances d'entraînement et prolonge l'identité de marque en dehors des murs de la salle.",
      },
    ],
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
    category: "Web & Apps",
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
    slug: "pool-room",
    title: "Pool Room",
    category: "3D & Motion",
    tags: ["3D", "Blender", "Architecture d'intérieur"],
    image: poolRoom2,
    description:
      "Rendu 3D d'une salle de piscine intérieure - exploration de volumes organiques, carrelage et lumière naturelle.",
    problem:
      "L'objectif de ce projet était de modéliser et d'éclairer une salle de piscine intérieure entièrement en 3D, en misant sur des volumes organiques (murs arrondis, escalier en colimaçon) plutôt que sur une architecture classique à angles droits. Le principal défi technique résidait dans le rendu réaliste de l'eau et du carrelage sous une lumière naturelle changeante, pour obtenir une ambiance à la fois épurée et apaisante, proche d'un rendu architectural professionnel.",
    year: "2026",
    galleryEven: true,
    gallery: [poolRoom3, poolRoom1, poolRoom4, poolRoom2],
    sketchfab: {
      embed: "https://sketchfab.com/models/ce51d806d78b4074bc4caffb6663d76e/embed?autostart=1",
      title: "poolroom",
      modelUrl: "https://sketchfab.com/3d-models/poolroom-ce51d806d78b4074bc4caffb6663d76e",
      author: "mohamed.elbermil69780",
      authorUrl: "https://sketchfab.com/mohamed.elbermil69780",
    },
  },
  {
    slug: "miniatures-youtube",
    title: "Miniatures YouTube",
    category: "Branding & Graphisme",
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
    category: "Branding & Graphisme",
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
