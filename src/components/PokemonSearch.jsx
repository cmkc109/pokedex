import React, {useEffect, useState} from 'react'
import Search from './Search'

const PokemonList = () => {
    const [data, setData] = useState([]);
    const [pokemon,setPokemon] = useState("charmander");
    const [loaded, setLoaded] = useState(false);
    const [errorPokemon, setErrorPokemon] = useState(false)

    useEffect( () => {
        const fetchData = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await res.json();
            setData(data);
            setLoaded(true);
            setErrorPokemon(false);
        }

      fetchData().catch(err => {
                  setErrorPokemon(true)
                });
    
    },[pokemon])
 
    const handleSubmit = (e, input) => {
      e.preventDefault();
      setPokemon(input);
     } 
 
  // let imgURL = data.sprites.front_default
  // console.log(imgURL)
  return (
    <>
      <Search data={data} handleSubmit={handleSubmit}  />
      {errorPokemon && <p className="text-center red-bold">No pokemon found 🙁</p>}
      <div className="pokemon-detail"> 
      <h2 className="pokemon-name">{data.name}</h2> 
      {loaded && <img src={data.sprites.front_default} alt=""></img>}
      {loaded &&  <img src={data.sprites.back_default} alt=""></img>}
      {loaded && <img src={data.sprites.front_shiny} alt=""></img>}

      <div className="pokemon-ability-container"> 
      { loaded && data.stats.map(stat => {         
           return (
            <div className="pokemon-stat"> 
              <p>{stat.stat.name}</p>
              <p>{stat.base_stat}</p>
            </div> 
            )
       })}
      <div className="pokemon-stat"> 
        Abilities {loaded && data.abilities.map(ability => (
         <span className="pokemon-ability">{ability.ability.name}</span>
          ))}
       </div>
    
      </div>
        
     </div>
      

    </>

  )
}

export default PokemonList