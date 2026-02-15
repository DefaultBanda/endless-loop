import VideoPlayer from "@/components/VideoPlayer";
import Header from "@/components/Header";
import AdPopup from "@/components/AdPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full px-2 sm:px-4 py-4">
        {/* Section title */}
        <h2 className="text-xl font-bold text-foreground mb-4 px-1">Hot Videos Worldwide</h2>
        <VideoPlayer />
      </main>
      <AdPopup />
    </div>
  );
};

export default Index;
