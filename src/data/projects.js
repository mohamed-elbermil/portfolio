import fitnessAreaBanner from "../assets/images/projects/fitness-area-banner.png";
import fitnessAreaHero from "../assets/images/projects/fitness-area-hero.png";
import fitnessAreaCta from "../assets/images/projects/fitness-area-cta.png";
import fitnessAreaPricing from "../assets/images/projects/fitness-area-pricing.png";

export const CATEGORIES = ["Tous", "Graphisme", "Web", "Vidéo"];

export const projects = [
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
    problem: "[À COMPLÉTER — problématique du projet]",
    year: "[À COMPLÉTER]",
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
    problem: "[À COMPLÉTER — problématique du projet]",
    year: "2025",
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
    problem: "[À COMPLÉTER — problématique du projet]",
    year: "[À COMPLÉTER]",
    link: "https://www.behance.net/gallery/228694521/Kaza-Agence-Immobiliere",
  },
  {
    slug: "fitness-area-publicite",
    title: "Fitness-Area Publicité",
    category: "Vidéo",
    tags: ["Vidéo", "Motion Design", "Publicité"],
    image: "https://img.youtube.com/vi/pzeNhG7iZhg/maxresdefault.jpg",
    description:
      "Vidéo publicitaire concept pour le projet Fitness-Area - montage et motion design.",
    problem: "[À COMPLÉTER — problématique du projet]",
    year: "2022",
    link: "https://www.youtube.com/watch?v=pzeNhG7iZhg",
  },
  {
    slug: "fitness-area-pub",
    title: "Fitness Area Pub",
    category: "Vidéo",
    tags: ["Vidéo", "Motion Design", "Publicité"],
    image: "https://img.youtube.com/vi/So04TFZkLEE/maxresdefault.jpg",
    description:
      "Deuxième vidéo publicitaire concept pour Fitness-Area - montage et motion design.",
    problem: "[À COMPLÉTER — problématique du projet]",
    year: "2022",
    link: "https://www.youtube.com/watch?v=So04TFZkLEE",
  },
];
