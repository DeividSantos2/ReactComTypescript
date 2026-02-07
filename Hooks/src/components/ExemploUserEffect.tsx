import React, { use } from 'react'
import { useEffect, useState } from 'react'



const ExemploUserEffect = () => {

    const [count,setCount] = useState(0)

    //Ele é executado após cada renderização do componente, incluindo a primeira renderização. 
    // Ele é útil para realizar efeitos colaterais, como atualizar o título do documento, buscar dados de uma API ou configurar assinaturas.
    useEffect(() => {
        document.title = `You clicked ${count} times`; //usar variavel precisa de `` para usar a variavel dentro da string
    })

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}></button>
    </div>
  )
}

export default ExemploUserEffect