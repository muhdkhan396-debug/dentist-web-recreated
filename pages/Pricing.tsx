import React from 'react';
import { PRICING_DATA, BUSINESS_INFO } from '../constants';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import { Check } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/Animations';

const Pricing: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Pricing" 
        description="Transparent pricing for dental implants in NYC. No hidden fees. View our starting prices for single implants, All-on-4, and maintenance." 
      />
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">Transparent Pricing</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              No hidden fees. No surprises. Just clarity and care. We believe in being open about the cost of your investment in your health.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 -mt-20 relative z-20">
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_DATA.map((item, idx) => (
            <FadeInItem key={item.service_id} className="h-full">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full hover:border-secondary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group">
                <div className="p-10 flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">{item.name}</h3>
                  <p className="text-sm text-slate-500 mb-8 min-h-[40px] leading-relaxed">{item.description}</p>
                  <div className="mb-8 p-4 bg-slate-50 rounded-lg text-center group-hover:bg-amber-50 transition-colors">
                    <span className="text-3xl font-bold text-secondary block">{item.price_range}</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 bg-green-100 rounded-full p-1">
                        <Check className="text-green-600" size={12} />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{item.includes}</span>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="mt-0.5 bg-green-100 rounded-full p-1">
                        <Check className="text-green-600" size={12} />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">Financing Options Available</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Button href={BUSINESS_INFO.bookingUrl} className="w-full justify-center bg-slate-900 group-hover:bg-secondary">
                    Schedule Consult
                  </Button>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4} className="mt-20 max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-lg border border-slate-100">
          <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">Financing & Payment Options</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
               <h4 className="font-bold text-xl mb-3 text-secondary">Flexible Payment Plans</h4>
               <p className="text-slate-600 leading-relaxed">We offer flexible monthly payment plans to make your treatment affordable. Qualified patients can start for as low as $399/month.</p>
            </div>
            <div>
               <h4 className="font-bold text-xl mb-3 text-secondary">Insurance & Partners</h4>
               <p className="text-slate-600 leading-relaxed">We work with CareCredit, LendingClub, and Proceed Finance. While few insurances cover full implants, we maximize your available benefits.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Pricing;