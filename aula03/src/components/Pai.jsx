import React from 'react'
import Filho from './Filho'
import Descricao from './Descricao.jsx'
import Cachorro from './Cachorro.jsx'

function Pai() {
  return (
    <div>
        <Descricao nome="Deivid Santos" idade="19"/>
        <Filho />
        <Cachorro nome="Toby" raca="Pastor Alemao"/>
    </div>
   
  )
}

export default Pai