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
    <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition">
      
      <img src={image} alt={name} className="w-full h-120 object-cover" />

      <div className="p-3">
        <h2 className="text-white">{name}</h2>

        <div className="flex items-center gap-2 mt-2">

          <button
            onClick={handleLike}
            className="text-2xl px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-500 transition"
          >
            {isLiked ? "❤️" : "💚"}
          </button>

          <button
            onClick={handleShare}
            className="flex-1 bg-green-500 text-white p-2 rounded-full"
          >
            Share on WhatsApp
          </button>
          <CopyButton movie={movie} />
        </div>
      </div>
    </div>
  );
}