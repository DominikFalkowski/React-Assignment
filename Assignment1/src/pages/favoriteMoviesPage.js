import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = (props) => {
  const toDo = () => true;
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("favorites")); 

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;