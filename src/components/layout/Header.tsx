import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/content";
import logoDs from "@/assets/logo-ds.jpg";

const navLinks = [
  { href: "/", label: "Inici" },
  { href: "/biografia", label: "Biografia" },
  { href: "/discografia", label: "Discografia" },
  { href: "/concerts", label: "Concerts" },
  { href: "/galeria", label: "Galeria" },
  { href: "/merch", label: "Merch" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoDs} 
              alt="Dream Sequence" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/30"
            />
            <span className="font-mono text-lg md:text-xl tracking-wider text-primary crt-glow">
              {siteConfig.bandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-mono text-sm tracking-wide transition-all duration-300 hover:text-primary ${
                  location.pathname === link.href 
                    ? "text-primary crt-glow" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-accent rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-mono text-sm tracking-wide transition-all duration-300 hover:text-primary hover:pl-2 ${
                  location.pathname === link.href 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary/50 mr-2">//</span>
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
