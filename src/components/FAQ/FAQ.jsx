import React, { useState } from 'react';
import styles from './Faq.module.css';

const faqData = [
    {
      id: 1,
      question: "Quels services proposez-vous en tant que développeur / graphiste ?",
      answer: "Je conçois des sites web sur mesure (vitrine, e-commerce), des identités visuelles (logos, chartes graphiques) ainsi que des interfaces UI/UX pour applications web et mobiles."
    },
    {
      id: 2,
      question: "Quel est votre processus de création pour un projet web ?",
      answer: "Je débute par une phase d’échange pour bien cerner vos besoins. Ensuite, je réalise les maquettes graphiques, puis je développe le site, effectue les tests, et procède à la mise en ligne après validation."
    },
    {
      id: 3,
      question: "Travaillez-vous avec des CMS comme WordPress ou Shopify ?",
      answer: "Oui, je peux créer des sites sous WordPress, WooCommerce ou Shopify. Je propose également des développements 100% personnalisés avec des frameworks modernes comme React ou Next.js."
    },
    {
      id: 4,
      question: "Proposez-vous également des prestations uniquement graphiques ?",
      answer: "Oui, tout à fait. Je peux vous accompagner sur la création de logos, chartes graphiques, visuels pour les réseaux sociaux, brochures, affiches, etc., sans nécessairement inclure le développement."
    },
    {
      id: 5,
      question: "Comment puis-je vous contacter pour un devis ?",
      answer: "Vous pouvez me contacter via le formulaire de contact de mon site ou par email. Je vous répondrai sous 24 heures avec un devis adapté à vos besoins."
    }
  ];
  

function FAQ() {
  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (id) => {
    setActiveItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.iconCircle}>
            {/* Simple question mark icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.helpIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h1>Questions fréquentes</h1>
          <p>Trouvez rapidement les réponses à vos questions</p>
        </div>

        {/* FAQ Items */}
        <div className={styles.faqList}>
          {faqData.map((item) => {
            const isActive = activeItems.includes(item.id);
            return (
              <div key={item.id} className={styles.faqItem}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className={styles.questionButton}
                >
                  <div className={styles.questionRow}>
                    <h3>{item.question}</h3>
                    {/* Chevron icon */}
                    <svg
                      className={`${styles.chevron} ${isActive ? styles.rotate : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {isActive && (
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
