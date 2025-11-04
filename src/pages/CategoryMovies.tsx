import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import arabicComedyMovie from "@/assets/arabic-comedy-movie.jpg";

const languageTitles: Record<string, string> = {
  arabic: "Arabic Movies",
  english: "English / Foreign Movies",
  indian: "Indian Movies",
  russian: "Russian Movies",
  turkish: "Turkish Movies",
  korean: "Korean Movies",
  japanese: "Japanese Movies",
};

// Mock movie data organized by language and genre
const moviesByLanguageAndGenre: Record<string, Record<string, any[]>> = {
  arabic: {
    comedy: [
      { id: 1, title: "Rizk", image: arabicComedyMovie, rating: "8.5" },
      { id: 2, title: "Zaki Chan", image: "/placeholder.svg", rating: "7.1" },
      { id: 3, title: "Al Ens Wa Al Nems", image: "/placeholder.svg", rating: "7.5" },
      { id: 4, title: "X Large", image: "/placeholder.svg", rating: "7.0" },
      { id: 5, title: "Nems Bond", image: "/placeholder.svg", rating: "6.8" },
    ],
    drama: [
      { id: 6, title: "The Blue Elephant", image: "/placeholder.svg", rating: "8.5" },
      { id: 7, title: "Al-Haram", image: "/placeholder.svg", rating: "8.9" },
      { id: 8, title: "Microphone", image: "/placeholder.svg", rating: "7.5" },
      { id: 9, title: "Clash", image: "/placeholder.svg", rating: "7.4" },
      { id: 10, title: "The Yacoubian Building", image: "/placeholder.svg", rating: "7.3" },
    ],
    action: [
      { id: 11, title: "122", image: "/placeholder.svg", rating: "7.8" },
      { id: 12, title: "The Treasure", image: "/placeholder.svg", rating: "7.3" },
      { id: 13, title: "Clash of the Titans", image: "/placeholder.svg", rating: "7.0" },
    ],
    romance: [
      { id: 14, title: "A Day for Women", image: "/placeholder.svg", rating: "7.2" },
      { id: 15, title: "Asmaa", image: "/placeholder.svg", rating: "7.5" },
    ],
    thriller: [
      { id: 16, title: "The Island", image: "/placeholder.svg", rating: "7.6" },
      { id: 17, title: "Hepta", image: "/placeholder.svg", rating: "7.4" },
    ],
  },
  english: {
    action: [
      { id: 18, title: "The Dark Knight", image: "/placeholder.svg", rating: "9.0" },
      { id: 19, title: "Inception", image: "/placeholder.svg", rating: "8.8" },
      { id: 20, title: "Mad Max: Fury Road", image: "/placeholder.svg", rating: "8.1" },
      { id: 21, title: "John Wick", image: "/placeholder.svg", rating: "7.4" },
      { id: 22, title: "The Matrix", image: "/placeholder.svg", rating: "8.7" },
    ],
    drama: [
      { id: 23, title: "The Shawshank Redemption", image: "/placeholder.svg", rating: "9.3" },
      { id: 24, title: "Forrest Gump", image: "/placeholder.svg", rating: "8.8" },
      { id: 25, title: "Fight Club", image: "/placeholder.svg", rating: "8.8" },
      { id: 26, title: "The Godfather", image: "/placeholder.svg", rating: "9.2" },
    ],
    scifi: [
      { id: 27, title: "Interstellar", image: "/placeholder.svg", rating: "8.7" },
      { id: 28, title: "Blade Runner 2049", image: "/placeholder.svg", rating: "8.0" },
      { id: 29, title: "Arrival", image: "/placeholder.svg", rating: "7.9" },
    ],
    thriller: [
      { id: 30, title: "Se7en", image: "/placeholder.svg", rating: "8.6" },
      { id: 31, title: "Gone Girl", image: "/placeholder.svg", rating: "8.1" },
    ],
    comedy: [
      { id: 32, title: "The Grand Budapest Hotel", image: "/placeholder.svg", rating: "8.1" },
      { id: 33, title: "Superbad", image: "/placeholder.svg", rating: "7.6" },
    ],
  },
  indian: {
    comedy: [
      { id: 34, title: "3 Idiots", image: "/placeholder.svg", rating: "8.4" },
      { id: 35, title: "PK", image: "/placeholder.svg", rating: "8.1" },
      { id: 36, title: "Andaz Apna Apna", image: "/placeholder.svg", rating: "8.2" },
    ],
    drama: [
      { id: 37, title: "Dangal", image: "/placeholder.svg", rating: "8.3" },
      { id: 38, title: "Lagaan", image: "/placeholder.svg", rating: "8.1" },
      { id: 39, title: "Taare Zameen Par", image: "/placeholder.svg", rating: "8.4" },
    ],
    action: [
      { id: 40, title: "Baahubali", image: "/placeholder.svg", rating: "8.0" },
      { id: 41, title: "War", image: "/placeholder.svg", rating: "6.5" },
    ],
  },
  korean: {
    thriller: [
      { id: 42, title: "Parasite", image: "/placeholder.svg", rating: "8.6" },
      { id: 43, title: "Oldboy", image: "/placeholder.svg", rating: "8.4" },
      { id: 44, title: "Memories of Murder", image: "/placeholder.svg", rating: "8.1" },
      { id: 45, title: "The Wailing", image: "/placeholder.svg", rating: "7.5" },
    ],
    action: [
      { id: 46, title: "Train to Busan", image: "/placeholder.svg", rating: "7.6" },
      { id: 47, title: "The Villainess", image: "/placeholder.svg", rating: "6.7" },
    ],
    drama: [
      { id: 48, title: "Burning", image: "/placeholder.svg", rating: "7.5" },
      { id: 49, title: "Poetry", image: "/placeholder.svg", rating: "7.8" },
    ],
  },
  japanese: {
    family: [
      { id: 50, title: "Spirited Away", image: "/placeholder.svg", rating: "8.6" },
      { id: 51, title: "Your Name", image: "/placeholder.svg", rating: "8.4" },
      { id: 52, title: "My Neighbor Totoro", image: "/placeholder.svg", rating: "8.1" },
    ],
    drama: [
      { id: 53, title: "Seven Samurai", image: "/placeholder.svg", rating: "8.6" },
      { id: 54, title: "Shoplifters", image: "/placeholder.svg", rating: "7.9" },
    ],
  },
  turkish: {
    drama: [
      { id: 55, title: "Winter Sleep", image: "/placeholder.svg", rating: "8.1" },
      { id: 56, title: "Once Upon a Time in Anatolia", image: "/placeholder.svg", rating: "7.8" },
    ],
    family: [
      { id: 57, title: "Miracle in Cell No. 7", image: "/placeholder.svg", rating: "8.2" },
    ],
  },
  russian: {
    drama: [
      { id: 58, title: "Leviathan", image: "/placeholder.svg", rating: "7.6" },
      { id: 59, title: "Loveless", image: "/placeholder.svg", rating: "7.6" },
      { id: 60, title: "The Return", image: "/placeholder.svg", rating: "8.0" },
    ],
  },
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

const CategoryMovies = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const languageTitle = languageTitles[categoryId || ""] || "Movies";
  const moviesByGenre = moviesByLanguageAndGenre[categoryId || ""] || {};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link to="/movies">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Languages
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-shadow">{languageTitle}</h1>
        </div>

        {Object.entries(moviesByGenre).map(([genreId, movies]) => (
          <ContentCarousel
            key={genreId}
            title={genreTitles[genreId] || genreId}
            items={movies}
          />
        ))}
      </main>
    </div>
  );
};

export default CategoryMovies;
