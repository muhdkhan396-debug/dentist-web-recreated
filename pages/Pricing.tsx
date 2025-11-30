import React from 'react';
import { PRICING_DATA, BUSINESS_INFO } from '../constants';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just clarity and care. We believe in being open about the cost of your investment in your health.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_DATA.map((item) => (
            <div key={item.service_id} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:border-secondary transition-colors duration-300">
              <div className="p-8 flex-grow">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">{item.name}</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{item.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-secondary">{item.price_range}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 shrink-0" size={18} />
                    <span className="text-slate-700 text-sm">{item.includes}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 shrink-0" size={18} />
                    <span className="text-slate-700 text-sm">Financing Options Available</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Button href={BUSINESS_INFO.bookingUrl} className="w-full justify-center">
                  Schedule Consult
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-sm border border-amber-100">
          <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">Financing & Payment Options</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
               <h4 className="font-bold text-lg mb-2">Flexible Payment Plans</h4>
               <p className="text-slate-600 mb-4">We offer flexible monthly payment plans to make your treatment affordable. Qualified patients can start for as low as $399/month.</p>
            </div>
            <div>
               <h4 className="font-bold text-lg mb-2">Insurance & Partners</h4>
               <p className="text-slate-600 mb-4">We work with CareCredit, LendingClub, and Proceed Finance. While few insurances cover full implants, we maximize your available benefits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;