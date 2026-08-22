import styles from "./Skills.module.css";
import Reveal from "../Reveal/Reveal";

const GROUPS = [
  {
    name: "Développement",
    icon: "fa-solid fa-code",
    items: [
      "HTML5",
      "CSS3 / SCSS",
      "JavaScript",
      "SQL",
      "Responsive Design",
      "Intégration UI/UX",
      "Veille Technologique & Sécurité Web",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
  },
  {
    name: "Design",
    icon: "fa-solid fa-pen-nib",
    items: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Figma",
      "Adobe XD",
      "IA Générative & Prompting",
      "Retouche Photo & Photomontage",
      "PLV/ILV & Affichage Grand Format",
      "Vitrophanie & Covering",
      "UI/UX Design",
      "Design System",
      "Branding",
    ],
  },
  {
    name: "Outils & Web",
    icon: "fa-solid fa-layer-group",
    items: [
      "WordPress",
      "Prestashop",
      "Drupal",
      "Canva",
      "Bannières & Newsletters / Emailing",
      "Google Analytics",
      "Adobe Analytics",
      "SEO & Référencement Naturel",
      "Webflow",
      "GSAP",
      "Web Design",
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
