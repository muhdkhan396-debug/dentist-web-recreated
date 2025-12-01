import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAVIGATION, BUSINESS_INFO } from '../constants';
import Button from './ui/Button';

const { Link, useLocation } = ReactRouterDOM;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const MotionSpan = motion.span as any;
  const MotionDiv = motion.div as any;

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-white">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-primary p-4 border border-primary rounded shadow-lg">
        Skip to main content
      </a>

      {/* Top Bar */}
      <div className="bg-primary text-slate-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {BUSINESS_INFO.phone}</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> {BUSINESS_INFO.location}</span>
          </div>
          <div className="flex gap-4">
             <MotionSpan 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.5 }}
             >
               Midtown Manhattan's Premier Implant Center
             </MotionSpan>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col group">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight group-hover:text-secondary transition-colors">NYC Implant Dentist</span>
              <span className="text-xs tracking-widest text-secondary font-medium uppercase">Dr. Alex Gause D.D.S.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAVIGATION.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button className="flex items-center gap-1 py-4 text-sm font-medium text-slate-600 hover:text-secondary uppercase tracking-wider transition-colors relative">
                      {item.label}
                      <ChevronDown size={14} />
                      {activeDropdown === item.label && (
                        <MotionDiv 
                          layoutId="navUnderline"
                          className="absolute bottom-2 left-0 right-0 h-0.5 bg-secondary" 
                        />
                      )}
                    </button>
                  ) : (
                    <Link 
                      to={item.path}
                      className="relative py-4 text-sm font-medium text-slate-600 hover:text-secondary uppercase tracking-wider transition-colors"
                    >
                      {item.label}
                      {location.pathname === item.path && (
                        <MotionDiv 
                          layoutId="navUnderline"
                          className="absolute bottom-2 left-0 right-0 h-0.5 bg-secondary" 
                        />
                      )}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 10, rotateX: -5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-secondary origin-top z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary border-b border-gray-50 last:border-0 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href={BUSINESS_INFO.bookingUrl} className="ml-4 shadow-md">
                  Book Online
                </Button>
              </MotionDiv>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-4 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button 
                        className="flex items-center justify-between w-full text-lg font-medium text-primary py-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transform transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <MotionDiv 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 border-l-2 border-gray-100 ml-2"
                          >
                            {item.children.map((child) => (
                              <Link 
                                key={child.path} 
                                to={child.path}
                                className="block text-slate-600 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </MotionDiv>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className="block text-lg font-medium text-primary py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-8 space-y-4">
                <Button href={BUSINESS_INFO.bookingUrl} className="w-full justify-center">
                  Book Online
                </Button>
                <Button href={`tel:${BUSINESS_INFO.phone}`} variant="outline" className="w-full justify-center">
                  Call Now
                </Button>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">NYC Implant Dentist</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Advanced implant dentistry and oral rehabilitation in the heart of Midtown Manhattan. Where technology meets expertise.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/about" className="hover:text-white transition-colors">Dr. Alex Gause</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/smilegallery" className="hover:text-white transition-colors">Smile Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-accent">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/dental-implants" className="hover:text-white transition-colors">Single Implants</Link></li>
                <li><Link to="/oral-rehabilitation" className="hover:text-white transition-colors">Oral Rehabilitation</Link></li>
                <li><Link to="/immediate-load-implants" className="hover:text-white transition-colors">All-on-4</Link></li>
                <li><Link to="/bone-graft-sinus-lift" className="hover:text-white transition-colors">Bone Grafting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-accent">Contact</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0 text-secondary" size={18} />
                  <span>{BUSINESS_INFO.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="shrink-0 text-secondary" size={18} />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="shrink-0 text-secondary" size={18} />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">{BUSINESS_INFO.email}</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Aesthetic Dentistry of Manhattan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;