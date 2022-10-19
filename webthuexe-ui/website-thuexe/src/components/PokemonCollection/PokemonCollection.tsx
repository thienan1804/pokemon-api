import React from "react";
// External file
// Internal file
import { Pokemon } from "../../interfaceGlobal";
import PokemonList from "./PokemonList";
// Styles
import classNames from "classnames/bind";
import styles from "./PokemonCollection.module.scss";
const cx = classNames.bind(styles);
interface Props {
  pokemons: Pokemon[];
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons } = props;
  return (
    <section className={cx("collection-container")}>
      {pokemons.map((pokemon) => (
        <div className={cx("")}>
          <PokemonList
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
          />
        </div>
      ))}
    </section>
  );
};

export default PokemonCollection;
