import Header from "@/components/Header";
import ThorinStarGrid from "@/components/ThorinStarCard";
import AdPopup from "@/components/AdPopup";

const ThorinStars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full px-2 sm:px-4 py-4">
        <h2 className="text-xl font-bold text-foreground mb-4 px-1">ThorinStars</h2>
        <ThorinStarGrid />
      </main>
      <AdPopup />
    </div>
  );
};

export default ThorinStars;
