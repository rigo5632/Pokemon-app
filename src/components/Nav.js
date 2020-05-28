import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/pokemon-logo.png';

const Nav = () => {
    const [links, ] = useState([
        {name: 'Home', location: '/', id:1},
        {name: 'Pokemons', location: '/pokemons', id:2},
        {name: 'Berries', location: '/berries', id: 3},
        {name: 'Moves', location: '/moves', id:4}
    ]);

    return ( 
        <nav className="navbar navbar-light">
            <Link className="navbar-brand text-white" to="/">
                <img src={Logo} alt="Pokeball" />
                Pokemon-Search-App
            </Link>
            <ul className="nav" id="navbarItem">
                {links.map(link =>{
                    const { name, location, id } = link;
                    return(
                        <li key={id} className="nav-item ml-5">
                            <Link to={location} className="btn btn-success">{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
     );
}
 
export default Nav;

