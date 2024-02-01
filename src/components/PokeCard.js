import React from "react";
import GrassIcon from "../assets/grass.webp";
import FireIcon from "../assets/fire.webp";
import Normal from "../assets/normal.webp";
import Fairy from "../assets/fairy.webp";
import Electric from "../assets/electric.webp";
// Add other type icons as needed

const getTypeIcon = (typeName) => {
  // Map type names to corresponding icons
  const typeIcons = {
    electric: Electric,
    grass: GrassIcon,
    fairy: Fairy,
    fire: FireIcon,
    normal: Normal,
    // Add other type names and corresponding icons
  };

  // Return the icon for the given type name
  return typeIcons[typeName.toLowerCase()] || null;
};

const renderTypes = (types) => {
  return (
    <p>
      {types.map((type, index) => (
        <span key={index}>
          <img
            className="type-icon"
            src={getTypeIcon(type?.type.name)}
            alt={type?.type.name}
          />
          {/* {type?.type.name} */}
        </span>
      ))}
    </p>
  );
};

const renderPokemonData = (pokemonData) => {
  return pokemonData?.map(({ name, sprites, types, stats, species }) => (
    <>
      <div className="card__header">{name}</div>
      <div className="card__body" key={name}>
        <img
          className="card__image"
          src={sprites?.other["official-artwork"].front_default}
          alt={name}
        />
        <div className="card__details">
          <p>{renderTypes(types)}</p>
          <p>{species.flavor_text_entries[1].flavor_text}</p>
          <p>
            <strong>HP:</strong>{" "}
            {stats.find((stat) => stat.stat.name === "hp")?.base_stat}
          </p>
        </div>
      </div>
    </>
  ));
};

const PokeCard = ({ pokemonData }) => {
  return (
    <div className="card">
      <div className="card__foil"></div>
      {renderPokemonData(pokemonData)}
    </div>
  );
};

export default PokeCard;
