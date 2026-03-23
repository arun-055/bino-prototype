import toast from "react-hot-toast";

const CopyButton = ({ movie }) => {
  const link = `https://wa.me/?text=${encodeURIComponent(
    `Check out this movie: ${movie.name}`
  )}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    toast.success("Link copied successfully!");
  };

  return (
    <button onClick={handleCopy}
   className="h-10 px-4 flex items-center justify-center rounded-xl bg-gray-800 hover:bg-gray-700 transition text-white text-sm font-medium shrink-0">
      Copy  
    </button>
  );
};

export default CopyButton;