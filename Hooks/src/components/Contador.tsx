import React from 'react'
import { useReducer } from 'react'

//definir estado inicial

const estadoInicial = {
    count: 0
}

const reducer = (state: typeof estadoInicial, action: { type: string }) => {
    switch (action.type) {
        case 'incrementar':
            return { count: state.count + 1 }
        case 'decrementar':
            return { count: state.count - 1 }
        case 'resetar':
            return { count: 0 }
        default:
            return state
    }
}

const Contador = () => {

    const [state, dispatch] = useReducer(reducer, estadoInicial)

  return (
    <div>
        <p>Contador: {state.count}</p>
        <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
        <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
        <button onClick={() => dispatch({ type: 'resetar' })}>Resetar</button>
    </div>
  )
}

export default Contador