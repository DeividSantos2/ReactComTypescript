import {useState, createContext} from 'react'

export const MeuContexto = createContext() //Criar o contexto

export const MeuProvider = ({children}) => { //Criar o provider, elemento que vai envolver os componentes que precisam acessar o contexto
    const [mensagem, setMensagem] = useState('Mensagem Inicial')
   
    const valorDoContexto = {
        mensagem,
        setMensagem
    }

    return (
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    )
}