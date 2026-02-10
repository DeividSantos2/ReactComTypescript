import { useTasks } from '../contexts/TaskContext'
import type { FilterStatus } from '../types/task'
import styles from './Filters.module.css'

const FILTERS: { value: FilterStatus; label: string }[] = [
  { value: 'todas', label: 'Todas' },
  { value: 'pendente', label: 'Pendentes' },
  { value: 'em_andamento', label: 'Em andamento' },
  { value: 'concluida', label: 'Concluídas' },
]

export function Filters() {
  const { filterStatus, setFilterStatus } = useTasks()

  return (
    <div className={styles.filters}>
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={filterStatus === value ? styles.active : ''}
          onClick={() => setFilterStatus(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
