import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const TABS = [
  { label: "HOME", path: "/" },
  { label: "VIDEOS", path: "/videos" },
  { label: "THORINSTARS", path: "/thorinstars" },
  { label: "COMMUNITY", path: "/community" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
          <span className="text-2xl font-bold text-foreground">Thorin</span>
          <span className="text-2xl font-bold bg-primary text-primary-foreground px-1.5 rounded">Hub</span>
        </div>

        <div className="hidden sm:flex items-center bg-secondary rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search ThorinHub"
            className="bg-transparent text-foreground text-sm px-3 py-1.5 w-64 outline-none placeholder:text-muted-foreground"
          />
          <button className="bg-muted px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <button className="hover:text-foreground transition-colors">Login</button>
          <button className="hover:text-foreground transition-colors">Sign Up</button>
        </div>
      </div>

      {/* Nav tabs */}
      <nav className="flex border-t-2 border-primary">
        {TABS.map((tab) => (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`flex-1 py-2.5 text-sm font-bold tracking-wider text-center transition-colors ${
              location.pathname === tab.path
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
