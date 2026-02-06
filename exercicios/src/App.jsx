import { useState } from 'react'
import './App.css'

import PrintPropMsg from './components/PrintPropMsg'
import BtnCounter from './components/BtnCounter'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <PrintPropMsg name='Deivid Santos'/>
      <BtnCounter />
      <TaskList tarefas={[ { id: 1, titulo: 'Tarefa 1' }, { id: 2, titulo: 'Tarefa 2' } ]} />
    </>
  )
}

export default App
