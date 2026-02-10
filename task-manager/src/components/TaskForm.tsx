import { useState, type FormEvent } from 'react'
import type { TaskFormData, Priority } from '../types/task'
import styles from './TaskForm.module.css'

const PRIORITIES: Priority[] = ['baixa', 'media', 'alta', 'urgente']

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void
  initialData?: Partial<TaskFormData>
  onCancel?: () => void
  submitLabel?: string
}

const defaultForm: TaskFormData = {
  titulo: '',
  descricao: '',
  prioridade: 'media',
  categoria: 'Geral',
}

export function TaskForm({
  onSubmit,
  initialData,
  onCancel,
  submitLabel = 'Adicionar tarefa',
}: TaskFormProps) {
  const [form, setForm] = useState<TaskFormData>({
    ...defaultForm,
    ...initialData,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.titulo.trim()) return
    onSubmit(form)
    setForm(defaultForm)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="titulo">Título *</label>
        <input
          id="titulo"
          type="text"
          value={form.titulo}
          onChange={(e) => setForm((f) => ({ ...f, titulo: e.target.value }))}
          placeholder="Ex: Revisar relatório"
          required
          autoFocus
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          value={form.descricao}
          onChange={(e) => setForm((f) => ({ ...f, descricao: e.target.value }))}
          placeholder="Detalhes da tarefa..."
          rows={3}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="prioridade">Prioridade</label>
          <select
            id="prioridade"
            value={form.prioridade}
            onChange={(e) =>
              setForm((f) => ({ ...f, prioridade: e.target.value as Priority }))
            }
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="categoria">Categoria</label>
          <input
            id="categoria"
            type="text"
            value={form.categoria}
            onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value }))}
            placeholder="Geral"
          />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="dataLimite">Data limite</label>
        <input
          id="dataLimite"
          type="datetime-local"
          value={form.dataLimite ?? ''}
          onChange={(e) =>
            setForm((f) => ({ ...f, dataLimite: e.target.value || undefined }))
          }
        />
      </div>
      <div className={styles.actions}>
        {onCancel && (
          <button type="button" className={styles.cancel} onClick={onCancel}>
            Cancelar
          </button>
        )}
        <button type="submit" className={styles.submit}>
          {submitLabel}
        </button>
      </div>
    </form>
  )
}
