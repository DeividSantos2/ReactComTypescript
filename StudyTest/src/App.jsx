import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Média");
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  // 🔥 Carregar tarefas do LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // 🔥 Salvar automaticamente
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ➕ Criar ou editar tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (editingId) {
      setTasks(
        tasks.map((task) =>
          task.id === editingId
            ? { ...task, text, priority, date }
            : task
        )
      );
      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text,
        priority,
        date,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }

    setText("");
    setPriority("Média");
    setDate("");
  };

  // ❌ Remover
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ✔ Concluir
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // ✏ Editar
  const editTask = (task) => {
    setText(task.text);
    setPriority(task.priority);
    setDate(task.date);
    setEditingId(task.id);
  };

  // 🔎 Filtrar + buscar
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container">
      <h1>📋 Lista de Tarefas</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Baixa</option>
          <option>Média</option>
          <option>Alta</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button>{editingId ? "Editar" : "Adicionar"}</button>
      </form>

      {/* BUSCA */}
      <input
        className="search"
        placeholder="Buscar tarefa..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTROS */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
        <button onClick={() => setFilter("pending")}>Pendentes</button>
      </div>

      {/* LISTA */}
      <ul className="taskList">
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "done" : ""}>
            <div>
              <strong>{task.text}</strong>
              <p>Prioridade: {task.priority}</p>
              {task.date && <p>Data: {task.date}</p>}
            </div>

            <div className="actions">
              <button onClick={() => toggleComplete(task.id)}>
                ✔
              </button>
              <button onClick={() => editTask(task)}>✏</button>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
