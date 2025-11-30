import React, { useState, useEffect, useRef } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  priority?: boolean;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc, 
  priority = false, 
  sizes,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  // If priority is true, show immediately. Otherwise wait for intersection.
  const [isVisible, setIsVisible] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return; // Already visible, no need to observe

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '300px', // Start loading images 300px before they enter viewport
      threshold: 0
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [priority]);

  // Helper to generate Squarespace srcset
  // This allows the browser to download the optimal image size based on screen resolution
  const generateSrcSet = (url: string | undefined) => {
    if (!url || !url.includes('images.squarespace-cdn.com')) return undefined;
    const baseUrl = url.split('?')[0];
    
    // Squarespace supported formats
    return `
      ${baseUrl}?format=100w 100w,
      ${baseUrl}?format=300w 300w,
      ${baseUrl}?format=500w 500w,
      ${baseUrl}?format=750w 750w,
      ${baseUrl}?format=1000w 1000w,
      ${baseUrl}?format=1500w 1500w,
      ${baseUrl}?format=2500w 2500w
    `;
  };

  const srcSet = (typeof src === 'string' && isVisible) ? generateSrcSet(src) : undefined;
  const imgSrc = isVisible ? (hasError && fallbackSrc ? fallbackSrc : src as string) : undefined;
  
  // Use generic string for custom attributes not yet fully typed in React
  const fetchPriority = priority ? "high" : "auto";

  // Default sizes: Assume full width on mobile, half on tablet, 1/3 or 1200px constraint on desktop
  // This can be overridden by the prop
  const defaultSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px";

  return (
    <div ref={containerRef} className={`overflow-hidden bg-slate-100 relative ${className}`}>
      {(!isLoaded && !hasError) && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      {isVisible && (
        <img
          src={imgSrc}
          srcSet={srcSet}
          sizes={sizes || defaultSizes}
          alt={alt}
          // @ts-ignore - fetchpriority is validd HTML but might flag in some TS versions
          fetchpriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};

export default Image;