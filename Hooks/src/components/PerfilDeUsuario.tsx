import React, { useEffect, useState } from 'react'

interface Usuario {
  name: string;
  [key: string]: any;
}

interface PerfilDeUsuarioProps {
  usuarioId: string | number;
}

const PerfilDeUsuario = ({ usuarioId }: PerfilDeUsuarioProps) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [carregando, setCarregando] = useState<boolean>(true)

  useEffect(() => {
    const buscarUsuarios = async () => {
      setCarregando(true)
      if (usuarioId) {
        try {
          const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)
          const dados = await resposta.json()
          setUsuario(dados)
        } catch (error) {
          console.error(error)
        } finally {
          setCarregando(false)
        }
      }
    }
    buscarUsuarios()
  }, [usuarioId])

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        usuario ? (
          <div>
            <p>Nome: {usuario.name}</p>
          </div>
        ) : (
          <p>Nenhum usuario encontrado.</p>
        )
      )}
    </div>
  )
}

export default PerfilDeUsuario

