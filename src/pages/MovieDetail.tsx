import { Play, Plus, Share2, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContentCarousel from "@/components/ContentCarousel";
import { useParams } from "react-router-dom";
import { useState } from "react";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import arabicComedyMovie from "@/assets/arabic-comedy-movie.jpg";
import titanicMovie from "@/assets/titanic-movie.jpg";
import twilightMovie from "@/assets/twilight-movie.jpg";
import meBeforeYouMovie from "@/assets/me-before-you-movie.jpg";
import howToLoseAGuyMovie from "@/assets/how-to-lose-a-guy-movie.jpg";
import devilWearsPradaMovie from "@/assets/devil-wears-prada-movie.jpg";
import whiteChicksMovie from "@/assets/white-chicks-movie.jpg";
import annabelleMovie from "@/assets/annabelle-movie.jpg";
import corpseBrideMovie from "@/assets/corpse-bride-movie.jpg";
import avatarMovie from "@/assets/avatar-movie.jpg";
import aliceWonderlandMovie from "@/assets/alice-wonderland-movie.jpg";
import howToTrainDragonMovie from "@/assets/how-to-train-dragon-movie.jpg";
import maleficentMovie from "@/assets/maleficent-movie.jpg";
import beautyBeastMovie from "@/assets/beauty-beast-movie.jpg";
import elementalMovie from "@/assets/elemental-movie.jpg";
import braveMovie from "@/assets/brave-movie.jpg";
import princessDiariesMovie from "@/assets/princess-diaries-movie.jpg";
import parentTrapMovie from "@/assets/parent-trap-movie.jpg";

// Mock movie database
const moviesDatabase: Record<string, any> = {
  "1": {
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
  "79": {
    id: 79,
    title: "Titanic",
    image: titanicMovie,
    rating: "7.9",
    year: "1997",
    duration: "3h 14m",
    genre: "Drama / Romance",
    language: "English",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. On April 10, 1912, the Titanic embarked on its maiden voyage from Southampton to New York City. Among the passengers are Rose DeWitt Bukater and her fiancé Caledon Hockley, and Jack Dawson, a poor artist who won his ticket in a poker game. Rose and Jack fall in love despite their different social classes, but their romance is cut short when the ship strikes an iceberg and begins to sink.",
    director: "James Cameron",
    writer: "James Cameron",
    cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    videoUrl: "https://youtu.be/CHekzSiZjrY"
  },
  "82": {
    id: 82,
    title: "Twilight",
    image: twilightMovie,
    rating: "5.3",
    year: "2008",
    duration: "2h 2m",
    genre: "Fantasy / Romance",
    language: "English",
    description: "Bella Swan has always been a little bit different, never quite fitting in with her peers. When her mother remarries and Bella chooses to live with her father in the rainy little town of Forks, Washington, she doesn't expect much of anything to change. But things do change when she meets the mysterious and dazzlingly beautiful Edward Cullen. Edward is a vampire, but he doesn't have fangs and his family is unique in that they choose not to drink human blood. Intelligent and witty, Edward sees straight into Bella's soul. Soon, they are swept up in a passionate, thrilling and unorthodox romance.",
    director: "Catherine Hardwicke",
    writer: "Melissa Rosenberg",
    cast: "Kristen Stewart, Robert Pattinson, Taylor Lautner, Billy Burke",
    videoUrl: "https://youtu.be/QDRLSqm_WVg"
  },
  "80": {
    id: 80,
    title: "Me Before You",
    image: meBeforeYouMovie,
    rating: "7.4",
    year: "2016",
    duration: "1h 50m",
    genre: "Drama / Romance",
    language: "English",
    description: "Louisa 'Lou' Clark lives in a quaint town in the English countryside. With no clear direction in her life, the quirky and creative 26-year-old goes from one job to the next in order to help her tight-knit family make ends meet. Her normally cheery outlook is put to the test when she becomes a caregiver for Will Traynor, a wealthy young banker who became wheelchair-bound in an accident. Despite their polar opposite personalities, Lou and Will develop an unlikely bond as she becomes determined to show him that life is worth living.",
    director: "Thea Sharrock",
    writer: "Jojo Moyes",
    cast: "Emilia Clarke, Sam Claflin, Janet McTeer, Charles Dance",
    videoUrl: "https://youtu.be/Eh993__rOxA"
  },
  "81": {
    id: 81,
    title: "How to Lose a Guy in 10 Days",
    image: howToLoseAGuyMovie,
    rating: "6.4",
    year: "2003",
    duration: "1h 56m",
    genre: "Comedy / Romance",
    language: "English",
    description: "Andie Anderson is a magazine writer who writes the 'How To' column. She's assigned to write an article about 'How to Lose a Guy in 10 Days.' Meanwhile, advertising executive Benjamin Barry makes a bet with his boss that he can make any woman fall in love with him in 10 days. When Andie and Ben meet, their goals clash, leading to hilarious misunderstandings and unexpected romantic complications. As the deadline approaches, both begin to realize they may be falling for each other despite their schemes.",
    director: "Donald Petrie",
    writer: "Kristen Buckley, Brian Regan",
    cast: "Kate Hudson, Matthew McConaughey, Kathryn Hahn, Michael Michele",
    videoUrl: "https://youtu.be/QpxNJv7CTCI"
  },
  "86": {
    id: 86,
    title: "The Devil Wears Prada",
    image: devilWearsPradaMovie,
    rating: "6.9",
    year: "2006",
    duration: "1h 49m",
    genre: "Comedy / Drama",
    language: "English",
    description: "Andrea 'Andy' Sachs, a recent college graduate with dreams of becoming a journalist, lands a job as an assistant to Miranda Priestly, the demanding and ruthless editor-in-chief of Runway fashion magazine. Despite knowing nothing about fashion, Andy takes the job hoping it will open doors in the publishing industry. She soon finds herself struggling to meet Miranda's impossible demands while trying to maintain her relationships and personal values. As Andy becomes more successful in the fashion world, she must decide what kind of person she wants to be.",
    director: "David Frankel",
    writer: "Aline Brosh McKenna",
    cast: "Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci",
    videoUrl: "https://youtu.be/LyZDhg7V3Bo"
  },
  "95": {
    id: 95,
    title: "White Chicks",
    image: whiteChicksMovie,
    rating: "5.8",
    year: "2004",
    duration: "1h 49m",
    genre: "Comedy / Crime",
    language: "English",
    description: "Two disgraced FBI agents, Kevin and Marcus Copeland, go deep undercover as Brittany and Tiffany Wilson, a pair of out-of-touch, privileged white daughters of a billionaire. When the real Wilson sisters are threatened with kidnapping, the agents must transform themselves from African-American men into blonde, blue-eyed socialites to protect their high-society charges. As they navigate Hampton's elite social scene, they find themselves in increasingly hilarious and absurd situations while trying to solve the case and maintain their cover.",
    director: "Keenen Ivory Wayans",
    writer: "Keenen Ivory Wayans, Shawn Wayans, Marlon Wayans",
    cast: "Shawn Wayans, Marlon Wayans, Jaime King, Frankie Faison",
    videoUrl: "https://youtu.be/dK0F9g1S8nE"
  },
  "78": {
    id: 78,
    title: "Annabelle Comes Home",
    image: annabelleMovie,
    rating: "5.9",
    year: "2019",
    duration: "1h 46m",
    genre: "Horror / Mystery",
    language: "English",
    description: "Determined to keep Annabelle from wreaking more havoc, paranormal investigators Ed and Lorraine Warren lock the possessed doll in the artifacts room in their home. But when the doll awakens the room's evil spirits, it soon becomes an unholy night of terror for the Warrens' 10-year-old daughter Judy, her babysitter, and the babysitter's friend. The teenagers must fight for their survival as Annabelle sets her sights on claiming new souls and unleashing a wave of supernatural horrors throughout the house.",
    director: "Gary Dauberman",
    writer: "Gary Dauberman",
    cast: "Mckenna Grace, Madison Iseman, Katie Sarife, Patrick Wilson, Vera Farmiga",
    videoUrl: "https://youtu.be/R5oXZbiYGl4"
  },
  "85": {
    id: 85,
    title: "Corpse Bride",
    image: corpseBrideMovie,
    rating: "7.3",
    year: "2005",
    duration: "1h 17m",
    genre: "Animation / Fantasy",
    language: "English",
    description: "Set in a 19th-century European village, this stop-motion animated film follows Victor, a young man who is whisked away to the underworld and wed to a mysterious Corpse Bride, while his real bride Victoria waits bereft in the land of the living. Though life in the Land of the Dead proves to be a lot more colorful than his strict Victorian upbringing, Victor learns that there is nothing in this world, or the next, that can keep him away from his one true love. A visually stunning tale of love, loss, and letting go.",
    director: "Tim Burton, Mike Johnson",
    writer: "John August, Caroline Thompson, Pamela Pettler",
    cast: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
    videoUrl: "https://youtu.be/AGACeWVdFqo"
  },
  "61": {
    id: 61,
    title: "Avatar",
    image: avatarMovie,
    rating: "7.9",
    year: "2009",
    duration: "2h 42m",
    genre: "Action / Fantasy / Sci-Fi",
    language: "English",
    description: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully, a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman. As a bond with her grows, he is drawn into a battle for the survival of her world. A groundbreaking visual spectacle that explores themes of environmentalism, imperialism, and what it means to be human.",
    director: "James Cameron",
    writer: "James Cameron",
    cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    videoUrl: "https://youtu.be/5PSNL1qE6VY"
  },
  "62": {
    id: 62,
    title: "Alice in Wonderland",
    image: aliceWonderlandMovie,
    rating: "6.4",
    year: "2010",
    duration: "1h 48m",
    genre: "Adventure / Family / Fantasy",
    language: "English",
    description: "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror. This visually stunning reimagining of Lewis Carroll's classic tale follows Alice as she falls down a rabbit hole into Wonderland, a place she visited as a child but doesn't remember. She must choose between following convention or embracing her destiny to save Wonderland from the tyrannical rule of the Red Queen.",
    director: "Tim Burton",
    writer: "Linda Woolverton",
    cast: "Mia Wasikowska, Johnny Depp, Helena Bonham Carter, Anne Hathaway",
    videoUrl: "https://youtu.be/9POCgSRVvf0"
  },
  "63": {
    id: 63,
    title: "How to Train Your Dragon",
    image: howToTrainDragonMovie,
    rating: "8.1",
    year: "2010",
    duration: "1h 38m",
    genre: "Animation / Action / Adventure",
    language: "English",
    description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed. Hiccup, a Viking teenager, lives on the island of Berk, where fighting dragons is a way of life. His progressive views and weird sense of humor make him a misfit, despite being the chief's son. When he shoots down a mysterious Night Fury dragon, he discovers that dragons may not be the mindless beasts everyone believes them to be. This heartwarming tale explores themes of friendship, acceptance, and challenging tradition.",
    director: "Dean DeBlois, Chris Sanders",
    writer: "Dean DeBlois, Chris Sanders",
    cast: "Jay Baruchel, Gerard Butler, America Ferrera, Craig Ferguson",
    videoUrl: "https://youtu.be/oKiYuIsPxYk"
  },
  "64": {
    id: 64,
    title: "Maleficent",
    image: maleficentMovie,
    rating: "7.0",
    year: "2014",
    duration: "1h 37m",
    genre: "Adventure / Family / Fantasy",
    language: "English",
    description: "A beautiful, pure-hearted young woman with stunning black wings, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land. She rises to be the land's fiercest protector, but ultimately suffers a ruthless betrayal that turns her heart to stone. Bent on revenge, Maleficent faces an epic battle with the invading king's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom and perhaps to Maleficent's true happiness as well.",
    director: "Robert Stromberg",
    writer: "Linda Woolverton",
    cast: "Angelina Jolie, Elle Fanning, Sharlto Copley, Sam Riley",
    videoUrl: "https://youtu.be/w-XO4XiRop0"
  },
  "65": {
    id: 65,
    title: "Beauty and the Beast",
    image: beautyBeastMovie,
    rating: "7.1",
    year: "2017",
    duration: "2h 9m",
    genre: "Family / Fantasy / Musical",
    language: "English",
    description: "A live-action adaptation of Disney's animated classic, this enchanting tale follows Belle, a bright, beautiful and independent young woman who is taken prisoner by a Beast in his castle. Despite her fears, she befriends the castle's enchanted staff and learns to look beyond the Beast's hideous exterior and realize the kind heart and soul of the true Prince within. As the two spend time together, a romance begins to bloom, but time is running out. If the Beast does not learn to love another and earn their love in return by the time the last petal falls from an enchanted rose, he and his servants will remain cursed forever.",
    director: "Bill Condon",
    writer: "Stephen Chbosky, Evan Spiliotopoulos",
    cast: "Emma Watson, Dan Stevens, Luke Evans, Josh Gad",
    videoUrl: "https://youtu.be/OvW_L8sTu5E"
  },
  "66": {
    id: 66,
    title: "Elemental",
    image: elementalMovie,
    rating: "7.0",
    year: "2023",
    duration: "1h 41m",
    genre: "Animation / Adventure / Comedy",
    language: "English",
    description: "In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common. Ember, a tough and quick-witted fire element, has spent her whole life in Firetown, never venturing into the diverse Element City that her immigrant parents always warned her about. But when she meets Wade, a fun and sappy water element, they discover that despite their opposite natures, they share core values. As their friendship grows into something more, they must navigate the challenges of a relationship between elements that aren't supposed to mix.",
    director: "Peter Sohn",
    writer: "John Hoberg, Kat Likkel, Brenda Hsueh",
    cast: "Leah Lewis, Mamoudou Athie, Ronnie del Carmen, Shila Ommi",
    videoUrl: "https://youtu.be/hXzcyx9V0xw"
  },
  "67": {
    id: 67,
    title: "Brave",
    image: braveMovie,
    rating: "7.1",
    year: "2012",
    duration: "1h 33m",
    genre: "Animation / Adventure / Fantasy",
    language: "English",
    description: "Set in the Scottish Highlands, Brave follows Merida, a skilled archer and impetuous daughter of King Fergus and Queen Elinor. Determined to carve her own path in life, Merida defies an age-old custom sacred to the unruly lords of the land. When she unleashes chaos in the kingdom by granting herself an ill-fated wish, she must rely on her bravery and archery skills to undo a beastly curse before it's too late. A tale of family bonds, self-discovery, and the courage to change your fate.",
    director: "Mark Andrews, Brenda Chapman",
    writer: "Mark Andrews, Steve Purcell, Brenda Chapman, Irene Mecchi",
    cast: "Kelly Macdonald, Emma Thompson, Billy Connolly, Julie Walters",
    videoUrl: "https://youtu.be/TEHWDA_6e3M"
  },
  "83": {
    id: 83,
    title: "The Princess Diaries",
    image: princessDiariesMovie,
    rating: "6.4",
    year: "2001",
    duration: "1h 55m",
    genre: "Comedy / Family / Romance",
    language: "English",
    description: "Mia Thermopolis is a shy, unpopular fifteen-year-old who lives with her artist mother in San Francisco. Everything changes when her estranged grandmother arrives and reveals that Mia is the crown princess of the small European country of Genovia. With only a few weeks to transform from a socially awkward teenager into a poised princess, Mia must decide whether she wants to accept her royal heritage and all the responsibilities that come with it. Along the way, she discovers her inner strength, finds true friendship, and learns valuable lessons about staying true to herself.",
    director: "Garry Marshall",
    writer: "Gina Wendkos",
    cast: "Anne Hathaway, Julie Andrews, Hector Elizondo, Heather Matarazzo",
    videoUrl: "https://youtu.be/CzcketBxs1w"
  },
  "84": {
    id: 84,
    title: "The Parent Trap",
    image: parentTrapMovie,
    rating: "6.6",
    year: "1998",
    duration: "2h 8m",
    genre: "Adventure / Comedy / Family",
    language: "English",
    description: "Identical twins Annie and Hallie, separated at birth and each raised by one of their biological parents, discover each other for the first time at summer camp and make a pact to swap places. Annie will go to London to meet their mother, and Hallie will go to California to meet their father. But when they realize their parents are meant to be together, the girls scheme to reunite them by switching back. Their plan becomes complicated when their father's new fiancée threatens to come between the family. A heartwarming tale of love, family, and the unbreakable bond between twins.",
    director: "Nancy Meyers",
    writer: "David Swift, Nancy Meyers, Charles Shyer",
    cast: "Lindsay Lohan, Dennis Quaid, Natasha Richardson, Elaine Hendrix",
    videoUrl: "https://youtu.be/CQv-MTSoe-k"
  }
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movie = moviesDatabase[id || "1"] || moviesDatabase["1"];
  const [showVideo, setShowVideo] = useState(false);
  
  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const recommendations = [
    { id: 1, title: "Night Hunter", image: movie1, rating: "8.5" },
    { id: 2, title: "Space Odyssey", image: movie2, rating: "9.2" },
    { id: 3, title: "Eternal Love", image: movie3, rating: "7.8" },
    { id: 4, title: "Comedy Central", image: movie4, rating: "8.1" },
    { id: 5, title: "Night Hunter", image: movie1, rating: "8.5" },
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
              src={getYouTubeEmbedUrl(movie.videoUrl)}
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
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
      </section>

      {/* Movie Info Section */}
      <section className="relative -mt-32 z-10">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-4"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Movies
          </Button>

          <div className="grid md:grid-cols-[300px,1fr] gap-8 animate-fade-in">
            {/* Movie Poster */}
            <div className="relative">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            {/* Movie Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
                      {movie.rating}
                    </div>
                    <span>Rating</span>
                  </div>
                  <span>•</span>
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  {movie.genre.split(", ").map((g: string) => (
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
                  {movie.description}
                </p>
              </div>

              {/* Cast & Crew */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Director</h4>
                  <p className="text-muted-foreground">{movie.director}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Writer</h4>
                  <p className="text-muted-foreground">{movie.writer}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Language</h4>
                  <p className="text-muted-foreground">{movie.language}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cast</h4>
                  <p className="text-muted-foreground">
                    {movie.cast}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="container mx-auto px-4 py-8">
        <ContentCarousel title="More Like This" items={recommendations} />
      </section>
    </div>
  );
};

export default MovieDetail;
