import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function PokeSearch() {
  const [searchPokemons, setSearchPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  function handleChange(event) {
    // Set the state with the value as is (including uppercase)
    setSearchPokemons(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemons.toLowerCase()}`;
    fetch(url)
      .then((res) => res.json())
      .then((pokemonData) => {
        const speciesUrl = pokemonData.species.url;

        fetch(speciesUrl)
          .then((res) => res.json())
          .then((speciesData) => {
            // Combine data from both requests
            const combinedData = { ...pokemonData, species: speciesData };
            setPokemonData([combinedData]);
          })
          .catch((error) =>
            console.error("Error fetching species data", error)
          );
      })
      .catch((error) => console.error("Error fetching Pokemon data", error));
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
              className="block text-blue-900 border bg-opacity-90 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400  focus:border-blue-500 focus:ring-blue-500 p-4 ps-10 rounded-lg w-full bg-gradient-to-tl from-cyan-100 to-lime-50"
              placeholder="Search for a Pokemon!"
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
            <div class="flex justify-end">
              <button
                className="bg-transparent  text-blue-700 font-semibold hover:text-blue-900 py-2 px-4 border-transparent  rounded"
                type="button"
                onClick={onClear}
              >
                <ArrowPathIcon className="h-6 w-6 text-blue-500" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className="right w-full md:w-3/5 py-6 text-left flex items-center justify-center"
        data-pg-collapsed
      >
        <PokeCard pokemonData={pokemonData} />
      </div>
    </>
  );
}
