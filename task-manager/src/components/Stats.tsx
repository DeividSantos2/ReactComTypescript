import { useTasks } from '../contexts/TaskContext'
import styles from './Stats.module.css'

export function Stats() {
  const { stats, clearCompleted } = useTasks()

  return (
    <div className={styles.stats}>
      <span className={styles.item}>
        <strong>{stats.total}</strong> total
      </span>
      <span className={styles.item}>
        <strong>{stats.pendentes}</strong> pendentes
      </span>
      <span className={styles.item}>
        <strong>{stats.concluidas}</strong> concluídas
      </span>
      {stats.concluidas > 0 && (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={clearCompleted}
        >
          Limpar concluídas
        </button>
      )}
    </div>
  )
}
