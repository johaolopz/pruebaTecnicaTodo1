import { useParams } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

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

  useEffect(() => {
    getDetails()
  },[])

  return (
    <div>
      <Typography component="h1">{name.toUpperCase()}</Typography>
      <img src={pokeDetails.img} alt="Pokeimage"/>
      <h3>Moves:</h3>
        <ul>
            {
              pokeDetails.moves.map((obj)=>(
                <li key={obj.name}>
                  <Link to={{
                    pathname: `/pokemon/${name}/moves/${obj.name}`,
                    url: obj.url}}
                  >{obj.name}</Link>
                </li>
              ))
            }
        </ul>
      <h3>Types:</h3>
        <ul>
            {
              pokeDetails.types.map((type)=>(
                <li key={type}>{type}</li>
              ))
            }
        </ul>
    </div>);
};

export default Pokemon;
