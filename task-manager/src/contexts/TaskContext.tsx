import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Task, TaskFormData, TaskStatus, FilterStatus } from '../types/task'
import { generateId } from '../utils/id'
import { loadTasks, saveTasks } from '../utils/storage'

interface TaskContextValue {
  tasks: Task[]
  filterStatus: FilterStatus
  searchQuery: string
  setFilterStatus: (status: FilterStatus) => void
  setSearchQuery: (query: string) => void
  addTask: (data: TaskFormData) => Task
  updateTask: (id: string, data: Partial<Task>) => void
  removeTask: (id: string) => void
  setTaskStatus: (id: string, status: TaskStatus) => void
  getTaskById: (id: string) => Task | undefined
  clearCompleted: () => void
  filteredTasks: Task[]
  stats: { total: number; pendentes: number; concluidas: number }
}

const TaskContext = createContext<TaskContextValue | null>(null)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks())
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('todas')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const addTask = useCallback((data: TaskFormData): Task => {
    const now = new Date().toISOString()
    const task: Task = {
      id: generateId(),
      titulo: data.titulo,
      descricao: data.descricao,
      prioridade: data.prioridade,
      status: 'pendente',
      dataCriacao: now,
      categoria: data.categoria || 'Geral',
      dataLimite: data.dataLimite || undefined,
    }
    setTasks((prev) => [...prev, task])
    return task
  }, [])

  const updateTask = useCallback((id: string, data: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...data } : t))
    )
  }, [])

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const setTaskStatus = useCallback((id: string, status: TaskStatus) => {
    const now = new Date().toISOString()
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status,
              ...(status === 'concluida' ? { dataConclusao: now } : { dataConclusao: undefined }),
            }
          : t
      )
    )
  }, [])

  const getTaskById = useCallback(
    (id: string) => tasks.find((t) => t.id === id),
    [tasks]
  )

  const clearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((t) => t.status !== 'concluida'))
  }, [])

  const filteredTasks = useMemo(() => {
    let result = tasks

    if (filterStatus !== 'todas') {
      result = result.filter((t) => t.status === filterStatus)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (t) =>
          t.titulo.toLowerCase().includes(q) ||
          t.descricao.toLowerCase().includes(q) ||
          t.categoria.toLowerCase().includes(q)
      )
    }

    return result.sort((a, b) => {
      const dateA = a.dataLimite ? new Date(a.dataLimite).getTime() : Infinity
      const dateB = b.dataLimite ? new Date(b.dataLimite).getTime() : Infinity
      if (dateA !== dateB) return dateA - dateB
      return new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime()
    })
  }, [tasks, filterStatus, searchQuery])

  const stats = useMemo(
    () => ({
      total: tasks.length,
      pendentes: tasks.filter((t) => t.status !== 'concluida').length,
      concluidas: tasks.filter((t) => t.status === 'concluida').length,
    }),
    [tasks]
  )

  const value: TaskContextValue = useMemo(
    () => ({
      tasks,
      filterStatus,
      searchQuery,
      setFilterStatus,
      setSearchQuery,
      addTask,
      updateTask,
      removeTask,
      setTaskStatus,
      getTaskById,
      clearCompleted,
      filteredTasks,
      stats,
    }),
    [
      tasks,
      filterStatus,
      searchQuery,
      addTask,
      updateTask,
      removeTask,
      setTaskStatus,
      getTaskById,
      clearCompleted,
      filteredTasks,
      stats,
    ]
  )

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export function useTasks(): TaskContextValue {
  const ctx = useContext(TaskContext)
  if (!ctx) throw new Error('useTasks must be used within TaskProvider')
  return ctx
}
