import toast from "react-hot-toast";
import CopyButton from "./CopyButton";

export default function Card({
  name,
  image,
  link,
  movie,
  likedMovies,
  toggleLike,
}) {
  const handleShare = () => {
    const message = `🎬 ${name}\n\nWatch here:\n${link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const isLiked = likedMovies?.some((m) => m.id === movie.id);

  const handleLike = () => {
    if (!isLiked) {
      toast.success("Saved into Watchlist");
    }
    toggleLike(movie);
  };

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition flex flex-col h-full">
      
      <img 
        src={image} 
        alt={name} 
        className="w-full aspect-[2/3] object-cover block" 
      />

      <div className="p-3 flex flex-col flex-1 justify-between">
        <h2 className="text-white font-medium truncate mb-2">{name}</h2>

        <div className="flex items-center gap-2 mt-auto">
          <button
            onClick={handleLike}
            className="text-xl px-3 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition shrink-0"
          >
            {isLiked ? "❤️" : "💚"}
          </button>

          <button
            onClick={handleShare}
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-green-600 transition flex-grow"
          >
            Share on WhatsApp
          </button>

          <div className="shrink-0">
            <CopyButton movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
}