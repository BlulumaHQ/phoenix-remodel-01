import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import CommercialRemodel from "./pages/CommercialRemodel";
import Landscaping from "./pages/Landscaping";
import Painting from "./pages/Painting";
import NewConstruction from "./pages/NewConstruction";
import Fencing from "./pages/Fencing";
import Insulation from "./pages/Insulation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/commercial-remodel" element={<CommercialRemodel />} />
            <Route path="/commercial-and-residential-landscaping" element={<Landscaping />} />
            <Route path="/painting" element={<Painting />} />
            <Route path="/new-construction" element={<NewConstruction />} />
            <Route path="/commercial-fencing" element={<Fencing />} />
            <Route path="/insulation" element={<Insulation />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Legacy .html routes */}
            <Route path="/commercial-remodel.html" element={<CommercialRemodel />} />
            <Route path="/commercial-and-residential-landscaping.html" element={<Landscaping />} />
            <Route path="/painting.html" element={<Painting />} />
            <Route path="/new-construction.html" element={<NewConstruction />} />
            <Route path="/commercial-fencing.html" element={<Fencing />} />
            <Route path="/insulation.html" element={<Insulation />} />
            <Route path="/about-us.html" element={<About />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
