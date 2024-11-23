import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]); // New watchlist state
  const [myReviews, setMyReviews] = useState({});

  // Favorites methods
  const addToFavorites = (movie) => {
    if (!favorites.includes(movie.id)) {
      setFavorites([...favorites, movie.id]);
    }
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  // Watchlist methods
  const addToWatchlist = (movie) => {
    if (!watchlist.includes(movie.id)) {
      setWatchlist([...watchlist, movie.id]);
    }
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((mId) => mId !== movie.id));
  };

  // Reviews methods
  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  // Utility method
  const isFavorite = (movieId) => favorites.includes(movieId);
  const isInWatchlist = (movieId) => watchlist.includes(movieId);

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchlist,
        myReviews,
        addToFavorites,
        removeFromFavorites,
        addToWatchlist,
        removeFromWatchlist,
        addReview,
        isFavorite,
        isInWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;