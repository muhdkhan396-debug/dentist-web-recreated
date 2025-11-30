import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { FadeIn, ScaleIn } from '../components/ui/Animations';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <SEO 
        title="Contact Us" 
        description="Contact NYC Implant Dentist in Midtown Manhattan. Book your appointment online or call us today." 
      />
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
          <ScaleIn className="w-full md:w-1/2 flex">
            <div className="w-full p-12 bg-primary text-white rounded-t-xl md:rounded-l-xl md:rounded-tr-none shadow-lg z-10">
              <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-300 mb-8">
                Discover how our expertise in implant dentistry can transform your smile. Reach out to begin your journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-secondary mt-1" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Phone</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg hover:text-secondary transition-colors">{BUSINESS_INFO.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-secondary mt-1" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-lg hover:text-secondary transition-colors">{BUSINESS_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary mt-1" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-lg">{BUSINESS_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>

          <FadeIn direction="left" delay={0.2} className="w-full md:w-1/2 flex">
             <div className="w-full p-12 flex items-center justify-center bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none shadow-lg">
                <div className="text-center w-full">
                   <h3 className="font-serif text-2xl font-bold text-primary mb-6">Schedule Online</h3>
                   <p className="text-slate-600 mb-8">The fastest way to book your appointment is through our online portal.</p>
                   <a 
                     href={BUSINESS_INFO.bookingUrl}
                     className="block w-full bg-secondary hover:bg-amber-700 text-white font-bold py-4 rounded transition-colors text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
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