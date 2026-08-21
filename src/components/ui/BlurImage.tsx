import { useState } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  imgClassName?: string;
  [key: string]: any;
}

export default function BlurImage({ src, alt, className = '', priority = false, imgClassName = '', ...props }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // If the user explicitly passes a positioning class, don't force 'relative'
  const isPositioned = className.includes('absolute') || className.includes('fixed') || className.includes('relative');
  const baseClass = isPositioned ? '' : 'relative';

  return (
    <div className={`${baseClass} overflow-hidden ${className}`.trim()}>
      {/* Skeleton / Blur Overlay */}
      <div 
        className={`absolute inset-0 bg-zinc-200 transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoaded ? 'blur-0' : 'scale-[1.02] blur-xl'
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
