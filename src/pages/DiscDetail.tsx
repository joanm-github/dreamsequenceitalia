import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { discography } from "@/data/content";
import { BandcampAlbumEmbed } from "@/components/ui/BandcampPlayer";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";

const DiscDetail = () => {
  const { id } = useParams();
  const disc = discography.find((d) => d.id === id);

  if (!disc) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">Disc no trobat.</p>
          <Link to="/discografia" className="text-primary hover:underline mt-4 inline-block">
            Tornar a la discografia
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link 
            to="/discografia" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span className="font-mono text-sm">Tornar a discografia</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cover */}
            <div className="aspect-square bg-card border border-border rounded overflow-hidden relative group">
              <img 
                src={disc.coverImage} 
                alt={disc.title}
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/30">
                <div className="w-20 h-20 rounded-full border-2 border-primary/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300">
                  <Play className="text-primary ml-1" size={32} />
                </div>
              </button>
            </div>

            {/* Info */}
            <div>
              <span className="font-mono text-sm text-muted-foreground block mb-2">
                {disc.year}
              </span>
              <h1 className="font-mono text-4xl md:text-5xl text-primary crt-glow mb-6">
                {disc.title}
              </h1>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                {disc.description}
              </p>

              {/* Tracklist */}
              <div className="mb-8">
                <h2 className="font-mono text-sm text-muted-foreground mb-4 tracking-wider">
                  TRACKLIST
                </h2>
                <ol className="space-y-2">
                  {disc.tracklist.map((track, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-4 py-2 border-b border-border last:border-0"
                    >
                      <span className="font-mono text-xs text-primary/50 w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-foreground">{track}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Notes */}
              {disc.notes && (
                <div className="mb-8 p-4 bg-muted/30 border border-border rounded">
                  <h2 className="font-mono text-xs text-muted-foreground mb-2 tracking-wider">
                    NOTES TÈCNIQUES
                  </h2>
                  <p className="text-sm text-muted-foreground">{disc.notes}</p>
                </div>
              )}

              {/* Bandcamp embed placeholder */}
              <div className="mb-8">
                <h2 className="font-mono text-sm text-muted-foreground mb-4 tracking-wider">
                  ESCOLTAR MOSTRA
                </h2>
                <BandcampAlbumEmbed 
                  albumTitle={disc.title}
                  albumArt={disc.coverImage}
                  bandcampUrl={disc.listenLinks?.bandcamp || "https://bandcamp.com"}
                />
              </div>

              {/* Listen links */}
              {disc.listenLinks && Object.keys(disc.listenLinks).length > 0 && (
                <div>
                  <h2 className="font-mono text-sm text-muted-foreground mb-4 tracking-wider">
                    PLATAFORMES
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {disc.listenLinks.spotify && (
                      <a 
                        href={disc.listenLinks.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-analog px-6 py-2 font-mono text-xs flex items-center gap-2"
                      >
                        Spotify <ExternalLink size={12} />
                      </a>
                    )}
                    {disc.listenLinks.bandcamp && (
                      <a 
                        href={disc.listenLinks.bandcamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-analog px-6 py-2 font-mono text-xs flex items-center gap-2"
                      >
                        Bandcamp <ExternalLink size={12} />
                      </a>
                    )}
                    {disc.listenLinks.youtube && (
                      <a 
                        href={disc.listenLinks.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-analog px-6 py-2 font-mono text-xs flex items-center gap-2"
                      >
                        YouTube <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscDetail;
