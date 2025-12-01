import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { SERVICE_CONTENT } from '../data/services';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import Image from '../components/ui/Image';
import { CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/Animations';
import { BUSINESS_INFO } from '../constants';

const { useLocation, Navigate } = ReactRouterDOM;

const ServiceTemplate: React.FC = () => {
  const location = useLocation();
  const data = SERVICE_CONTENT[location.pathname];

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  const MotionDiv = motion.div as any;
  const MotionLi = motion.li as any;

  return (
    <div className="bg-white">
      <SEO 
        title={data.title} 
        description={data.description} 
      />
      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <MotionDiv
            key={data.heroImage}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full"
          >
            <Image 
              src={data.heroImage} 
              alt={data.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </MotionDiv>
          <div className="absolute inset-0 bg-slate-900/70 z-10 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <FadeInStagger>
            <FadeInItem>
              <span className="text-secondary font-bold tracking-widest uppercase mb-4 block text-sm">Our Services</span>
            </FadeInItem>
            <FadeInItem>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 max-w-4xl tracking-tight">
                {data.title}
              </h1>
            </FadeInItem>
            <FadeInItem>
              <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-light leading-relaxed">
                {data.description}
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-20">
          {data.sections.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                {section.title}
              </h2>
              
              {section.type === 'text' && (
                <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed max-w-none">
                  {section.content.map((p, i) => <p key={i} className="mb-6">{p}</p>)}
                </div>
              )}

              {section.type === 'list' && (
                <ul className="grid gap-5">
                  {section.content.map((item, i) => (
                    <MotionLi 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} />
                      <span className="text-slate-800 text-lg font-medium">{item}</span>
                    </MotionLi>
                  ))}
                </ul>
              )}

              {section.type === 'process' && (
                <div className="space-y-8 relative">
                   {/* Line connecting steps */}
                  <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block"></div>
                  {section.content.map((step, i) => (
                    <FadeIn key={i} delay={i * 0.1} className="flex gap-6 relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold text-lg shadow-lg z-10 border-4 border-white">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                         <p className="text-slate-800 text-xl font-medium">{step.replace(/^\d+\.\s*/, '')}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              )}
            </FadeIn>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <FadeIn delay={0.4} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl sticky top-32">
            <div className="flex items-center gap-3 mb-6 text-secondary">
               <Calendar size={24} />
               <span className="font-bold tracking-wide uppercase text-sm">Consultation</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-slate-900 mb-4">Ready to begin?</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Schedule your consultation with Dr. Gause to discuss if {data.title} is right for you.
            </p>
            <div className="space-y-4">
              <Button href={BUSINESS_INFO.bookingUrl} className="w-full justify-center py-4 text-lg shadow-lg shadow-amber-900/10">
                Book Consultation
              </Button>
              <Button href={`tel:${BUSINESS_INFO.phone}`} variant="outline" className="w-full justify-center py-4">
                Call {BUSINESS_INFO.phone}
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Why choose us?</h4>
              <ul className="text-slate-600 space-y-3">
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-secondary"/> Transparent Pricing</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-secondary"/> Kois-Trained Expert</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-secondary"/> Advanced 3D Tech</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;