import React from 'react'

interface FilhoFunctionProps {
  onChildClick: () => void;
  onChildClick2: () => void;
}

const FilhoFunction = ({ onChildClick, onChildClick2 }: FilhoFunctionProps) => {
  return (
    <div>
      <button onClick={onChildClick}>Click me</button>
      <button onClick={onChildClick2}>Click me 2</button>
    </div>
  )
}

export default FilhoFunction

