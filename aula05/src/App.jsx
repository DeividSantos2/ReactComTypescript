import { useState } from 'react'
import './App.css'
import Btn from './components/Button.tsx'
import PaiFunction from './components/PaiFunction.tsx'
import Formulario from './components/Form.tsx'
import RenderCondicional from './components/RenderCondicional.tsx'
import RenderCond from './components/Render02.tsx'
import Warning from './components/Warning.tsx'
import NumberList from './components/NumberList.tsx'
import BtnEstile from './components/BtnEstilizado.tsx'

function App() {

  return (
    <>
      <Btn/>
      <PaiFunction/>
      <Formulario/>
      <RenderCondicional user={{name: 'Matheus'}}/>
      <RenderCond/>
      <Warning warning="Mensagem personalizada"/>
      <NumberList numbers={[1, 2, 3, 4, 5]}/>
      <BtnEstile/>
    </>
  )
}

export default App
