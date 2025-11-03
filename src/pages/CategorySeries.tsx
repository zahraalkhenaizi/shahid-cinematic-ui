import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star } from "lucide-react";

// Mock data - replace with real data from your backend
const mockSeries = {
  arabic: [
    { id: 1, title: "Desert Storm", rating: 8.5, year: 2024, seasons: 2 },
    { id: 2, title: "Cairo Nights", rating: 9.0, year: 2023, seasons: 3 },
    { id: 3, title: "The Kingdom", rating: 8.8, year: 2024, seasons: 1 },
    { id: 4, title: "Sands of Time", rating: 7.9, year: 2023, seasons: 2 },
  ],
  foreign: [
    { id: 5, title: "The Crown", rating: 9.2, year: 2024, seasons: 6 },
    { id: 6, title: "Dark Waters", rating: 8.7, year: 2023, seasons: 3 },
    { id: 7, title: "Breaking Dawn", rating: 9.5, year: 2024, seasons: 5 },
    { id: 8, title: "The Bridge", rating: 8.4, year: 2023, seasons: 4 },
  ],
  indian: [
    { id: 9, title: "Mumbai Diaries", rating: 8.6, year: 2024, seasons: 2 },
    { id: 10, title: "Sacred Games", rating: 9.1, year: 2023, seasons: 2 },
    { id: 11, title: "Delhi Crime", rating: 8.9, year: 2024, seasons: 3 },
    { id: 12, title: "Mirzapur", rating: 8.7, year: 2023, seasons: 3 },
  ],
  turkish: [
    { id: 13, title: "Istanbul Tales", rating: 8.3, year: 2024, seasons: 2 },
    { id: 14, title: "The Ottoman", rating: 8.8, year: 2023, seasons: 4 },
    { id: 15, title: "Love in Anatolia", rating: 7.9, year: 2024, seasons: 1 },
    { id: 16, title: "Bosphorus Nights", rating: 8.5, year: 2023, seasons: 3 },
  ],
  korean: [
    { id: 17, title: "Seoul Station", rating: 9.3, year: 2024, seasons: 2 },
    { id: 18, title: "Squid Game", rating: 9.6, year: 2023, seasons: 2 },
    { id: 19, title: "Kingdom", rating: 9.0, year: 2024, seasons: 3 },
    { id: 20, title: "Hellbound", rating: 8.7, year: 2023, seasons: 2 },
  ],
  action: [
    { id: 21, title: "Strike Force", rating: 8.9, year: 2024, seasons: 4 },
    { id: 22, title: "The Assassin", rating: 8.6, year: 2023, seasons: 2 },
    { id: 23, title: "Combat Zone", rating: 8.4, year: 2024, seasons: 3 },
    { id: 24, title: "The Hunter", rating: 8.8, year: 2023, seasons: 2 },
  ],
  drama: [
    { id: 25, title: "Broken Hearts", rating: 8.7, year: 2024, seasons: 3 },
    { id: 26, title: "Family Ties", rating: 9.1, year: 2023, seasons: 5 },
    { id: 27, title: "The Journey", rating: 8.5, year: 2024, seasons: 2 },
    { id: 28, title: "Life's Path", rating: 8.9, year: 2023, seasons: 4 },
  ],
  comedy: [
    { id: 29, title: "Laugh Out Loud", rating: 8.3, year: 2024, seasons: 3 },
    { id: 30, title: "Office Hours", rating: 8.8, year: 2023, seasons: 6 },
    { id: 31, title: "Friends Forever", rating: 9.2, year: 2024, seasons: 10 },
    { id: 32, title: "The Sitcom", rating: 8.6, year: 2023, seasons: 4 },
  ],
};

const categoryTitles: { [key: string]: string } = {
  arabic: "Arabic Series",
  foreign: "Foreign Series",
  indian: "Indian Series",
  turkish: "Turkish Series",
  korean: "Korean Series",
  action: "Action Series",
  drama: "Drama Series",
  comedy: "Comedy Series",
};

const CategorySeries = () => {
  const { categoryId } = useParams();
  const series = mockSeries[categoryId as keyof typeof mockSeries] || [];
  const categoryTitle = categoryTitles[categoryId as string] || "Series";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link to="/series">
            <Button variant="ghost" className="mb-4 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-2 text-shadow">{categoryTitle}</h1>
          <p className="text-muted-foreground">Discover amazing series in this category</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {series.map((show) => (
            <Link key={show.id} to={`/series/detail/${show.id}`}>
              <Card className="overflow-hidden border-border bg-card/50 backdrop-blur-sm card-hover cursor-pointer">
                <div className="aspect-[2/3] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-6xl opacity-20">📺</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{show.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{show.rating}</span>
                    </div>
                    <span>{show.year}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{show.seasons} Season{show.seasons > 1 ? 's' : ''}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategorySeries;
