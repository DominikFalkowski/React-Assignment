import React from "react";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";

const UpcomingMoviesPage = () => {
  const { data, isLoading, error } = useQuery("upcoming", getUpcomingMovies);

  if (isLoading) return <Spinner />;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={data}
      action={(movie) => <Button>More Info</Button>}
    />
  );
};

export default UpcomingMoviesPage;
