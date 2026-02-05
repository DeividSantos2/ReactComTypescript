import React from 'react'

const Descricao = (props) => {

    var nome = props.nome
    var idade = props.idade

  return (
    <div>
        Seu nome é {nome} <br/>
        Sua idade é {idade}
    
    </div>
  )
}

export default Descricao