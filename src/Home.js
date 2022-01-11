import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Button, Typography } from "@material-ui/core";

import axios from "axios";

import Pagination from "./Pagination";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pageControl, setPageControl] = useState({
    previous:'',
    next:''
  });

  const loadMore = () => {
    useInitialLoad(API_URL, '?limit=40')
  };

  //########## Custom Hook ##########
  function useInitialLoad(url, limit='') {
    axios
      .get(`${url}${limit}`)
      .then((res) => {
        setPageControl({
          previous:res.data.previous,
          next:res.data.next
        })
        setPokemons(res.data.results)
      })
      .catch((err) => console.error);
  }

  useEffect(() => {
    useInitialLoad(API_URL)
  }, []);

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
      <Pagination useInitialLoad={useInitialLoad} pageControl={pageControl} />
    </div>
  );
};

export default Home;
