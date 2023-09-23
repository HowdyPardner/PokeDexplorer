import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';

function App() {
  const [pokemonArray, setPokemonArray] = useState([]); // state to track initial pokemon data
  const [mergedPokemonData, setMergedPokemonData] = useState([]); // state to track all the merged meta-data aobout the pokemon
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';


  // fetch the initial pokemon data
  useEffect(() => {
    axios(`${baseURL}`)
      .then((response) => {
        const pokemonData = response.data.results.map((pokemon) => ({
          ...pokemon,
          id: getPokemonIdFromUrl(pokemon.url),
        }));
        setPokemonArray(pokemonData);
        console.log("Initial Pokemon Data:" , pokemonData)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  
  // for each pokemon, fetch it's meta-data from the url property and merge the data with the pokemon array
  useEffect(() => {

    const fetchPokemonDetailsPromises = pokemonArray.map((pokemon) =>
      axios(pokemon.url).then((response) => response.data).catch((error)=> console.log(error))
    );

    Promise.all(fetchPokemonDetailsPromises)
      .then((pokemonDetailsData) => {

        // merge the data into a new state variable
        const updatedMergedData = pokemonArray.map((pokemon, index) => ({
          ...pokemon,
          ...pokemonDetailsData[index],
        }));

        setMergedPokemonData(updatedMergedData); // Merging initial data + meta data
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemonArray]);
  

  const getPokemonIdFromUrl = (url) => {
    const urlArray = url.split('/');
    const pokemonID = urlArray[urlArray.length - 2];
    return pokemonID;
  };

  console.log(mergedPokemonData)

  return (
    <>
     <div className='app'>
      
    <Navbar/>
      {
        <div className='pokemon-container'>
          {mergedPokemonData.map((pokemon) => (
              <div className='pokemon-card' key={pokemon.id}>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.id}</h1>
                <img
                  src={pokemon.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"]}
                  alt={pokemon.name}
                  style={{ maxWidth: '100px' }}
                />
              </div>
          ))}
        </div>
      }
    </div>
    </>
   
  );
}

export default App;
