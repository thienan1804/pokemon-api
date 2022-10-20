export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface Details {
  id: number;
  isOpened: boolean;
}

// Extends Poekmon: thêm những thuộc tính của Pokemon
export interface PokemonDetails extends Pokemon {
  // ' ?' : Không nhất thiết phải cần abilities
  abilities?: {
    ability: string;
    name: string;
  }[];
}
