import { Play, Plus, Share2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import { useParams, Link } from "react-router-dom";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import arabicComedyMovie from "@/assets/arabic-comedy-movie.jpg";

// Mock movie database
const moviesDatabase: Record<string, any> = {
  "1": {
    id: 1,
    title: "البعض لا يذهب للمأذون مرتين",
    image: arabicComedyMovie,
    rating: "8.5",
    year: "2021",
    duration: "1h 40m",
    genre: "Comedy / Social",
    language: "Arabic (Egyptian)",
    description: "The film follows Khaled, a well-known media presenter, and his wife Thuraya, a marriage expert. Although they appear like the perfect couple, hidden conflicts arise between them. A sudden system glitch leads to the cancellation of all registered marriage certificates in Egypt—giving couples the chance to 're-choose' their partners. The film humorously explores the question: If you could choose your partner again, would you choose the same person?",
    director: "Ahmed El Gendy",
    writer: "Ayman Wattar",
    cast: "Karim Abdel Aziz, Dina El Sherbiny, Maged El Kedwany, Bayoumi Fouad",
    videoUrl: "https://youtu.be/_jMsLvxCClo?si=3AtJ4NEJYlsX2nAS"
  }
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movie = moviesDatabase[id || "1"] || moviesDatabase["1"];
  const recommendations = [
    { id: 1, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 2, title: "Space Odyssey", image: movie2, rating: "9.2" },
    { id: 3, title: "Eternal Love", image: movie3, rating: "7.8" },
    { id: 4, title: "Comedy Central", image: movie4, rating: "8.1" },
    { id: 5, title: "Night Hunter", image: movie1, rating: "8.5" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
      </section>

      {/* Movie Info Section */}
      <section className="relative -mt-32 z-10">
        <div className="container mx-auto px-4 py-8">
          <Link to="/movies/arabic">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Movies
            </Button>
          </Link>

          <div className="grid md:grid-cols-[300px,1fr] gap-8 animate-fade-in">
            {/* Movie Poster */}
            <div className="relative">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Movie Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
                      {movie.rating}
                    </div>
                    <span>Rating</span>
                  </div>
                  <span>•</span>
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  {movie.genre.split(", ").map((g: string) => (
                    <span key={g} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open(movie.videoUrl, '_blank')}
                >
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
                  {movie.description}
                </p>
              </div>

              {/* Cast & Crew */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Director</h4>
                  <p className="text-muted-foreground">{movie.director}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Writer</h4>
                  <p className="text-muted-foreground">{movie.writer}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Language</h4>
                  <p className="text-muted-foreground">{movie.language}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cast</h4>
                  <p className="text-muted-foreground">
                    {movie.cast}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
