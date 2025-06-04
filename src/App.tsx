
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GeneralChat from "./pages/chat/general";
import PatientSpecificChat from "./pages/chat/patient-specific";
import ViewAllPatients from "./pages/patients/view-all";
import ViewOnePatient from "./pages/patients/view-one";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat/general" element={<GeneralChat />} />
          <Route path="/chat/patient/:id" element={<PatientSpecificChat />} />
          <Route path="/patients/view-all" element={<ViewAllPatients />} />
          <Route path="/patients/:id" element={<ViewOnePatient />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
