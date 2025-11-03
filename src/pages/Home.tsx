import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import heroBanner from "@/assets/hero-banner.jpg";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";

const Home = () => {
  // Sample data for carousels
  const trendingContent = [
    { id: 1, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 2, title: "Space Odyssey", image: movie2, rating: "9.2" },
    { id: 3, title: "Eternal Love", image: movie3, rating: "7.8" },
    { id: 4, title: "Comedy Central", image: movie4, rating: "8.1" },
    { id: 5, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 6, title: "Space Odyssey", image: movie2, rating: "9.2" },
  ];

  const newEpisodes = [
    { id: 11, title: "Space Odyssey", image: movie2, rating: "9.2" },
    { id: 12, title: "Eternal Love", image: movie3, rating: "7.8" },
    { id: 13, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 14, title: "Comedy Central", image: movie4, rating: "8.1" },
    { id: 15, title: "Space Odyssey", image: movie2, rating: "9.2" },
    { id: 16, title: "Eternal Love", image: movie3, rating: "7.8" },
  ];

  const popularContent = [
    { id: 21, title: "Comedy Central", image: movie4, rating: "8.1" },
    { id: 22, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 23, title: "Space Odyssey", image: movie2, rating: "9.2" },
    { id: 24, title: "Eternal Love", image: movie3, rating: "7.8" },
    { id: 25, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 26, title: "Comedy Central", image: movie4, rating: "8.1" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Featured Content"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 animate-slide-up">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">
              The Last Guardian
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-shadow">
              In a world on the brink of destruction, one hero must rise to save humanity.
              An epic tale of courage, sacrifice, and redemption.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                <Play className="h-5 w-5" />
                Watch Now
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                <Info className="h-5 w-5" />
                More Info
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
                  9.1
                </div>
                <span className="text-muted-foreground">IMDb Rating</span>
              </div>
              <span className="text-muted-foreground">2024 • 2h 25m • Action, Drama</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Carousels */}
      <section className="container mx-auto px-4 py-12 space-y-8">
        <ContentCarousel title="Trending Now" items={trendingContent} />
        <ContentCarousel title="New Episodes" items={newEpisodes} />
        <ContentCarousel title="Popular on SHAHID" items={popularContent} />
      </section>
    </div>
  );
};

export default Home;
