import { useParams } from "react-router-dom";

import { Typography, AppBar, Toolbar } from "@material-ui/core";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import bodyHtmlConfig from "../utils/bodyHtmlConfig"
import bg_Home from "../img/bg_Home.jpg"
import "../styles/pokemon.css"

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

const Pokemon = () => {
  let { name } = useParams();
  const [pokeDetails, setPokeDetails] = useState({
    img:'',
    moves:[],
    types:[]
  });

  const getDetails = () => {
    axios
      .get(`${API_URL}${name}`)
      .then((res) => setPokeDetails({
        img : res.data.sprites.other.dream_world.front_default,
        moves : res.data.moves.map((obj) =>
                {
                  return {name:obj.move.name, url:obj.move.url}
                }),
        types : res.data.types.map((obj)=>obj.type.name)
      }))
      .catch((err) => console.error);
  }

  //Actualiza el background
  bodyHtmlConfig(bg_Home)

  useEffect(() => {
    getDetails()
  },[])

  return (
    <div className="pokeContainer">
      <AppBar className='AppBar' position="static">
        <Toolbar>
          <Typography component="h1">{name.toUpperCase()}</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <img className="pokemonImage" src={pokeDetails.img} alt="Pokeimage"/>
        <h2>Moves:</h2>
          <ul className="ulPokeList">
              {
                pokeDetails.moves.map((obj)=>(
                  <li key={obj.name}>
                    <Link to={{
                      pathname: `/pokemon/${name}/moves/${obj.name}`,
                      url: obj.url}}
                      className="moveLink"
                    >{obj.name}</Link>
                  </li>
                ))
              }
          </ul>
        <h2>Types:</h2>
          <ul className="ulPokeList">
              {
                pokeDetails.types.map((type)=>(
                  <li key={type} className="typeName">{type}</li>
                ))
              }
          </ul>
      </div>
    </div>);
};

export default Pokemon;
