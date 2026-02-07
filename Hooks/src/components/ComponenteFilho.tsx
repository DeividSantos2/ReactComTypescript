import React from 'react'
import { useContext } from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ValorDoContexto = () => {

    const {mensagem, setMensagem} = useContext(MeuContexto)

  return (
    <div>
        ValorDoContexto é {mensagem} {/* mensagem do contexto */}
        <button onClick={() => setMensagem('Olá, mundo!')}>Atualizar Mensagem</button>
    </div>
  )
}

export default ValorDoContexto