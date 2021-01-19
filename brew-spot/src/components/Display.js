import React from 'react'
import Brewery from './Brewery'

const Display = ({ items }) => {
  return (
    <div className='display-breweries'>
      <h1>Breweries</h1>
      <Brewery items={items} key={items.id} />
    </div>
  )
}

export default Display
