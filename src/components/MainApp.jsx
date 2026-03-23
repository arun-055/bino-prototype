import React, { useState, useEffect } from "react";
import MovieCards from "./MovieCards";


const MainApp = () => {

 
  const [likedMovies, setLikedMovies] = useState(() => {
    const stored = localStorage.getItem("likedMovies");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [showLiked, setShowLiked] = useState(false);


  useEffect(() => {
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
  }, [likedMovies]);

  const toggleLike = (movie) => {
    const alreadyLiked = likedMovies.find((m) => m.id === movie.id);

    if (alreadyLiked) {
      setLikedMovies(likedMovies.filter((m) => m.id !== movie.id));
    } else {
      setLikedMovies([movie, ...likedMovies]);
    }
  };

  return (
    <>
      <MovieCards
        likedMovies={likedMovies}
        toggleLike={toggleLike}
        showLiked={showLiked}
      />
    </>
  );
};

export default MainApp;