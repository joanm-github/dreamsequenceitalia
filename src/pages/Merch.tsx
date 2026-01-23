import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { merchItems, pageTexts } from "@/data/content";
import { ShoppingBag, Mail } from "lucide-react";

const Merch = () => {
  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle={pageTexts.merch.intro}>
            MERCH
          </SectionTitle>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {merchItems.map((item) => (
              <article 
                key={item.id}
                className={`border border-border rounded bg-card overflow-hidden ${
                  !item.available && 'opacity-60'
                }`}
              >
                {/* Image */}
                <div className="aspect-square bg-muted relative">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    <ShoppingBag className="text-primary/20" size={64} />
                  </div>
                  {!item.available && (
                    <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Esgotat
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-mono text-lg text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    {item.price && (
                      <span className="font-mono text-xl text-primary">{item.price}</span>
                    )}
                    {item.available && (
                      <button className="btn-analog px-4 py-2 font-mono text-xs">
                        CONSULTAR
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Contact section */}
          <div className="mt-24 max-w-xl mx-auto text-center p-8 border border-border rounded bg-card/30">
            <Mail className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-mono text-xl text-foreground mb-4">Comandes i Consultes</h3>
            <p className="text-muted-foreground mb-6">{pageTexts.merch.contact}</p>
            <a 
              href="mailto:merch@kosmischewelle.com"
              className="btn-analog px-8 py-3 font-mono text-sm inline-block"
            >
              CONTACTAR
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Merch;
