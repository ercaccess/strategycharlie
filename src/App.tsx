import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "@/lib/queryClient";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import WhatMakesUsDifferent from "./pages/WhatMakesUsDifferent";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Snapshot from "./pages/Snapshot";
import DigitalMarketingBurlington from "./pages/locations/DigitalMarketingBurlington";
import AiReceptionist from "./pages/services/AiReceptionist";
import AiSalesFollowUp from "./pages/services/AiSalesFollowUp";
import AiSocialMediaManager from "./pages/services/AiSocialMediaManager";
import CustomAiEmployees from "./pages/services/CustomAiEmployees";
import LocalVisibility from "./pages/services/LocalVisibility";
import ReviewsReputation from "./pages/services/ReviewsReputation";
import Websites from "./pages/services/Websites";
import CampaignsRetention from "./pages/services/CampaignsRetention";
import Contact from "./pages/Contact";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            
            {/* Core Pages */}
            <Route path="/what-makes-us-different" element={<WhatMakesUsDifferent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/snapshot" element={<Snapshot />} />
            <Route path="/digital-marketing-burlington" element={<DigitalMarketingBurlington />} />

            {/* Service Detail Pages */}
            <Route path="/services/ai-receptionist" element={<AiReceptionist />} />
            <Route path="/services/ai-sales-follow-up" element={<AiSalesFollowUp />} />
            <Route path="/services/ai-social-media-manager" element={<AiSocialMediaManager />} />
            <Route path="/services/custom-ai-employees" element={<CustomAiEmployees />} />
            <Route path="/services/local-visibility" element={<LocalVisibility />} />
            <Route path="/services/reviews-reputation" element={<ReviewsReputation />} />
            <Route path="/services/websites" element={<Websites />} />
            <Route path="/services/campaigns-retention" element={<CampaignsRetention />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
