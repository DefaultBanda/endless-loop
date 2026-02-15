import Header from "@/components/Header";
import AdPopup from "@/components/AdPopup";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full px-2 sm:px-4 py-4">
        <h2 className="text-xl font-bold text-foreground mb-4 px-1">Community</h2>
        <div className="grid gap-4">
          {[
            { user: "ButterLover69", time: "2h ago", text: "that corn getting buttered had me SWEATING 🥵🌽" },
            { user: "xX_CobMaster_Xx", time: "5h ago", text: "bro the popping party video is INSANE... those kernels went everywhere 💀" },
            { user: "ADK_Fan_Official", time: "8h ago", text: "why does ADK keep showing up in my ads... not complaining tho 👀" },
            { user: "DanTheMan420", time: "12h ago", text: "clicked 'Hot singles in CALGARY' and Dan appeared. 10/10 would click again" },
            { user: "ThorinStar_Simp", time: "1d ago", text: "THORINSTAR 4 has 156 videos and I've watched every single one. twice." },
            { user: "FreeViagra_Scam", time: "1d ago", text: "I actually clicked the free viagra ad... why did it just show me more corn 😭" },
            { user: "AyaSimp2026", time: "2d ago", text: "the Aya ad popup is the best thing about this site fr fr" },
          ].map((post, i) => (
            <div key={i} className="bg-card rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary" />
                <span className="text-sm font-medium text-foreground">{post.user}</span>
                <span className="text-xs text-muted-foreground">{post.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{post.text}</p>
            </div>
          ))}
        </div>
      </main>
      <AdPopup />
    </div>
  );
};

export default Community;
