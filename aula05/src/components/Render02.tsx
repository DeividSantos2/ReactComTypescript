import React from 'react'

interface props {
  user: string;
}

const Render02 = ({user}: props) => {
  return (
    <div>
        {user ? <>
                <p>Bem-vindo, {user}!</p>
                <button>Sair</button>
                </>
              : <>
                <p>Faça login para acessar o conteúdo.</p>
                <button>Login</button>
                </>}
    </div>
  )
}

export default Render02