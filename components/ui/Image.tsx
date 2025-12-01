import React, { useState, useEffect, useRef } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc, 
  loading = 'lazy',
  fetchPriority = 'auto',
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if image is already loaded (e.g. from cache)
    if (imgRef.current && imgRef.current.complete) {
       setIsLoaded(true);
    }
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div className={`overflow-hidden bg-slate-100 relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
      )}
      <img
        ref={imgRef}
        src={hasError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        loading={loading}
        // @ts-ignore - React types might not fully support fetchPriority yet
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};

export default Image;