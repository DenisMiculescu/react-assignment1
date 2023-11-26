import React, { useState } from "react";
import { getPopularActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Tooltip from '@mui/material/Tooltip';
import ActorList from "../components/actorList";
import { TextField } from "@mui/material";

const getPopularActorsPage = (props) => {
  const [name, setName] = useState("");
  const { data, error, isLoading, isError } = useQuery('popularactors', getPopularActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.results;

  const displayedActors = actors.filter((actor) => {
    return actor.name.toLowerCase().includes(name.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <TextField
        id="filled-search"
        label="Search actors"
        type="search"
        variant="filled"
        value={name}
        onChange={handleSearchChange}
      />
      <ActorList actors={displayedActors} />
    </>
  );
};

export default getPopularActorsPage;
