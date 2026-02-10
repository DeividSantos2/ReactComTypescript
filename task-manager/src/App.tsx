import { TaskProvider, useTasks } from './contexts/TaskContext'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Filters } from './components/Filters'
import { SearchBar } from './components/SearchBar'
import { Stats } from './components/Stats'
import styles from './App.module.css'

function TaskManagerContent() {
  const { addTask } = useTasks()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Gerenciador de Tarefas</h1>
        <p className={styles.subtitle}>
          Crie, edite e organize suas tarefas com prioridade e data limite.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nova tarefa</h2>
        <TaskForm onSubmit={addTask} />
      </section>

      <section className={styles.section}>
        <div className={styles.toolbar}>
          <SearchBar />
          <Filters />
        </div>
        <Stats />
        <TaskList />
      </section>
    </div>
  )
}

export default function App() {
  return (
    <TaskProvider>
      <TaskManagerContent />
    </TaskProvider>
  )
}
