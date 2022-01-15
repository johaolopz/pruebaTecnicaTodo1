import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Typography, AppBar,
         Toolbar, Card } from "@material-ui/core";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Pagination from "./Pagination";
import useInitialLoad from "../hooks/useInitialLoad";
import '../styles/global.css'
import bodyHtmlConfig from "../utils/bodyHtmlConfig"
import bg_Home from '../img/bg_Home.jpg';

//Configuración del Componente Item de Material UI
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const API_URL = useSelector(state => state.url)
  const [limit, setLimit]=useState('')
  const pokemons = useSelector(state => state.pokemons)
  const pageControl = useSelector(state => state.pageControl)

  //Actualiza el background
  bodyHtmlConfig(bg_Home)

  //PARA EL LOAD MORE
  const loadMore = () => {
    setLimit('?limit=40')
  };

  useInitialLoad(API_URL, limit)

  return (
    <div className="mainItemsContainer">
      <AppBar className='AppBar' position="static">
        <Toolbar>
          <Typography component="h1">POKEDEX</Typography>
        </Toolbar>
      </AppBar>
      <Pagination />
      <Stack className="pokemonContainer" spacing={1}>
        {pokemons.map((pokemon, index) => (
          <Link key={index} className="pokemonName" to={`/pokemon/${pokemon.name}`}>
            <Item elevation={12} >
              {pokemon.name}
            </Item>
          </Link>
        ))}
      </Stack>
      {
      pageControl.previous === null && 
      (<Button id='loadButton' variant="contained" color="primary" onClick={loadMore}>
        Load More
      </Button>)
      }
      <Pagination />
    </div>
  );
};

export default Home;
