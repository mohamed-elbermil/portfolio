import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css';

import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Offer from './components/Offer/Offer';
// import FAQ from './components/FAQ/Faq.jsx';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import LegalNotice from './pages/LegalNotice/LegalNotice';

// Page d'accueil par défaut avec Header
function Home() {
  return (
    <>
      <Header />
      <main>
        <Project />
        <Offer />
        {/* <FAQ /> */}
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
