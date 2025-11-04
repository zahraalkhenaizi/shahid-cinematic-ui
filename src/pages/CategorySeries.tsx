import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import wkaanYaLaylaSeries from "@/assets/wkaan-ya-layla-movie.jpg";
import jetSalimaSeries from "@/assets/jet-salima-series.jpg";
import casablancaSeries from "@/assets/casablanca-series.jpg";
import raniaWaSakeenaSeries from "@/assets/rania-wa-sakeena-series.jpg";
import ahlaSultanSeries from "@/assets/ahla-sultan-series.jpg";
import azmiAshganSeries from "@/assets/azmi-ashgan-series.jpg";
import salonZahraSeries from "@/assets/salon-zahra-series.jpg";
import jumanSeries from "@/assets/juman-series.jpg";
import streetSorrowSeries from "@/assets/street-sorrow-series.jpg";
import highSchoolGirlsSeries from "@/assets/high-school-girls-series.jpg";
import gunesinKizlariSeries from "@/assets/gunesin-kizlari-series.jpg";
import kirginCiceklerSeries from "@/assets/kirgin-cicekler-series.jpg";
import kiralikAskSeries from "@/assets/kiralik-ask-series.jpg";
import issPyaarKoKyaNaamDoonSeries from "@/assets/iss-pyaar-ko-kya-naam-doon-series.jpg";

const languageTitles: Record<string, string> = {
  arabic: "Arabic Series",
  foreign: "Foreign Series",
  indian: "Indian Series",
  turkish: "Turkish Series",
  korean: "Korean Series",
};

// Mock series data organized by language and genre
const seriesByLanguageAndGenre: Record<string, Record<string, any[]>> = {
  arabic: {
    drama: [
      { id: 13, title: "جمّان", image: jumanSeries, rating: "8.5" },
      { id: 14, title: "من شارع الحزن إلى...", image: streetSorrowSeries, rating: "8.7" },
      { id: 15, title: "بنات الثانوي", image: highSchoolGirlsSeries, rating: "8.3" },
      { id: 1, title: "الهوى سلطان", image: ahlaSultanSeries, rating: "8.3" },
      { id: 7, title: "غرفة ٢٠٧", image: azmiAshganSeries, rating: "8.6" },
      { id: 2, title: "Desert Storm", image: "/placeholder.svg", rating: "8.5" },
      { id: 3, title: "Cairo Nights", image: "/placeholder.svg", rating: "9.0" },
      { id: 4, title: "The Kingdom", image: "/placeholder.svg", rating: "8.8" },
      { id: 5, title: "Sands of Time", image: "/placeholder.svg", rating: "7.9" },
      { id: 6, title: "The Nile", image: "/placeholder.svg", rating: "8.3" },
    ],
    comedy: [
      { id: 6, title: "جت سليمة", image: jetSalimaSeries, rating: "8.2" },
      { id: 10, title: "رانيا وسكينة", image: raniaWaSakeenaSeries, rating: "8.0" },
      { id: 7, title: "Laugh Nights", image: "/placeholder.svg", rating: "7.8" },
      { id: 8, title: "Cairo Comedy", image: "/placeholder.svg", rating: "8.1" },
      { id: 9, title: "Family Laughs", image: "/placeholder.svg", rating: "7.5" },
    ],
    action: [
      { id: 9, title: "كازابلانكا", image: casablancaSeries, rating: "8.6" },
      { id: 10, title: "The Chase", image: "/placeholder.svg", rating: "8.4" },
      { id: 11, title: "Desert Warriors", image: "/placeholder.svg", rating: "8.0" },
    ],
    romance: [
      { id: 12, title: "صالون زهرة", image: salonZahraSeries, rating: "8.4" },
      { id: 11, title: "ونحب تاني ليه", image: wkaanYaLaylaSeries, rating: "8.2" },
    ],
  },
  foreign: {
    drama: [
      { id: 13, title: "The Crown", image: "/placeholder.svg", rating: "9.2" },
      { id: 14, title: "Dark Waters", image: "/placeholder.svg", rating: "8.7" },
      { id: 15, title: "Breaking Dawn", image: "/placeholder.svg", rating: "9.5" },
      { id: 16, title: "The Bridge", image: "/placeholder.svg", rating: "8.4" },
      { id: 17, title: "Northern Lights", image: "/placeholder.svg", rating: "8.9" },
    ],
    comedy: [
      { id: 24, title: "The Office", image: "/placeholder.svg", rating: "9.0" },
      { id: 25, title: "Brooklyn Nine-Nine", image: "/placeholder.svg", rating: "8.4" },
    ],
  },
  indian: {
    drama: [
      { id: 19, title: "Iss Pyaar Ko Kya Naam Doon?", image: issPyaarKoKyaNaamDoonSeries, rating: "8.1" },
      { id: 26, title: "Mumbai Diaries", image: "/placeholder.svg", rating: "8.6" },
      { id: 27, title: "Sacred Games", image: "/placeholder.svg", rating: "9.1" },
      { id: 28, title: "Delhi Crime", image: "/placeholder.svg", rating: "8.9" },
      { id: 29, title: "Mirzapur", image: "/placeholder.svg", rating: "8.7" },
    ],
    comedy: [
      { id: 32, title: "Panchayat", image: "/placeholder.svg", rating: "8.8" },
      { id: 33, title: "The Family Man", image: "/placeholder.svg", rating: "8.7" },
    ],
  },
  turkish: {
    drama: [
      { id: 16, title: "Güneşin Kızları", image: gunesinKizlariSeries, rating: "7.9" },
      { id: 17, title: "Kırgın Çiçekler", image: kirginCiceklerSeries, rating: "7.7" },
      { id: 34, title: "Istanbul Tales", image: "/placeholder.svg", rating: "8.3" },
      { id: 35, title: "The Ottoman", image: "/placeholder.svg", rating: "8.8" },
      { id: 36, title: "Love in Anatolia", image: "/placeholder.svg", rating: "7.9" },
      { id: 37, title: "Bosphorus Nights", image: "/placeholder.svg", rating: "8.5" },
    ],
    romance: [
      { id: 18, title: "Kiralık Aşk", image: kiralikAskSeries, rating: "7.6" },
      { id: 38, title: "Endless Love", image: "/placeholder.svg", rating: "7.6" },
      { id: 39, title: "Ask Laftan Anlamaz", image: "/placeholder.svg", rating: "8.0" },
    ],
  },
  korean: {
    drama: [
      { id: 46, title: "It's Okay to Not Be Okay", image: "/placeholder.svg", rating: "8.7" },
      { id: 47, title: "Hospital Playlist", image: "/placeholder.svg", rating: "9.1" },
      { id: 48, title: "Reply 1988", image: "/placeholder.svg", rating: "9.0" },
    ],
    romance: [
      { id: 49, title: "Crash Landing on You", image: "/placeholder.svg", rating: "8.7" },
      { id: 50, title: "Goblin", image: "/placeholder.svg", rating: "8.6" },
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
};

const CategorySeries = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const languageTitle = languageTitles[categoryId || ""] || "Series";
  const seriesByGenre = seriesByLanguageAndGenre[categoryId || ""] || {};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link to="/series">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Categories
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-shadow">{languageTitle}</h1>
        </div>

        {Object.entries(seriesByGenre).map(([genreId, series]) => (
          <ContentCarousel
            key={genreId}
            title={genreTitles[genreId] || genreId}
            items={series}
            type="series"
          />
        ))}
      </main>
    </div>
  );
};

export default CategorySeries;
