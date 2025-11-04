import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import CategoryMovies from "./pages/CategoryMovies";
import MovieGenreList from "./pages/MovieGenreList";
import MovieDetail from "./pages/MovieDetail";
import Series from "./pages/Series";
import SeriesDetail from "./pages/SeriesDetail";
import CategorySeries from "./pages/CategorySeries";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:categoryId" element={<CategoryMovies />} />
          <Route path="/movies/:categoryId/:genreId" element={<MovieGenreList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:categoryId" element={<CategorySeries />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
