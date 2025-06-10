
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GeneralChat from "./pages/chat/general";
import PatientSpecificChat from "./pages/chat/patient-specific";
import ViewAllPatients from "./pages/patients/view-all";
import ViewOnePatient from "./pages/patients/view-one";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
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
