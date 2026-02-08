import { Play } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Play className="w-5 h-5 text-primary-foreground fill-current" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-gradient">Stream</span>
            <span className="text-foreground">Box</span>
          </h1>
        </div>
        <p className="text-muted-foreground text-sm hidden sm:block">Now Playing</p>
      </div>
    </header>
  );
};

export default Header;
