import Header from "@/components/Header";
import AdPopup from "@/components/AdPopup";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full px-2 sm:px-4 py-4">
        <h2 className="text-xl font-bold text-foreground mb-4 px-1">Community</h2>
        <div className="grid gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-card rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary" />
                <span className="text-sm font-medium text-foreground">PLACEHOLDER USER {i}</span>
                <span className="text-xs text-muted-foreground">2h ago</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Placeholder community post content goes here. Replace with real content.
              </p>
            </div>
          ))}
        </div>
      </main>
      <AdPopup />
    </div>
  );
};

export default Community;
