import React, {useState} from 'react';
import '../App.css';
import HomeCards from './HomeCards.js';

const Home = () => {
    const [cards] = useState([
        {
            header: "Pokemon Search",
            title: "Pokemon",
            description: `Hello there! Welcome 
            to the world of POKEMON! My name is 
            OAK! People call me the POKEMON PROF! 
            This world is inhabited by creatures 
            called POKEMON! For some people, POKEMON 
            are pets. Others use them for fights. 
            Myself...I study POKEMON as a profession.`,
            buttonDescription: "Search Pokemon",
            link: '/pokemons',
            id: 1
        },
        {
            header: "Berries Search", 
            title: "Berries",  
            description: `As in the real world, a 
            large variety exists in the Pokémon world,
            with a large range of flavors, names, 
            and effects. First found in the 
            Generation II games, many Berries have 
            since become critical held items in battle,
            where their various effects include HP and
            status condition restoration, stat enhancement,
            and even damage negation.`, 
            buttonDescription: "Search Berries",
            link: '/berries',
            id: 2
        },
        {
            header: "Move-set Search Search",
            title: "Moves",
            description: `Deciding which combination of moves
            a Pokémon should learn is the most strategic part 
            in preparing for a battle. Some trainers have a more
            passive approach with moves to boost their Pokémon's
            stats like Swords Dance, while others rely on pure
            power. Here are the ten most powerful moves in Pokémon.`,
            buttonDescription: "Search Moves",
            link: 'moves',
            id: 3
        }
    ])
    return ( 
        <div className="Home">
            <h1 className="text-white">Look-up</h1>
            <div className="container">
                <div className="row">
                    {cards.map(card =>  (<HomeCards key={card.id} card={card}/>))}
                </div>
            </div>
        </div>
     );
}
 
export default Home;