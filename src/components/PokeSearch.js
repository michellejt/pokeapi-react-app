import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";

export default function PokeSearch() {
  const [searchPokemons, setSearchPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  function handleChange(event) {
    // Get the value of the input element
    let value = event.target.value;
    // Convert it to lowercase
    let lowercaseValue = value.toLowerCase();
    // Set the state with the lowercase value
    setSearchPokemons(lowercaseValue);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemons}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemonData([data])); // set the data object to the new state variable - wrapping the object in an array so we can map
  }

  const onClear = () => {
    setPokemonData([]); //setting back to blank arrary (eg.. not as a string "")
    setSearchPokemons([]); //setting the state back to an empty array
  };

  // Use useEffect to log pokemonData whenever it changes
  useEffect(() => {
    console.log("data", pokemonData);
  }, [pokemonData]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center md:text-left md:w-2/5 text-center w-full"
        data-pg-collapsed
      >
        <form className="w-3/4" onSubmit={handleSubmit}>
          <label
            for="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="bg-gray-50 block border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white focus:border-blue-500 focus:ring-blue-500 p-4 ps-10 rounded-lg text-gray-900 w-full"
              placeholder="Find a pokemon!"
              required
              value={searchPokemons}
              onChange={handleChange}
            ></input>
            <button
              className="text-white absolute end-2.5 bottom-[3.25rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              Search
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="button"
              onClick={onClear}
            >
              🔁
            </button>
          </div>
        </form>
      </div>
      <div
        className="right w-full md:w-3/5 py-6 text-center flex items-center justify-center"
        data-pg-collapsed
      >
        <PokeCard pokemonData={pokemonData} />
      </div>
    </>
  );
}
