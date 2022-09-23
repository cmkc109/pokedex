import React from 'react'
import {colors} from '../assets/pokemon-type-colors.js'
import '../styles/PokemonList.css'

const PokemonDetails = ({loaded, pokemonDetails}) => {


  return (
    <div className="pokemon-details">
          <div className="pokemon-header">
          {loaded && (
              <img className="pokemon-image" src={pokemonDetails.sprites.front_default} alt="pokemon" />
            )}
            {pokemonDetails.name}
            </div>
            {loaded &&
              pokemonDetails.stats.map((stat) => (
                <div className="stat-container">
                  <p>{stat.stat.name}</p>
                  <p>{stat.base_stat}</p>
                </div>
              ))}
            <div className="stat-container">
              <p>Weight </p>
              <p>{pokemonDetails.weight}</p>
            </div>
            <div className="stat-container">
              <p>Types </p>
              {loaded &&
                pokemonDetails.types.map((type) => (
                  <p className="pokemon-type"
                    style={{backgroundColor: `${colors[type.type.name]}`}}
                  >{type.type.name}</p>
                ))}
            </div>
          </div>
  )
}

export default PokemonDetails