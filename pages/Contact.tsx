import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Contact Us</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 bg-primary text-white">
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

          <div className="md:w-1/2 p-12 flex items-center justify-center bg-white">
            <div className="text-center w-full">
               <h3 className="font-serif text-2xl font-bold text-primary mb-6">Schedule Online</h3>
               <p className="text-slate-600 mb-8">The fastest way to book your appointment is through our online portal.</p>
               <a 
                 href={BUSINESS_INFO.bookingUrl}
                 className="block w-full bg-secondary hover:bg-amber-700 text-white font-bold py-4 rounded transition-colors text-center"
               >
                 Book Appointment Now
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;