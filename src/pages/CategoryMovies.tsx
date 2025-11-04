import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import arabicComedyMovie from "@/assets/arabic-comedy-movie.jpg";
import ghadarMovie from "@/assets/ghadar-movie.jpg";
import mantahabMovie from "@/assets/mantahab-movie.jpg";
import wkaanYaLaylaMovie from "@/assets/wkaan-ya-layla-movie.jpg";
import villa69Movie from "@/assets/villa-69-movie.jpg";
import minYesaddaqMovie from "@/assets/min-yesaddaq-movie.jpg";
import elKhaleyaMovie from "@/assets/el-khaleya-movie.jpg";
import omommmMovie from "@/assets/3omomm-movie.jpg";
import qaharHadidaMovie from "@/assets/qahar-hadida-movie.jpg";
import worldWar3Movie from "@/assets/world-war-3-movie.jpg";
import woqoRabaqaMovie from "@/assets/woqo-rabaqa-movie.jpg";
import babaHamilMovie from "@/assets/baba-hamil-movie.jpg";
import helmAlqalbMovie from "@/assets/helm-alqalb-movie.jpg";
import weshWeshMovie from "@/assets/wesh-wesh-movie.jpg";
import avatarMovie from "@/assets/avatar-movie.jpg";
import aliceWonderlandMovie from "@/assets/alice-wonderland-movie.jpg";
import howToTrainDragonMovie from "@/assets/how-to-train-dragon-movie.jpg";
import maleficentMovie from "@/assets/maleficent-movie.jpg";
import beautyBeastMovie from "@/assets/beauty-beast-movie.jpg";
import elementalMovie from "@/assets/elemental-movie.jpg";
import braveMovie from "@/assets/brave-movie.jpg";
import asheqMovie from "@/assets/asheq-movie.jpg";
import ayyamMovie from "@/assets/ayyam-movie.jpg";

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
      { 
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
      },
      { id: 23, title: "فاصل من اللحظات اللذيذة", image: qaharHadidaMovie, rating: "7.6" },
      { id: 24, title: "الحرب العالمية الثالثة", image: worldWar3Movie, rating: "7.4" },
      { id: 25, title: "وقفة رجالة", image: woqoRabaqaMovie, rating: "7.5" },
      { id: 26, title: "ماما حامل", image: babaHamilMovie, rating: "7.3" },
      { id: 27, title: "حامل اللقب", image: helmAlqalbMovie, rating: "7.2" },
      { id: 28, title: "وش في وش", image: weshWeshMovie, rating: "7.4" },
      { id: 2, title: "Zaki Chan", image: "/placeholder.svg", rating: "7.1" },
      { id: 3, title: "Al Ens Wa Al Nems", image: "/placeholder.svg", rating: "7.5" },
      { id: 4, title: "X Large", image: "/placeholder.svg", rating: "7.0" },
      { id: 5, title: "Nems Bond", image: "/placeholder.svg", rating: "6.8" },
    ],
    drama: [
      { id: 68, title: "عاشق", image: asheqMovie, rating: "8.1" },
      { id: 69, title: "أيام", image: ayyamMovie, rating: "8.1" },
      { id: 6, title: "The Blue Elephant", image: "/placeholder.svg", rating: "8.5" },
      { id: 7, title: "Al-Haram", image: "/placeholder.svg", rating: "8.9" },
      { id: 19, title: "فيها ايه يعني ؟", image: villa69Movie, rating: "7.2" },
      { id: 20, title: "مين يصدق", image: minYesaddaqMovie, rating: "7.8" },
      { id: 8, title: "Microphone", image: "/placeholder.svg", rating: "7.5" },
      { id: 9, title: "Clash", image: "/placeholder.svg", rating: "7.4" },
      { id: 10, title: "The Yacoubian Building", image: "/placeholder.svg", rating: "7.3" },
    ],
    action: [
      { id: 11, title: "122", image: "/placeholder.svg", rating: "7.8" },
      { id: 21, title: "الخلية", image: elKhaleyaMovie, rating: "7.5" },
      { id: 22, title: "عمهم", image: omommmMovie, rating: "7.3" },
      { id: 12, title: "The Treasure", image: "/placeholder.svg", rating: "7.3" },
      { id: 13, title: "Clash of the Titans", image: "/placeholder.svg", rating: "7.0" },
    ],
    romance: [
      { id: 14, title: "بحبك", image: ghadarMovie, rating: "7.8" },
      { id: 15, title: "قصة حب", image: mantahabMovie, rating: "7.5" },
      { id: 16, title: "A Day for Women", image: "/placeholder.svg", rating: "7.2" },
      { id: 17, title: "Asmaa", image: "/placeholder.svg", rating: "7.5" },
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
    disney: [
      { id: 61, title: "Avatar", image: avatarMovie, rating: "7.9" },
      { id: 62, title: "Alice in Wonderland", image: aliceWonderlandMovie, rating: "6.4" },
      { id: 63, title: "How to Train Your Dragon", image: howToTrainDragonMovie, rating: "8.1" },
      { id: 64, title: "Maleficent", image: maleficentMovie, rating: "7.0" },
      { id: 65, title: "Beauty and the Beast", image: beautyBeastMovie, rating: "7.1" },
      { id: 66, title: "Elemental", image: elementalMovie, rating: "7.0" },
      { id: 67, title: "Brave", image: braveMovie, rating: "7.1" },
    ],
    family: [
      { id: 66, title: "Elemental", image: elementalMovie, rating: "7.0" },
      { id: 67, title: "Brave", image: braveMovie, rating: "7.1" },
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
  adventure: "Adventure",
  family: "Family",
  fantasy: "Fantasy",
  disney: "Disney Movies",
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
