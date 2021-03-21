// Dependencies
import { FC } from 'react'
import useSWR from 'swr'

// Components
import LoadingSkeleton from '../LoadingSkeleton'
import Pokemon from './Pokemon'

const Pokedex: FC = () => {
  const { data: { results }, isValidating } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=150')
  
  return (
    <>
      {isValidating && (
        <LoadingSkeleton />
      )} 

      {results.map((pokemon: { name: string }) => (
        <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
      ))}
    </>
  )
}

export default Pokedex 
