import { Play, Plus, Share2, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import { useParams } from "react-router-dom";
import { useState } from "react";
import wkaanYaLaylaSeries from "@/assets/wkaan-ya-layla-movie.jpg";
import jetSalimaSeries from "@/assets/jet-salima-series.jpg";
import casablancaSeries from "@/assets/casablanca-series.jpg";
import raniaWaSakeenaSeries from "@/assets/rania-wa-sakeena-series.jpg";

// Mock series database
const seriesDatabase: Record<string, any> = {
  "1": {
    id: 1,
    title: "الهوى سلطان",
    image: wkaanYaLaylaSeries,
    rating: "8.3",
    year: "2023",
    duration: "30 episodes",
    genre: "Drama / Romance",
    language: "Arabic",
    description: "A captivating story of love, passion, and destiny. When fate brings two souls together, they must navigate the complexities of family expectations, societal pressures, and their own hearts to find true happiness.",
    director: "Mohammed Ahmed",
    writer: "Sarah Hassan",
    cast: "Ahmed Ezz, Mona Zaki, Khaled El Nabawy",
    videoUrl: "https://youtu.be/example"
  }
};

const SeriesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const series = seriesDatabase[id || "1"] || seriesDatabase["1"];
  const [showVideo, setShowVideo] = useState(false);
  
  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const recommendations = [
    { id: 6, title: "جت سليمة", image: jetSalimaSeries, rating: "8.2" },
    { id: 9, title: "كازابلانكا", image: casablancaSeries, rating: "8.6" },
    { id: 10, title: "رانيا وسكينة", image: raniaWaSakeenaSeries, rating: "8.0" },
    { id: 11, title: "ونحب تاني ليه", image: wkaanYaLaylaSeries, rating: "8.2" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Video Player Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setShowVideo(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <iframe
              src={getYouTubeEmbedUrl(series.videoUrl)}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={series.image}
            alt={series.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
      </section>

      {/* Series Info Section */}
      <section className="relative -mt-32 z-10">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-4"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Series
          </Button>

          <div className="grid md:grid-cols-[300px,1fr] gap-8 animate-fade-in">
            {/* Series Poster */}
            <div className="relative">
              <img
                src={series.image}
                alt={series.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Series Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {series.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
                      {series.rating}
                    </div>
                    <span>Rating</span>
                  </div>
                  <span>•</span>
                  <span>{series.year}</span>
                  <span>•</span>
                  <span>{series.duration}</span>
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  {series.genre.split(" / ").map((g: string) => (
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
                  onClick={() => setShowVideo(true)}
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
                  {series.description}
                </p>
              </div>

              {/* Cast & Crew */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Director</h4>
                  <p className="text-muted-foreground">{series.director}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Writer</h4>
                  <p className="text-muted-foreground">{series.writer}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Language</h4>
                  <p className="text-muted-foreground">{series.language}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cast</h4>
                  <p className="text-muted-foreground">
                    {series.cast}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="container mx-auto px-4 py-8">
        <ContentCarousel title="More Like This" items={recommendations} type="series" />
      </section>
    </div>
  );
};

export default SeriesDetail;
