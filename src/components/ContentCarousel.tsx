import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Content {
  id: number;
  title: string;
  image: string;
  rating?: string;
}

interface ContentCarouselProps {
  title: string;
  items: Content[];
  type?: "movie" | "series";
}

const ContentCarousel = ({ title, items, type = "movie" }: ContentCarouselProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        id={`carousel-${title}`}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 cursor-pointer group"
            onClick={() => navigate(type === "series" ? `/series/${item.id}` : `/movie/${item.id}`)}
          >
            <div className="relative overflow-hidden rounded-lg card-hover">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              {item.rating && (
                <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
                  {item.rating}
                </div>
              )}
              <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-foreground font-semibold text-sm text-shadow">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;
