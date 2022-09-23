import React, {useState, useEffect} from 'react';
import '../styles/PokemonList.css'
import PokemonDetails from './PokemonDetails';

const PokemonList = () => {
    const [current, setCurrent] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [offset,setOffset] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1")
    
    //fetch batch of 20s
    useEffect( () => {
        const fetchData = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
            const data = await res.json();
            setCurrent(data.results);
  
        }
      fetchData().catch(console.error);
    },[offset])

    //fetch individual pokemon upon click
    useEffect( () => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setPokemonDetails(data)
            setLoaded(true);
            console.log(data)
  
        }
      fetchData().catch(console.error);
    },[url])


  return (
    <div className="container"> 
    <div className="pokemon-list">
        {current.map(({name, url},i)=> (
            <div 
            className="pokemon-card"
            key={name}
            onClick={() => {setUrl(url)}}>
                <p>{name}</p>  
                <div className="number">
                <   p>{String(i + 1 + offset).padStart(3, "0")}</p>    
                </div>
            </div>  
          
        ))}  
     <button 
        disabled={offset <= 0 ? true : false}
        onClick={() => setOffset(offset - 5)}
    >Previous</button> 
    <button onClick={() => setOffset(offset + 5)}>Next</button>         
    </div>
   
   {/* Pokemon details card */}
   <PokemonDetails 
        loaded={loaded}
        pokemonDetails={pokemonDetails} 
   />



 </div>
  )
}

export default PokemonList