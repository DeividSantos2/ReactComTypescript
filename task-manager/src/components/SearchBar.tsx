import { useTasks } from '../contexts/TaskContext'
import styles from './SearchBar.module.css'

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useTasks()

  return (
    <div className={styles.wrapper}>
      <span className={styles.icon} aria-hidden>🔍</span>
      <input
        type="search"
        placeholder="Buscar por título, descrição ou categoria..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.input}
        aria-label="Buscar tarefas"
      />
      {searchQuery && (
        <button
          type="button"
          className={styles.clear}
          onClick={() => setSearchQuery('')}
          aria-label="Limpar busca"
        >
          ×
        </button>
      )}
    </div>
  )
}
