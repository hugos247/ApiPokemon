import { getPokemon } from '../helpers/getPokemon'
import { useState } from "react";

const FetchPokemon = () => {

  const [data, setData] = useState([]);

        const fetchPokemon = () => {
		    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
			    .then(response => response.json())
			    .then(response => setData(response.results))
    };

  return (

    <>
        <button onClick={ fetchPokemon }>Fetch Pokemon</button>

        <ul>
          { data.map((element, index) => {
            return (
              <li key= { index }>{element.name }</li>   
            )
          })}
          

        </ul>

    </>
  )
}

export default FetchPokemon