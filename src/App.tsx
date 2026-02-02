import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import Biography from "./pages/Biography";
import Discography from "./pages/Discography";
import DiscDetail from "./pages/DiscDetail";
import Concerts from "./pages/Concerts";
import Gallery from "./pages/Gallery";
import Merch from "./pages/Merch";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/biografia" element={<Biography />} />
            <Route path="/discografia" element={<Discography />} />
            <Route path="/discografia/:id" element={<DiscDetail />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
