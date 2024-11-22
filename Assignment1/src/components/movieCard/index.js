import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export default function MovieCard({ movie, action }) {
  const { favorites, watchlist, addToFavorites, removeFromFavorites, addToWatchlist, removeFromWatchlist } =
    useContext(MoviesContext);

  // Check if the movie is in favorites or watchlist
  const isFavorite = favorites.includes(movie.id);
  const isInWatchlist = watchlist.includes(movie.id);

  return (
    <Card>
      <CardHeader
        avatar={
          isFavorite ? (
            <Avatar sx={{ backgroundColor: "red" }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {/* Favorite Button */}
        {isFavorite ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeFromFavorites(movie)}
          >
            Remove Favorite
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => addToFavorites(movie)}
          >
            Add to Favorites
          </Button>
        )}

        {/* Watchlist Button */}
        {isInWatchlist ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => removeFromWatchlist(movie)}
          >
            Remove Watchlist
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => addToWatchlist(movie)}
          >
            Add to Watchlist
          </Button>
        )}

        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
