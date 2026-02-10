import { useState } from 'react'
import type { Task, TaskStatus } from '../types/task'
import { useTasks } from '../contexts/TaskContext'
import { TaskForm } from './TaskForm'
import styles from './TaskItem.module.css'

const STATUS_LABELS: Record<TaskStatus, string> = {
  pendente: 'Pendente',
  em_andamento: 'Em andamento',
  concluida: 'Concluída',
}

const PRIORITY_CLASS: Record<Task['prioridade'], string> = {
  baixa: styles.priorityBaixa,
  media: styles.priorityMedia,
  alta: styles.priorityAlta,
  urgente: styles.priorityUrgente,
}

function formatDate(iso?: string): string {
  if (!iso) return '—'
  const d = new Date(iso)
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    ...(iso.includes('T') ? { hour: '2-digit', minute: '2-digit' } : {}),
  })
}

export function TaskItem({ task }: { task: Task }) {
  const { updateTask, removeTask, setTaskStatus } = useTasks()
  const [editing, setEditing] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleUpdate = (data: Parameters<typeof updateTask>[1]) => {
    updateTask(task.id, data)
    setEditing(false)
  }

  const handleDelete = () => {
    removeTask(task.id)
    setConfirmDelete(false)
  }

  const isOverdue =
    task.dataLimite &&
    task.status !== 'concluida' &&
    new Date(task.dataLimite) < new Date()

  return (
    <article
      className={`${styles.card} ${task.status === 'concluida' ? styles.concluida : ''} ${isOverdue ? styles.atrasada : ''}`}
    >
      {editing ? (
        <TaskForm
          initialData={{
            titulo: task.titulo,
            descricao: task.descricao,
            prioridade: task.prioridade,
            categoria: task.categoria,
            dataLimite: task.dataLimite,
          }}
          submitLabel="Salvar"
          onSubmit={(data) =>
            handleUpdate({
              titulo: data.titulo,
              descricao: data.descricao,
              prioridade: data.prioridade,
              dataLimite: data.dataLimite,
              categoria: data.categoria,
            })
          }
          onCancel={() => setEditing(false)}
        />
      ) : (
        <>
          <div className={styles.header}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={task.status === 'concluida'}
                onChange={(e) =>
                  setTaskStatus(
                    task.id,
                    e.target.checked ? 'concluida' : 'pendente'
                  )
                }
              />
              <span className={styles.checkmark} />
            </label>
            <div className={styles.titleBlock}>
              <h3 className={styles.titulo}>{task.titulo}</h3>
              <span className={`${styles.prioridade} ${PRIORITY_CLASS[task.prioridade]}`}>
                {task.prioridade}
              </span>
              {task.categoria && (
                <span className={styles.categoria}>{task.categoria}</span>
              )}
            </div>
            <div className={styles.status}>
              <select
                value={task.status}
                onChange={(e) =>
                  setTaskStatus(task.id, e.target.value as TaskStatus)
                }
                className={styles.statusSelect}
              >
                {(Object.keys(STATUS_LABELS) as TaskStatus[]).map((s) => (
                  <option key={s} value={s}>
                    {STATUS_LABELS[s]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {task.descricao && (
            <p className={styles.descricao}>{task.descricao}</p>
          )}
          <div className={styles.meta}>
            {task.dataLimite && (
              <span className={isOverdue ? styles.dataAtrasada : ''}>
                Limite: {formatDate(task.dataLimite)}
              </span>
            )}
            <span className={styles.dataCriacao}>
              Criada em {formatDate(task.dataCriacao)}
            </span>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnEdit}
              onClick={() => setEditing(true)}
              title="Editar"
            >
              Editar
            </button>
            {!confirmDelete ? (
              <button
                type="button"
                className={styles.btnDelete}
                onClick={() => setConfirmDelete(true)}
                title="Excluir"
              >
                Excluir
              </button>
            ) : (
              <div className={styles.confirmDelete}>
                <span>Excluir?</span>
                <button
                  type="button"
                  className={styles.btnConfirmYes}
                  onClick={handleDelete}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={styles.btnConfirmNo}
                  onClick={() => setConfirmDelete(false)}
                >
                  Não
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </article>
  )
}
