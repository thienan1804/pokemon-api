import React, { useEffect, useState } from "react";

// External file

// Internal file
import { Pokemon, Details } from "./interfaceGlobal";
import PokemonCollection from "./components/PokemonCollection";
import request from "./utils/request";

// Styles
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import axios from "axios";
const cx = classNames.bind(styles);

interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  // List Pokemon
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // Load more Pokemon
  const [nextUrl, setNextUrl] = useState<string>("");
  // Loading
  const [loading, setLoading] = useState<boolean>(true);
  // Xem chi tiết
  const [viewDetails, setViewDetails] = useState<Details>({
    id: 0,
    isOpened: false,
  });

  // Call API
  useEffect(() => {
    const getPokemon = async () => {
      const res = await request.get("pokemon?limit=20&offset=20");

      setNextUrl(res.data.next);

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await request.get(`pokemon/${pokemon.name}`);
        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
      });
    };
    getPokemon();
  }, []);

  // Handle load more
  const handleLoadMore = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await request.get(`pokemon/${pokemon.name}`);
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };

  return (
    <div className={cx("App")}>
      <div className={cx("container")}>
        <header className={cx("pokemon-header")}>Pokemon</header>
        <PokemonCollection
          pokemons={pokemons}
          viewDetails={viewDetails}
          setViewDetails={setViewDetails}
        />
        {!viewDetails.isOpened && (
          <div className={cx("btn")} onClick={handleLoadMore}>
            <button>{loading ? "Loading..." : "Load more"}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
