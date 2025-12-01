import React from 'react';
import { GALLERY_IMAGES, BUSINESS_INFO } from '../constants';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import Image from '../components/ui/Image';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/Animations';

const SmileGallery: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <SEO 
        title="Smile Gallery" 
        description="See real before and after results from our dental implant and oral rehabilitation patients in NYC." 
      />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Real Results</h1>
            <p className="text-xl text-slate-600">
              See the life-changing transformations we achieve for our patients through advanced implant dentistry and oral rehabilitation.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {GALLERY_IMAGES.map((imgUrl, idx) => (
            <FadeInItem key={idx} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer bg-slate-100">
              <div className="w-full h-80 overflow-hidden">
                <Image 
                  src={imgUrl} 
                  alt={`Patient Transformation ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">Before & After Case</span>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4} className="bg-slate-900 rounded-2xl p-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to start your own transformation?</h2>
          <Button href={BUSINESS_INFO.bookingUrl} className="bg-secondary hover:bg-amber-600 text-white border-none">
            Book Your Consultation
          </Button>
        </FadeIn>
      </div>
    </div>
  );
};

export default SmileGallery;