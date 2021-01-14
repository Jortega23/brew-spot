import React from 'react'

const Display = ({ items }) => {
  return (
    <div className='display-breweries'>
      <h1>Breweries</h1>
      {items.map(item => (
        <h1>{item.name}</h1>
      ))}
    </div>
  )
}

export default Display
