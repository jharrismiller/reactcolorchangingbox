import React from 'react'

const ColorBox = ({color}) => {
    color = color ? color : 'white';
    const displayColor = color === 'white' ? 'Empty Value' : color;;
  return (
    <div className='colorBox' style={{backgroundColor:color}}>{displayColor}</div>
  )
}

export default ColorBox