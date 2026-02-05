import React from 'react'
import { useState } from 'react'

const Counter = () => {
    //Consultar, Alterar
    const [count, setCount] = useState(10)


  return (
    <div>Contador: {count}
        <button onClick={ () => setCount(count + 1) }>Adicionar</button>
    </div>
   
  )
}

export default Counter