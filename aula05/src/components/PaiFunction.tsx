import React from 'react'
import FilhoFunction from './FilhoFunction'

const PaiFunction = () => {

    const handleChildClick = () => {
        console.log('Child button clicked')
    }
    const handleChildClick2 = () => {
        console.log('Child button 2 clicked')
    }

  return (
    <div>
        <FilhoFunction onChildClick={handleChildClick} onChildClick2={handleChildClick2}/>
    </div>
  )
}

export default PaiFunction
