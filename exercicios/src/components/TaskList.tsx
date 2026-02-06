import React from 'react'

interface Tarefa {
  id: number;
  titulo: string;
}

const TaskList = ({ tarefas = [] as Tarefa[] }) => {

    if (tarefas.length === 0) {
        return <p>Não há tarefas para exibir.</p>;
    }else{
        return (
            <div>
                <h1>Lista de Tarefas</h1>
                <ul>
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id}>{tarefa.titulo}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TaskList
