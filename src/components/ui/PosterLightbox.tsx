import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";

interface PosterLightboxProps {
  posterImage?: string;
  alt: string;
  thumbnailSize?: "small" | "medium";
  className?: string;
}

export const PosterLightbox = ({ 
  posterImage, 
  alt,
  thumbnailSize = "small",
  className = ""
}: PosterLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-20"
  };

  if (!posterImage) {
    return null;
  }

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${sizeClasses[thumbnailSize]} rounded bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex-shrink-0 group ${className}`}
        title="Veure pòster"
      >
        {posterImage ? (
          <img 
            src={posterImage} 
            alt={alt}
            className="w-full h-full object-cover sepia-warm group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/10">
            <ImageIcon size={16} className="text-muted-foreground" />
          </div>
        )}
      </button>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-primary transition-colors z-10"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Image container */}
          <div 
            className="max-w-2xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border border-border rounded-lg overflow-hidden bg-card shadow-2xl">
              <img 
                src={posterImage} 
                alt={alt}
                className="w-full h-auto max-h-[75vh] object-contain sepia-warm"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 font-mono">
              {alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
