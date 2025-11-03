import { Play, Plus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";

const MovieDetail = () => {
  const recommendations = [
    { id: 1, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 2, title: "Space Odyssey", image: movie2, rating: "9.2" },
    { id: 3, title: "Eternal Love", image: movie3, rating: "7.8" },
    { id: 4, title: "Comedy Central", image: movie4, rating: "8.1" },
    { id: 5, title: "Night Hunter", image: movie1, rating: "8.5" },
  ];

  const episodes = [
    { id: 1, title: "Episode 1: The Beginning", duration: "45:20" },
    { id: 2, title: "Episode 2: Rising Tensions", duration: "48:15" },
    { id: 3, title: "Episode 3: The Revelation", duration: "52:30" },
    { id: 4, title: "Episode 4: Point of No Return", duration: "46:45" },
    { id: 5, title: "Episode 5: The Showdown", duration: "55:10" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Movie Header */}
      <section className="relative pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-[300px,1fr] gap-8 animate-fade-in">
            {/* Movie Poster */}
            <div className="relative">
              <img
                src={movie1}
                alt="Night Hunter"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Movie Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Night Hunter
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
                      8.5
                    </div>
                    <span>IMDb Rating</span>
                  </div>
                  <span>•</span>
                  <span>2024</span>
                  <span>•</span>
                  <span>2h 15m</span>
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm">
                    Action
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm">
                    Thriller
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm">
                    Crime
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Watch Now
                </Button>
                <Button variant="outline" size="lg">
                  <Plus className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A seasoned detective must navigate the dark underbelly of the city to track down
                  a serial killer who operates under the cover of night. As the investigation deepens,
                  he discovers a conspiracy that reaches the highest levels of power, forcing him to
                  question everything he believes in. Time is running out, and the hunter may become
                  the hunted.
                </p>
              </div>

              {/* Cast & Crew */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Director</h4>
                  <p className="text-muted-foreground">Christopher Nolan</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cast</h4>
                  <p className="text-muted-foreground">
                    Jake Gyllenhaal, Emma Stone, Michael B. Jordan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Episodes</h2>
        <div className="grid gap-4">
          {episodes.map((episode, index) => (
            <div
              key={episode.id}
              className="bg-card hover:bg-card/80 rounded-lg p-4 flex items-center gap-4 cursor-pointer transition-all hover:scale-[1.02] border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{episode.title}</h3>
                <p className="text-sm text-muted-foreground">{episode.duration}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Play className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="container mx-auto px-4 py-8">
        <ContentCarousel title="More Like This" items={recommendations} />
      </section>
    </div>
  );
};

export default MovieDetail;
