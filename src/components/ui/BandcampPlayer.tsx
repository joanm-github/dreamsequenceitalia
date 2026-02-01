import { Music } from "lucide-react";

interface BandcampPlayerProps {
  albumId?: string;
  trackId?: string;
  size?: "small" | "large";
  className?: string;
}

export const BandcampPlayer = ({ 
  albumId = "1234567890", // Placeholder ID
  trackId,
  size = "small",
  className = "" 
}: BandcampPlayerProps) => {
  // Placeholder Bandcamp embed URL
  const embedUrl = trackId 
    ? `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=${size}/bgcol=1a1410/linkcol=d4b896/transparent=true/`
    : `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=${size}/bgcol=1a1410/linkcol=d4b896/transparent=true/`;

  const height = size === "small" ? "42px" : "120px";

  return (
    <div className={`bandcamp-player ${className}`}>
      {/* Placeholder UI since we don't have a real Bandcamp account */}
      <div 
        className="border border-border rounded bg-card/50 backdrop-blur overflow-hidden"
        style={{ height }}
      >
        <div className="flex items-center gap-3 h-full px-4">
          <div className="w-8 h-8 rounded bg-secondary/20 flex items-center justify-center">
            <Music size={16} className="text-secondary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono text-xs text-primary truncate">
              KOSMISCHE WELLE
            </div>
            <div className="text-xs text-muted-foreground">
              Bandcamp Player
            </div>
          </div>
          <a 
            href="https://bandcamp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-xs text-secondary hover:text-primary transition-colors"
          >
            ESCOLTAR →
          </a>
        </div>
      </div>
      <p className="text-xs text-muted-foreground/60 mt-2 text-center font-mono">
        [ Placeholder - Connecta el teu compte Bandcamp ]
      </p>
    </div>
  );
};

// Component for a larger Bandcamp embed with album art
export const BandcampAlbumEmbed = ({ 
  albumTitle = "Zeitstrom",
  albumArt,
  bandcampUrl = "https://bandcamp.com",
  className = ""
}: {
  albumTitle?: string;
  albumArt?: string;
  bandcampUrl?: string;
  className?: string;
}) => {
  return (
    <div className={`bandcamp-album-embed ${className}`}>
      <a 
        href={bandcampUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-border rounded bg-card/50 backdrop-blur overflow-hidden hover:border-primary/50 transition-all duration-300 group"
      >
        <div className="flex items-center gap-4 p-4">
          {/* Album art placeholder */}
          <div className="w-16 h-16 rounded bg-secondary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {albumArt ? (
              <img src={albumArt} alt={albumTitle} className="w-full h-full object-cover sepia-warm" />
            ) : (
              <Music size={24} className="text-secondary/50" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="font-mono text-sm text-primary group-hover:crt-glow transition-all">
              {albumTitle}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              KOSMISCHE WELLE
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 font-mono text-xs text-secondary">
                <Music size={12} />
                Escoltar a Bandcamp
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
