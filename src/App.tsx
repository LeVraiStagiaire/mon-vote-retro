import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "@/context/QuizContext";
import Index from "./pages/Index";
import Questionnaire from "./pages/Questionnaire";
import Results from "./pages/Results";
import Candidates from "./pages/Candidates";
import CandidateDetail from "./pages/CandidateDetail";
import Methode from "./pages/Methode";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <QuizProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/resultats" element={<Results />} />
            <Route path="/candidats" element={<Candidates />} />
            <Route path="/candidat/:id" element={<CandidateDetail />} />
            <Route path="/methode" element={<Methode />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuizProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
