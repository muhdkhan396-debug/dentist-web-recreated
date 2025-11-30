import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const ServicesIndex = React.lazy(() => import('./pages/ServicesIndex'));
const ServiceTemplate = React.lazy(() => import('./pages/ServiceTemplate'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const About = React.lazy(() => import('./pages/About'));
const SmileGallery = React.lazy(() => import('./pages/SmileGallery'));
const Contact = React.lazy(() => import('./pages/Contact'));

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
    <ErrorBoundary>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
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
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </HashRouter>
    </ErrorBoundary>
  );
};

export default App;