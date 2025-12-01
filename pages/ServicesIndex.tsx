import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Activity, Smile, PenTool, Layers } from 'lucide-react';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/Animations';

const { Link } = ReactRouterDOM;

const servicesList = [
  {
    title: "Single Tooth Implants",
    desc: "A permanent, natural-looking solution for replacing a single missing tooth without affecting adjacent teeth.",
    link: "/dental-implants",
    icon: <Smile />
  },
  {
    title: "All-on-4 Full Arch",
    desc: "Restore a full arch of teeth in just one day with immediate load implants. Walk out with a new smile.",
    link: "/immediate-load-implants",
    icon: <Layers />
  },
  {
    title: "Oral Rehabilitation",
    desc: "Comprehensive full-mouth reconstruction combining implants, aesthetics, and bite correction.",
    link: "/oral-rehabilitation",
    icon: <Activity />
  },
  {
    title: "Implant Dentures",
    desc: "Secure, stable alternatives to traditional dentures that lock into place.",
    link: "/implant-dentures",
    icon: <Smile />
  },
  {
    title: "Bone Grafting & Sinus Lifts",
    desc: "Building a strong foundation for implants using PRF technology for enhanced healing.",
    link: "/bone-graft-sinus-lift",
    icon: <PenTool />
  }
];

const ServicesIndex: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Services" 
        description="Comprehensive implant dentistry services in NYC: Single implants, All-on-4, Oral Rehabilitation, and Bone Grafting. Professional care by Dr. Alex Gause."
      />
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Advanced oral rehabilitation and implant solutions tailored to your unique needs, powered by digital precision.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 -mt-16 relative z-20">
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <FadeInItem key={idx} className="h-full">
              <Link 
                to={service.link} 
                className="block h-full bg-white p-10 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 bg-amber-50 text-secondary rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <span className="flex items-center text-secondary font-bold tracking-wide text-sm uppercase group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
      
      <div className="bg-white py-24 border-t border-slate-100">
         <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">Not sure what you need?</h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Schedule a consultation for a comprehensive exam and personalized treatment plan.</p>
              <Button to="/contact" className="px-10">Contact Us</Button>
            </FadeIn>
         </div>
      </div>
    </div>
  );
};

export default ServicesIndex;