import { useEffect, useState } from "react";
import { getAllPokemon } from "./utils/pokemon";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { PokemonListResponse, Pokemon } from "./types/type";

export default function App() {
  const initialUrl: string = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res: PokemonListResponse = await getAllPokemon(initialUrl);
      loadPokemon(res.results);
      setNextUrl(res.next);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: { url: string }[]) => {
    const _pokemonData: Pokemon[] = await Promise.all(data.map(async (pokemon) => {
      const pokemonRecord: Pokemon = await getAllPokemon(pokemon.url);
      return pokemonRecord;
    }));
    setPokemonData(_pokemonData);
  };

  const handleNextPage = async () => {
    setLoading(true);
    const data: PokemonListResponse = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevUrl) return;

    setLoading(true);
    const data: PokemonListResponse = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar/>
      <div className='bg-orange-100'>
        {loading ? (
          <h1>ロード中...</h1>
        ) : (
          <>
            <div>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon}/>
              })}
            </div>
            <div className='flex justify-center'>
              <button
                className='bg-blue-900 hover:bg-blue-800 text-white rounded px-4 py-2 mx-4'
                onClick={handlePrevPage}>
                前へ
              </button>
              <button
                className='bg-blue-900 hover:bg-blue-800 text-white rounded px-4 py-2' 
                onClick={handleNextPage}>
                後ろへ
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
