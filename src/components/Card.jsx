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

       <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 mt-auto w-full">
 
  <button
    onClick={handleLike}
    className="w-10 h-10 flex items-center justify-center shrink-0 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
  >
    {isLiked ? "❤️" : "💚"}
  </button>


  <button
    onClick={handleShare}
    className="bg-green-500 text-white h-10 rounded-full text-[10px] font-bold whitespace-nowrap hover:bg-green-600 transition px-1 min-w-0 overflow-hidden flex items-center justify-center"
  >
    Share on WhatsApp
  </button>

 
  <div className="w-[60px] flex justify-end shrink-0 ml-0.5"> 
    <CopyButton movie={movie} />
  </div>
</div>
      </div>
    </div>
  );
}