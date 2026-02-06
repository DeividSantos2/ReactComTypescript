import React from 'react'


const btn = {
    backgroundColor: '#ff0000b9',
    color: 'white',
    padding: '10px 20px',
}

const PrintPropMsg = ({name}: {name: string}) => {
  return (
    <div>
        <h1>Seja bem vindo {name}!</h1>
        <button style={btn}>Sair</button>
    </div>
  )
}

export default PrintPropMsg