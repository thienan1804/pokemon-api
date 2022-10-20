import React, { useState, useEffect } from "react";

// External file
// Internal file
import { Details } from "../../../interfaceGlobal";
// Styles
import classNames from "classnames/bind";
import styles from "../PokemonCollection.module.scss";
const cx = classNames.bind(styles);

interface Props {
  viewDetails: Details;
  setViewDetails: React.Dispatch<React.SetStateAction<Details>>;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetails, setViewDetails } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    // Được chọn khi id pokemon trùng với id mình chọn
    setIsSelected(id === viewDetails?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewDetails]);

  const handleCloseDetails = () => {
    setViewDetails({
      id: 0,
      isOpened: false,
    });
  };

  return (
    <div>
      {isSelected ? (
        <section className={cx("pokemon-list-detailed")}>
          <div className={cx("detail-container")}>
            <p className={cx("detail-close")} onClick={handleCloseDetails}>
              X
            </p>
            <div className={cx("detail-info")}>
              <img src={image} alt="Pokemon" className={cx("detail-img")} />
              <p className={cx("detail-name")}>{name}</p>
            </div>
            <div className={cx("detail-skill")}>
              <p className={cx("detail-ability")}>Abilities:</p>
              {abilities?.map((ab: any) => (
                <div className="">{ab.ability.name}</div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className={cx("pokemon-list-container")}>
          <p className={cx("pokemon-name")}>{name}</p>
          <img src={image} alt="Pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
