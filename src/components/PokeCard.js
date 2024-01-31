import React from "react";

const PokeCard = ({ pokemonData }) => {
  return (
    <div className="card">
      <div className="card__foil"></div>
      {pokemonData?.map(({ name, sprites, types, stats, weight }) => (
        <>
          <div className="card__header">{name}</div>
          <div className="card__body" key="{name}">
            <img
              className="card__image"
              src={sprites?.other["official-artwork"].front_default}
              alt={name}
            />
            <div className="card__details">
              <p>
                <strong>Type:</strong>
                {/* there could be more than one type, so we'll iterate over them to display them all */}
                {types.map((type, index) => (
                  <li key={index}>{type?.type.name}</li>
                ))}
              </p>
              <p>
                <strong>Stats:</strong>
                {/* there could be more than one stat, so we'll iterate over them to display them all */}
                {stats.map((stats, index) => (
                  <li key={index}>{stats?.stat.name}</li>
                ))}
              </p>
              <p>
                <strong>Weight:</strong>
                {weight}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default PokeCard;
