import React from "react";
import BugIcon from "../assets/bug.webp";
import DarkIcon from "../assets/dark.webp";
import DragonIcon from "../assets/dragon.webp";
import ElectricIcon from "../assets/electric.webp";
import FairyIcon from "../assets/fairy.webp";
import FightingIcon from "../assets/fighting.webp";
import FireIcon from "../assets/fire.webp";
import FlyingIcon from "../assets/flying.webp";
import GhostIcon from "../assets/ghost.webp";
import GrassIcon from "../assets/grass.webp";
import GroundIcon from "../assets/ground.webp";
import IceIcon from "../assets/ice.webp";
import NormalIcon from "../assets/normal.webp";
import PoisonIcon from "../assets/poison.webp";
import PsychicIcon from "../assets/psychic.webp";
import RockIcon from "../assets/rock.webp";
import SteelIcon from "../assets/steel.webp";
import WaterIcon from "../assets/water.webp";

// Add other type icons as needed
const getTypeInfo = (typeName) => {
  // Map type names to corresponding icons and colors
  const typeMappings = {
    bug: { icon: BugIcon, color: "#A8B820" },
    dark: { icon: DarkIcon, color: "#705848" },
    dragon: { icon: DragonIcon, color: "#7038F8" },
    electric: { icon: ElectricIcon, color: "#F8D030" },
    fairy: { icon: FairyIcon, color: "#EE99AC" },
    fighting: { icon: FightingIcon, color: "#C03028" },
    fire: { icon: FireIcon, color: "#F08030" },
    flying: { icon: FlyingIcon, color: "#A890F0" },
    ghost: { icon: GhostIcon, color: "#705898" },
    grass: { icon: GrassIcon, color: "#78C850" },
    ground: { icon: GroundIcon, color: "#E0C068" },
    ice: { icon: IceIcon, color: "#98D8D8" },
    normal: { icon: NormalIcon, color: "#A8A878" },
    poison: { icon: PoisonIcon, color: "#A040A0" },
    psychic: { icon: PsychicIcon, color: "#F85888" },
    rock: { icon: RockIcon, color: "#B8A038" },
    steel: { icon: SteelIcon, color: "#B8B8D0" },
    water: { icon: WaterIcon, color: "#6890F0" },
  };

  const typeInfo = typeMappings[typeName.toLowerCase()];

  if (typeInfo) {
    return typeInfo;
  } else {
    // Default to some values if the type is not found
    return {
      icon: NormalIcon,
      color: NormalIcon,
    };
  }
};

const renderTypes = (types) => {
  return (
    <div className="card__type flex justify-end absolute top-0 right-1">
      {types.map((type, index) => {
        const typeName = type?.type.name;
        const { icon: TypeIcon, color: TypeColor } = getTypeInfo(typeName);

        return (
          <span
            key={index}
            className="flex justify-center items-center w-40 h-40 mr-2"
          >
            <img
              className="rounded-full p-1.5 object-cover"
              src={TypeIcon}
              alt={typeName}
              style={{
                backgroundColor: TypeColor,
                backgroundImage: `linear-gradient(to bottom, ${TypeColor} 0%, rgba(241, 232, 232, 0.7) 50%, ${TypeColor} 100%)`,
                boxShadow: `rgba(0, 0, 0, 0.7) -2px 3px 10px, rgba(2, 2, 2, 0.2) 10px 5px 10px`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
};

// Move speciesColor, getSpeciesColorValue, and bgColorClass to the outer scope
let speciesColor = "default-color";

const getSpeciesColorValue = (color) => {
  switch (color) {
    case "yellow":
      return "#F7D02C";
    case "red":
      return "#C22E28";
    case "blue":
      return "#6390F0";
    case "green":
      return "#7AC74C";
    case "light-blue":
      return "#96D9D6";
    case "purple":
      return "#A33EA1";
    case "tan":
      return "#E2BF65";
    case "light-purple":
      return "#A98FF3";
    case "pink":
      return "#F95587";
    case "lime":
      return "#A6B91A";
    case "yellowish-brown":
      return "#B6A136";
    case "dark-purple":
      return "#735797";
    case "dark-blue":
      return "#6F35FC";
    case "dark-brown":
      return "#705746";
    case "light-gray":
      return "#B7B7CE";
    case "light-pink":
      return "#D685AD";
    case "brown":
      return "#A8A77A";
    case "white":
      return "#96D9D6";
    case "gray":
      return "#C22E28";
    case "black":
      return "#705746";
    default:
      return "#A8A77A";
  }
};
let bgColorClass = getSpeciesColorValue(speciesColor);

const renderPokemonData = (pokemonData) => {
  return pokemonData?.map(({ id, name, sprites, types, stats, species }) => (
    <div key={id}>
      <div
        className="card__header p-2.5 text-center relative opacity-90"
        style={{ backgroundColor: bgColorClass }}
      >
        {name.toUpperCase()}
      </div>
      <div className="card__body" key={name}>
        <img
          className="card__image"
          src={sprites?.other["official-artwork"].front_default}
          alt={name}
        />
        <div
          className="card__details"
          style={{ backgroundColor: bgColorClass }}
        >
          {renderTypes(types)}
          <p className="p-2">{pokemonData[0]?.randomEnglishFlavorText}</p>
        </div>
        <div className="card__hp text-center bg-white rounded-lg px-10 mx-24 -mt-2 shadow-md flex justify-center">
          <strong>HP:</strong>{" "}
          {stats.find((stat) => stat.stat.name === "hp")?.base_stat}
        </div>
      </div>
    </div>
  ));
};

const PokeCard = ({ pokemonData }) => {
  speciesColor = pokemonData?.[0]?.species?.color?.name || "default-color";
  bgColorClass = getSpeciesColorValue(speciesColor);
  return (
    <div className={"card"} style={{ backgroundColor: bgColorClass }}>
      <div className="card__foil"></div>
      {renderPokemonData(pokemonData)}
    </div>
  );
};

export default PokeCard;
