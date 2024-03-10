import { PokemonData } from "../types/type";

type PokemonProps = {
  pokemon: PokemonData;
}

export const Card = ({pokemon}: PokemonProps) => {
  return(
  <>
    <div className="sm:justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 m-10 h-96 w-72">
        <div>
          <div>
            <img className="h-40 px-16" src={pokemon.sprites.front_default} alt=""/>
          </div>
          <h3 className="px-20 font-serif">名前:  {pokemon.name}</h3>
            {pokemon.types.map((type) => {
            return (
              <div key={type.type.name}>
                <span className="px-20  font-serif">タイプ:  {type.type.name}</span>
              </div>
            )
            })}
            <div>
            <p className="px-20 font-serif">重さ: {pokemon.weight}</p>
            </div>
            <div>
              <p className="px-20 font-serif">高さ: {pokemon.height}</p>
            </div>
            <div>
              <p className="px-20 font-serif">アビリティ: {pokemon.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
