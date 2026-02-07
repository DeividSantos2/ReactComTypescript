import React from 'react'
import useWindowSize from '../hooks/useWindownSize'

const DisplayWindowsSize = () => {

        const { width, height } = useWindowSize()

  return (
    <div>  
        <p>Largura da janela: {width}px</p>
        <p>Altura da janela: {height}px</p>
    </div>
  )
}

export default DisplayWindowsSize