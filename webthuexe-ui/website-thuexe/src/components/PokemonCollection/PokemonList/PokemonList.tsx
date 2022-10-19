import React from "react";

// External file
// Internal file
// Styles
import classNames from "classnames/bind";
import styles from "../PokemonCollection.module.scss";
const cx = classNames.bind(styles);

interface Props {
  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image } = props;
  return (
    <section className={cx("pokemon-list-container")}>
      <p className={cx("pokemon-name")}>{name}</p>
      <img src={image} alt="Pokemon" />
    </section>
  );
};

export default PokemonList;
