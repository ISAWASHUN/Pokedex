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
