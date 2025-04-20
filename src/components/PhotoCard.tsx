import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const PhotoCard = ({ src, alt, caption, className }: PhotoCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn(
      "overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}>
      <div className="relative aspect-[4/3] overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
            <span className="sr-only">Загрузка...</span>
          </div>
        )}
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "object-cover w-full h-full transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      
      {caption && (
        <div className="p-3 text-center">
          <p className="text-sm text-card-foreground">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;