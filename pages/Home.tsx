import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Star, Shield, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import Image from '../components/ui/Image';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/Animations';
import { BUSINESS_INFO, DOCTOR, TESTIMONIALS } from '../constants';

const { Link } = ReactRouterDOM;

const Home: React.FC = () => {
  const MotionDiv = motion.div as any;
  
  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="NYC Implant Dentist - Advanced dental implants and oral rehabilitation in Midtown Manhattan by Dr. Alex Gause. Schedule your consultation today."
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MotionDiv
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image 
              src="https://images.squarespace-cdn.com/content/v1/664e5061fa71855fc54da6e5/1726839646077-8MZF1392BCKYXGTT4N6I/image-asset.jpeg" 
              alt="Advanced Dental Office in Midtown Manhattan" 
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </MotionDiv>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <FadeInStagger>
              <FadeInItem>
                <div className="inline-block px-4 py-1 border border-secondary/50 rounded-full bg-secondary/10 backdrop-blur-sm text-secondary text-sm font-semibold tracking-widest uppercase mb-6">
                  Premier Implant Dentistry NYC
                </div>
              </FadeInItem>
              <FadeInItem>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                 Where Cutting-Edge Technology Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Unrivaled Expertise</span>
                </h1>
              </FadeInItem>
              <FadeInItem>
                <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
                  Experience the future of oral rehabilitation in a comfortable, compassionate environment in Midtown Manhattan.
                </p>
              </FadeInItem>
              <FadeInItem>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button href={BUSINESS_INFO.bookingUrl} className="text-lg px-8 py-5">
                    Schedule Consultation
                  </Button>
                  <Button to="/services" variant="outline" className="text-lg px-8 py-5 border-white text-white hover:bg-white hover:text-slate-900">
                    Explore Services
                  </Button>
                </div>
              </FadeInItem>
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Intro/Value Prop */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Precision, Care, & Excellence</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Dr. Alex Gause combines <span className="text-secondary font-semibold">Kois Center training</span> with advanced 3D planning to deliver predictable, life-changing results.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeInItem className="p-10 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <Cpu className="text-secondary group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Advanced Technology</h3>
              <p className="text-slate-600 leading-relaxed">Using CBCT 3D imaging and digital planning for millimeter-perfect implant placement.</p>
            </FadeInItem>
            <FadeInItem className="p-10 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <Shield className="text-secondary group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Kois-Trained Expertise</h3>
              <p className="text-slate-600 leading-relaxed">Graduate of the prestigious Kois Center, adhering to the highest scientific standards.</p>
            </FadeInItem>
            <FadeInItem className="p-10 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <Heart className="text-secondary group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Patient-First Care</h3>
              <p className="text-slate-600 leading-relaxed">A concierge-level experience prioritizing your comfort, understanding, and long-term health.</p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Meet the Doctor Teaser */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 transform origin-top-right"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <MotionDiv 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image 
                  src={DOCTOR.headshot_url} 
                  alt={DOCTOR.name} 
                  className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto grayscale group-hover:grayscale-0 transition-all duration-700 z-10 border border-slate-700"
                />
              </div>
            </MotionDiv>
            <FadeIn direction="left" className="lg:w-1/2">
              <h4 className="text-secondary font-bold tracking-widest uppercase mb-4">Meet the Expert</h4>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">Dr. Alex Gause</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
                Founder of Aesthetic Dentistry of Manhattan and a graduate of the Kois Center, Dr. Gause is dedicated to the art and science of implant dentistry. He lectures nationally on digital implant technologies.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-center gap-4 text-lg">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <CheckCircle2 className="text-secondary" size={20} />
                  </div>
                  UNC Chapel Hill Adams School of Dentistry
                </li>
                <li className="flex items-center gap-4 text-lg">
                   <div className="bg-secondary/20 p-2 rounded-full">
                    <CheckCircle2 className="text-secondary" size={20} />
                  </div>
                  Kois Center Graduate
                </li>
                <li className="flex items-center gap-4 text-lg">
                   <div className="bg-secondary/20 p-2 rounded-full">
                    <CheckCircle2 className="text-secondary" size={20} />
                  </div>
                  Fellow, International College of Implantologists
                </li>
              </ul>
              <Button to="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8">
                Read Full Bio
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Patient Stories</h2>
            <p className="text-lg text-slate-600">Hear from those whose smiles we've restored.</p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <FadeInItem key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-slate-300 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017V5H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.91297 16 7.01697 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.01697C5.46497 8 5.01697 8.448 5.01697 9V11C5.01697 11.552 4.56897 12 4.01697 12H3.01697V5H13.017V15C13.017 18.314 10.331 21 7.01697 21H5.01697Z" />
                  </svg>
                </div>
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <blockquote className="flex-grow text-slate-700 text-lg italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</blockquote>
                <div className="mt-auto flex items-center gap-5 border-t border-slate-100 pt-6">
                  {t.image_url && (
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-slate-200">
                      <Image src={t.image_url} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-secondary font-medium">{t.procedure}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
          <div className="text-center mt-16">
            <Button to="/smilegallery" variant="secondary" className="px-10">View Smile Gallery</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-900 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8">Ready to Transform Your Smile?</h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
              Schedule your consultation today and discover the difference precision care can make.
            </p>
            <Button href={BUSINESS_INFO.bookingUrl} className="bg-secondary hover:bg-amber-600 text-white px-12 py-5 text-xl shadow-2xl shadow-amber-900/40">
              Book Your Appointment
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;