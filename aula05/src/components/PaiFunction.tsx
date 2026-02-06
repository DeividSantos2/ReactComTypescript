import React from 'react'
import FilhoFunction from './FilhoFunction.tsx'

const PaiFunction = () => {

    const handleChildClick = () => {
        console.log('Child button clicked')
    }

  return (
    <div>
        <FilhoFunction onChildClick={handleChildClick}/>
    </div>
  )
}

export default PaiFunction