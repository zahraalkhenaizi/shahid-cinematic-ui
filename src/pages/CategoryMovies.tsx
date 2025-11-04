import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Laugh, Drama, Heart, Ghost, Zap, AlertTriangle, Map, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const genres = [
  { id: "comedy", title: "Comedy", icon: Laugh, color: "from-accent to-accent/60" },
  { id: "drama", title: "Drama", icon: Drama, color: "from-primary to-primary/60" },
  { id: "romance", title: "Romance", icon: Heart, color: "from-accent to-secondary" },
  { id: "horror", title: "Horror", icon: Ghost, color: "from-destructive to-primary" },
  { id: "action", title: "Action", icon: Zap, color: "from-primary to-accent" },
  { id: "thriller", title: "Thriller", icon: AlertTriangle, color: "from-secondary to-accent" },
  { id: "adventure", title: "Adventure", icon: Map, color: "from-primary to-secondary" },
  { id: "family", title: "Family", icon: Users, color: "from-accent to-primary" },
  { id: "scifi", title: "Sci-Fi", icon: Rocket, color: "from-primary to-destructive" },
];

const languageTitles: Record<string, string> = {
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
  const languageTitle = languageTitles[categoryId || ""] || "Movies";

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
          <h1 className="text-4xl font-bold mb-2 text-shadow">{languageTitle}</h1>
          <p className="text-muted-foreground">Select a genre to explore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map((genre) => {
            const Icon = genre.icon;
            return (
              <Link key={genre.id} to={`/movies/${categoryId}/${genre.id}`}>
                <Card className="relative overflow-hidden h-48 border-border bg-card/50 backdrop-blur-sm card-hover cursor-pointer group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 p-4 rounded-full bg-card/80 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{genre.title}</h3>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CategoryMovies;
