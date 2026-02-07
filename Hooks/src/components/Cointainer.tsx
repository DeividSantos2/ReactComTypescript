import React from 'react'

const Cointainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='container'>{children}
        <h1>Titulo da pagina</h1>
        {children}
        <h6>Rodapé da pagina</h6>
    </div>
  )
}

export default Cointainer