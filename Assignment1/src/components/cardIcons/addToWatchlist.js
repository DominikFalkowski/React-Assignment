import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import WatchlistIcon from "@mui/icons-material/Watchlist";

const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
  };

  return (
    <IconButton aria-label="add to Watchlist" onClick={handleAddToWatchlist}>
      <WatchlistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;