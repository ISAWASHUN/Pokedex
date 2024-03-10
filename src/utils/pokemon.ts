import { PokemonListResponse, PokemonData } from "../types/type";

export const getAllPokemon = async (url: string): Promise<PokemonListResponse> => {
  const response = await fetch(url);
  const data = await response.json();
  return data as PokemonListResponse;
};

export const getPokemon = async (url: string): Promise<PokemonData> => {
  const response = await fetch(url);
  const data = await response.json();
  return data as PokemonData;
};
