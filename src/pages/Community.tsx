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
            { user: "ThorinOakenshield", time: "1h ago", text: "I did NOT give permission for this website to use my name. My lawyers will be in touch. 🪓" },
            { user: "DanTheDestroyer", time: "2h ago", text: "why is my face on every ad popup... I look good tho ngl 😏" },
            { user: "AyanQueen", time: "3h ago", text: "whoever made this site is getting blocked on everything. also why do I have 3.1M subs here??" },
            { user: "ThorinFanboy", time: "5h ago", text: "Thorin's latest video changed my life. I will never look at an oakenshield the same way again." },
            { user: "DanSimp_Official", time: "6h ago", text: "Dan if you're reading this please notice me I've been clicking your ad for 3 hours straight 🥺" },
            { user: "AyanStanAccount", time: "8h ago", text: "Ayan's content is unmatched. THORINSTAR of the year no question 👑" },
            { user: "CalgaryLocal", time: "10h ago", text: "the 'hot singles in Calgary' ad sent me to Dan's profile and honestly? fair enough" },
            { user: "ThorinHub_Mod", time: "12h ago", text: "reminder: stop reporting Dan's ads as inappropriate. he approved them himself." },
            { user: "AyanVsDan", time: "1d ago", text: "Ayan and Dan collab when?? the internet NEEDS this 🔥" },
            { user: "GollumSneaky", time: "1d ago", text: "my precious... thorinhub... we watches every video yesss 👀" },
          ].map((post, i) => (
            <div key={i} className="bg-card rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs text-muted-foreground font-bold">
                  {post.user[0]}
                </div>
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
