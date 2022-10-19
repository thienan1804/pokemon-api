import React, { useEffect, useState } from "react";

// External file
import axios from "axios";

// Internal file
import PokemonCollection from "./components/PokemonCollection";

// Styles
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { Pokemon } from "./interfaceGlobal";
const cx = classNames.bind(styles);

interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  return (
    <div className={cx("App")}>
      <div className={cx("container")}>
        <header className={cx("pokemon-header")}>Pokemon</header>
        <PokemonCollection pokemons={pokemons} />
      </div>
    </div>
  );
};

export default App;
