import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, ChevronDown } from 'lucide-react';
import { NAVIGATION, BUSINESS_INFO } from '../constants';
import Button from './ui/Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-white">
      {/* Top Bar */}
      <div className="bg-primary text-slate-300 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {BUSINESS_INFO.phone}</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> {BUSINESS_INFO.location}</span>
          </div>
          <div className="flex gap-4">
             <span>Midtown Manhattan's Premier Implant Center</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight">NYC Implant Dentist</span>
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
                    <button className="flex items-center gap-1 py-4 text-sm font-medium text-slate-600 hover:text-secondary uppercase tracking-wider transition-colors">
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                  ) : (
                    <Link 
                      to={item.path}
                      className="text-sm font-medium text-slate-600 hover:text-secondary uppercase tracking-wider transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-2 border-secondary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-secondary border-b border-gray-50 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button href={BUSINESS_INFO.bookingUrl} className="ml-4 shadow-md">
                Book Online
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-4 overflow-y-auto lg:hidden">
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
                      <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 border-l-2 border-gray-100 ml-2 mt-2 space-y-2">
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
                      </div>
                    )}
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
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
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
              <div className="flex space-x-4">
                {/* Social icons placeholder */}
              </div>
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