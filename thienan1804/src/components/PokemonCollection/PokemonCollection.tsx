import React from "react";
// External file
// Internal file
import { Details, PokemonDetails } from "../../interfaceGlobal";
import PokemonList from "./PokemonList";
// Styles
import classNames from "classnames/bind";
import styles from "./PokemonCollection.module.scss";
const cx = classNames.bind(styles);
interface Props {
  pokemons: PokemonDetails[];
  viewDetails: Details;
  setViewDetails: React.Dispatch<React.SetStateAction<Details>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetails, setViewDetails } = props;

  const handleViewPokemon = (id: number) => {
    if (!viewDetails.isOpened) {
      setViewDetails({
        id: id,
        isOpened: true,
      });
    }
  };
  return (
    <section
      className={cx(
        viewDetails.isOpened
          ? "collection-container-active"
          : "collection-container"
      )}
    >
      {viewDetails.isOpened ? (
        <div className={cx("overlay")}></div>
      ) : (
        <div className=""></div>
      )}
      {pokemons.map((pokemon) => (
        <div className={cx("")} onClick={() => handleViewPokemon(pokemon.id)}>
          <PokemonList
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            viewDetails={viewDetails}
            setViewDetails={setViewDetails}
          />
        </div>
      ))}
    </section>
  );
};

export default PokemonCollection;
