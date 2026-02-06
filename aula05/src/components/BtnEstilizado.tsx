import React, { useState } from 'react'

const BtnEstilizado = () => {
  const [color, setColor] = useState('#4CAF50');

  const estiloBotao = {
    padding: '10px 20px',
    backgroundColor: color,
    color: 'white',
  }

  const click = () => {
    console.log('Botao estilizado clicado')
    if(color == '#4CAF50'){
      setColor('#f44336')
    } else {
      setColor('#4CAF50')
    }
  }

  return (
    <div>
      <button style={estiloBotao} onClick={click}>Botao bonitao</button>
    </div>
  )
}

export default BtnEstilizado

