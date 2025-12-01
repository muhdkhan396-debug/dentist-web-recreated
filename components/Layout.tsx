import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, ChevronDown, Clock } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-white selection:bg-secondary/30 selection:text-primary">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white text-primary p-4 border border-primary rounded shadow-lg">
        Skip to main content
      </a>

      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-400 py-3 text-xs md:text-sm hidden md:block border-b border-slate-900">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-8">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-secondary" /> {BUSINESS_INFO.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-secondary" /> {BUSINESS_INFO.location}
            </span>
          </div>
          <div className="flex gap-4">
             <MotionSpan 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.5 }}
               className="font-medium tracking-wide text-slate-300"
             >
               Midtown Manhattan's Premier Implant Center
             </MotionSpan>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col group">
              <span className="font-serif text-2xl md:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-secondary transition-colors">NYC Implant Dentist</span>
              <span className="text-xs tracking-[0.2em] text-secondary font-semibold uppercase mt-1">Dr. Alex Gause D.D.S.</span>
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
                    <button className="flex items-center gap-1 py-6 text-sm font-semibold text-slate-600 hover:text-secondary uppercase tracking-widest transition-colors relative">
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </button>
                  ) : (
                    <Link 
                      to={item.path}
                      className="relative py-6 text-sm font-semibold text-slate-600 hover:text-secondary uppercase tracking-widest transition-colors block"
                    >
                      {item.label}
                      {location.pathname === item.path && (
                        <MotionDiv 
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" 
                        />
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
                        className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-lg border-t-2 border-secondary origin-top z-50 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-6 py-4 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-secondary hover:pl-8 border-b border-gray-50 last:border-0 transition-all duration-300"
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
                <Button href={BUSINESS_INFO.bookingUrl} className="ml-6 shadow-lg shadow-amber-900/10 px-6 py-3 text-sm">
                  Book Online
                </Button>
              </MotionDiv>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-primary p-2 hover:text-secondary transition-colors"
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
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <div key={item.label} className="border-b border-slate-50 pb-2">
                  {item.children ? (
                    <div>
                      <button 
                        className="flex items-center justify-between w-full text-xl font-serif font-medium text-primary py-3"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown size={20} className={`transform transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <MotionDiv 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50 rounded-lg mb-2"
                          >
                            {item.children.map((child) => (
                              <Link 
                                key={child.path} 
                                to={child.path}
                                className="block text-slate-600 py-3 px-4 hover:text-secondary"
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
                      className="block text-xl font-serif font-medium text-primary py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-8 space-y-4">
                <Button href={BUSINESS_INFO.bookingUrl} className="w-full justify-center text-lg">
                  Book Online
                </Button>
                <Button href={`tel:${BUSINESS_INFO.phone}`} variant="outline" className="w-full justify-center text-lg">
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
      <footer className="bg-slate-950 text-white pt-20 pb-10 border-t-4 border-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-1">NYC Implant Dentist</h3>
                <p className="text-xs uppercase tracking-widest text-slate-500">Dr. Alex Gause D.D.S.</p>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Advanced implant dentistry and oral rehabilitation in the heart of Midtown Manhattan. Where cutting-edge technology meets compassionate expertise.
              </p>
              <div className="flex gap-4 pt-2">
                {/* Social icons placeholder */}
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                  <Mail size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                   <Phone size={18} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-slate-800 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link to="/about" className="hover:text-secondary hover:pl-1 transition-all">Dr. Alex Gause</Link></li>
                <li><Link to="/pricing" className="hover:text-secondary hover:pl-1 transition-all">Pricing & Financing</Link></li>
                <li><Link to="/smilegallery" className="hover:text-secondary hover:pl-1 transition-all">Smile Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-secondary hover:pl-1 transition-all">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-slate-800 pb-2 inline-block">Our Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link to="/dental-implants" className="hover:text-secondary hover:pl-1 transition-all">Single Implants</Link></li>
                <li><Link to="/oral-rehabilitation" className="hover:text-secondary hover:pl-1 transition-all">Oral Rehabilitation</Link></li>
                <li><Link to="/immediate-load-implants" className="hover:text-secondary hover:pl-1 transition-all">All-on-4 Immediate Load</Link></li>
                <li><Link to="/bone-graft-sinus-lift" className="hover:text-secondary hover:pl-1 transition-all">Bone Grafting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-slate-800 pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-5 text-slate-400">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 shrink-0 text-secondary" size={20} />
                  <span className="leading-relaxed">{BUSINESS_INFO.location}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="shrink-0 text-secondary" size={20} />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="shrink-0 text-secondary" size={20} />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className="shrink-0 text-secondary" size={20} />
                  <span className="text-sm">Mon-Fri: 9am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Aesthetic Dentistry of Manhattan. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
               <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;