import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import {useState, useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks, {id: Math.random(), title: task, completed: false}])
  } 


  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}


export default App
