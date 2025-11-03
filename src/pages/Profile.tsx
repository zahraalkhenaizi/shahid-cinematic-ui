import { Crown, History, Heart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";

const Profile = () => {
  const watchHistory = [
    { id: 1, title: "Night Hunter", image: movie1, progress: 75 },
    { id: 2, title: "Space Odyssey", image: movie2, progress: 30 },
    { id: 3, title: "Eternal Love", image: movie3, progress: 100 },
  ];

  const myList = [
    { id: 4, title: "Night Hunter", image: movie1 },
    { id: 5, title: "Space Odyssey", image: movie2 },
    { id: 6, title: "Eternal Love", image: movie3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-12 animate-fade-in">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-muted-foreground mb-4">john.doe@email.com</p>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Subscription Card */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 animate-slide-up">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-accent" />
              <CardTitle>Premium Subscription</CardTitle>
            </div>
            <CardDescription>
              Your premium plan is active and will renew on May 15, 2024
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Plan</p>
                <p className="font-semibold">Premium Monthly</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Next Billing</p>
                <p className="font-semibold">$12.99 on May 15, 2024</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Benefits</p>
                <p className="font-semibold">HD, 4K, No Ads</p>
              </div>
            </div>
            <Button variant="outline">Manage Subscription</Button>
          </CardContent>
        </Card>

        {/* Watch History */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <History className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Continue Watching</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {watchHistory.map((item) => (
              <div key={item.id} className="bg-card rounded-lg overflow-hidden card-hover cursor-pointer">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.progress}% completed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My List */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">My List</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {myList.map((item) => (
              <div key={item.id} className="relative group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-lg card-hover"
                />
                <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                  <h3 className="text-foreground font-semibold text-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
