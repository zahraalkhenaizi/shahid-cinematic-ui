import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Globe, Film, Languages, MapPin, Tv, Sparkles, Heart, Flower } from "lucide-react";

const categories = [
  { id: "arabic", title: "Arabic", icon: Globe, color: "from-primary to-primary/60" },
  { id: "foreign", title: "English / Foreign", icon: Film, color: "from-accent to-accent/60" },
  { id: "indian", title: "Indian", icon: MapPin, color: "from-primary to-accent" },
  { id: "russian", title: "Russian", icon: Languages, color: "from-secondary to-primary" },
  { id: "turkish", title: "Turkish", icon: Heart, color: "from-accent to-primary" },
  { id: "animation", title: "Animation", icon: Sparkles, color: "from-primary to-secondary" },
  { id: "korean", title: "Korean", icon: Flower, color: "from-destructive to-accent" },
  { id: "japanese", title: "Japanese", icon: Tv, color: "from-secondary to-accent" },
];

const Series = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-shadow">Browse Series</h1>
          <p className="text-muted-foreground">Explore series by category and region</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} to={`/series/${category.id}`}>
                <Card className="relative overflow-hidden h-48 border-border bg-card/50 backdrop-blur-sm card-hover cursor-pointer group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 p-4 rounded-full bg-card/80 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
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

export default Series;
