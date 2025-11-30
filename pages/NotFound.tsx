import React from 'react';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import { FadeIn } from '../components/ui/Animations';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 p-4">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <FadeIn className="text-center max-w-lg">
        <h1 className="font-serif text-6xl font-bold text-slate-200 mb-4">404</h1>
        <h2 className="font-serif text-3xl font-bold text-primary mb-6">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/">Return to Homepage</Button>
      </FadeIn>
    </div>
  );
};

export default NotFound;