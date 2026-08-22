import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import styles from './ContactSection.module.css';

function ContactSection() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, form.current, EMAILJS_CONFIG.PUBLIC_KEY)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      }, () => {
        setSubmitStatus('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <span className="eyebrow">
              <span className="eyebrow__index">04</span>
              <span className="eyebrow__rule" />
              Contact
            </span>

            <h2 className={styles.heading}>Contactez-moi</h2>
            <p>
              Discutons de votre projet et voyons comment je peux vous aider
              à créer une présence digitale exceptionnelle.
            </p>

            <div className={styles.contactInfo}>
              <div>
                <span className={styles.icon}><i className="fa-solid fa-envelope" /></span>
                <a href="mailto:melbermil@outlook.fr" className={styles.link}>melbermil@outlook.fr</a>
              </div>
              <div>
                <span className={styles.icon}><i className="fa-solid fa-phone" /></span>
                <a href="tel:+33612173910" className={styles.link}>06 12 17 39 10</a>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className={styles.rightSection}>
            <div className={styles.formBox}>
              <h2>Parlons de votre projet</h2>
              <p>Remplissez le formulaire ci-dessous</p>

              <form ref={form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <div className={styles.row}>
                  <select>
                    <option value="+33">+33</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+32">+32</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Numéro de téléphone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
