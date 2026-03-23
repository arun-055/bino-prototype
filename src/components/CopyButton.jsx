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
   className=" px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-500 transition "
    >
      <div className="text-white mb-1" >Copy</div>
    </button>
  );
};

export default CopyButton;