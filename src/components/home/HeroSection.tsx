import heroStudio from "@/assets/hero-studio.jpg";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/content";
import { AudioVisualizer } from "@/components/ui/AudioVisualizer";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroStudio})` }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute inset-0 bg-gradient-vignette" />
      <div className="absolute inset-0 grid-lines opacity-20" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float animation-delay-1000" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Pre-title */}
        <div className="fade-in-slow mb-6">
          <span className="font-mono text-xs md:text-sm text-primary/60 tracking-[0.3em] uppercase">
            Electrònica Ambiental · 1972-present
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-mono text-4xl md:text-7xl lg:text-8xl text-primary crt-glow tracking-wider mb-8 slide-up">
          {siteConfig.bandName}
        </h1>

        {/* Manifesto */}
        <p className="max-w-3xl mx-auto text-base md:text-xl text-foreground/80 leading-relaxed mb-12 slide-up animation-delay-200">
          {siteConfig.manifesto}
        </p>

        {/* Audio visualizer */}
        <div className="flex justify-center mb-12 slide-up animation-delay-400">
          <div className="flex items-center gap-4 px-6 py-3 border border-border rounded bg-card/50 backdrop-blur">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <span className="font-mono text-xs text-muted-foreground">SENYAL ACTIU</span>
            <AudioVisualizer barCount={16} />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up animation-delay-600">
          <a
            href="/discografia"
            className="btn-analog px-8 py-3 font-mono text-sm tracking-wider"
          >
            EXPLORAR DISCOGRAFIA
          </a>
          <a
            href="/biografia"
            className="px-8 py-3 font-mono text-sm tracking-wider text-muted-foreground hover:text-primary border border-border hover:border-primary/50 transition-all duration-300"
          >
            LLEGIR HISTÒRIA
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 slide-up animation-delay-1000">
          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-float">
            <span className="font-mono text-xs tracking-wider">SCROLL</span>
            <ArrowDown size={16} className="text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
