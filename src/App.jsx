import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './reset.css';

import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Offer from './components/Offer/Offer';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import ContactSection from './components/ContactSection/ContactSection';
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import LegalNotice from './pages/LegalNotice/LegalNotice';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Project />
        <Offer />
        <Skills />
        <About />
        <ContactSection />
      </main>
    </>
  );
}

/** Scrolls to the section matching the URL hash whenever it changes. */
function HashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
    return () => clearTimeout(t);
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <HashScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />

          {/* Legacy routes - content now lives in anchored Home sections */}
          <Route path="/a-propos" element={<Navigate to="/#about" replace />} />
          <Route path="/portfolio" element={<Navigate to="/#portfolio" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
