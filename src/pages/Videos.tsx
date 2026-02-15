import Header from "@/components/Header";
import VideoGrid from "@/components/VideoGrid";
import AdPopup from "@/components/AdPopup";

const Videos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full px-2 sm:px-4 py-4">
        <h2 className="text-xl font-bold text-foreground mb-4 px-1">All Videos</h2>
        <VideoGrid />
      </main>
      <AdPopup />
    </div>
  );
};

export default Videos;
