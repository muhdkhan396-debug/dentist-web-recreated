import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Cpu, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import { BUSINESS_INFO, DOCTOR, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10"></div>
          <img 
            src="https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/1755119765953-48YUKZRP0U3ZS8HZSWVD/unsplash-image-oe_03B2Q5A4.jpg" 
            alt="Advanced Dental Office" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Where Cutting-Edge Technology Meets <span className="text-secondary">Unrivaled Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Welcome to NYC Implant Dentist. Experience the future of dental implants in a comfortable, compassionate environment in Midtown Manhattan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={BUSINESS_INFO.bookingUrl}>
                Schedule Consultation
              </Button>
              <Button to="/services" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro/Value Prop */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Precision, Care, & Excellence</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">
              Dr. Alex Gause combines Kois Center training with advanced 3D planning to deliver predictable, life-changing results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow border border-slate-100">
              <Cpu className="text-secondary mb-4" size={40} />
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Advanced Technology</h3>
              <p className="text-slate-600">Using CBCT 3D imaging and digital planning for millimeter-perfect implant placement.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow border border-slate-100">
              <Shield className="text-secondary mb-4" size={40} />
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Kois-Trained Expertise</h3>
              <p className="text-slate-600">Graduate of the prestigious Kois Center, adhering to the highest scientific standards in restorative dentistry.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow border border-slate-100">
              <Heart className="text-secondary mb-4" size={40} />
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Patient-First Care</h3>
              <p className="text-slate-600">A concierge-level experience prioritizing your comfort, understanding, and long-term health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Teaser */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-3xl"></div>
                <img 
                  src={DOCTOR.headshot_url} 
                  alt={DOCTOR.name} 
                  className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Dr. Alex Gause</h2>
              <p className="text-lg text-slate-300 mb-6">
                Founder of Aesthetic Dentistry of Manhattan and a graduate of the Kois Center, Dr. Gause is dedicated to the art and science of implant dentistry. He lectures nationally on digital implant technologies.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  UNC Chapel Hill Adams School of Dentistry
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Kois Center Graduate
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Fellow, International College of Implantologists
                </li>
              </ul>
              <Button to="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Read Full Bio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary mb-12">Patient Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-amber-100 flex flex-col">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="flex-grow text-slate-700 italic mb-6">"{t.quote}"</blockquote>
                <div className="mt-auto">
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{t.procedure}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/smilegallery" variant="secondary">View Smile Gallery</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Schedule your consultation today and discover the difference precision care can make.
          </p>
          <Button href={BUSINESS_INFO.bookingUrl} className="bg-secondary hover:bg-amber-600 text-white px-8 py-4 text-lg">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;