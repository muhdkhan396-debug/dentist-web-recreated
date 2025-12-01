import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { FadeIn, ScaleIn } from '../components/ui/Animations';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <SEO 
        title="Contact Us" 
        description="Contact NYC Implant Dentist in Midtown Manhattan. Book your appointment online or call us today." 
      />
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl text-slate-600">We're here to answer your questions.</p>
        </FadeIn>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
          <ScaleIn className="w-full md:w-1/2 flex">
            <div className="w-full p-12 md:p-16 bg-slate-900 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-slate-300 mb-10 text-lg leading-relaxed font-light">
                  Discover how our expertise in implant dentistry can transform your smile. Reach out to begin your journey.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-3 rounded-lg group-hover:bg-secondary transition-colors">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl font-medium hover:text-secondary transition-colors">{BUSINESS_INFO.phone}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-3 rounded-lg group-hover:bg-secondary transition-colors">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl font-medium hover:text-secondary transition-colors">{BUSINESS_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-3 rounded-lg group-hover:bg-secondary transition-colors">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-xl font-medium leading-relaxed">{BUSINESS_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>

          <FadeIn direction="left" delay={0.2} className="w-full md:w-1/2 flex bg-white">
             <div className="w-full p-12 md:p-16 flex items-center justify-center">
                <div className="text-center w-full">
                   <h3 className="font-serif text-3xl font-bold text-slate-900 mb-6">Schedule Online</h3>
                   <p className="text-slate-600 mb-10 text-lg leading-relaxed">The fastest way to book your appointment is through our secure online portal. Select a time that works for you.</p>
                   <a 
                     href={BUSINESS_INFO.bookingUrl}
                     className="block w-full bg-secondary hover:bg-amber-700 text-white font-bold py-5 rounded-lg transition-all text-center shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 text-lg tracking-wide uppercase"
                   >
                     Book Appointment Now
                   </a>
                </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;