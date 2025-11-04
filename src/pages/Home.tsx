import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import heroBanner from "@/assets/hero-banner.jpg";

// Arabic Movies
import arabicComedyMovie from "@/assets/arabic-comedy-movie.jpg";
import ghadarMovie from "@/assets/ghadar-movie.jpg";
import mantahabMovie from "@/assets/mantahab-movie.jpg";
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
import asheqMovie from "@/assets/asheq-movie.jpg";
import ayyamMovie from "@/assets/ayyam-movie.jpg";
import aghlaSearMovie from "@/assets/aghla-sear-movie.jpg";
import restartMovie from "@/assets/restart-movie.jpg";
import chicOneBabeMovie from "@/assets/chic-one-babe-movie.jpg";
import movie122 from "@/assets/122-movie.jpg";

// English Movies
import avatarMovie from "@/assets/avatar-movie.jpg";
import aliceWonderlandMovie from "@/assets/alice-wonderland-movie.jpg";
import howToTrainDragonMovie from "@/assets/how-to-train-dragon-movie.jpg";
import maleficentMovie from "@/assets/maleficent-movie.jpg";
import beautyBeastMovie from "@/assets/beauty-beast-movie.jpg";
import elementalMovie from "@/assets/elemental-movie.jpg";
import braveMovie from "@/assets/brave-movie.jpg";
import annabelleMovie from "@/assets/annabelle-movie.jpg";
import titanicMovie from "@/assets/titanic-movie.jpg";
import meBeforeYouMovie from "@/assets/me-before-you-movie.jpg";
import howToLoseAGuyMovie from "@/assets/how-to-lose-a-guy-movie.jpg";
import twilightMovie from "@/assets/twilight-movie.jpg";
import princessDiariesMovie from "@/assets/princess-diaries-movie.jpg";
import parentTrapMovie from "@/assets/parent-trap-movie.jpg";
import corpseBrideMovie from "@/assets/corpse-bride-movie.jpg";
import devilWearsPradaMovie from "@/assets/devil-wears-prada-movie.jpg";
import whiteChicksMovie from "@/assets/white-chicks-movie.jpg";
import mrMrsSmithMovie from "@/assets/mr-mrs-smith-movie.jpg";

// Indian Movies
import krrishMovie from "@/assets/krrish-movie.jpg";
import raoneMovie from "@/assets/raone-movie.jpg";
import happyNewYearMovie from "@/assets/happy-new-year-movie.jpg";
import dilwaleMovie from "@/assets/dilwale-movie.jpg";
import bajrangiBhaijaanMovie from "@/assets/bajrangi-bhaijaan-movie.jpg";
import mujhseDostiKarogeMovie from "@/assets/mujhse-dosti-karoge-movie.jpg";
import kabhiKhushiKabhieGhamMovie from "@/assets/kabhi-khushi-kabhie-gham-movie.jpg";

// Turkish Movies
import kogustakiMucizeMovie from "@/assets/7-kogustaki-mucize-movie.jpg";

const Home = () => {
  // Arabic Movies
  const arabicMovies = [
    { id: 1, title: "البعض لا يذهب للمأذون مرتين", image: arabicComedyMovie, rating: "8.5" },
    { id: 2, title: "بحبك", image: ghadarMovie, rating: "7.8" },
    { id: 3, title: "قصة حب", image: mantahabMovie, rating: "7.5" },
    { id: 4, title: "فيها ايه يعني ؟", image: villa69Movie, rating: "7.2" },
    { id: 5, title: "مين يصدق", image: minYesaddaqMovie, rating: "7.8" },
    { id: 6, title: "الخلية", image: elKhaleyaMovie, rating: "7.5" },
    { id: 7, title: "عمهم", image: omommmMovie, rating: "7.3" },
    { id: 8, title: "فاصل من اللحظات اللذيذة", image: qaharHadidaMovie, rating: "7.6" },
    { id: 9, title: "الحرب العالمية الثالثة", image: worldWar3Movie, rating: "7.4" },
    { id: 10, title: "وقفة رجالة", image: woqoRabaqaMovie, rating: "7.5" },
    { id: 11, title: "ماما حامل", image: babaHamilMovie, rating: "7.3" },
    { id: 12, title: "حامل اللقب", image: helmAlqalbMovie, rating: "7.2" },
    { id: 13, title: "وش في وش", image: weshWeshMovie, rating: "7.4" },
    { id: 14, title: "عاشق", image: asheqMovie, rating: "8.1" },
    { id: 15, title: "أيام", image: ayyamMovie, rating: "8.1" },
    { id: 16, title: "أغلى سعر", image: aghlaSearMovie, rating: "7.8" },
    { id: 17, title: "ريستارت", image: restartMovie, rating: "7.6" },
    { id: 18, title: "شيك ون بيبيه", image: chicOneBabeMovie, rating: "7.4" },
    { id: 19, title: "122", image: movie122, rating: "7.8" },
  ];

  // English/Foreign Movies  
  const englishMovies = [
    { id: 20, title: "Avatar", image: avatarMovie, rating: "7.9" },
    { id: 21, title: "Alice in Wonderland", image: aliceWonderlandMovie, rating: "6.4" },
    { id: 22, title: "How to Train Your Dragon", image: howToTrainDragonMovie, rating: "8.1" },
    { id: 23, title: "Maleficent", image: maleficentMovie, rating: "7.0" },
    { id: 24, title: "Beauty and the Beast", image: beautyBeastMovie, rating: "7.1" },
    { id: 25, title: "Elemental", image: elementalMovie, rating: "7.0" },
    { id: 26, title: "Brave", image: braveMovie, rating: "7.1" },
    { id: 27, title: "Annabelle Comes Home", image: annabelleMovie, rating: "5.9" },
    { id: 28, title: "Titanic", image: titanicMovie, rating: "7.9" },
    { id: 29, title: "Me Before You", image: meBeforeYouMovie, rating: "7.4" },
    { id: 30, title: "How to Lose a Guy in 10 Days", image: howToLoseAGuyMovie, rating: "6.4" },
    { id: 31, title: "Twilight", image: twilightMovie, rating: "5.3" },
    { id: 32, title: "The Princess Diaries", image: princessDiariesMovie, rating: "6.4" },
    { id: 33, title: "The Parent Trap", image: parentTrapMovie, rating: "6.6" },
    { id: 34, title: "Corpse Bride", image: corpseBrideMovie, rating: "7.3" },
    { id: 35, title: "The Devil Wears Prada", image: devilWearsPradaMovie, rating: "6.9" },
    { id: 36, title: "White Chicks", image: whiteChicksMovie, rating: "5.8" },
    { id: 37, title: "Mr. & Mrs. Smith", image: mrMrsSmithMovie, rating: "6.5" },
  ];

  // Indian Movies
  const indianMovies = [
    { id: 38, title: "Krrish", image: krrishMovie, rating: "6.4" },
    { id: 39, title: "Ra.One", image: raoneMovie, rating: "4.8" },
    { id: 40, title: "Happy New Year", image: happyNewYearMovie, rating: "5.0" },
    { id: 41, title: "Dilwale", image: dilwaleMovie, rating: "5.1" },
    { id: 42, title: "Bajrangi Bhaijaan", image: bajrangiBhaijaanMovie, rating: "8.1" },
    { id: 43, title: "Mujhse Dosti Karoge", image: mujhseDostiKarogeMovie, rating: "5.2" },
    { id: 44, title: "Kabhi Khushi Kabhie Gham", image: kabhiKhushiKabhieGhamMovie, rating: "7.4" },
  ];

  // Turkish Movies
  const turkishMovies = [
    { id: 45, title: "7. Koğuştaki Mucize", image: kogustakiMucizeMovie, rating: "8.2" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Featured Content"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 animate-slide-up">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">
              The Last Guardian
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-shadow">
              In a world on the brink of destruction, one hero must rise to save humanity.
              An epic tale of courage, sacrifice, and redemption.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                <Play className="h-5 w-5" />
                Watch Now
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                <Info className="h-5 w-5" />
                More Info
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
                  9.1
                </div>
                <span className="text-muted-foreground">IMDb Rating</span>
              </div>
              <span className="text-muted-foreground">2024 • 2h 25m • Action, Drama</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Carousels */}
      <section className="container mx-auto px-4 py-12 space-y-8">
        <ContentCarousel title="Arabic Movies" items={arabicMovies} />
        <ContentCarousel title="English / Foreign Movies" items={englishMovies} />
        <ContentCarousel title="Indian Movies" items={indianMovies} />
        <ContentCarousel title="Turkish Movies" items={turkishMovies} />
      </section>
    </div>
  );
};

export default Home;
