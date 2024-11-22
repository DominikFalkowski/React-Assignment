import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";

const WatchlistPage = () => {
  const { watchlist } = useContext(MoviesContext);
  return (
    <PageTemplate
      title="My Watchlist"
      movies={watchlist}
      action={(movie) => <Button>Remove</Button>}
    />
  );
};

export default WatchlistPage;