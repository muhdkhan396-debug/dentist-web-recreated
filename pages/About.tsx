import React from 'react';
import { DOCTOR, BUSINESS_INFO } from '../constants';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import Image from '../components/ui/Image';
import { FadeIn, ScaleIn } from '../components/ui/Animations';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Dr. Alex Gause" 
        description="Learn about Dr. Alex Gause, a Kois Center trained implant dentist in Midtown Manhattan specializing in complex oral rehabilitation." 
      />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/5">
            <ScaleIn>
              <Image 
                src={DOCTOR.headshot_url} 
                alt={DOCTOR.name} 
                className="w-full rounded-lg shadow-2xl"
                priority={true}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-100">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Credentials</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="pb-2 border-b border-slate-200">
                    <span className="block font-semibold">Education</span>
                    {DOCTOR.credentials.education}
                  </li>
                  <li className="pb-2 border-b border-slate-200">
                    <span className="block font-semibold">Residency</span>
                    {DOCTOR.credentials.residency}
                  </li>
                  <li className="pb-2 border-b border-slate-200">
                    <span className="block font-semibold">Advanced Training</span>
                    {DOCTOR.credentials.advanced_training}
                  </li>
                </ul>
              </div>
            </ScaleIn>
          </div>
          
          <div className="lg:w-3/5">
            <FadeIn direction="left" delay={0.2}>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Meet Dr. Alex Gause</h1>
              <h2 className="text-xl text-secondary font-medium mb-8 uppercase tracking-wide">Founder, Aesthetic Dentistry of Manhattan</h2>
              
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  Alex Gause D.D.S., is a skilled and caring dentist who founded Aesthetic Dentistry of Manhattan in New York City's Midtown East neighborhood.
                </p>
                <p>
                  Dr. Gause earned his dental degree from the University of North Carolina at Chapel Hill's Adams School of Dentistry, widely regarded as one of the best dental institutions in the country. He completed residency training in Brooklyn, immediately fell in love with New York, and established Aesthetic Dentistry of Manhattan in 2014.
                </p>
                <p>
                  A graduate of the prestigious <strong>Kois Center</strong> in Seattle, Dr. Gause continuously applies cutting-edge technology to his dental implant treatment. He is a committed enthusiast to dental technology and lectures nationally, teaching other dentists how to apply digital technologies to improve their implant dentistry.
                </p>
                <blockquote className="bg-amber-50 border-l-4 border-secondary p-6 italic text-slate-800 my-8">
                  "Let's embark on this implant dentistry adventure together. Your confidence and happiness through a healthy smile await!"
                </blockquote>
              </div>

              <div className="mt-12">
                <Button href={BUSINESS_INFO.bookingUrl}>Schedule with Dr. Gause</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;