import { useState } from 'react'
import './App.css'
import Btn from './components/Button.tsx'
import PaiFunction from './components/PaiFunction.tsx'
import Formulario from './components/Form.tsx'
import RenderCondicional from './components/RenderCondicional.tsx'

function App() {

  return (
    <>
      <Btn/>
      <PaiFunction/>
      <Formulario/>
      <RenderCondicional user={{name: 'Matheus'}}/>
    </>
  )
}

export default App
