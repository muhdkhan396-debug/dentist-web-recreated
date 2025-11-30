import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { SERVICE_CONTENT } from '../data/services';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ServiceTemplate: React.FC = () => {
  const location = useLocation();
  const data = SERVICE_CONTENT[location.pathname];

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
          <img 
            src={data.heroImage} 
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-light">
            {data.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          {data.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 relative pl-4 border-l-4 border-secondary">
                {section.title}
              </h2>
              
              {section.type === 'text' && (
                <div className="prose prose-lg text-slate-600 leading-relaxed">
                  {section.content.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
                </div>
              )}

              {section.type === 'list' && (
                <ul className="grid gap-4">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.type === 'process' && (
                <div className="space-y-6">
                  {section.content.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold">
                        {i + 1}
                      </div>
                      <p className="text-slate-700 text-lg pt-1">{step.replace(/^\d+\.\s*/, '')}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 sticky top-28">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Ready to begin?</h3>
            <p className="text-slate-600 mb-6">
              Schedule your consultation with Dr. Gause to discuss if {data.title} is right for you.
            </p>
            <div className="space-y-4">
              <Button href={BUSINESS_INFO.bookingUrl} className="w-full justify-center">
                Book Consultation
              </Button>
              <Button href={`tel:${BUSINESS_INFO.phone}`} variant="outline" className="w-full justify-center">
                Call {BUSINESS_INFO.phone}
              </Button>
            </div>
            
            <hr className="my-8 border-slate-200" />
            
            <h4 className="font-bold text-primary mb-2">Why choose us?</h4>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-secondary"/> Transparent Pricing</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-secondary"/> Kois-Trained Expert</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-secondary"/> Advanced 3D Tech</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;