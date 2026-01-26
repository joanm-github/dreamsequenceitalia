import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const CartButton = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
      aria-label="Obrir cistella"
    >
      <ShoppingBag size={20} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-mono rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};
