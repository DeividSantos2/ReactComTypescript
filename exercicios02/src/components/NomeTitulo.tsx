import React from 'react'
import { useEffect } from 'react'

interface NomeTituloProps {
  nometitulo: string;
}

const NomeTitulo = () => {

    const nometitulo = 'Deivid Santos'

    useEffect(() => {
        {document.title = nometitulo}
    },[])


   
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Digite seu nome' value={nometitulo}/>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default NomeTitulo