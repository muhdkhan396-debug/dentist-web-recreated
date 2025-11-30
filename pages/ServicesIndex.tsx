import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Smile, PenTool, Layers } from 'lucide-react';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/Animations';

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
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Advanced oral rehabilitation and implant solutions tailored to your unique needs.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <FadeInItem key={idx} className="h-full">
              <Link 
                to={service.link} 
                className="block h-full bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-100 text-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <span className="flex items-center text-secondary font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
      
      <div className="bg-white py-16 border-t border-slate-100">
         <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Not sure what you need?</h2>
              <p className="text-slate-600 mb-8">Schedule a consultation for a comprehensive exam and personalized treatment plan.</p>
              <Button to="/contact">Contact Us</Button>
            </FadeIn>
         </div>
      </div>
    </div>
  );
};

export default ServicesIndex;