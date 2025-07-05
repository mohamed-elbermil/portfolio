import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h1>Contact Us</h1>
          <p>
            Email, call, or complete the form to learn how<br />
            SnContacty can solve your messaging problem.
          </p>

          <div className={styles.contactInfo}>
            <div><span className={styles.icon}>📧</span> hello@snContacty.io</div>
            <div><span className={styles.icon}>📞</span> 321-221-231</div>
            <div>
              <a href="#" className={styles.link}>Customer Support</a>
            </div>
          </div>

          <div className={styles.columns}>
            <div>
              <h3>Customer Support</h3>
              <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div>
              <h3>Feedback and Suggestions</h3>
              <p>We value your feedback and are continuously working to improve SnContacty.</p>
            </div>
            <div>
              <h3>Media Inquiries</h3>
              <p>For media-related questions, contact <span className={styles.highlight}>media@snContacty.com</span>.</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className={styles.rightSection}>
          <div className={styles.formBox}>
            <h2>Get in Touch</h2>
            <p>You can reach us anytime</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <div className={styles.row}>
                <select>
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+33">+33</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>

              <button type="submit">Submit</button>

              <p className={styles.disclaimer}>
                By contacting us, you agree to our <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
