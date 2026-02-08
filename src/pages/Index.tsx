import VideoPlayer from "@/components/VideoPlayer";
import Header from "@/components/Header";
import AdPopup from "@/components/AdPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <VideoPlayer />
      </main>
      <AdPopup />
    </div>
  );
};

export default Index;
