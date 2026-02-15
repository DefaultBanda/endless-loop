interface ThorinStar {
  id: number;
  name: string;
  videos: number;
  subscribers: string;
  /** Replace with actual avatar import/URL */
  avatar?: string;
}

const PLACEHOLDER_STARS: ThorinStar[] = [
  { id: 1, name: "THORINSTAR 1", videos: 42, subscribers: "1.2M" },
  { id: 2, name: "THORINSTAR 2", videos: 87, subscribers: "890K" },
  { id: 3, name: "THORINSTAR 3", videos: 23, subscribers: "456K" },
  { id: 4, name: "THORINSTAR 4", videos: 156, subscribers: "2.3M" },
  { id: 5, name: "THORINSTAR 5", videos: 34, subscribers: "678K" },
  { id: 6, name: "THORINSTAR 6", videos: 91, subscribers: "1.5M" },
  { id: 7, name: "THORINSTAR 7", videos: 12, subscribers: "234K" },
  { id: 8, name: "THORINSTAR 8", videos: 65, subscribers: "3.1M" },
];

const ThorinStarGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {PLACEHOLDER_STARS.map((star) => (
        <div
          key={star.id}
          className="bg-card rounded-lg p-4 flex flex-col items-center gap-3 cursor-pointer hover:ring-1 hover:ring-primary transition-all group"
        >
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-xs overflow-hidden">
            {star.avatar ? (
              <img src={star.avatar} alt={star.name} className="w-full h-full object-cover" />
            ) : (
              "AVATAR"
            )}
          </div>
          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
            {star.name}
          </h3>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <span>{star.videos} videos</span>
            <span>{star.subscribers} subs</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThorinStarGrid;
