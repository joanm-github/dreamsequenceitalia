import { siteConfig } from "@/data/content";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-mono text-primary crt-glow text-lg mb-4">
              {siteConfig.bandName}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm text-primary/80 mb-4 tracking-wider">
              NAVEGACIÓ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/biografia" className="text-muted-foreground hover:text-primary transition-colors">
                  Biografia
                </a>
              </li>
              <li>
                <a href="/discografia" className="text-muted-foreground hover:text-primary transition-colors">
                  Discografia
                </a>
              </li>
              <li>
                <a href="/concerts" className="text-muted-foreground hover:text-primary transition-colors">
                  Arxiu de Concerts
                </a>
              </li>
              <li>
                <a href="/galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-sm text-primary/80 mb-4 tracking-wider">
              CONTACTE
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@kosmischewelle.com</li>
              <li>Arxius i llicències: arxiu@kosmischewelle.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} {siteConfig.bandName}. Tots els drets reservats.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-glow" />
            <span className="font-mono text-xs text-primary/60">
              TRANSMISSIÓ ACTIVA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
