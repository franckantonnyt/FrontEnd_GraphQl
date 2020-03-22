import React from 'react';
import gql from 'graphql-tag';
import './app.css';
import { useQuery } from '@apollo/react-hooks';

const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 50) {
      id
      number
      name
      image
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <React.Fragment>
      <div className='body-container'>
        <h1>Pokémons</h1>
        <div className='container-pokemons'>
          {data &&
            data.pokemons &&
            data.pokemons.map((pokemon, index) => (
              <div key={index} className='card-first'>
                <img src={pokemon.image} />
                <div class='card-body'>
                  <h3>{pokemon.name}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
