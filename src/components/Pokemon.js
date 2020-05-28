import React from 'react';

const Pokemon = ({match}) => {
    const { name } = match.params;
    return ( 
        <div>
            <h1>{name}</h1>
        </div>
     );
}
 
export default Pokemon;