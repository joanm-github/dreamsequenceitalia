import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timeline, pageTexts } from "@/data/content";
import { bandMembers } from "@/data/bandMembers";
import { BandMemberCard } from "@/components/biography/BandMemberCard";
import { Disc, MapPin, Users, Star } from "lucide-react";

const typeIcons = {
  formation: Users,
  album: Disc,
  tour: MapPin,
  milestone: Star,
};

const typeColors = {
  formation: "text-secondary",
  album: "text-primary",
  tour: "text-primary/70",
  milestone: "text-secondary/80",
};

const Biography = () => {
  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle={pageTexts.biography.intro}>
            BIOGRAFIA
          </SectionTitle>

          {/* Band Members Section */}
          <div className="mt-12 mb-24">
            <h2 className="font-mono text-xl text-primary/80 mb-8 flex items-center gap-4">
              <span className="text-primary/40">//</span>
              El Trio
            </h2>
            <div className="space-y-8">
              {bandMembers.map((member, index) => (
                <BandMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="font-mono text-xl text-primary/80 mb-8 flex items-center gap-4">
              <span className="text-primary/40">//</span>
              Cronologia
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

            {timeline.map((event, index) => {
              const Icon = typeIcons[event.type];
              const colorClass = typeColors[event.type];

              return (
                <div 
                  key={`${event.year}-${index}`}
                  className={`relative flex items-start mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full border-2 border-current bg-background flex items-center justify-center ${colorClass}`}>
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div 
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] p-6 border border-border rounded bg-card/50 hover:border-primary/30 transition-all duration-500 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-3xl text-primary crt-glow">{event.year}</span>
                      <span className={`font-mono text-xs uppercase tracking-wider ${colorClass}`}>
                        {event.type === 'formation' && 'Formació'}
                        {event.type === 'album' && 'Àlbum'}
                        {event.type === 'tour' && 'Gira'}
                        {event.type === 'milestone' && 'Fita'}
                      </span>
                    </div>
                    <h3 className="font-mono text-xl text-foreground mb-3">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outro */}
          <div className="mt-24 max-w-3xl mx-auto text-center">
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />
            <p className="text-lg text-foreground/80 leading-relaxed italic">
              {pageTexts.biography.outro}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Biography;
