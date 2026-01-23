import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { discography, pageTexts } from "@/data/content";
import { ArrowRight } from "lucide-react";

const Discography = () => {
  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle={pageTexts.discography.intro}>
            DISCOGRAFIA
          </SectionTitle>

          {/* Album Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {discography.map((disc, index) => (
              <Link
                key={disc.id}
                to={`/discografia/${disc.id}`}
                className="group block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="border border-border rounded bg-card overflow-hidden hover:border-primary/50 transition-all duration-500 slide-up">
                  {/* Cover */}
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={disc.coverImage} 
                      alt={disc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="font-mono text-xs text-primary tracking-wider flex items-center gap-2">
                        VEURE DETALLS <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <span className="font-mono text-xs text-muted-foreground block mb-1">
                      {disc.year}
                    </span>
                    <h3 className="font-mono text-lg text-primary group-hover:crt-glow transition-all">
                      {disc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {disc.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Discography;
