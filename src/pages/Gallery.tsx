import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { gallery, pageTexts } from "@/data/content";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Group images by era
  const imagesByEra = gallery.reduce((acc, img) => {
    if (!acc[img.era]) acc[img.era] = [];
    acc[img.era].push(img);
    return acc;
  }, {} as Record<string, typeof gallery>);

  const eras = Object.keys(imagesByEra);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : gallery.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < gallery.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle={pageTexts.gallery.intro}>
            GALERIA
          </SectionTitle>

          {/* Gallery by Era */}
          <div className="mt-12 space-y-16">
            {eras.map((era) => (
              <div key={era}>
                <h3 className="font-mono text-xl text-primary/80 mb-6 flex items-center gap-4">
                  <span className="text-primary/40">//</span>
                  {era}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {imagesByEra[era].map((img) => {
                    const globalIndex = gallery.findIndex((g) => g.id === img.id);
                    return (
                      <button
                        key={img.id}
                        onClick={() => setSelectedImage(globalIndex)}
                        className="aspect-square bg-card border border-border rounded overflow-hidden hover:border-primary/50 transition-all duration-300 group"
                      >
                        <div className="w-full h-full relative overflow-hidden">
                          <img 
                            src={img.src} 
                            alt={img.alt}
                            className="w-full h-full object-cover sepia-warm group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                            <span className="text-xs text-center text-muted-foreground">
                              {img.caption}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button 
              className="absolute left-4 md:left-8 p-3 text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              className="absolute right-4 md:right-8 p-3 text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <div 
              className="max-w-4xl max-h-[80vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border border-border rounded overflow-hidden">
                <img 
                  src={gallery[selectedImage].src} 
                  alt={gallery[selectedImage].alt}
                  className="max-h-[70vh] w-auto mx-auto sepia-warm"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-foreground">{gallery[selectedImage].alt}</p>
                {gallery[selectedImage].caption && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {gallery[selectedImage].caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Gallery;
