import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { concerts, pageTexts } from "@/data/content";
import { MapPin, Calendar } from "lucide-react";

const Concerts = () => {
  // Group concerts by year
  const concertsByYear = concerts.reduce((acc, concert) => {
    const year = concert.date.split('-')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(concert);
    return acc;
  }, {} as Record<string, typeof concerts>);

  const years = Object.keys(concertsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle={pageTexts.concerts.intro}>
            ARXIU DE CONCERTS
          </SectionTitle>

          <div className="mt-12 space-y-12">
            {years.map((year) => (
              <div key={year}>
                {/* Year header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-4xl text-primary crt-glow">{year}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                </div>

                {/* Concerts list */}
                <div className="grid gap-4">
                  {concertsByYear[year].map((concert) => (
                    <article 
                      key={concert.id}
                      className="p-6 border border-border rounded bg-card/30 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {/* Date */}
                        <div className="flex items-center gap-2 md:w-40">
                          <Calendar size={14} className="text-secondary" />
                          <span className="font-mono text-sm text-secondary">
                            {new Date(concert.date).toLocaleDateString('ca-ES', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </span>
                        </div>

                        {/* Venue & Location */}
                        <div className="flex-1">
                          <h3 className="font-mono text-lg text-foreground">{concert.venue}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin size={12} className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {concert.city}, {concert.country}
                            </span>
                          </div>
                        </div>

                        {/* Tour name / Notes */}
                        <div className="md:text-right">
                          {concert.tourName && (
                            <span className="font-mono text-xs text-primary/60 block">
                              {concert.tourName}
                            </span>
                          )}
                          {concert.notes && (
                            <span className="text-xs text-muted-foreground italic">
                              {concert.notes}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 border border-border rounded bg-card/30 text-center">
              <span className="font-mono text-4xl text-primary crt-glow block">{concerts.length}</span>
              <span className="text-sm text-muted-foreground">Concerts</span>
            </div>
            <div className="p-6 border border-border rounded bg-card/30 text-center">
              <span className="font-mono text-4xl text-secondary amber-glow block">
                {new Set(concerts.map(c => c.country)).size}
              </span>
              <span className="text-sm text-muted-foreground">Països</span>
            </div>
            <div className="p-6 border border-border rounded bg-card/30 text-center">
              <span className="font-mono text-4xl text-primary crt-glow block">
                {new Set(concerts.map(c => c.city)).size}
              </span>
              <span className="text-sm text-muted-foreground">Ciutats</span>
            </div>
            <div className="p-6 border border-border rounded bg-card/30 text-center">
              <span className="font-mono text-4xl text-secondary amber-glow block">
                {years.length}
              </span>
              <span className="text-sm text-muted-foreground">Anys</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Concerts;
