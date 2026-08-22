import styles from "./Skills.module.css";
import Reveal from "../Reveal/Reveal";

const GROUPS = [
  {
    name: "Développement Frontend",
    icon: "fa-solid fa-code",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3 / SCSS",
      "Tailwind CSS",
      "WordPress",
      "Node.js",
      "SQL",
      "Prestashop",
      "Drupal",
      "Webflow",
      "GSAP",
      "Responsive Design",
      "Intégration UI/UX",
      "SEO & Référencement Naturel",
      "Google Analytics",
      "Adobe Analytics",
      "Veille Technologique & Sécurité Web",
    ],
  },
  {
    name: "Conception 3D & Studio",
    icon: "fa-solid fa-cube",
    items: [
      "Blender",
      "Unreal Engine",
      "Rendu Photoréaliste",
      "Animation",
    ],
  },
  {
    name: "Design Visuel & Content",
    icon: "fa-solid fa-palette",
    items: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Premiere Pro",
      "InDesign",
      "Adobe XD",
      "Canva",
      "IA Générative & Prompting",
      "Retouche Photo & Photomontage",
      "PLV/ILV & Affichage Grand Format",
      "Vitrophanie & Covering",
      "UI/UX Design",
      "Design System",
      "Branding",
      "Bannières & Newsletters / Emailing",
    ],
  },
];

const Skills = () => (
  <section className={styles.section} id="skills">
    <div className={styles.header}>
      <span className="eyebrow">
        <span className="eyebrow__index">02</span>
        <span className="eyebrow__rule" />
        Compétences
      </span>
      <h2 className={styles.title}>Outils &amp; savoir-faire</h2>
    </div>

    <div className={styles.groups}>
      {GROUPS.map((group, i) => (
        <Reveal key={group.name} className={styles.group} delay={i * 90}>
          <div className={styles.groupHeader}>
            <span className={styles.groupIcon}>
              <i className={group.icon} />
            </span>
            <h3 className={styles.groupName}>{group.name}</h3>
          </div>
          <div className={styles.badges}>
            {group.items.map((item) => (
              <span key={item} className={styles.badge}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
