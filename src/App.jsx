import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css';

import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Offer from './components/Offer/Offer';
import FAQ from './components/Faq/Faq';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

// Page d'accueil par défaut
function Home() {
  return (
    <main>
      <Project />
      <Offer />
      <FAQ />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
