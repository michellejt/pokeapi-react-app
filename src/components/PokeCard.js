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
    <div className="card__type">
      {types.map((type, index) => {
        const typeName = type?.type.name;
        const { icon: TypeIcon, color: TypeColor } = getTypeInfo(typeName);

        return (
          <span key={index}>
            <img
              className="rounded-full"
              src={TypeIcon}
              alt={typeName}
              style={{
                backgroundColor: TypeColor,
                backgroundImage: `linear-gradient(to bottom, ${TypeColor} 0%, rgba(241, 232, 232, 0.7) 50%, ${TypeColor} 100%)`,
                boxShadow: `rgba(92, 92, 92, 0.2) -5px 5px 10px, rgba(211, 210, 210, 0.2) 5px 5px 0px`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
};
const renderPokemonData = (pokemonData) => {
  return pokemonData?.map(({ name, sprites, types, stats, species }) => (
    <>
      <div className="card__header">{name.toUpperCase()}</div>
      <div className="card__body" key={name}>
        <img
          className="card__image"
          src={sprites?.other["official-artwork"].front_default}
          alt={name}
        />
        <div className="card__details">
          <p>{species?.color.name}</p>
          {renderTypes(types)}
          <p>{species.flavor_text_entries[1].flavor_text}</p>
          <div className="card__hp">
            <strong>HP:</strong>{" "}
            {stats.find((stat) => stat.stat.name === "hp")?.base_stat}
          </div>
        </div>
      </div>
    </>
  ));
};

const PokeCard = ({ pokemonData }) => {
  //get the colour to apply as the background
  const speciesColor =
    pokemonData?.[0]?.species?.color?.name || "default-color";
  return (
    <div className={`card bg-${speciesColor}`}>
      <div className="card__foil"></div>
      {renderPokemonData(pokemonData)}
    </div>
  );
};

export default PokeCard;
