import React from 'react'
import {useState, useEffect} from 'react'

const TaskInput = ({addTasks}) => {

    const [setInput, setInputValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(setInput.trim() === '') return

        addTasks(setInput)
        setInputValue('')
    }

  return (
    <>
    <div>TaskInput</div>
    <form onSubmit={handleSubmit}>
        <input type="text"
        onChange={(e) => setInputValue(e.target.value)} placeholder='Adicione uma nova tarefa'></input>
        <button type='submit'>Adicionar Nova Task</button>
    </form>
    </>
  )
}

export default TaskInput