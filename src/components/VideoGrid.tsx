import { ThumbsUp, Eye } from "lucide-react";

interface VideoThumbnail {
  id: number;
  title: string;
  author: string;
  views: string;
  rating: string;
  duration: string;
  hd?: boolean;
  /** Replace with actual thumbnail import/URL */
  thumbnail?: string;
}

const PLACEHOLDER_VIDEOS: VideoThumbnail[] = [
  { id: 1, title: "PLACEHOLDER VIDEO 1", author: "User1", views: "120K", rating: "97%", duration: "12:34", hd: true },
  { id: 2, title: "PLACEHOLDER VIDEO 2", author: "User2", views: "89K", rating: "95%", duration: "08:21", hd: true },
  { id: 3, title: "PLACEHOLDER VIDEO 3", author: "User3", views: "56K", rating: "99%", duration: "15:07" },
  { id: 4, title: "PLACEHOLDER VIDEO 4", author: "User4", views: "234K", rating: "96%", duration: "06:45", hd: true },
  { id: 5, title: "PLACEHOLDER VIDEO 5", author: "User5", views: "45K", rating: "93%", duration: "10:11" },
  { id: 6, title: "PLACEHOLDER VIDEO 6", author: "User6", views: "178K", rating: "98%", duration: "22:03", hd: true },
  { id: 7, title: "PLACEHOLDER VIDEO 7", author: "User7", views: "67K", rating: "94%", duration: "04:59" },
  { id: 8, title: "PLACEHOLDER VIDEO 8", author: "User8", views: "312K", rating: "97%", duration: "18:30", hd: true },
  { id: 9, title: "PLACEHOLDER VIDEO 9", author: "User9", views: "91K", rating: "92%", duration: "07:14" },
  { id: 10, title: "PLACEHOLDER VIDEO 10", author: "User10", views: "150K", rating: "96%", duration: "11:42", hd: true },
  { id: 11, title: "PLACEHOLDER VIDEO 11", author: "User11", views: "28K", rating: "91%", duration: "03:55" },
  { id: 12, title: "PLACEHOLDER VIDEO 12", author: "User12", views: "205K", rating: "99%", duration: "14:20", hd: true },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
      {PLACEHOLDER_VIDEOS.map((video) => (
        <div key={video.id} className="group cursor-pointer">
          {/* Thumbnail */}
          <div className="relative aspect-video bg-secondary rounded overflow-hidden">
            {video.thumbnail ? (
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                THUMBNAIL
              </div>
            )}
            {/* Duration badge */}
            <span className="absolute bottom-1 right-1 bg-background/80 text-foreground text-xs px-1.5 py-0.5 rounded font-medium">
              {video.hd && <span className="text-primary font-bold mr-1">HD</span>}
              {video.duration}
            </span>
          </div>

          {/* Info */}
          <div className="py-1.5 px-0.5">
            <p className="text-sm text-foreground font-medium truncate group-hover:text-primary transition-colors">
              {video.title}
            </p>
            <p className="text-xs text-muted-foreground">{video.author}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
              <span className="flex items-center gap-0.5">
                <Eye className="w-3 h-3" />
                {video.views}
              </span>
              <span className="flex items-center gap-0.5">
                <ThumbsUp className="w-3 h-3" />
                {video.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
