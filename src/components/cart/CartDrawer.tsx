import { useState } from "react";
import { X, Minus, Plus, ShoppingBag, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

export const CartDrawer = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    totalItems, 
    totalPrice,
    isCartOpen,
    setIsCartOpen 
  } = useCart();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with order details
    const orderDetails = items.map(item => 
      `- ${item.name} x${item.quantity} (${item.price})`
    ).join("\n");
    
    const subject = encodeURIComponent("Comanda Dream Sequence");
    const body = encodeURIComponent(
      `Nova comanda:\n\n` +
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telèfon: ${formData.phone}\n` +
      `Adreça: ${formData.address}\n\n` +
      `Articles:\n${orderDetails}\n\n` +
      `Total: ${totalPrice.toFixed(2)}€\n\n` +
      `Notes: ${formData.notes || "Cap"}`
    );
    
    window.location.href = `mailto:merch@dreamsequence.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      toast({
        title: "Comanda enviada!",
        description: "S'ha obert el teu client de correu amb la comanda.",
      });
      clearCart();
      setIsCartOpen(false);
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", address: "", notes: "" });
      setIsSubmitting(false);
    }, 500);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card border-l border-border shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-primary" size={20} />
            <h2 className="font-mono text-lg text-foreground">Cistella ({totalItems})</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto text-muted-foreground/30 mb-4" size={48} />
              <p className="text-muted-foreground">La cistella és buida</p>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 border border-border rounded bg-background/50">
                    <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                      {item.image && item.image !== "/placeholder.svg" ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingBag className="text-muted-foreground/30" size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-mono text-sm text-foreground truncate">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border rounded hover:border-primary/50 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-mono text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border rounded hover:border-primary/50 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-muted-foreground">Total</span>
                  <span className="font-mono text-xl text-primary">{totalPrice.toFixed(2)}€</span>
                </div>
              </div>

              {!showForm ? (
                <button 
                  onClick={() => setShowForm(true)}
                  className="btn-analog w-full py-3 font-mono text-sm flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  FINALITZAR COMANDA
                </button>
              ) : (
                /* Order Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-mono text-sm text-primary mb-2">Dades de contacte</h3>
                  
                  <input
                    type="text"
                    placeholder="Nom complet *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded font-mono text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  />
                  
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded font-mono text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Telèfon"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded font-mono text-sm focus:border-primary/50 focus:outline-none transition-colors"
                  />
                  
                  <textarea
                    placeholder="Adreça d'enviament *"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded font-mono text-sm focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  />
                  
                  <textarea
                    placeholder="Notes (opcional)"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded font-mono text-sm focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  />
                  
                  <div className="flex gap-2">
                    <button 
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-3 font-mono text-sm border border-border rounded hover:border-primary/50 transition-colors"
                    >
                      ENRERE
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 btn-analog py-3 font-mono text-sm flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      {isSubmitting ? "ENVIANT..." : "ENVIAR"}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
