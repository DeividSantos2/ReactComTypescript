export type Priority = 'baixa' | 'media' | 'alta' | 'urgente'

export type TaskStatus = 'pendente' | 'em_andamento' | 'concluida'

export interface Task {
  id: string
  titulo: string
  descricao: string
  prioridade: Priority
  status: TaskStatus
  dataCriacao: string
  dataConclusao?: string
  dataLimite?: string
  categoria: string
}

export type FilterStatus = 'todas' | 'pendente' | 'em_andamento' | 'concluida'

export interface TaskFormData {
  titulo: string
  descricao: string
  prioridade: Priority
  dataLimite?: string
  categoria: string
}
