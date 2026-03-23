import { movies } from "./card.js";  
import Card from "./Card.jsx"; 

//to do implementation
const MovieCards = ({ likedMovies, toggleLike, showLiked }) => {


  const displayMovies = showLiked ? likedMovies : movies;

  return (
    <div className="min-h-screen bg-black p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {displayMovies.length === 0 ? (
          <p className="text-white">No liked movies yet 😢</p>
        ) : (
          displayMovies.map((movie) => (
            <Card
              key={movie.id}
              name={movie.name}
              image={movie.image}
              link={movie.link}
              movie={movie}                
              likedMovies={likedMovies}    
              toggleLike={toggleLike}   
            />
          ))
        )}

      </div>
    </div>
  );
};

export default MovieCards;