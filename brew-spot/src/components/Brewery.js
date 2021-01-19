import React from 'react'

const Brewery = ({ items }) => {
    return (
        <div className='brewery-container'>
            {items.map(item => (
                <div className='brewery-info'> 
                    <h2>{item.name}</h2>
                    <h3>{item.city}</h3>
                    <h3>{item.state}</h3>
                </div>
            ))}
        </div>
    )
}

export default Brewery
