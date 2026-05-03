import styles from './SkillsTicker.module.css';

const ROW1 = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Next.js', 'GSAP', 'Figma', 'CSS3'];
const ROW2 = ['UI/UX Design', 'Web Design', 'E-commerce', 'Branding', 'Webflow', 'Shopify', 'SEO'];

const TickerRow = ({ items, reverse = false }) => {
  const doubled = [...items, ...items];
  return (
    <div className={styles.track}>
      <div className={`${styles.inner} ${reverse ? styles.reverse : ''}`}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} aria-hidden="true">·</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsTicker = () => (
  <section className={styles.ticker} aria-label="Compétences">
    <TickerRow items={ROW1} />
    <TickerRow items={ROW2} reverse />
  </section>
);

export default SkillsTicker;
