import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import MovieList from "../components/movieList";
//import useMovie from "../hooks/useMovie";
import { getMovie, getRec } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import Cast from "../components/cast"


const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const {data: recommendations, error: recError, isLoading: recIsLoading, isError: recIsError} = useQuery(
    ["getRec", {id: id}],
    getRec
  )

  if (isLoading || recIsLoading) {
    return <Spinner />;
  }

  if (isError || recIsError) {
    return <h1>{error.message || recError.message}</h1>;
  }

  console.log(recommendations)
  const recMovies = recommendations.results.splice(0, 5)
  const castMembers = movie.credits.cast.splice(0, 12)

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <Cast cast={castMembers} />
          </PageTemplate>
          <MovieList movies={recMovies} action={(movie) => {
            return null
          }}
          />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;