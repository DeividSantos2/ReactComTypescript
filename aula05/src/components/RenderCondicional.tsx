import React from 'react'

interface User {
  name: string;
}

interface Props {
  user?: User;
}

const RenderCondicional = ({user}: Props) => {



  return (
    <div>
        {user ? <p>Bem-vindo, {user.name}!</p> : <p>Faça login para acessar o conteúdo.</p>}
    </div>
  )
}

export default RenderCondicional