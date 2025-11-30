import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesIndex from './pages/ServicesIndex';
import ServiceTemplate from './pages/ServiceTemplate';
import Pricing from './pages/Pricing';
import About from './pages/About';
import SmileGallery from './pages/SmileGallery';
import Contact from './pages/Contact';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/smilegallery" element={<SmileGallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Routes mapped to the template */}
          <Route path="/dental-implants" element={<ServiceTemplate />} />
          <Route path="/oral-rehabilitation" element={<ServiceTemplate />} />
          <Route path="/immediate-load-implants" element={<ServiceTemplate />} />
          <Route path="/implant-dentures" element={<ServiceTemplate />} />
          <Route path="/bone-graft-sinus-lift" element={<ServiceTemplate />} />
          <Route path="/tooth-extractions" element={<ServiceTemplate />} />
          <Route path="/soft-tissue-grafting" element={<ServiceTemplate />} />
          <Route path="/implant-maintenance-and-repair" element={<ServiceTemplate />} />
          <Route path="/restorative-solutions" element={<ServiceTemplate />} />
          <Route path="/advanced-implant-planning" element={<ServiceTemplate />} />
          
          {/* Redirects for legacy landing pages or catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;