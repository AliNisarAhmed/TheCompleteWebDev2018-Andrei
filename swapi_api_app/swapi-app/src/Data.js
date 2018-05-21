import React from 'react';

const Data = (id) => {
    
    
    const stats = fetch(`https://swapi.co/planets/${id}`)
    .then(res => res.json())
    .then(myJson => myJson);
    
    return (
            <div>
                <h1>{stats.climate}</h1>
                <h1>{stats.gravity}</h1>
                <h1>{stats.terrain}</h1>
                <h1>{stats.population}</h1>
            </div>
        
    )
}

export default Data;