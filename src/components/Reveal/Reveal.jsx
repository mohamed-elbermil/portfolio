import { useReveal } from '../../hooks/useReveal';

/** Wraps children in a div that fades/rises into view on scroll (see index.css .reveal). */
const Reveal = ({ as, className = '', delay = 0, children, ...rest }) => {
  const Tag = as || 'div';
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
