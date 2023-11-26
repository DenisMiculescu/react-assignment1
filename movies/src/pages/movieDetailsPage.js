import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import MovieList from "../components/movieList";
import { getMovie, getRec } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import Cast from "../components/cast";
import { Grid } from "@mui/material";

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: recommendations, error: recError, isLoading: recIsLoading, isError: recIsError } = useQuery(
    ["getRec", { id: id }],
    getRec
  );

  if (isLoading || recIsLoading) {
    return <Spinner />;
  }

  if (isError || recIsError) {
    return <h1>{error.message || recError.message}</h1>;
  }

  const recMovies = recommendations.results.splice(0, 5);
  const castMembers = movie.credits.cast.splice(0, 14);

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
          <Cast cast={castMembers} />
          <h2>Recommended Movies</h2>
          <Grid container spacing={2}>
            {recMovies.map((recMovie) => (
              <Grid item key={recMovie.id} xs={12} sm={6} md={4} lg={4}>
                <MovieList movies={[recMovie]} action={(movie) => null} />
              </Grid>
            ))}
          </Grid>
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
