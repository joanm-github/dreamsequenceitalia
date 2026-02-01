import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeline } from "@/data/content";

export const TimelinePreview = () => {
  const previewEvents = timeline.slice(0, 4);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Mig segle de sons del futur">
          CRONOLOGIA
        </SectionTitle>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {previewEvents.map((event, index) => (
            <div 
              key={event.year} 
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Year marker */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary glow-pulse" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="font-mono text-2xl text-primary crt-glow">{event.year}</span>
                <h3 className="font-mono text-lg text-foreground mt-2 mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/biografia"
            className="inline-flex items-center gap-3 btn-analog px-8 py-3 font-mono text-sm"
          >
            HISTÒRIA COMPLETA
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
