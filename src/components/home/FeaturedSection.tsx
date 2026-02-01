import { Link } from "react-router-dom";
import { ArrowRight, Disc, Calendar, Image } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { discography, concerts, gallery } from "@/data/content";

export const FeaturedSection = () => {
  const latestAlbum = discography[0];
  const recentConcerts = concerts.slice(0, 3);
  const featuredImages = gallery.slice(0, 3);

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Descobreix el nostre univers sonor">
          EXPLORACIONS
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest Album */}
          <Link 
            to={`/discografia/${latestAlbum.id}`}
            className="group p-6 border border-border rounded bg-card hover:border-primary/50 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <Disc className="text-primary" size={20} />
              <span className="font-mono text-xs text-muted-foreground tracking-wider">
                DESTACAT
              </span>
            </div>
            <div className="aspect-square bg-muted rounded mb-4 overflow-hidden">
              <img 
                src={latestAlbum.coverImage} 
                alt={latestAlbum.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-mono text-lg text-primary group-hover:crt-glow transition-all">
              {latestAlbum.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {latestAlbum.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors">
              <span className="font-mono text-xs">Veure detalls</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Recent Concerts */}
          <div className="p-6 border border-border rounded bg-card">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-secondary" size={20} />
              <span className="font-mono text-xs text-muted-foreground tracking-wider">
                ARXIU CONCERTS
              </span>
            </div>
            <ul className="space-y-4">
              {recentConcerts.map((concert) => (
                <li key={concert.id} className="border-b border-border pb-4 last:border-0">
                  <span className="font-mono text-xs text-secondary/80 block mb-1">
                    {concert.date}
                  </span>
                  <span className="text-foreground block">{concert.venue}</span>
                  <span className="text-sm text-muted-foreground">
                    {concert.city}, {concert.country}
                  </span>
                </li>
              ))}
            </ul>
            <Link 
              to="/concerts"
              className="mt-6 flex items-center gap-2 text-secondary/60 hover:text-secondary transition-colors"
            >
              <span className="font-mono text-xs">Veure tots</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Gallery Preview */}
          <div className="p-6 border border-border rounded bg-card">
            <div className="flex items-center gap-3 mb-4">
              <Image className="text-primary" size={20} />
              <span className="font-mono text-xs text-muted-foreground tracking-wider">
                GALERIA
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {featuredImages.map((img) => (
                <div 
                  key={img.id} 
                  className="aspect-square bg-muted rounded overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="font-mono text-xs text-primary/30">{img.year}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              to="/galeria"
              className="mt-6 flex items-center gap-2 text-primary/60 hover:text-primary transition-colors"
            >
              <span className="font-mono text-xs">Explorar galeria</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
