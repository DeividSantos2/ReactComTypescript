
import Task from './Task'

const TaskList = ({tasks}) => {
  return (
    <ul>
       <Task/>
       {tasks.map((task) => (
        <Task key={task.id} title={task.title} completed={task.completed}/>
       ))}
    </ul>
  )
}

export default TaskList