import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
        makeRequest();
    }, []);

    const makeRequest = async() =>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        setPokemons(data.results);
    }

    return ( 
        <div>
            <h1 className="text-white">Pokemons</h1>
            {pokemons.map(pokemon =>{
                const { name } = pokemon;
                return(
                    <div key={name}>
                        <Link to={'/pokemons/' + name}><h3 className="text-white">{name}</h3></Link>
                    </div>
                );
            })}
        </div>
     );
}
 
export default Pokemons;