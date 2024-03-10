export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface PokemonData {
  name: string;
  weight: number;
  height: number;
  abilities: Ability[];
  types: Type[];
  sprites: Sprite;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}
export interface Type {
  type: {
    name: string;
    url: string;
  };
}
export interface Sprite {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}
export interface PokemonDataResponse {
  id: number;
  name: string;
  weight: number;
  height: number;
  abilities: Ability[];
  types: Type[];
  sprites: Sprite;
}
