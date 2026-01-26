import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { merchItems, pageTexts } from "@/data/content";
import { ShoppingBag, Mail, Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Merch = () => {
  const { addItem, items } = useCart();
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddToCart = (item: typeof merchItems[0]) => {
    addItem(item);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const isInCart = (id: string) => items.some(item => item.id === id);

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
                className={`border border-border rounded bg-card overflow-hidden transition-all duration-300 ${
                  !item.available ? 'opacity-60' : 'hover:border-primary/30'
                }`}
              >
                {/* Image */}
                <div className="aspect-square bg-muted relative overflow-hidden">
                  {item.image && item.image !== "/placeholder.svg" ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover sepia-warm hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                      <ShoppingBag className="text-primary/20" size={64} />
                    </div>
                  )}
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
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className={`btn-analog px-4 py-2 font-mono text-xs flex items-center gap-2 transition-all ${
                          addedItems[item.id] ? 'bg-secondary text-secondary-foreground' : ''
                        }`}
                      >
                        {addedItems[item.id] ? (
                          <>
                            <Check size={14} />
                            AFEGIT!
                          </>
                        ) : (
                          <>
                            <Plus size={14} />
                            AFEGIR
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  {isInCart(item.id) && !addedItems[item.id] && (
                    <p className="text-xs text-secondary mt-2 font-mono">
                      ✓ A la cistella
                    </p>
                  )}
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
              href="mailto:merch@dreamsequence.com"
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
