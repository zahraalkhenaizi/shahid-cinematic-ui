import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - in a real app, this would come from an API
const moviesByCategory: Record<string, any[]> = {
  arabic: [
    { id: 1, title: "The Blue Elephant", rating: 8.5, year: 2014, image: "/placeholder.svg" },
    { id: 2, title: "122", rating: 7.8, year: 2019, image: "/placeholder.svg" },
    { id: 3, title: "Rizk", rating: 8.2, year: 2016, image: "/placeholder.svg" },
    { id: 4, title: "Al-Haram", rating: 8.9, year: 1965, image: "/placeholder.svg" },
    { id: 5, title: "Microphone", rating: 7.5, year: 2010, image: "/placeholder.svg" },
    { id: 6, title: "The Treasure", rating: 7.3, year: 2017, image: "/placeholder.svg" },
  ],
  english: [
    { id: 7, title: "Inception", rating: 8.8, year: 2010, image: "/placeholder.svg" },
    { id: 8, title: "The Dark Knight", rating: 9.0, year: 2008, image: "/placeholder.svg" },
    { id: 9, title: "Interstellar", rating: 8.7, year: 2014, image: "/placeholder.svg" },
    { id: 10, title: "Parasite", rating: 8.6, year: 2019, image: "/placeholder.svg" },
    { id: 11, title: "The Shawshank Redemption", rating: 9.3, year: 1994, image: "/placeholder.svg" },
    { id: 12, title: "Forrest Gump", rating: 8.8, year: 1994, image: "/placeholder.svg" },
  ],
  indian: [
    { id: 13, title: "3 Idiots", rating: 8.4, year: 2009, image: "/placeholder.svg" },
    { id: 14, title: "Dangal", rating: 8.3, year: 2016, image: "/placeholder.svg" },
    { id: 15, title: "PK", rating: 8.1, year: 2014, image: "/placeholder.svg" },
    { id: 16, title: "Lagaan", rating: 8.1, year: 2001, image: "/placeholder.svg" },
  ],
  russian: [
    { id: 17, title: "Leviathan", rating: 7.6, year: 2014, image: "/placeholder.svg" },
    { id: 18, title: "Loveless", rating: 7.6, year: 2017, image: "/placeholder.svg" },
    { id: 19, title: "The Return", rating: 8.0, year: 2003, image: "/placeholder.svg" },
  ],
  turkish: [
    { id: 20, title: "Miracle in Cell No. 7", rating: 8.2, year: 2019, image: "/placeholder.svg" },
    { id: 21, title: "Winter Sleep", rating: 8.1, year: 2014, image: "/placeholder.svg" },
    { id: 22, title: "Once Upon a Time in Anatolia", rating: 7.8, year: 2011, image: "/placeholder.svg" },
  ],
  korean: [
    { id: 23, title: "Parasite", rating: 8.6, year: 2019, image: "/placeholder.svg" },
    { id: 24, title: "Oldboy", rating: 8.4, year: 2003, image: "/placeholder.svg" },
    { id: 25, title: "Memories of Murder", rating: 8.1, year: 2003, image: "/placeholder.svg" },
    { id: 26, title: "Train to Busan", rating: 7.6, year: 2016, image: "/placeholder.svg" },
  ],
  japanese: [
    { id: 27, title: "Spirited Away", rating: 8.6, year: 2001, image: "/placeholder.svg" },
    { id: 28, title: "Seven Samurai", rating: 8.6, year: 1954, image: "/placeholder.svg" },
    { id: 29, title: "Your Name", rating: 8.4, year: 2016, image: "/placeholder.svg" },
    { id: 30, title: "Shoplifters", rating: 7.9, year: 2018, image: "/placeholder.svg" },
  ],
};

const categoryTitles: Record<string, string> = {
  arabic: "Arabic Movies",
  english: "English / Foreign Movies",
  indian: "Indian Movies",
  russian: "Russian Movies",
  turkish: "Turkish Movies",
  korean: "Korean Movies",
  japanese: "Japanese Movies",
};

const CategoryMovies = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const movies = moviesByCategory[categoryId || ""] || [];
  const categoryTitle = categoryTitles[categoryId || ""] || "Movies";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link to="/movies">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Categories
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2 text-shadow">{categoryTitle}</h1>
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

export default CategoryMovies;
