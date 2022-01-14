import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import Pagination from "./Pagination";
import useInitialLoad from "../hooks/useInitialLoad";

const Home = () => {
  const API_URL = useSelector(state => state.url)
  const [limit, setLimit]=useState('')
  const pokemons = useSelector(state => state.pokemons)
  const pageControl = useSelector(state => state.pageControl)

  //PARA EL LOAD MORE
  const loadMore = () => {
    setLimit('?limit=40')
  };

  useInitialLoad(API_URL, limit)

  return (
    <div>
      <Typography component="h1">POKEDEX</Typography>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      {
      pageControl.previous === null && 
      (<Button variant="contained" color="primary" onClick={loadMore}>
        Load More
      </Button>)
      }
      <Pagination />
    </div>
  );
};

export default Home;
