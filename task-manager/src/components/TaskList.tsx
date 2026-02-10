import { useTasks } from '../contexts/TaskContext'
import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'

export function TaskList() {
  const { filteredTasks, searchQuery, filterStatus } = useTasks()

  if (filteredTasks.length === 0) {
    const hasFilters = searchQuery.trim() || filterStatus !== 'todas'
    return (
      <div className={styles.empty}>
        <p>
          {hasFilters
            ? 'Nenhuma tarefa encontrada com os filtros aplicados.'
            : 'Nenhuma tarefa ainda. Adicione uma acima!'}
        </p>
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  )
}
