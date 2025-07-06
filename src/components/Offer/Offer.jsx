import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Offer.module.css';
import CTALink from '../CTALink/CTALink';
import '../CTALink/CTALink.css';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Offer() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const leftSectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const leftSection = leftSectionRef.current;
    const badge = badgeRef.current;
    const title = titleRef.current;
    const text = textRef.current;
    const cta = ctaRef.current;

    // Timeline principale
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animation de la section gauche (gradient overlay)
    tl.fromTo(leftSection, 
      { 
        scale: 0.8, 
        opacity: 0,
        rotation: -5
      },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Animation du badge
    tl.fromTo(badge,
      {
        y: 30,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      },
      "-=0.6"
    );

    // Animation du titre
    tl.fromTo(title,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.4"
    );

    // Animation du texte
    tl.fromTo(text,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.6"
    );

    // Animation du CTA
    tl.fromTo(cta,
      {
        y: 20,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.4)"
      },
      "-=0.4"
    );

    // Animation de hover pour la card
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.card} ref={cardRef}>
        <div className={styles['content-grid']}>
          {/* Left Section */}
          <div className={styles['left-section']} ref={leftSectionRef}>
            <div className={styles['gradient-overlay']}></div>
          </div>

          {/* Right Section */}
          <div className={styles['right-section']}>
            <div className={styles['badge-container']}>
              <div className={styles.badge} ref={badgeRef}>WEB DESIGN</div>
            </div>

            <div className={styles['text-content']}>
              <h1 ref={titleRef}>
              Visibilité Optimisée
              </h1>
              <p ref={textRef}>
              Je conçois des sites web élégants, rapides et adaptés à vos besoins.
              Que vous soyez une entreprise, un indépendant ou une startup, je vous accompagne de la conception à la mise en ligne.
              </p>
            </div>

            <div ref={ctaRef}>
              <CTALink text="Prendre rendez-vous" href="#contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
