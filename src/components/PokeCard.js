import React, { useState, useEffect } from "react";

export default function PokeCard() {

    const [searchPokemons, setSearchPokemons] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);

    function handleChange(event) {
        setSearchPokemons(event.target.value);
     }

     function handleSubmit(event) {
        event.preventDefault();
        const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemons}`;
        fetch(url)
          .then((res) => res.json())
          .then(data => setPokemonData([data])) // set the data object to the new state variable - wrapping the object in an array so we can map   
        }

    const onClear = () => { 
        setPokemonData([]); //setting back to blank arrary (eg.. not as a string "")
        setSearchPokemons([]); //setting the state back to an empty array
    };
    
    // Use useEffect to log pokemonData whenever it changes
    useEffect(() => {
    console.log('data', pokemonData)
    }, [pokemonData])

    
    const pokemonDetails = pokemonData?.map(({name, sprites}) =>
    <>
    <h1>{name}</h1>
    <img src={sprites?.front_default} alt={name} />
    </>
    )     

    return (
    <>
    <h1>Pokemon Search</h1>    
    <form onSubmit={handleSubmit}>
        <input type="text" value={searchPokemons} onChange={handleChange}></input>
        <button type="submit">Search</button>
        <button type="button" onClick={onClear}>Clear</button>
    </form>
    <div>{pokemonDetails}</div>
    </>
    );
 }