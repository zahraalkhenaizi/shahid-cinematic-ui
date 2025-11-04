import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - in a real app, this would come from an API
const moviesByLanguageGenre: Record<string, Record<string, any[]>> = {
  arabic: {
    comedy: [
      { id: 1, title: "Rizk", rating: 8.2, year: 2016, image: "/placeholder.svg" },
      { id: 2, title: "Zaki Chan", rating: 7.1, year: 2005, image: "/placeholder.svg" },
    ],
    drama: [
      { id: 3, title: "The Blue Elephant", rating: 8.5, year: 2014, image: "/placeholder.svg" },
      { id: 4, title: "Al-Haram", rating: 8.9, year: 1965, image: "/placeholder.svg" },
      { id: 5, title: "Microphone", rating: 7.5, year: 2010, image: "/placeholder.svg" },
    ],
    action: [
      { id: 6, title: "122", rating: 7.8, year: 2019, image: "/placeholder.svg" },
      { id: 7, title: "The Treasure", rating: 7.3, year: 2017, image: "/placeholder.svg" },
    ],
    romance: [
      { id: 8, title: "A Day for Women", rating: 7.2, year: 2016, image: "/placeholder.svg" },
    ],
  },
  english: {
    action: [
      { id: 9, title: "The Dark Knight", rating: 9.0, year: 2008, image: "/placeholder.svg" },
      { id: 10, title: "Inception", rating: 8.8, year: 2010, image: "/placeholder.svg" },
      { id: 11, title: "Mad Max: Fury Road", rating: 8.1, year: 2015, image: "/placeholder.svg" },
    ],
    drama: [
      { id: 12, title: "The Shawshank Redemption", rating: 9.3, year: 1994, image: "/placeholder.svg" },
      { id: 13, title: "Forrest Gump", rating: 8.8, year: 1994, image: "/placeholder.svg" },
    ],
    scifi: [
      { id: 14, title: "Interstellar", rating: 8.7, year: 2014, image: "/placeholder.svg" },
      { id: 15, title: "The Matrix", rating: 8.7, year: 1999, image: "/placeholder.svg" },
    ],
    thriller: [
      { id: 16, title: "Se7en", rating: 8.6, year: 1995, image: "/placeholder.svg" },
    ],
  },
  indian: {
    comedy: [
      { id: 17, title: "3 Idiots", rating: 8.4, year: 2009, image: "/placeholder.svg" },
      { id: 18, title: "PK", rating: 8.1, year: 2014, image: "/placeholder.svg" },
    ],
    drama: [
      { id: 19, title: "Dangal", rating: 8.3, year: 2016, image: "/placeholder.svg" },
      { id: 20, title: "Lagaan", rating: 8.1, year: 2001, image: "/placeholder.svg" },
    ],
  },
  korean: {
    thriller: [
      { id: 21, title: "Parasite", rating: 8.6, year: 2019, image: "/placeholder.svg" },
      { id: 22, title: "Oldboy", rating: 8.4, year: 2003, image: "/placeholder.svg" },
      { id: 23, title: "Memories of Murder", rating: 8.1, year: 2003, image: "/placeholder.svg" },
    ],
    action: [
      { id: 24, title: "Train to Busan", rating: 7.6, year: 2016, image: "/placeholder.svg" },
    ],
  },
  japanese: {
    family: [
      { id: 25, title: "Spirited Away", rating: 8.6, year: 2001, image: "/placeholder.svg" },
      { id: 26, title: "Your Name", rating: 8.4, year: 2016, image: "/placeholder.svg" },
    ],
    drama: [
      { id: 27, title: "Seven Samurai", rating: 8.6, year: 1954, image: "/placeholder.svg" },
      { id: 28, title: "Shoplifters", rating: 7.9, year: 2018, image: "/placeholder.svg" },
    ],
  },
  turkish: {
    drama: [
      { id: 29, title: "Winter Sleep", rating: 8.1, year: 2014, image: "/placeholder.svg" },
      { id: 30, title: "Once Upon a Time in Anatolia", rating: 7.8, year: 2011, image: "/placeholder.svg" },
    ],
    family: [
      { id: 31, title: "Miracle in Cell No. 7", rating: 8.2, year: 2019, image: "/placeholder.svg" },
    ],
  },
  russian: {
    drama: [
      { id: 32, title: "Leviathan", rating: 7.6, year: 2014, image: "/placeholder.svg" },
      { id: 33, title: "Loveless", rating: 7.6, year: 2017, image: "/placeholder.svg" },
      { id: 34, title: "The Return", rating: 8.0, year: 2003, image: "/placeholder.svg" },
    ],
  },
};

const languageTitles: Record<string, string> = {
  arabic: "Arabic",
  english: "English",
  indian: "Indian",
  russian: "Russian",
  turkish: "Turkish",
  korean: "Korean",
  japanese: "Japanese",
};

const genreTitles: Record<string, string> = {
  comedy: "Comedy",
  drama: "Drama",
  romance: "Romance",
  horror: "Horror",
  action: "Action",
  thriller: "Thriller",
  adventure: "Adventure",
  family: "Family",
  scifi: "Sci-Fi",
};

const MovieGenreList = () => {
  const { categoryId, genreId } = useParams<{ categoryId: string; genreId: string }>();
  const movies = moviesByLanguageGenre[categoryId || ""]?.[genreId || ""] || [];
  const languageTitle = languageTitles[categoryId || ""] || "";
  const genreTitle = genreTitles[genreId || ""] || "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link to={`/movies/${categoryId}`}>
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Genres
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2 text-shadow">
            {languageTitle} {genreTitle} Movies
          </h1>
          <p className="text-muted-foreground">{movies.length} movies available</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <Card className="overflow-hidden border-border bg-card/50 backdrop-blur-sm card-hover cursor-pointer group">
                <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-1">{movie.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary" className="text-xs">
                      {movie.year}
                    </Badge>
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="h-3 w-3 fill-accent" />
                      <span className="font-medium">{movie.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MovieGenreList;
